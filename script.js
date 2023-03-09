function calcular(){
    var form = document.getElementById("formulario");
    
    var peso = formulario.peso.value
    var altura = formulario.altura.value
    var IMC = peso / (altura * altura)
    var res = document.getElementById('res')
  

    if(IMC <= 18.5){
        res.innerHTML = `<h4>Seu IMC é <mark>${IMC.toFixed(1)}</mark><br>Você está abaixo do peso!</h4>`
    }else if(IMC >= 18.6 && IMC <= 24.9999999){
        res.innerHTML = `<h4>Seu IMC é <mark id="ideal">${IMC.toFixed(1)}</mark><br>Você está no peso ideal!</h4>`
    }else if(IMC >= 25 && IMC <= 29.9999999){
        res.innerHTML = `<h4>Seu IMC é <mark id="acima">${IMC.toFixed(1)}</mark><br>Você está levemente acima do peso!</h4>`
    }else if(IMC >= 30 && IMC <= 34.9999999){
        res.innerHTML = `<h4>Seu IMC é <mark id="grau1">${IMC.toFixed(1)}</mark><br>Você está com obesidade grau I!</h4>`
    }else if(IMC >= 35 && IMC <= 39.9999999){
        res.innerHTML = `<h4>Seu IMC é <mark id="grau2">${IMC.toFixed(1)}</mark><br>Você está com obesidade grau II <mark id="severa">(severa)!</mark></h4>`
    }else if(IMC >= 40){
        res.innerHTML = `<h4>Seu IMC é <mark id="grau3">${IMC.toFixed(1)}</mark><br>Você está com obesidade grau III <mark id="morbid">(mórbida)!</mark></h4>`
    }
    else{
        alert('Digite sua altura e seu peso')

    }

}

function limpar(){
    res.innerHTML = ''
}
