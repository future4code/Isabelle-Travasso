let comidasFavoritas = ["strogonoff", "Nhoque","Lasanha","Hamburguer","Comida Japonesa"];
let suaComidaFavorita;

console.log( comidasFavoritas);

console.log("Essas são as minhas comidas preferidas:");
console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

suaComidaFavorita = prompt("Vamos fazer diferente, vamos trocar minha segunda comida favorita pela sua... Então, qual a sua comida favorita?");

console.log("Essas são as minhas comidas preferidas:");

comidasFavoritas[1] = suaComidaFavorita;

console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);