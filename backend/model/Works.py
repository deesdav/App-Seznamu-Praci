# Definition of the User class
class Work:
    # Constructor method to initialize a User instance with provided attributes
    def __init__(self, sid, workname, status, date, workleader, recomendedfields, worktypes, abstrakt):
        # Assigning provided values to instance variables
        self.sid = sid
        self.workname = workname
        self.status = status
        self.date = date
        self.workleader = workleader
        self.recomendedfields = recomendedfields
        self.worktypes = worktypes
        self.abstrakt = abstrakt
        

    # Class method to create a User instance from user input
    @classmethod
    def from_user_input(cls):
        # Taking user input for each attribute
        sid = 1
        workname = "130kg"
        status = "active"
        date = 2000
        workleader = "adamzmrdicburicvancaros"
        recomendedfields = "pro"
        worktypes = "programing"
        abstrakt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero ratione delectus alias possimus ipsam cupiditate rem ut esse temporibus. Fugit, impedit aliquam! Magnam nesciunt quaerat exercitationem sunt aliquid temporibus!"
        
        # Creating and returning a new User instance with user-provided values
        return cls(sid, workname, status, date, workleader, recomendedfields, worktypes, abstrakt)