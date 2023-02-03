var s = 60;
var m1 = prompt("Quantos minutos?")
var m = m1;

function update(){
    s--;
    document.getElementById('minutos').innerHTML = m;
    document.getElementById('segundos').innerHTML = s;
    if (s == 0 ){
        s = 60;
        m--;
    }
}

setInterval(update,1000);




function titlechange(){
    var t1 = String(m) + String(" : ") + String(s);
    document.title = t1;
    }

    setInterval(titlechange, 1000);
