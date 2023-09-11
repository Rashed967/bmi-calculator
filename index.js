const weightForm = document.getElementById("weightForm")
const bmiStatus   = document.getElementById("bmiStatus")

// global variable 
let bmi;

// display weight function 


weightForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    let weight = getInputValue("weight")
    let height = getInputValue("height")
    let pettern = /^-?\d+(\.\d+)?$/
    if(pettern.test(weight) && pettern.test(height)){
    weight = parseFloat(weight)
    height = parseFloat(height / 100)

   bmi = weight / (height * height)

   bmi = parseFloat(bmi.toFixed(2));

    if(bmi < 18.5){
        bmiStatus.innerText = `তোমার ওজন অনেক হালকা। তোমার BMI হলো ${bmi}।`
    }else if(bmi >= 18.5 && bmi < 24.9){
        bmiStatus.innerText = `তোমার ওজন ঠিক আছে। তোমার BMI হলো ${bmi}।`
    }else if(bmi >= 25 && bmi <= 29.9){
        bmiStatus.innerText = `তোমার ওজন অনেক বেশি। তোমার BMI হলো ${bmi}।`
    }else if(bmi >= 30){
        bmiStatus.innerText = `তুমি অনেক বেশি মোটা। তোমার BMI হলো ${bmi}।`
    }
 
    }else{
        return alert("সঠিক সংখ্যা লিখো।")
    }
})

function getInputValue(elementId){
    let value = document.getElementById(elementId).value  
    return value
}