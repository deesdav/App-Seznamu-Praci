# Definition of the User class
class User:
    # Constructor method to initialize a User instance with provided attributes
    def __init__(self, sid, username, email, year, department):
        # Assigning provided values to instance variables
        self.sid = sid
        self.username = username
        self.email = email
        self.year = year
        self.department = department
        

    # Class method to create a User instance from user input
    @classmethod
    def from_user_input(cls):
        # Taking user input for each attribute
        sid = 1
        username = "John"
        email = "#"
        year = 2000
        department = "idk"

        # Creating and returning a new User instance with user-provided values
        return cls(sid, username, email, year, department)