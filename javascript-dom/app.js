const BMI = document.getElementById('bmi');
const weight = document.getElementById('weight'); 
const height = document.getElementById('height');


console.log(weight);
const calculateBMI = () => {
    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value);

    if (!weightValue || !heightValue) {
        BMI.value = "Invalid input";
        return;
    }

    const bmiValue = weightValue / (heightValue * heightValue);
    BMI.value = bmiValue.toFixed(2); // Round to 2 decimal places

    console.log(BMI.value);
};

let feet = document.getElementById('feet');
console.log(feet,"feet")

if(feet){
    height.innerHTML = ` <input type="text" id="ft" placeholder="ft" class="w-[50%] border p-2 mb-4 outline-none rounded-md focus:ring-2 foucus:ring-voilet-500 focus:outline-none">
    <input type="text" id="inch" placeholder="inch" class="w-[50%] border p-2 mb-4 outline-none rounded-md focus:ring-2 foucus:ring-voilet-500 focus:outline-none">`
}


function covertTomts(ft,inch){
const meter = (ft*0.3048) + (inch*0.0254);
return meter;
}

function covertCentermeterToMeter(cm){
    const meter = cm/100;
    return meter;
}