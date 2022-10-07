// ES6 
// ============ Classes ============
//=============================================== REESTRUTURAÇÃO DE OBJETO ===============================================
const adress = {    //objeto comum. 
    street: 'Rua. 34',
    city: '',
    country: ''
};
// const street = adress.street; // armazenando na constante o valor de street.
// const city = adress.city; // armazenando na constante o valor de city.
// const country = adress.country; // armazenando na constante o valor de country.
const {street,  city, country} = adress; // shorthand - armazenando o valor de todos os valores de uma vez só. 

//=============================================== MUDANDO O NOME DA CONSTANTE DO OBJETO ===============================================


const{ street: rua} = adress; //extrai a propriedade e altera o nome, ':' simbolo chave.
console.log(rua)

//=============================================== CLONANDO OBJETOS ===============================================

const one = { name: "Aryel" }; // armazenando o 1º objeto na constante. 
const two = { job: "Developer" };  // armazenando o 2º objeto na constante. 

const clone = {...one}; // clona o objeto 'one'

//=============================================== COMBINANDO OBJETOS ===============================================
const first = { name: "Aryel" }; // armazenando o 1º objeto na constante. 
const second = { job: "Developer" }; // armazenando o 2º objeto na constante.

const combined = { ...first, ...second} // combinação do 1º com o 2º || '...' simbolo chave 
const combinedTwo = { ...first, ...second, location:"Brazil!"} // adicionando uma propriedade qualquer na constante.
console.log(combinedTwo)

//=============================================== HERANÇA DE OBJETO ===============================================

class Person {       //class  => pois o objeto possui mais de um método. UpperCase.
    constructor(name){     //constructor => metodo p/ criar e inicializar um objeto criado a partir de uma classe.
    this.name = name;   //this => sempre retorna uma referência ao objeto criado.
  }
  walk() {  // walk => método 
    console.log("Walk");
  }}
  class Teacher extends Person{     // extends => palavra chave da herança | classe Teacher herda os métodos da classe Person.
    constructor(name, degree){     // referenciando o objeto 'name' da classe Person e criando o objeto 'degree' .
        super(name);               // super => palavra-chave para referencia do objeto da classe herdada (pai).
        this.degree = degree;      // retornando a referência do objeto degree. 
    }
    teach(){    // teach => método
      console.log("Teach!");
    }
  }
  const teacher = new Teacher ('Aryel', "Mestre")   // new => cria um objeto vazio e seta o valor do 'this' para o novo objeto. || referenciando o objeto name e degree.
  
  console.log(teacher) 

  //=============================================== MODULARIDADE ===============================================
    //Modularidade divide o código em múltiplos arquivos, chamasse cada arquivo de 'módulo'.
    // export/import --> para tornar um arquivo visível, temos para isso que exportar a classe e importar.
    // se usa export no prefixo da classe para exporta-la.
    // se usa import no prefixo da classe para importa-la.
    // export class Teacher extends Person{}.
    // import class Teacher extends Person.
    //em caso de 2 classes com herança, faz-se a importação do módulo antes de exporta-la. exp:
    // import {Person} from '.Person';
    // export class Teacher extends Person.
    // no index.js se importa o módulo cujo os outros já estejam referenciado.
    // default --> palavra-chave depois da palavra export, define como padrão da importação, assim no módulo de importação não precisa colocar chaves entre o nome da importação. exp:
    //export defalt classe Teacher extends Person{} ---- *Módulo de exportação*
    //import Teacher from "./teacher"; --- *Módulo de importação*