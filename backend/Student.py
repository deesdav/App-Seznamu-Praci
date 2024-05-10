# Definition of the User class
class Student:
    # Constructor method to initialize a User instance with provided attributes
    def __init__(self, sid, username, email):
        # Assigning provided values to instance variables
        self.sid = sid
        self.username = username
        self.email = email
        

    # Class method to create a User instance from user input
    @classmethod
    def from_user_input(cls):
        # Taking user input for each attribute
        sid = 1 
        username = "burtos"
        email = "adambuchty@email.cz"
       

        # Creating and returning a new User instance with user-provided values
        return cls(sid, username, email)