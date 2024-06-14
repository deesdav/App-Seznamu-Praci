# Importing the 'pymongo' module for MongoDB interaction
#martinhorakfkmb heslo db !!
# "mongodb://95.85.193.145"
# mongodb+srv://martinhorakfkmb:db@cluster0.y0bhoyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
# mongodb+srv://martinhorakfkmb:<password>@cluster0.y0bhoyp.mongodb.net/

# nový email - feloxe6144@rencr.com
# heslo - kubelkova130kg HAHA

# Importing the 'pymongo' module for MongoDB interaction

import pymongo

# Definition of the PyMongoDatabase class
class DatabaseManager:
    # Constructor method to initialize the database connection
    def __init__(self):
        # Initialize the 'client' variable to None
        client = None
        try:
            # Creating a MongoClient to connect to the local MongoDB server
            client = pymongo.MongoClient('mongodb+srv://boure:kubelkova@boure.k8cibgk.mongodb.net/?retryWrites=true&w=majority&appName=boure')
            # Getting the 'mongodb' database from the MongoDB server
            self.db = client['boure']
            # Getting the 'works' collection from the 'mongodb' database
            self.collection = self.db['works']
        except Exception as e:
            # Handling exceptions and printing an error message if connection fails
            print(f"Error: {e}")
        
    # Method to insert work data into the 'works' collection
    def insert(self, work):
        try:
            # Creating a dictionary with work details
            data = {
                '_id': work.sid,
                'workname': work.workname,
                'date': work.date,
                'worktypes': work.worktypes,
                'subject': work.subject,
                'abstract': work.abstract,
                'status': work.status,
                'solver_mail': work.solver_mail,
            }
            # Inserting the work data into the 'works' collection and obtaining the inserted ID
            sid = self.collection.insert_one(data).inserted_id
            # Printing a message indicating the successful insertion of data with the obtained ID
            print(f"Data inserted with ID: {sid}")
        except Exception as e:
            # Handling exceptions and printing an error message if data insertion fails
            print(f"Error: {e}")

    # Method to fetch a specific work's data based on work ID
    def fetch_one(self, id):
        # Querying the 'works' collection to find data for a specific work based on work ID
        data = self.collection.find_one({'_id': id})
        return data

    # Method to fetch all works' data from the 'works' collection
    def fetch_all(self):
        # Querying the 'works' collection to find all data
        data = self.collection.find()
        return data

    # Method to update a specific work's data based on work ID
    def update(self, sid, work):
        # Creating a dictionary with updated work details
        data = {
            'workname': work["workname"],
            'date': work["date"],
            'worktypes': work["worktypes"],
            'subject': work["subject"],
            'abstract': work["abstract"],
            'status': work["status"],
            'solver_mail': work["solver_mail"],
        }
        # Updating the work data in the 'works' collection
        self.collection.update_one({'_id': sid}, {"$set": data})

    # Method to delete a specific work's data based on work ID
    def delete(self, id):
        # Deleting a work's data from the 'works' collection based on work ID
        self.collection.delete_one({'_id': id})

