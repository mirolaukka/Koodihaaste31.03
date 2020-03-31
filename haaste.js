
function armstongNumerot() {
    var returnArr = [];
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                var plus = (i * 100 + j * 10 + k);
                if (pow == plus) {
                    returnArr.push(pow);
                }
            }
        }
    }
    console.log(returnArr)
}

armstongNumerot()



function portaat(){
    var output = "*";
    var counter = 0;
    while (counter<5){
        console.log(output)
        output += "*"
        counter++
    }
}

portaat()


function koodiKieli(){
    var lause = "ohjelmointi on hauskaa"
    var kirjaimet = {"a": "4", "e":"3", "o": "0", "i": "1", "s": "5"}

    lause = lause.split("")

    for(var i = 0; i< lause.length; i++){
        if(["a","e","o","i","s"].includes(lause[i])){
            lause[i] = kirjaimet[lause[i]]
        }
    }
    console.log(lause.join(""))
}

koodiKieli()

function hikup(){
    var c = 0;
    while (c <= 100){
        var output = "";

        if(c % 3 == 0){output += "Hik"}
        if(c % 5 == 0){output += "up"}
        if(output == ""){output = c}
        console.log(output);
        c++
    }
}

hikup()
