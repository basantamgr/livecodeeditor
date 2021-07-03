function run(){
    let htmlcode = document.querySelector('#editor #html-code').value;
    let csscode = "<style>"+document.querySelector('#editor #css-code').value+"</style>";
    let jscode = document.querySelector('#editor #js-code').value;
    let output= document.querySelector('#editor #output');

    output.contentDocument.body.innerHTML = htmlcode+csscode;
    output.contentWindow.eval(jscode);
}
document.querySelector('#editor #html-code').addEventListener("keyup",run);
document.querySelector('#editor #css-code').addEventListener("keyup",run);
document.querySelector('#editor #js-code').addEventListener("keyup",run);

function html(){
    document.getElementById('html-code').style.display="block";
    document.getElementById('css-code').style.display="none";
    document.getElementById('js-code').style.display="none";
    document.getElementById('htmlcode').style.background = "white";
    document.getElementById('htmlcode').style.color = "black";
    document.getElementById('csscode').style.background = "rgb(204, 203, 203)";
    document.getElementById('csscode').style.color = "black";
    document.getElementById('jscode').style.background = "rgb(204, 203, 203)";
    document.getElementById('jscode').style.color = "black";
    document.getElementById('run').style.background = "rgb(204, 203, 203)";
    document.getElementById('run').style.color = "black";
    document.getElementById('output').style.display="none";
}
function css(){
    document.getElementById('html-code').style.display="none";
    document.getElementById('css-code').style.display="block";
    document.getElementById('js-code').style.display="none";
    document.getElementById('htmlcode').style.background = "rgb(204, 203, 203)";
    document.getElementById('htmlcode').style.color = "black";
    document.getElementById('csscode').style.background = "white";
    document.getElementById('csscode').style.color = "black";
    document.getElementById('jscode').style.background = "rgb(204, 203, 203)";
    document.getElementById('jscode').style.color = "black";
    document.getElementById('run').style.background = "rgb(204, 203, 203)";
    document.getElementById('run').style.color = "black";
    document.getElementById('output').style.display="none";
}
function js(){
    document.getElementById('html-code').style.display="none";
    document.getElementById('css-code').style.display="none";
    document.getElementById('js-code').style.display="block";
    document.getElementById('htmlcode').style.background = "rgb(204, 203, 203)";
    document.getElementById('htmlcode').style.color = "black";
    document.getElementById('csscode').style.background = "rgb(204, 203, 203)";
    document.getElementById('csscode').style.color = "black";
    document.getElementById('jscode').style.background = "white";
    document.getElementById('jscode').style.color = "black";
    document.getElementById('run').style.background = "rgb(204, 203, 203)";
    document.getElementById('run').style.color = "black";
    document.getElementById('output').style.display="none";
}
function output(){
    document.getElementById('html-code').style.display="none";
    document.getElementById('css-code').style.display="none";
    document.getElementById('js-code').style.display="none";
    document.getElementById('htmlcode').style.background = "rgb(204, 203, 203)";
    document.getElementById('htmlcode').style.color = "black";
    document.getElementById('csscode').style.background = "rgb(204, 203, 203)";
    document.getElementById('csscode').style.color = "black";
    document.getElementById('jscode').style.background = "rgb(204, 203, 203)";
    document.getElementById('jscode').style.color = "black";
    document.getElementById('run').style.background = "white";
    document.getElementById('run').style.color = "black";
    document.getElementById('output').style.display="block";
}