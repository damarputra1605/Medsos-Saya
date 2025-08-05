const nama = "damar putra wardoyo";
let usia = 30

let biodata = document.getElementById("biodata");

function Biodata() {
    let generasi;

    if(usia > 10 && usia < 18) { 
        // INI ADALAH KONDISI PERTAMA
        generasi = "generasi 2";
    } 
    else if (usia > 18 && usia < 30) {
        // INI ADALAH KONDISI KEDUA
        generasi = "generasi 1";
    }
    else if (usia >= 30) {
        // INI ADALAH KONDISI KETIGA
       generasi = "generasi 0";
    } 
    else if (usia <10 && usia > 2) {
        // INI KONDISI KEEMPAT
       generasi = "generasi bocil";
    }
    else {
        // INI ADALAH JIKA KONDISI TIDAK TERPENUHI
       generasi = "generasi bayi";
    }

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

Biodata();