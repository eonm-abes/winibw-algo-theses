// description: Ce script permet de récuper avec AlgoSudoc les rapports de chargement de données de Theses.fr depuis WinIBW.
// author : Mathis EON
// email: eon@abes.fr

const algo_sudoc_base_url = "https://www.theses.fr/AlgoSudoc";

const winIBWMessageFormat = {
  error: 1,
  warning: 2,
  notification: 3,
};

function AlgoSudoc() {
  let ppn = application.activeWindow.getVariable("P3GPP");

  if (ppn) {
    let url = urlBuilder("ppn", ppn);

    application.activeWindow.showMessage(
      `Récupération du rapport d'AlgoSudoc depuis : ${url}`,
      winIBWMessageFormat.notification
    );

    application.shellExecute(url, 5, "open", "");
  } else {
    application.activeWindow.showMessage(
      `Impossible de récupérer le rapport d'AlgoSudoc depuis cet écran`,
      winIBWMessageFormat.warning
    );
  }
}

function urlBuilder(param_name, param_value) {
  return `${algo_sudoc_base_url}?${param_name}=${param_value}`;
}
