// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const main=document.querySelector("main")
//ur="https://docs.google.com/spreadsheets/d/155D5HYFJAM3VaN54tTLSs_pVDGYWfPmiArZxV0lK_Sc/export?format=csv"
const url="https://docs.google.com/spreadsheets/d/1vovcitfIqSMVpocTGRvBs5rBsERaN4yP0Fu8xrN2Xrk/export?format=csv"

fetch(url).then(res=>res.text()).then(function(csvtext){
  return csv().fromString(csvtext);
}).then(function(csv){
//main.innerHTML="<code>"+JSON.stringify(csv)+ "</code>"
csv.forEach(function(row){
  main.innerHTML +="<h1>" + row.nombre +"</h1>";
  main.innerHTML +="<p>" + row.calif +"</p>";
  main.innerHTML += "<img src=>"+row.img +"</img>";

});
});