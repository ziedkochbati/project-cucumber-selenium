package com.orangeHRM.e2eTests.authentification_Outline.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.authentification.pages.AuthentificationPage;
import com.orangeHRM.e2eTests.utils.CommonMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AuthentificationOutlineStepDefinition {
	
	public WebDriver driver;
	private AuthentificationPage authentificationPage = new AuthentificationPage();
	private CommonMethods commonMethods = new CommonMethods();
	
	public AuthentificationOutlineStepDefinition() {
		driver = Setup.driver;
	}
	
	@Given("^je me connect a l application OrangeHMR$")
	public void jeMeConnectALApplicationOrangeHMR() throws Throwable {
		commonMethods.openApplicationWithConfigFile("url-test");
	}

	@When("^je saisi username \"([^\"]*)\"$")
	public void jeSaisiUsername(String name) throws Throwable {
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.fillUserName(name);
	}

	@When("^Je saisi Password \"([^\"]*)\"$")
	public void jeSaisiPassword(String password) throws Throwable {
		authentificationPage.fillPassword(password);
	}

	@When("^Je click sur le buton login$")
	public void jeClickSurLeButonLogin() throws Throwable {
		authentificationPage.clickButtonLogin();
	}
	    

}
