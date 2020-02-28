Feature: User Certification
    Scenario: Check the User status
        Given that the user Vinod is given a task to clear Java certification exam
        When Vinod got 60 marks in exam
        Then Vinod is known as Java certified