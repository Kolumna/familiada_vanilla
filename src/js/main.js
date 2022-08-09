const odpowiedzi = [];
let zycia = 3;
let punkty = 0;

class Odpowiedz {
    constructor(odp, pkt) {
        this._odp = odp;
        this._pkt = pkt;
    }

    get odp() {
        return this._odp;
    }

    get pkt() {
        return this._pkt;
    }

}

const getOdpowiedzi = () => {

    for(let i = 0; i <= 4; i++) {
        odpowiedzi.push(new Odpowiedz(document.querySelector(`#i${i}`).value, document.querySelector(`#p${i}`).value));
    }

    if(odpowiedzi.length === 5) {
        for(let i = 0; i <= 4; i++) {
            document.querySelector(`#i${i}`).value = null;
            document.querySelector(`#p${i}`).value = null;
        }
    }

    console.log(odpowiedzi[4].odp);

}

const getWynik = () => {
    const wynik = document.querySelector(`#wynik`).value;
    let check = false;

    odpowiedzi.forEach(element => {
        if (wynik === element) {
            check = true;
        }
    });

    for (i in odpowiedzi) {
        document.querySelector('#wyniki').innerHTML += `<tr><td>${odpowiedzi[i].odp}</td><td>${odpowiedzi[i].pkt}pkt</td><td>${zycia}</td></tr>`;
    }
}