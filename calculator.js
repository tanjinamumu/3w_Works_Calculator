let result = document.getElementById("inputext");
let calculate = (number) => {
    if (number === '') {
        result.value = '';
    } 
    else if (number === '%') {
        try {
            let percentage = eval(result.value) / 100;
            result.value = percentage.toString();
        } 
        catch(err) {
            alert("Enter a valid expression to calculate percentage");
        }
    }
    else {
        result.value += number;
    }
}

let Result = () => {
    try{
        let outputValue = eval(result.value);
        result.value = outputValue.toLocaleString();

        // adjust font size based on output length
        if (outputValue.toString().length > 8) {
            result.style.fontSize = "20px";
        } else if (outputValue.toString().length > 6) {
            result.style.fontSize = "24px";
        } else if (outputValue.toString().length > 4) {
            result.style.fontSize = "30px";
        } else {
            result.style.fontSize = "36px";
        }
    }
    catch(err){
        alert("Enter the valid result");
    }
}


function color(){
    result.value = " ";
}

function del(){
    result.value = result.value.slice(0,-1);
}