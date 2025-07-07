var agora = new Date()
var diaSem = agora.getDay()
/*
    Domingo - 0
    Segunda - 1
    Quarta - 2
    Quinta - 3
    Sexta - 4
    Sabado - 5
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log("Domingo")
        break //Não pode esquecer do break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sábado")
        break
    default:
        console.log("[ERRO] Dia inválido")
        break
}