from flask import Flask, redirect, url_for, session, request, render_template, send_from_directory
import os
from flask_cors import CORS, cross_origin
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from google_auth_oauthlib.flow import InstalledAppFlow
import json
import mimetypes
import Student

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

# Importing the 'Student' class from the 'Student' module
#from model.Student import Student
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

CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5173"}}, supports_credentials=True)

@app.route('/')
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

@app.route('/students', methods = ['POST'])
def create_student():
    data = json.loads(request.data)
    print(data["name"])

    student = Student(name="asdfasd")
    database.session.add(student)
    database.session.commit()

    return {'message': 'Student created successfully'}

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
    students = []
    for i in database.fetch_all():
        students.append(i)
    return students

if __name__ == '__main__': 
    os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.run(debug=True)
