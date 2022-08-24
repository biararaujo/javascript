let num = [7, 4, 3, 8, 2]
num.push(1) //acrescenta o número q eu solicitar
num.sort() //coloca na ordem númerica correta
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro vetor tem o valor ${num[0]}`)  
let pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}









