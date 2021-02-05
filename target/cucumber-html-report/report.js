$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("background/Background.feature");
formatter.feature({
  "line": 2,
  "name": "Background - OrangeHRM",
  "description": "ETQ utilisateur je souhaite verifier le fonctionnement du Background",
  "id": "background---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@background"
    }
  ]
});
formatter.before({
  "duration": 6163106064,
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
  "name": "je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisi le username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisi le password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je clique sur le bouton Login",
  "keyword": "And "
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
formatter.scenario({
  "line": 12,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "background---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Redirection vers le compte admin \"Welcome\"",
  "keyword": "Then "
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
  "status": "skipped"
});
formatter.after({
  "duration": 2427392389,
  "status": "passed"
});
formatter.before({
  "duration": 4164083904,
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
  "name": "je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisi le username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisi le password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je clique sur le bouton Login",
  "keyword": "And "
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
formatter.scenario({
  "line": 16,
  "name": "Cliquer sur le module BUZZ",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-buzz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Je clique sur le module BUZZ",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundStepDefinition.jeCliqueSurLeModuleBUZZ()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1367300805,
  "status": "passed"
});
formatter.before({
  "duration": 3604363088,
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
  "name": "je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisi le username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisi le password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "je clique sur le bouton Login",
  "keyword": "And "
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
formatter.scenario({
  "line": 20,
  "name": "Cliquer sur le module Recruitment",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@rec"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Je clique sur le module Recruitment",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundStepDefinition.jeCliqueSurLeModuleRecruitment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1807795502,
  "status": "passed"
});
});