const result = document.querySelector('.result h3 span')
const btn = document.querySelector('.button button')
const ageInp = document.querySelector('#age')
const heightInp = document.querySelector('#height')
const weightInp = document.querySelector('#weight')
const msg = document.querySelector('.msg p')
const labelMale = document.querySelector('#male-label')
const labelFemale = document.querySelector('#female-label')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    let heightInCm = heightInp.value;
    let weight = weightInp.value;
    let age = ageInp.value;
    let height = Math.pow((heightInCm/100),2);
    
    let bmi = (weight/height).toFixed(1)
    result.innerText = bmi;
    interpretBMI(bmi)
})

function interpretBMI(bmi)
{
    if(bmi<18.5)
    {
        msg.innerText = "Alert!! You are underweight.."
        msg.style.color = 'red'
        return
    }
    if(bmi<25)
    {
        msg.innerText = "Congratulations!! Your BMI is Normal...."
        msg.style.color = 'green'
        return
    }
    if(bmi<30)
    {
        msg.innerText = "Alert!! You are Over-weight.."
        msg.style.color = 'yellow'
        return
    }
    else{
        msg.innerText = "Alert!! You are obese.."
        msg.style.color = 'red'
        return
    }
}

// labelMale.addEventListener('click')