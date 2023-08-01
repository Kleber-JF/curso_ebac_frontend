const form = document.getElementById('form-numeros');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');

function comparacao (){
    if(numeroB.value > numeroA.value) {
        return true
    } else {
        return false
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    if(comparacao()) {
        document.querySelector('.success-msg').style.display = 'block';
        document.querySelector('.fail-msg').style.display = 'none';         

    } else {
        document.querySelector('.fail-msg').style.display = 'block';
        document.querySelector('.success-msg').style.display = 'none';        
    }
})

