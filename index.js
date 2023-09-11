const weightForm = document.getElementById("weightForm")
const bmiStatus   = document.getElementById("bmiStatus")


// display weight function 

function displayWeight(event){
    event.preventDefault()
    console.log("Hello from form");
}

let bmi;




weightForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    let weight = getInputValue("weight")
    let height = getInputValue("height")
    let pettern = /^-?\d+(\.\d+)?$/
    if(pettern.test(weight) && weight !== '' && pettern.test(height) && height !== ''){
    weight = parseFloat(weight)
    height = parseFloat(height)
    
    height = Number((height / 100).toFixed(2))
   console.log( height);
   bmi = weight / (height * height)
   bmi = parseFloat(bmi.toFixed(2));
   console.log( bmi);

    // console.log(typeof bmi, bmi);
    if(bmi < 18.5){
        console.log("underweight");
    }else if(bmi >= 18.5 && bmi < 24.9){
        console.log("normal weight");
    }else if(bmi >= 25 && bmi <= 29.9){
        console.log("Over Weight");
    }else if(bmi >= 30){
        console.log("Obese");
    }
 
    }else{
        return alert("Enter a valid number")
    }
})

function getInputValue(elementId){
    let value = document.getElementById(elementId).value  
    return value
}