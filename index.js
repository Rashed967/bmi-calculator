const weightForm = document.getElementById("weightForm")


// display weight function 

function displayWeight(event){
    event.preventDefault()
    console.log("Hello from form");
}






weightForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    const weight = getInputValue("weight")
    const height = getInputValue("height")
    // if(weight === 'number' || height === 'number'){
    //     alert("Enter a valid number")
    // }

    // if(weight === 'undefined' || height === 'undefined'){
    //     alert("Not a number")
    // }
    // console.log(typeof weight, typeof height);
    
})

function getInputValue(elementId){
    const value = document.getElementById(elementId).value
    if(value === ''){
        alert("Enter a valid number")
    }
    if(value === 'A/'){
        alert("Enter a number")
    }
    return value
}