//variavel com os numeros para a array
var numar = Number(document.getElementById('numar').value)
var lista = document.getElementById('list')
var numlista = []
function addLista(){
    numlista = numlista.push(numar)
       lista.innerHTML =  `o número inserido foi ${numlista}`
}