$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/Test.feature");
formatter.feature({
  "name": "User Certification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check the User status",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the user Vinod is given a task to clear Java certification exam",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.that_the_user_Vinod_is_given_a_task_to_clear_Java_certification_exam()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Vinod got 60 marks in exam",
  "keyword": "When "
});
formatter.match({
  "location": "UserSteps.vinod_got_marks_in_exam(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Vinod is known as Java certified",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSteps.vinod_is_known_as_Java_certified()"
});
formatter.result({
  "status": "passed"
});
});