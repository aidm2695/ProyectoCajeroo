/*
Obtener los datos desde el local storage
Guardo en variables
Lo pinto (renderizo el contenido) 
*/

/* obtener el boton a través del DOM */

/* Mostrar el saldo y usuario */
const user = localStorage.getItem('name');
const balance = localStorage.getItem('saldo');

const userTag = document.querySelector('#userName');
const balanceTag = document.querySelector('#balance');

console.log(balance, user);

userTag.textContent = user;
balanceTag.textContent = balance;

/* Ingresar saldo */

/*
Interfaz para ingresar saldo
Obtener el valor del saldo del campo input
Obtener el saldo actual
Hacemos la operación matemática
Guardar el saldo en el localStorage
Muestro el saldo actualizado
*/

const addBalanceBtn = document.querySelector('#incrementBalanceBtn');
const addBalanceInput = document.querySelector('#incrementBalance');


/* Sensor de evento */
addBalanceBtn.addEventListener('click', event => {
    console.log(Math.abs(addBalanceInput.value));
    /*
        Obtener el saldo actual
        Hacemos la operación matemática
        Guardar el saldo en el localStorage
        Muestro el saldo actualizado
    */
     //No debe de poder ingresar otra cosa que no sea un digito

    const balance = localStorage.getItem('saldo');

    if( addBalanceInput.value==0 || addBalanceInput.value==" "){//El input no debe de venir vacio
        alert("Ingresa la cantidad");
    }else if ((Number(balance) + Math.abs(Number(addBalanceInput.value))) > 990) { //No debe ser negativo ni mayor a 990
        alert("El Saldo no puede ser mayor a $990"); 
    } else {
        let newBalance = Number(balance) + Math.abs(Number(addBalanceInput.value));
        localStorage.setItem('saldo', newBalance);
        balanceTag.textContent = newBalance;

        addBalanceInput.value = " ";
    }  
    addBalanceInput.value=" ";
});

