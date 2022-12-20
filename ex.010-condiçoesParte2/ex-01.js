var idade = 66  
console.log(`Voce tem ${idade} Anos.`)
if (idade < 16){
    console.log('Nao Vota')
}else if(idade < 18 ||  idade > 65){
    
        console.log('voto opcional')
    } 
    else{
        console.log('voto obrigatorio')
    }