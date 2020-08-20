const input = require("readline-sync")

console.log("Insira aqui suas notas")

const Nota1 = input.question("Qual a sua primeira nota?")
const Nota2 = input.question("Qual a sua segunda nota?")
const Nota3 = input.question("Qual a sua terceira nota?")
const Nota4 = input.question("Qual a sua quarta nota?")
const Nota5 = input.question("Qual a sua quinta nota?")
const Nota6 = input.question("Qual a sua sexta nota?")

const media = (parseFloat(Nota1) + parseFloat(Nota2) + parseFloat(Nota3) + parseFloat(Nota4) + parseFloat(Nota5) + parseFloat(Nota6)) /6
console.log("Sua média é de")
console.log(media.toFixed(2))

if (media <5) {
    console.log("Não foi dessa vez, você foi reprovade.")
} else if (media >= 5 && media < 7) {
    console.log("Eita! Você tá de recuperação.")
} else if (media >= 7){
    console.log("Parabéns! Você foi aprovade.")
}