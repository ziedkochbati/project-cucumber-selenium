package com.orangeHRM.e2eTests.background.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.background.pages.BackgroundPage;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.When;

public class BackgroundStepDefinition {

	public WebDriver driver;
	private BackgroundPage backgroundPage = new BackgroundPage();

	public BackgroundStepDefinition() {
		driver = Setup.driver;
		PageFactory.initElements(driver, BackgroundPage.class);
	}

	@When("^Je clique sur le module BUZZ$")
	public void jeCliqueSurLeModuleBUZZ() throws Throwable {
		backgroundPage.clickBuzzModule();
	}

	@When("^Je clique sur le module Recruitment$")
	public void jeCliqueSurLeModuleRecruitment() throws Throwable {
		backgroundPage.clickRecruitementModule();
	}

}