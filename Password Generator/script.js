const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';
const symbols = "!\"#$%&'()*+,-./";

function generatePassword(){
    var password="";
    var characters ="";
    //get inputs
    const passwordLength = document.getElementById('length').value;
    const includelowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const includeNumbers = document.getElementById('numbers').checked;

    if(passwordLength<8){
        window.alert("password legnth should be greater than or equal 8");
        return;
    }
    if(includelowercase){
        characters+=lowercase;
    }
    if(includeUppercase){
        characters+=upperCase;
    }
    if(includeSymbols){
        characters+=symbols;
    }
    if(includeNumbers){
        characters+=digits;
    }

    for(let i=0;i<passwordLength;i++){
        password+= characters.charAt(Math.floor(Math.random()*characters.length))
    }

    console.log(password);
    document.getElementById("passsword").value = password;

}

//add event listner
document.getElementById('generate').addEventListener('click',generatePassword);