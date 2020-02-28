package com.demo.bdddemo.TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        		features = "src/test/java/resources/features/Test.feature", //the path of the feature files
    			glue={""}, //the path of the step definition files
    			tags = {""},
    			plugin= {"pretty", "json:target/cucumber-reports/Cucumber.json",
    					"junit:target/cucumber-reports/Cucumber.xml",
    					"html:target/cucumber-reports"}, //to generate different types of reporting
    			monochrome = true, //display the console output in a proper readable format
    			strict = true, //it will check if any step is not defined in step definition file
    			dryRun = false //to check the mapping is proper between feature file and step def file
    				
      )
public class UserTest {
}