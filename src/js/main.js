const odpowiedzi = [];

const getOdpowiedzi = () => {

    for(let i = 0; i <= 4; i++) {
        odpowiedzi.push(document.querySelector(`#i${i}`).value);
    }

    if(odpowiedzi.length === 5) {
        for(let i = 0; i <= 4; i++) {
            document.querySelector(`#i${i}`).value = null;
        }
    }

    console.log(odpowiedzi);
}

const getWynik = () => {
    const wynik = document.querySelector(`#wynik`).value;
    let check = false;

    odpowiedzi.forEach(element => {
        if (wynik === element) {
            check = true;
        }
    });

    if(check) {
        console.log(`${wynik} jest w tablicy`);
    } else {
        console.log(`${wynik} nie jest w tablicy...`);
    }
}