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
    tags: process.env.TAGS || "",  
    worldParameters: {
      env1Url: "https://58g6w7d4-9091.uks1.devtunnels.ms/admin/login/?next=/admin/",
      env2Url: "https://58g6w7d4-9092.uks1.devtunnels.ms/admin/login/?next=/admin/"
    },
    requireModule: ["ts-node/register"],     // Activer TypeScript
    timeout: 10000                           // Temps d'exécution max (10s)
  },
};
