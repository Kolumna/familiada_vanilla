const odpowiedzi = [];

let zyciaL = 3;
let zyciaP = 3;
let punkty = 0;
let strona =  Math.floor(Math.random() * Math.floor(2))

if (strona === 0) {
    document.querySelector('#tlo').style = 'background: #FF6C6C;';
} else {
    document.querySelector('#tlo').style = 'background: #6CC5FF;';
}

document.querySelector('#strona').innerHTML = strona;

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

        document.querySelector('#gra').style = 'display: flex;'
        document.querySelector('#form').style = 'display: none;'
    }

    for (i in odpowiedzi) {
        document.querySelector('#wyniki').innerHTML += `<tr id=w${i} style="visibility: hidden;"><td>${parseInt(i)+1}. ${odpowiedzi[i].odp}</td><td>${odpowiedzi[i].pkt}pkt</td></tr>`;
    }
}

const getWynik = () => {
    const wynik = document.querySelector(`#wynik`).value;
    let check = false;

    if (zyciaL && zyciaP > 0) {
        for (let i in odpowiedzi) {
            if (wynik === odpowiedzi[i].odp) {
                document.querySelector(`#w${i}`).style = '';
                check = true;
            }
        }

        if (!check) {
            if (strona === 0) {
                zyciaL -= 1;
            } else {
                zyciaP -= 1;
            }
        }

        if (strona === 0) {
            document.querySelector('#tlo').style = 'background: #6CC5FF;';
            strona = 1;
            document.querySelector('#strona').innerHTML = strona;
            switch (zyciaL) {
                case 2:
                    document.querySelector('#zycie0').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                    break; 
                case 1:
                    document.querySelector('#zycie0').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                    break;
                case 0:
                    document.querySelector('#zycie0').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                    console.log('przegrales');
                    document.querySelector('#results').innerHTML += '<h1>Niebieski przegrał</h1>'
                    break; 
            }
        } else {
            document.querySelector('#tlo').style = 'background: #FF6C6C;';
            strona = 0;
            document.querySelector('#strona').innerHTML = strona;
            switch (zyciaP) {
                case 2:
                    document.querySelector('#zycie1').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                    break; 
                case 1:
                    document.querySelector('#zycie1').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                    break;
                case 0:
                    document.querySelector('#zycie1').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                    console.log('przegrales');
                    document.querySelector('#results').innerHTML += '<h1>Czerwony przegrał</h1>'
                    break; 
            }
        }
    }
}