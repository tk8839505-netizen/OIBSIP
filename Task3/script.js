
const temperatureInput = document.getElementById("temperature");

const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");

const convertbtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

const resultValue = document.getElementById("resultValue");

const swapBtn = document.getElementById("swapBtn");

const successMessage = document.getElementById("successMessage");

let rotation =0;


swapBtn.addEventListener("click",()=>{
    
    let temp = fromUnit.value;

    fromUnit.value = toUnit.value;

    toUnit.value = temp; 

    rotation += 180;

    swapBtn.style.transform = `rotate(${rotation}deg)`;

});

convertbtn.addEventListener("click",()=>{

    const temperature =Number (temperatureInput.value);

    const from = fromUnit.value;
    const to = toUnit.value;

    let resultValueTemperature;

    if(temperatureInput.value.trim() === ""){

        resultValue.style.color ="red";
        successMessage.style.display = "none";
        resultValue.textContent = "please enter temperature.";
        return;
    }

    if(temperature < -273.15){

        resultValue.style.color = "red";
        successMessage.style.display = "none";
        resultValue.textContent = "Temperature cannot be below -273.15°C.";
        return;
    }
    if(temperature > 10000){

        resultValue.style.color = "red";
        resultValue.textContent = "please enter a realistic temperature.";
        successMessage.style.display = "none";
        return;
    }
    resultValue.style.color = "green";
    

    if(from === "celsius" && to === "fahrenheit"){

        resultValueTemperature = (temperature * 9/5) + 32;

        resultValue.textContent = resultValueTemperature.toFixed(2) + "°F";
        successMessage.style.display = "block";
    }
    else if(from === "fahrenheit" && to === "celsius"){

        resultValueTemperature = (temperature -32)*5/9;
        resultValue.textContent = resultValueTemperature.toFixed(2) + "°C";
        successMessage.style.display = "block";
    }
    else if(from === "celsius" && to === "kelvin"){

        resultValueTemperature = temperature + 273.15;
        resultValue.textContent = resultValueTemperature.toFixed(2) + " K";
        successMessage.style.display = "block";
    }
    else  if(from === "kelvin" && to === "celsius"){

        resultValueTemperature =temperature - 273.15;
        resultValue.textContent = resultValueTemperature.toFixed(2) + " °C"
        successMessage.style.display = "block";
    }
    else if(from === "fahrenheit" && to === "kelvin"){

        resultValueTemperature = (temperature -32) *5/9 + 273.15;
        resultValue.textContent = resultValueTemperature.toFixed(2) + " K"
        successMessage.style.display = "block";
    }
    else if(from === "kelvin" && to === "fahrenheit"){

          resultValueTemperature = (temperature - 273.15) * 9/5 +32;
          resultValue.textContent = resultValueTemperature.toFixed(2) + "°F";
          successMessage.style.display = "block";
    
    }else if(from === to){

        resultValue.textContent = temperature + "° " + from;
        successMessage.style.display = "block";
    }
});

resetBtn.addEventListener("click",()=>{
 
    temperatureInput.value = "";
    fromUnit.value = "celsius";
    toUnit.value = "fahrenheit";
    resultValue.textContent = "Converted Temperature";
    resultValue.style.color = "black";
    successMessage.style.display = "none";
});

temperatureInput.addEventListener("keydown",(event)=>{
    
    if(event.key === "Enter"){

         convertbtn.click();
    }
});