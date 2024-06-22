let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';

function btnConsole(){
    console.log('El boton fue clicado');
};

function btnPrompt(){
    let ciudad = prompt('Indicanos una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acorde de ti`);
};

function btnAlerta(){
    alert('Yo amo JS');
};

function btnSuma(){
    let number1 = parseInt(prompt('Indica un numero'));
    let number2 = parseInt(prompt('Indica otro numero'));
    let resultado = number1 + number2;
    alert(`La suma de ${number1} + ${number2} es ${resultado}`)
}