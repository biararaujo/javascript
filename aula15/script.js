function tabuada() {
    var valor = document.querySelector('input#valor') 
    var tab = document.getElementById('seltab')
    if(valor.value.length == 0) {   
         window.alert('Por favor, digite um número!')
} else {
        var valor = Number(valor.value)
         var c = 1
         tab.innerHTML = ''
        while (c <=10) {
            var item = document.createElement('option')
            item.text = `${valor} x ${c} = ${valor*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }      
}

