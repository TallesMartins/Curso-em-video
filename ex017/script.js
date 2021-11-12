//variavel com os numeros para a array
var numar = document.getElementById('numar')
var lista = document.getElementById('list')
var numlista = new Array(99)
function addLista(){
    if(numar.value.length == 0){
        alert('[ERRO] Verifique os valores e tente novamente')
    }
    let item = document.createElement('option')
    item.text = `O número adicionado foi: ${Number(numar.value)}`
    lista.appendChild(item)
}