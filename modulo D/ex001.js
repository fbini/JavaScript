
/*tipos de condição

            condição simples
            if(condição) {
            true
            }

            if(condiçãio) {
            true
            } else{
            false
            }
            
        */

    //condição simples
    var vel = 60.5
    console.log(`A velocidade do carro é de ${vel}km`)
    if (vel > 60){
        console.log("Você foi multado")
    } 
    console.log("Dirija sempre com segurança")

    //condição ""composta""
    var pais = 'EUA'
    console.log(`Vivendo em ${pais}`)
    if(pais == 'Brasil'){
        console.log('Você é Brasileiro!')
    } else {
        console.log('Você é Estrangeiro')
    }

    //condição aninhadas
    if (cond1) {
        console.log("Condi 1")
    } else{
        if (cond2) {
            console.log("Condi 2")
        } else {
            console.log("Condi 3")
        }
    }
    // exemplo condição aninhada (else if)
    var idade = 12
    console.log(`Você tem ${idade}`)
    if (idade < 16) {
        console.log("Não vota")
    } else if (idade < 18 || idade > 65) {
            console.log("Voto opcional")
    } else {
        console.log("Voto obrigatório")
    }




















            