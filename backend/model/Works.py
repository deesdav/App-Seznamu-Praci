# Definition of the User class
class Work:
    # Constructor method to initialize a User instance with provided attributes
    def __init__(self, sid, workname, date, worktypes, subject, abstract, status, solver_mail):
        # Assigning provided values to instance variables
        self.sid = sid
        self.workname = workname
        self.date = date
        self.worktypes = worktypes
        self.subject = subject
        self.abstract = abstract
        self.status = status
        self.solver_mail = solver_mail
        

    # Class method to create a User instance from user input
    @classmethod
    def from_user_input(cls):
        # Taking user input for each attribute
        sid = 1
        workname = "130kg"
        date = 2000
        worktypes = "watching pc"
        subject = "programing"
        abstract = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero ratione delectus alias possimus ipsam cupiditate rem ut esse temporibus. Fugit, impedit aliquam! Magnam nesciunt quaerat exercitationem sunt aliquid temporibus!"
        solver_mail = None
        
        # Creating and returning a new User instance with user-provided values
        return cls(sid, workname, date, worktypes, subject, abstract, solver_mail)