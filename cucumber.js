module.exports = {
  default: {
    require: [
      "step-definitions/**/*.ts",   // Path to step definitions
      "hooks/**/*.ts"               // Path to hooks
    ],
    format: [
      "allure-cucumberjs",                   // Pour les rapports Allure

      "progress",                           // Affiche la progression dans le terminal
      "json:reports/cucumber-report.json",   // JSON report pour Allure
      "html:reports/cucumber-report.html"    // HTML report pour la lecture humaine
    ],
    tags: "@valid or @invalid",              // Filtrage des tests par tag
    worldParameters: {                       
      baseUrl: "https://opensource-demo.orangehrmlive.com"
    },
    requireModule: ["ts-node/register"],     // Activer TypeScript
    timeout: 10000                           // Temps d'exécution max (10s)
  },
};
