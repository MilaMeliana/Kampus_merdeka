function kosong1(){
    let frm = window.document.getElementById("formulir");
    frm.a1.value = "";
}
function kosong2(){
    let frm = window.document.getElementById("formulir");
    frm.a2.value = "";
}
function kosong(){
    let frm = window.document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}
function tambah(){
    let frm = window.document.getElementById("formulir");
    let a1=frm.a1.value;
    let a2=frm.a2.value;
    if(isNaN(a1)){
        alert("Harap isi data berupa angka ")
    }
    else if(a1 == ''){
        alert("Data kolom 1 masih kosong")
    }
    else if(isNaN(a2)){
        alert("Harap isi data berupa angka")
    }
    else if(a2 == ''){
        alert("Data kolom 2 masih kosong")
    }
    else{
    let hasil=parseInt(a1)+ parseInt(a2);
        frm.hasil.value = hasil;
}
}
function kurang(){
    let frm = window.document.getElementById("formulir");
    let a1=frm.a1.value;
    let a2=frm.a2.value;
    if(isNaN(a1)){
        alert("Harap isi data berupa angka ")
    }
    else if(a1 == ''){
        alert("Data kolom 1 masih kosong")
    }
    else if(isNaN(a2)){
        alert("Harap isi data berupa angka")
    }
    else if(a2 == ''){
        alert("Data kolom 2 masih kosong")
    }
    else{
    let hasil=a1-a2;
        frm.hasil.value = hasil;
}
}
function kali(){
    let frm = window.document.getElementById("formulir");
    let a1=frm.a1.value;
    let a2=frm.a2.value;
    if(isNaN(a1)){
        alert("Harap isi data berupa angka ")
    }
    else if(a1 == ''){
        alert("Data kolom 1 masih kosong")
    }
    else if(isNaN(a2)){
        alert("Harap isi data berupa angka")
    }
    else if(a2 == ''){
        alert("Data kolom 2 masih kosong")
    }
    else{
    let hasil=a1*a2;
        frm.hasil.value = hasil;
}
}
function bagi(){
    let frm = window.document.getElementById("formulir");
    let a1=frm.a1.value;
    let a2=frm.a2.value;
    if(isNaN(a1)){
        alert("Harap isi data berupa angka ")
    }
    else if(a1 == ''){
        alert("Data kolom 1 masih kosong")
    }
    else if(isNaN(a2)){
        alert("Harap isi data berupa angka")
    }
    else if(a2 == ''){
        alert("Data kolom 2 masih kosong")
    }
    else{
    let hasil=a1/a2;
        frm.hasil.value = hasil;
    }
}

function pangkat(){
    let frm = window.document.getElementById("formulir");
    let a1=frm.a1.value;
    let a2=frm.a2.value;
    if(isNaN(a1)){
        alert("Harap isi data berupa angka ")
    }
    else if(a1 == ''){
        alert("Data kolom 1 masih kosong")
    }
    else if(isNaN(a2)){
        alert("Harap isi data berupa angka")
    }
    else if(a2 == ''){
        alert("Data kolom 2 masih kosong")
    }
    else{
    let hasil=Math.pow(a1,a2);
        frm.hasil.value = hasil;

}
}