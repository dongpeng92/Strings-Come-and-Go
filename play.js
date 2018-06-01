var interval_var;
function play(){
    clearInterval(interval_var);
    interval_var = setInterval(function() {
        var value1 = document.getElementById("value1").value;
        if(value1 == ""){
            clearInterval(interval_var);
            return;
        }
        var value2 = document.getElementById("value2").value;
        var tmp = value1.charAt(0);
        value1 = value1.substring(1);
        value2 += tmp;
        console.log(value1);
        console.log(value2);
        document.getElementById("value1").value = value1;
        document.getElementById("value2").value = value2;
    }, 1000);
}

function stop() {
    clearInterval(interval_var);
}

function back() {
    clearInterval(interval_var);
    interval_var = setInterval(function() {
        var value2 = document.getElementById("value2").value;
        if(value2 == ""){
            clearInterval(interval_var);
            return;
        }
        var value1 = document.getElementById("value1").value;
        var len = value2.length;
        var tmp = value2.charAt(len-1);
        value2 = value2.substring(0, len-1);
        value1 = tmp + value1;
        console.log(value1);
        console.log(value2);
        document.getElementById("value1").value = value1;
        document.getElementById("value2").value = value2;
    }, 1000);
}

