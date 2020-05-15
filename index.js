var encrypted;
var crypted;
var encryption = 0;

function start() {
    encrypted = document.getElementById("encrypted").value;
    crypted = document.getElementById("crypted").value;
    encryption = document.getElementById("encryption").value;
    
    if (encrypted.length < crypted.length) {
        crypted = replaceUmlaut(crypted);
        decrypt();
    } else if (encrypted.length > crypted.length) {
        encrypted = replaceUmlaut(encrypted);
        crypt();
    } else if (encrypted == "" && crypted == ""){
        alert("No entry!")
    }
}

function crypt() {
    const input = encrypted.toUpperCase();
    var output = "";

    console.log(input);

    for ( let i = 0; i < input.length; i++){

        var char = parseInt(input.charCodeAt(i));

        console.log(char);

        if (char <= 90 && char >= 65){
        
            char += parseInt(encryption);

            if (char > 90) {
                char -= 26;
            }
        } 

        output += String.fromCharCode(char);
    }
    
    document.getElementById("crypted").innerHTML = output;
}

function decrypt() {
    const input = crypted.toUpperCase();
    var output = "";

    console.log("decrypt");
    console.log(input);

    for ( let i = 0; i < input.length; i++){

        var char = parseInt(input.charCodeAt(i));

        console.log(char);

        if (char <= 90 && char >= 65){
        
            char -= parseInt(encryption);

            if (char < 65) {
                char += 26;
            }
        } 

        output += String.fromCharCode(char);
    }
    
    document.getElementById("encrypted").innerHTML = output;
}

function replaceUmlaut(string) {
    string = string.replace("Ä", "AE");
    string = string.replace("Ü", "UE");
    string = string.replace("Ö", "OE");
    string = string.replace("ß", "SS");
    
    return string;
}