function renk() {
    for (let i = 1; i < 4; i++) {
        document.getElementById("res"+i).style.backgroundColor = "#c9c9c9";

    }
    document.getElementById(sari).style.backgroundColor = "yellow";
}
var sari = ""
document.getElementById("res1").addEventListener("click",function(){
    sari = "res1";
    document.getElementById("resim").style.backgroundImage="url(image/res1.jpg)";
    renk();
});
document.getElementById("res2").addEventListener("click",function(){
    sari = "res2";
    document.getElementById("resim").style.backgroundImage="url(image/res2.jpg)";
    renk();
});
document.getElementById("res3").addEventListener("click",function(){
    sari = "res3";
    document.getElementById("resim").style.backgroundImage="url(image/res3.jpg)";
    renk();
});
