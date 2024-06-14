from flask import Flask, redirect, url_for, session, request, render_template, send_from_directory, request, jsonify
import os
from flask_cors import CORS, cross_origin
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from google_auth_oauthlib.flow import InstalledAppFlow
import json
import mimetypes
from Work import Work
import uuid

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

# Importing the 'Work' class from the 'Work' module
#from model.Work import Work
from model.Works import Work
# Importing the 'DatabaseManager' class from the 'DatabaseManager' module
from DatabaseManager import DatabaseManager

# Creating an instance of the DatabaseManager class
database = DatabaseManager()

# Replace the client ID and client secret below with your own
CLIENT_ID = '11104447959-9nh0krolgfpig1dp007hudmns60pnv6g.apps.googleusercontent.com'
CLIENT_SECRET = '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'
SCOPES = ["https://www.googleapis.com/auth/contacts.readonly"]

# The authorization URL and redirect URL must match the ones you specified when you created the OAuth client ID
AUTH_URL = 'https://accounts.google.com/o/oauth2/auth'

app = Flask(__name__, 
            template_folder='C:\\Users\\david.svancar\\Desktop\\App-Seznamu-Praci\\backend\\www',
            static_folder='C:\\Users\\david.svancar\\Desktop\\App-Seznamu-Praci\\backend\\www\\assets',
            static_url_path='/assets')

CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:5000", "http://127.0.0.1:5000"]}}, supports_credentials=True)

@app.route('/')
@app.route('/works')
def index():
    if  'credentials' in session.keys():
        return render_template('index.html')
    else:
        return redirect(url_for('login'))

@app.route('/api/v1/user')
def get_logged_user():
    return None

@app.route('/login')
def login():
    # Create the OAuth flow object
    flow = InstalledAppFlow.from_client_secrets_file(
        "./backend/client_secret.json", scopes=SCOPES)
    flow.redirect_uri = url_for('callback', _external=True)
    authorization_url, state = flow.authorization_url(
        access_type='offline',
        prompt='select_account')

    # Save the state so we can verify the request later
    session['state'] = state

    return redirect(authorization_url)

def to_dict(credentials):
    """
    Convert a Credentials object to a dictionary.
    The Credentials object is first converted to JSON by the native implementation
    to ensure it is converted correctly and make updates to the oauth2client module
    easier.
    """
    jsonRepr = credentials.to_json()
    dictRepr = json.loads(jsonRepr)

    return dictRepr

@app.route('/works', methods = ['POST'])
def create_work():
    data = json.loads(request.data)
    work = Work(sid=str(uuid.uuid4()), workname=data["workname"], date=data["date"], worktypes=data["worktypes"], subject=data["subject"], abstract=data["abstract"], status=False, solver_mail=None)
    database.insert(work)
  #  database.commit()

    return {'message': 'Work created successfully'}

@app.route('/creatework', methods = ['GET'])
def get_works():
    works = []
    for work in database.fetch_all():
        works.append(work)
        
    return works

@app.route('/api/work/<id>', methods=['PUT'])
def update_work(id):
    data = json.loads(request.data)
    entity = database.fetch_one(id=id)
    keys = data.keys()
    for key in keys:
        entity[key] = data[key]
    
    database.update(id, entity)
 
    return jsonify({'message': 'Work updated successfully'})

@app.route('/api/work/<id>', methods=['GET'])
def get_work_by_id(id):
    entity = database.fetch_one(id=id)
    return jsonify(entity)


@app.route('/callback')
def callback():
    # Verify the request state
    if request.args.get('state') != session['state']:
        raise Exception('Invalid state')

    # Create the OAuth flow object
    flow = InstalledAppFlow.from_client_secrets_file(
        "./backend/client_secret.json",scopes=SCOPES, state=session['state'])
    flow.redirect_uri = url_for('callback', _external=True)

    # Exchange the authorization code for an access token
    authorization_response = request.url 
    flow.fetch_token(authorization_response=authorization_response)

    # Save the credentials to the session
    credentials = flow.credentials
    session['credentials'] = to_dict(credentials)

    return redirect(url_for('index'))

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('index'))

@app.route('/api/v1/works', methods=['GET'])
def show():
    works = []
    for i in database.fetch_all():
        works.append(i)
    return works

def get_current_user():
    return "lll.t@spsm.cz"

@app.route('/api/block/<id>', methods=['PUT'])
def block_work(id):
    entity = database.fetch_one(id=id)
    entity["status"] = True
    entity["solver_mail"] = get_current_user()
    database.update(id, entity)
 
    return jsonify({'message': 'Work blocked successfully'})
 

@app.route('/api/block/<id>', methods=['DELETE'])
def delete_work(id):
    database.delete(id=id)
    print(session['credentials'])
    return jsonify({'message': 'Work deleted successfully'})
 
if __name__ == '__main__': 
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.run(debug=True)
