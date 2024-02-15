var numerodasorte = Math.floor(Math.random() * (99 - 1 + 1)) + 1
var maior = "Wrong! Too low..."
var menor = "Wrong! Too high..."
var acertou = `Thats Right! Random number is <strong style="color: rgb(99, 30, 155);">${numerodasorte}</srong>`
var resp = document.getElementById('respostaum')
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verificar()}})
function verificar() {
    var num = document.getElementById('resp').value
    if (num == numerodasorte) {
        resp.innerHTML = acertou
    } else if (num > numerodasorte) {
        resp.innerHTML = menor
    } else if (num < numerodasorte) {
        resp.innerHTML = maior}
    var nua = document.getElementById('resp').value = ''}
function reset(){
    var cons = document.getElementById('console')
    cons.classList.add('minimized')}
function restore() {
var cons = document.getElementById('console');
cons.classList.remove('minimized');}