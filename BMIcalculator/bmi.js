const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);

    const result = document.querySelector('#result');
    const guide = document.querySelector('#Weight-guide');

    if (height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `plase give a valid height ${height}`;
    }

    else if (weight === '' || height < 0 || isNaN(weight)){
        result.innerHTML = `plase give a valid Weight ${weight}`;
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`

    if (bmi < 18.5) {
        guide.innerHTML = "It is underweight";
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        guide.innerHTML = "It is normal";
    } 
    else {
        guide.innerHTML = "It is overweight";
    }
}

})