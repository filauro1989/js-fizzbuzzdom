const container = document.querySelector('.container');


for (let numero = 1; numero <= 100; numero++) {

    if ((numero % 5 == 0)&&(numero % 3 == 0)) {
        div = document.createElement( 'div' );
        div.innerHTML = 'FitzBuzz';
        container.appendChild(div);       
    } else if (numero % 5 == 0) {
        div = document.createElement( 'div' );
        div.innerHTML = 'Buzz';
        container.appendChild(div); 
    } else if (numero % 3 == 0) {
        div = document.createElement( 'div' );
        div.innerHTML = 'Fitz';
        container.appendChild(div); 
    } else {
        div = document.createElement( 'div' );
        div.innerHTML = numero;
        container.appendChild(div); 
    }

};