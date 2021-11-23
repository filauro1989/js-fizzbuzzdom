const container = document.querySelector('.container');


for (let numero = 1; numero <= 100; numero++) {

    let div = document.createElement( 'div' );

    if ((numero % 5 == 0)&&(numero % 3 == 0)) {

        div.innerHTML = 'FitzBuzz';
        container.appendChild(div); 
        div.className += "square red-bg";

    } else if (numero % 5 == 0) {

        div.innerHTML = 'Buzz';
        container.appendChild(div);
        div.className += "square yellow-bg";

    } else if (numero % 3 == 0) {

        div.innerHTML = 'Fitz';
        container.appendChild(div); 
        div.className += "square green-bg";

    } else {

        div.innerHTML = numero;
        container.appendChild(div);
        div.className += "square blu-bg";

    };

};