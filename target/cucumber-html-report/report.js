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
  "duration": 7833166421,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHMR",
  "description": "",
  "id": "authentification---orangehmr;authentification---orangehmr",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Je me connect a l application OrangeHMR",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisi username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "je saisi Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "je click sur le buton login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers le compte admin",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3136778098,
  "status": "passed"
});
});