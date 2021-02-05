package com.orangeHRM.e2eTests.background.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BackgroundPage {

	/* Locators */
	final static String BUZZ_ID = "menu_buzz_viewBuzz";
	final static String RECRUITEMENT_ID = "menu_recruitment_viewRecruitmentModule";

	/* FindBy */
	@FindBy(how = How.ID, using = BUZZ_ID)
	public static WebElement buzz_module;
	@FindBy(how = How.ID, using = RECRUITEMENT_ID)
	public static WebElement recruitement_module;

	/* Methods */
	public void clickBuzzModule() {
		buzz_module.click();
	}

	public void clickRecruitementModule() {
		recruitement_module.click();
	}

}