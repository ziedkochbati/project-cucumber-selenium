package com.orangeHRM.e2eTests;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/specs/features"},
		//glue = {"src/test/java/com/orangeHRM/e2eTests/stepDefinitions"},
		plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/OrangeHRM.html"},
		snippets = SnippetType.CAMELCASE,
				tags = {("@connexion")},
		//tags = {("@outline, @cnx")},  run multiple feature
		//tags = {(", ")}, run all feature
		monochrome = true
		)

public class TestRunner {
	@AfterClass
	public static void writeExtentReport() {
	Reporter.loadXMLConfig(new File("src/test/resources/configs/extent-config.xml"));
	}
	
	}
	
