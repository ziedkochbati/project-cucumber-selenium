@connexion
Feature: Authentification - OrangeHMR
  En tant que utilisateur je souhaite m authentifier

  Background: 
    Given Je me connect a l application OrangeHMR

  @cnx
  Scenario: Authentification - OrangeHMR
    When Je saisi username "Admin"
    And je saisi Password "admin123"
    And je click sur le buton login
    Then Redirection vers le compte admin "Welcome"
