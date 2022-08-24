let eu = {nome:'Bianca',
sexo:'F',
peso: 66, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

eu.engordar(2)
console.log(`${eu.nome} pesa ${eu.peso}Kg.`)