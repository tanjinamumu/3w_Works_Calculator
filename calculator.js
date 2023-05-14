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
let prevLength = 0;

let Result = () => {
    try{
        let outputValue = eval(result.value);
        result.value = outputValue.toLocaleString();

        let length = outputValue.toString().length;
        if (length > 10) {
            result.style.fontSize = "20px";
        }  
        else {
            result.style.fontSize = "40px";
        }

        if(length < prevLength) {
            result.style.fontSize = getComputedStyle(result).getPropertyValue('font-size');
        }
        prevLength = length; 
    }
    catch(err){
        alert("Enter the valid result");
    }
}

function del(){
    result.value = result.value.slice(0,-1);
}