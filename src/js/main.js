const odpowiedzi = [];

let zyciaL = 3;
let zyciaP = 3;
let punkty = 0;
let strona = null;
let rewanz = null;
let wersy = 0;

const colorMaker = () => {
    if (strona === 0) {
        document.querySelector('#tlo').style = 'background: #6CC5FF;';
    } else {
        document.querySelector('#tlo').style = 'background: #FF6C6C;';
    }
}

class Odpowiedz {
    constructor(odp, pkt) {
        this._odp = odp;
        this._pkt = pkt;
    }

    get odp() {
        return this._odp.toUpperCase();
    }

    get pkt() {
        return parseInt(this._pkt);
    }

}

const getStart = () => {
    document.querySelector('#gra').style = 'display: flex;';
    document.querySelector('#form').style = 'display: none;';
    document.querySelector('#checkbox').style = 'display: none;';
    document.querySelector('#gra_tytul').style = 'display: block;';
    document.querySelector('#gra_tytul').innerHTML = document.querySelector('#tytul').value;

    if (document.querySelector('#nieb').checked === true) {
        console.log('nieb')
        strona = 0;
        rewanz = 1;
    } else {
        console.log('czer')
        strona = 1;
        rewanz = 0;
    }

    colorMaker();
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

        document.querySelector('#checkbox').style = 'display: flex;';
        document.querySelector('#form').style = 'display: none;';
    }

    for (i in odpowiedzi) {
        document.querySelector('#wyniki').innerHTML += `<div id=w${i} style="visibility: hidden; margin-bottom: 75px;" class="flex justify-between items-center w-full text-[3rem] mb-[50px]"><h1>${parseInt(i)+1}. ${odpowiedzi[i].odp}</h1><h1>${odpowiedzi[i].pkt}pkt</h1></div>`;
    }
}

const getWynik = () => {
    const wynik = document.querySelector(`#wynik`).value;
    let check = false;

    if (zyciaL || zyciaP > 0) {
        for (let i in odpowiedzi) {
            if (wynik.toUpperCase() === odpowiedzi[i].odp) {
                document.querySelector(`#w${i}`).style.visibility = '';
                punkty += odpowiedzi[i].pkt;
                console.log(`punkty ${punkty}`)
                check = true;
                wersy += 1;
                if (wersy === 5 && strona === 0) {
                    document.querySelector('#results').innerHTML = '<h1>Niebiescy wygrali</h1>';
                    document.querySelector('#wyniki').style = 'display: none';
                } else if (wersy === 5 && strona === 1) {
                    document.querySelector('#results').innerHTML = '<h1>Czerwoni wygrali</h1>';
                    document.querySelector('#wyniki').style = 'display: none';
                }
            }
        }

        if (!check) {
            if (strona === 0) {
                zyciaL -= 1;
                if (rewanz === 1) {
                    switch (zyciaL) {
                        case 2:
                            document.querySelector('#zycie0').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                            break; 
                        case 1:
                            document.querySelector('#zycie0').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                            break;
                        case 0:
                            document.querySelector('#zycie0').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                            strona = 1;
                            wersy = 4;
                            colorMaker();
                            break;  
                        }
                } else {
                    if (zyciaL === 2) {
                        document.querySelector('#zycie0').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                        zyciaL = 0;
                        document.querySelector('#results').innerHTML = '<h1>Czerwoni wygrali</h1>';
                        strona = 1;
                        colorMaker();
                        document.querySelector('#wyniki').style = 'display: none';
                    }
                }
            } else {
                zyciaP -= 1;
                if (rewanz === 0) {
                    switch (zyciaP) {
                        case 2:
                            document.querySelector('#zycie1').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                            break; 
                        case 1:
                            document.querySelector('#zycie1').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                            break;
                        case 0:
                            document.querySelector('#zycie1').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                            strona = 0;
                            wersy = 4;
                            colorMaker();
                            console.log('przegrales');
                            break; 
                    }
                } else {
                    if (zyciaP === 2) {
                        document.querySelector('#zycie1').innerHTML += '<span style="font-size: 8rem; font-weight: extrabold;">X</span>';
                        zyciaP = 0;
                        document.querySelector('#results').innerHTML = '<h1>Niebiescy wygrali</h1>';
                        strona = 0;
                        colorMaker();
                        document.querySelector('#wyniki').style = 'display: none';
                    }
                }
            }
        }
        document.querySelector('#wynik').value = null;

        document.querySelector('#punkty').innerHTML = `PUNKTY: ${parseInt(punkty)}`;
    }
}   