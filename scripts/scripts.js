const bottomNumber = document.getElementsByName('number');
const bottomOperation = document.getElementsByName('operation');
const bottomResult = document.getElementsByName('total')[0];
const bottomDelete = document.getElementsByName('delete')[0];
let result = document.getElementById('result');
let operat = undefined;
let opeCurrent = '';
let opePass = '';

bottomNumber.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);        
    })
});

bottomOperation.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);        
    })
});

bottomResult.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

bottomDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op){
    if(opeCurrent === '') return;
    if(opePass !== ''){
        calcular()
    }
    operacion = op.toString();
    opePass = opeCurrent;
    opeCurrent = '';
}

function calcular(){
    let calculo;
    const pass = parseFloat(opePass);
    const current = parseFloat(opeCurrent);
    if(isNaN(pass) || isNaN(current)) return;
    switch(operacion){
        case '+':
            calculo = pass + current;
            break;
        case '-':
            calculo = pass - current;
            break;
        case 'x':
            calculo = pass * current;
            break;
        case '/':
            calculo = pass / current;
            break;
        default:
            return;
    }
    opeCurrent = calculo;
    operacion = undefined;
    opePass = '';
}

function agregarNumero(num){
    opeCurrent = opeCurrent.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    opeCurrent = '';
    opePass = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeCurrent;
}

clear();