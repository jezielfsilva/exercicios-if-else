var name = "Jeziel Firmino da Silva";
var age = 33;
var birth = "setembro";
var brothers = ["Samuel", "Eliel", "Leiliane","Laudicéia", "Lidiane", "Luciene"];

/*  Exercícios: */

/*  1 - Criar uma condição que execute se idade seja
  maior do que 18 */

  if(age > 18) {
        console.log("Oba sou maior de idade!!!");
  }

/*  2 - Criar uma condição que execute se você for maior
  de idade E seu nome tenha mais de 5 letras */

  if(age > 18 && name.length > 5) {
      console.log("Meu nome é grande");
  }

/*  3 - Criar uma condição que execute se você fizer aniversário
  em Janeiro OU Dezembro */

  if(birth === "Janeiro" && "Dezembro") {
      console.log("mes errado");
  } else {
      console.log("o mes é setembro");
  }

/*  4 - Criar uma condição que execute se você tiver mais de 2 irmãos
  OU seu nome começe com a letra R */

  if(brothers.length > 2 || name[0] === "R") {
      console.log("Tenho 6 irmaos,a letra é J");
  }

/*  5 - Criar uma condição que execute se seu sobrenome tenha mais
  de 6 letras OU seu nome começe com a letra E */

/*  6 - Criar uma condição caso você tenha uma amigo que começe com a
  letra C */
