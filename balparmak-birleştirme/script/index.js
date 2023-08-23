function renk() {
    document.getElementById("resim").style.backgroundImage= resim;

    for (let i = 1; i < 4; i++) {
        document.getElementById("res"+i).style.backgroundColor = "#c9c9c9";

    }
    document.getElementById(sari).style.backgroundColor = "yellow";

}
var sari = "res1"
var resim = "url(image/res1.jpg)"
document.getElementById("res1").addEventListener("click",function(){
    sari = "res1";
    resim ="url(image/res1.jpg)";
    renk();
});
document.getElementById("res2").addEventListener("click",function(){
    sari = "res2";
    resim ="url(image/res2.jpg)";
    renk();
});
document.getElementById("res3").addEventListener("click",function(){
    sari = "res3";
    resim ="url(image/res3.jpg)";
    renk();
});

function deger() {
    switch (sari) {
        case "res1":
            sari = "res2";
            resim = "url(image/res2.jpg)";
            break;
    
        case "res2":
            sari = "res3";
            resim ="url(image/res3.jpg)";
            break
        case "res3":
            sari = "res1";
            resim = "url(image/res1.jpg)";
            break
    }
}
while (true) {
    setTimeout(deger(), 5000);
    setTimeout(renk(), 5001);
}

