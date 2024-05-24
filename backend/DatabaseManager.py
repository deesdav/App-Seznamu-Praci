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
            # Getting the 'students' collection from the 'mongodb' database
            self.collection = self.db['students']
        except Exception as e:
            # Handling exceptions and printing an error message if connection fails
            print(f"Error: {e}")
        
    # Method to insert student data into the 'students' collection
    def insert(self, student):
        try:
            # Creating a dictionary with student details
            data = {
                '_id': student.sid,
                'email': student.email,
            }
            # Inserting the student data into the 'students' collection and obtaining the inserted ID
            sid = self.collection.insert_one(data).inserted_id
            # Printing a message indicating the successful insertion of data with the obtained ID
            print(f"Data inserted with ID: {sid}")
        except Exception as e:
            # Handling exceptions and printing an error message if data insertion fails
            print(f"Error: {e}")

    # Method to fetch a specific student's data based on student ID
    def fetch_one(self, sid):
        # Querying the 'students' collection to find data for a specific student based on student ID
        data = self.collection.find_one({'_id': sid})
        return data

    # Method to fetch all students' data from the 'students' collection
    def fetch_all(self):
        # Querying the 'students' collection to find all data
        data = self.collection.find()
        return data

    # Method to update a specific student's data based on student ID
    def update(self, sid, student):
        # Creating a dictionary with updated student details
        data = {
            'username': student.username,
            'email': student.email
        }
        # Updating the student data in the 'students' collection
        self.collection.update_one({'_id': sid}, {"$set": data})

    # Method to delete a specific student's data based on student ID
    def delete(self, sid):
        # Deleting a student's data from the 'students' collection based on student ID
        self.collection.delete_one({'_id': sid})

