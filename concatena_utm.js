// Obtém os parâmetros UTM da URL
function getUTMParameters() {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var utmParameters = {};

  if (urlParams.has("utm_source")) {
    utmParameters.source = urlParams.get("utm_source");
  }

  if (urlParams.has("utm_medium")) {
    utmParameters.medium = urlParams.get("utm_medium");
  }

  if (urlParams.has("utm_campaign")) {
    utmParameters.campaign = urlParams.get("utm_campaign");
  }

  if (urlParams.has("utm_content")) {
    utmParameters.content = urlParams.get("utm_content");
  }

  if (urlParams.has("utm_term")) {
    utmParameters.term = urlParams.get("utm_term");
  }

  return utmParameters;
}

// Concatena os parâmetros UTM nos links
function concatenateUTMToLinks() {
  var utmParameters = getUTMParameters();
  var links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var linkHref = link.getAttribute("href");

    if (linkHref) {
      var separator = (linkHref.indexOf("?") === -1) ? "?" : "&";
      var utmString = "";

      if (utmParameters.source) {
        utmString += separator + "utm_source=" + utmParameters.source;
        separator = "&";
      }

      if (utmParameters.medium) {
        utmString += separator + "utm_medium=" + utmParameters.medium;
        separator = "&";
      }

      if (utmParameters.campaign) {
        utmString += separator + "utm_campaign=" + utmParameters.campaign;
        separator = "&";
      }

      if (utmParameters.content) {
        utmString += separator + "utm_content=" + utmParameters.content;
        separator = "&";
      }

      if (utmParameters.term) {
        utmString += separator + "utm_term=" + utmParameters.term;
      }

      if (utmString) {
        link.setAttribute("href", linkHref + utmString);
      }
    }
  }
}

// Chama a função para concatenar os parâmetros UTM nos links quando a 
página for carregada
window.addEventListener("load", concatenateUTMToLinks);

