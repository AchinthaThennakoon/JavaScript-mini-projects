const vowels = ['a','e','i','o','u'];

function getCount(){
    let input = document.getElementById("inputText").value;
    input=input.toLowerCase();
    console.log(input);
    var count =0;

    for(i=0;i<input.length;i++){
        
        if(vowels.includes(input[i])){
            count++;
        }
    }

    document.getElementById("result").innerHTML = count;
}