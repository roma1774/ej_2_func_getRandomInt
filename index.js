// index.js
const faker = require('faker')

const total = 1000    // wtf john??



for (var i = 0; i < total; i++) {
  let telephone = telephoneGenerator()
  //console.log('Se generó el teléfono: ' + telephone.so.version);
  // llamar a la función generadora
  console.log('Se genera procesador: ' + telephone.procesador.tipo);
}

/**
* telephoneGenerator
* @return telephone
*/
function telephoneGenerator() {
  const marca = faker.company.companyName()
  const modelo = faker.hacker.adjective()
  const so = {
    version : faker.random.number(),
    kernel : faker.internet.mac()
  }
  const imei = faker.random.number() + '' + faker.random.number()
  const memoria = faker.random.number() // en mb
  const procesador = {
    marca : faker.company.companyName(),
    tipo : getProcessor(),
    velocidad: faker.random.number()
  }
  const almacenamiento = {
    interno: faker.random.number(),
    externo: faker.random.number()
  }
  const precio = 0  // en usd
  const fabricacion = {
    anio: faker.date.past(), // todo: parse year
    pais: faker.address.country()
  }

  return {
    marca, modelo, so, imei, memoria, procesador, almacenamiento, precio, fabricacion
  }
}

function getProcessor() {
   const processors = ['arm', 'intel']
   const index = getRandomInt()
   return processors[index]
 }
function getRandomInt(){
   var x = Math.floor((Math.random()*2)+1);
   if(x == 2){
	x = x - 2;	    
   }
   return x;
} 
//var valor = getRandomInt();
//console.log(valor);
//var valor2 = getRandomInt();
//console.log(valor2);
//var valor3 = getRandomInt();
//console.log(valor3);
