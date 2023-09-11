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

   bmi = weight / (height * height)

   bmi = parseFloat(bmi.toFixed(1));
   console.log( bmi);

    // console.log(typeof bmi, bmi);
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