// velocidade maxima de ate 70
//  acada 5km acima do  limite você perde 1 ponto
// math.Florar()
// Caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(130);

function verificarVelocidade(velocidade){

    if (velocidade <= 70)
    console.log('ok')

    else{
        const pontos = Math.floor( ((velocidade - 70)/ 5))

        if( pontos >= 12 )
        console.log('carteira suspendida')
        else 
        console.log( pontos , 'pontos')
    }


}