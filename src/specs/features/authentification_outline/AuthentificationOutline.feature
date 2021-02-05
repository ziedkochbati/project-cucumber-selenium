@outline
Feature: Authentification Outline - OrangeHRM
  En tant que utilisateur je souhaite m authentifier avec un scenario outline

  @cnx-outline
  Scenario Outline: Authentification - OrangeHRM
    Given je me connect a l application OrangeHMR
    When je saisi username "<name>"
    And Je saisi Password "<password>"
    And Je click sur le buton login

    Examples: 
      | name    | password   |
      | Admin   | admin123   |
      | Safe    | safe123    |
      | Imen    | imen123    |
      | Sondes  | sondes123  |
      | Hanene  | hanene123  |
      | Zakaria | zakaria123 |
