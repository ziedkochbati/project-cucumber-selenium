$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHMR",
  "description": "En tant que utilisateur je souhaite m authentifier",
  "id": "authentification---orangehmr",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 34244103773,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connect a l application OrangeHMR",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnectALApplicationOrangeHMR()"
});
formatter.result({
  "duration": 5984629614,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Authentification - OrangeHMR",
  "description": "",
  "id": "authentification---orangehmr;authentification---orangehmr",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Je saisi username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "je saisi Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "je click sur le buton login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Redirection vers le compte admin \"Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiUsername(String)"
});
formatter.result({
  "duration": 1248379048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiPassword(String)"
});
formatter.result({
  "duration": 328409787,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeClickSurLeButonLogin()"
});
formatter.result({
  "duration": 9093447334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 34
    }
  ],
  "location": "AuthentificationStepDefinition.redirectionVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 388850633,
  "status": "passed"
});
formatter.after({
  "duration": 12363929643,
  "status": "passed"
});
});