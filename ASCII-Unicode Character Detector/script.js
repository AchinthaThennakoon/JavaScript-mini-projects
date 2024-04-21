
const detectCharacter =()=>{
    const resultElement = document.getElementById("result");
    const inputChar = document.getElementById("characterInput").value

    if(isAscii(inputChar)){
        resultElement.innerText="This character is ASCII character";
    }
}

const isAscii= (character)=>{
    return character.charCodeAt(0) <= 127;
}