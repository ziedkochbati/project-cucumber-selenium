@connexion
Feature: Authentification - OrangeHMR
  En tant que utilisateur je souhaite m authentifier

  @cnx
  Scenario: Authentification - OrangeHMR
    Given Je me connect a l application OrangeHMR
    When Je saisi username
    And je saisi Password
    And je click sur le buton login
    Then Redirection vers le compte admin