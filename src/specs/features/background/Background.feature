@background
Feature: Background - OrangeHRM
  ETQ utilisateur je souhaite verifier le fonctionnement du Background

  Background: 
    Given Je me connect a l application OrangeHMR
    When Je saisi username "Admin"
    And je saisi Password "admin123"
    And je click sur le buton login

  @cnx
  Scenario: Authentification - OrangeHRM
    Then Redirection vers le compte admin "Welcome"

  @buzz
  Scenario: Cliquer sur le module BUZZ
    When Je clique sur le module BUZZ

  @rec
  Scenario: Cliquer sur le module Recruitment
    When Je clique sur le module Recruitment
