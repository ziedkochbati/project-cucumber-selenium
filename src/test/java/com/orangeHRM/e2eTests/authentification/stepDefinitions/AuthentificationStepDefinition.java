package com.orangeHRM.e2eTests.authentification.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.authentification.pages.AuthentificationPage;
import com.orangeHRM.e2eTests.utils.CommonMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefinition extends CommonMethods{

	public WebDriver driver;
	private AuthentificationPage authentificationPage = new AuthentificationPage();
	private CommonMethods commonMethods = new CommonMethods();
	
	public AuthentificationStepDefinition() {
		driver = Setup.driver;
	}
	@Given("^Je me connect a l application OrangeHMR$")
	public void jeMeConnectALApplicationOrangeHMR() throws Throwable {
		logger.info("Je me connect a l application OrangeHMR");
		commonMethods.openApplicationWithConfigFile("url-test");
	}

	@When("^Je saisi username \"([^\"]*)\"$")
	public void jeSaisiUsername(String name) throws Throwable {
		logger.info("Je saisi username");
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.fillUserName(name);
	}
	@When("^je saisi Password \"([^\"]*)\"$")
	public void jeSaisiPassword(String password) throws Throwable {
		logger.info("je saisi Password");
		authentificationPage.fillPassword(password);
	}
	@When("^je click sur le buton login$")
	public void jeClickSurLeButonLogin() throws Throwable {
		logger.info("je click sur le buton login");
		authentificationPage.clickButtonLogin();
	}
	@Then("^Redirection vers le compte admin \"([^\"]*)\"$")
	public void redirectionVersLeCompteAdmin(String message) throws Throwable {
		logger.info("Redirection vers le compte admin");
		String welcomeMessage = AuthentificationPage.messageWelcome.getText();
		Assert.assertTrue(welcomeMessage.contains(message));
		
	}

}
