//Captura evento submit do form
const form = document.querySelector('#form') //Seleciona o formulário

form.addEventListener('submit', function(e){
    e.preventDefault();//Previne o evento
    const inputNome = e.target.querySelector('#nome');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value); // Recebe o valor do input peso
    const altura = Number(inputAltura.value); // Recebe o valor do input altura
    const nome = inputNome.value;
    
    if (!nome) {
        setResultado('Nome Inválido !',false);
        return;
    }

    if (!peso){ //checa se o valor é NaN
        setResultado('Peso Inválido !', false);
        return;
    }
    if(!altura){
        setResultado('Altura Inválida !', false);
        return;
    }
    const imc = getImc(peso,altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Olá ${nome}, seu IMC é ${imc} (${nivelImc})`; 

    setResultado(msg, true);
});
function getImc(peso,altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function getNivelImc(imc){
    const nivel = ['Abaixo do peso','Peso Normal','Sobrepeso','Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];
    //Retorna os niveis de acordo com o resultado do imc
    if (imc >= 39.9) {
        return nivel[5];
    }
    if(imc >=34.9){
        return nivel[4];
    }
    if(imc >= 29.9){
        return nivel[3];
    }
    if (imc >= 24.9){
        return nivel[2];
    }
    if (imc >= 18.5){
        return nivel[1];
    }
    if (imc < 18.5){
        return nivel[0];
    }
    else{

    }
}
function criaP(){
    const p = document.createElement('p'); //Cria um tag <p>
                                            //Adiciona uma class ao paragráfo.
    return p; // Adiciona o valor no <p>
}
function setResultado(msg,isValid){

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //Zera o resultado
    const p = criaP();
    if (isValid){ 
          
            p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
