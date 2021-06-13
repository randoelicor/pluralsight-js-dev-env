/* eslint-disable no-useless-escape */
/* eslint-disable no-console */

// export default function getBaseUrl() {
//   const inDevelopment = window.location.hostname === 'localhost';
//   return inDevelopment ? 'http://localhost:3005' : '/';
// }

export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3005' : 'http://localhost:3000';
}

// function getQueryStringParameterByName(name, url) {
//   if(!url) url = window.location.href;
//   name = name.replace(/[\[\]]/g, "\\$&");
//   let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//       results = regex.exec(url);
//       console.log("Results: ", results);
//   if(!results) return null;
//   if(!results[2]) return '';
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

function getQueryStringParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
