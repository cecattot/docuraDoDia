$(function () {
    $("#menu").load("menu.html");
    $("#conteudo").load("pagIndex.html");
    $("#footer").load("footer.html");
})

function home() {
    $("#conteudo").load("pagIndex.html");
}

function catalogo() {
    $("#conteudo").load("pagCatalogo.html");
}

function contato() {
    $("#conteudo").load("pagContato.html");
}

function sobre() {
    $("#conteudo").load("pagSobre.html");
}
$(document).ready(function() {
    $('.dropdown-warning').materialSelect();
});
