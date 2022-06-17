const calculate = document.getElementById('calculate');
calculate.addEventListener('click',()=>{
    let Amount = document.getElementById('Amount').value;
    let Interest = document.getElementById('Interest').value;
    let total = (Amount * (Interest/100))
    document.getElementById('display').innerHTML =
    total;
}
);