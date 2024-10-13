function tratadorDeCliqueExercicio4() {
    
    let numasstring = window.prompt("Insira um número: ");
    let numasint = parseInt(numasstring)

    if (numasint >=30 && numasint <= 50){
        console.log(numasint + ' está no intervalo [30,50].')
    } else if (numasint >= 60 && numasint <= 100){
        console.log(numasint + ' está no intervalo [60,100].')
    } else{
        console.log(numasint + ' não esta em nenhum dos intervalos')
    }
}