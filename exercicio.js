function Animal(tipo) {
    this.tipo = tipo;
}

function Vaca(tipo, habitat, dieta) {
    Animal.call(this,tipo);
    this.habitat = habitat;
    this.dieta = dieta;
    this.muge = function(){
        console.log(this.tipo + " faz MUUU")
    }
}

function Galinha(tipo, raca, cor) {
    Animal.call(this, tipo);
    this.raca = raca;
    this.cor = cor;
    this.cacareja = function(){
        console.log(this.tipo + " faz cocóricó")
    }
}

const vaca1 = new Vaca("vaca", "pasto", "herbivoro");
const galinha1 = new Galinha("galinha", "Caipira", "marrom");
const galinha2 = new Galinha("galo", "Sura", "branco");