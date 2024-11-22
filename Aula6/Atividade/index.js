const { Animal } = require('./Animal');
const { Mamifero } = require('./Manifero');
const { Ave } = require('./Ave');

let a1 = new Animal('Joel', 2);
let mamifero1 = new Mamifero('cachorro', 2, "curto", "terra");
let ave1 = new Ave("galinha", 3, "pequeno", "baixo");



// a1.getInfo();
// a1.emitirSom();

mamifero1.getInfo();
mamifero1.emitir();

ave1.getInfo();
ave1.emitirSom();
