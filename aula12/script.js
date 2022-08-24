function verificar() {
    var data = new Date()
    var ano = data.getFullYear() 
    var fano = document.querySelector('input#txtano')
    var res = document.getElementById('res')

if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else  {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'bebeh.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovemh.png')
        }  else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'adultoh.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosoh.png')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'bebem.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovemm.png')
        }  else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'adultom.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosam.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
    

}

   




