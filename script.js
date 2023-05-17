// Prática guiada - Aula de Arrays
// Criação de Arrays

const listaItalia = ["Marche","Puglia","Calabria"]
const listaNumeros = [4,10,36]
const listaMista = ["Palmeiras",11,true]
const unico = [53]
const vazio = []

// Observando os Arrays 

console.log(listaItalia.length);
console.log(listaItalia[3]);
console.log(listaItalia[2]);
console.log(listaMista.includes("Palmeiras"));
console.log(listaMista.includes("palmeiras"));
console.log(listaMista.includes(11));
console.log(listaMista.includes("11"));
console.log(listaMista.includes(true));
console.log(listaMista.includes("true"));
// atenção ao utilizar o includes, devemos considerar o formato, 11 é diferente de "11", assim como true é diferente de "true". String compara com string e o texto precisa bater maiúsculas e minúsculas, número com número e boolean com boolean.
console.log(unico[0]);
console.log(unico.length);

// extras Leonardo
console.log(listaItalia.includes("Puglia"));
console.log(listaItalia.includes("Lombardia"));

// Manipulação de Arrays

// const listaItalia2 = listaItalia
const listaItalia2 = listaItalia.slice()
listaItalia2.push("Toscana")
console.log("Original:   ",listaItalia);
console.log("Cópia:      ",listaItalia2);

listaItalia2.splice(2, 2)
console.log("Original:   ",listaItalia);
console.log("Cópia final:",listaItalia2);

// extras Leonardo

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"];
console.log(letras);
// índices (i)   0    1    2    3    4    5    6    7
letras.splice(2, 1); //removendo, a partir do atual índice 2, 1 elemento
//    letras = ["A", "B", "D", "E", "F", "G", "H"];
// índices (i)   0    1    2    3    4    5    6  
console.log(letras);

letras.splice(3, 2); //removendo, a partir do atual índice 3, 2 elementos
//    letras = ["A", "B", "D", "G", "H"];
// índices (i)   0    1    2    3    4 
console.log(letras);

const nome = "Alex";
console.log(nome.length) //imprime 4
console.log(nome[2]); //imprime "e"
console.log(nome[0]); //imprime "A"
console.log(nome.includes("e")); // imprime true
console.log(nome.includes("a")); // imprime false

// Exercício de fixação

// Abaixo os itens 1 e 2
const array1 = [2,9,11,15,23,45,87,99]
const array2 = array1.slice()
console.log("Array 2 inicial:  ",array2);

// abaixo o item 3
array2.pop()
console.log("a) Remove último: ",array2);
array2.push(6)
console.log("b) Add 6 no final:",array2);
array2.splice(2,1)
console.log("c) Remove o i2:   ",array2);

console.log("d) Array 1:",array1);
console.log("d) Array 2:",array2);

// Após o final desta aula, realizei abaixo simulações com outros métodos de Arrays

const numeros = [1, 2, 3, 4, 5, 6];

numeros.unshift(0);
console.log(numeros) //imprime [0, 1, 2, 3, 4, 5, 6];

numeros.shift();
console.log(numeros) //imprime [1, 2, 3, 4, 5, 6];

const fraseQuebrada = ["Olá", "tudo", "bem", "por aí?"];
const novaFrase = fraseQuebrada.join();
console.log(novaFrase);
//imprime 'Olá,tudo,bem,por aí?'

const novaFrase2 = fraseQuebrada.join(" ");
console.log(novaFrase2);
// espaço em branco passado entre caracteres
//imprime 'Olá tudo bem por aí?'

//Observação importante sobre o join(): Por padrão, o método join separa os itens do array com uma vírgula. Por esse motivo no primeiro exemplo acima, o resultado no console.log mostra as vírgulas. Já no segundo exemplo, quando inserimos um espaço entre os caracteres, as vírgulas desaparecem do console.

const seriesBoas = ["The Sopranos", "Breaking Bad", "A Grande Família"];
const indiceGrandeFamilia = seriesBoas.indexOf("A Grande Família");
console.log(indiceGrandeFamilia); 
//imprime 2 pois a posição da série chamada é o índice 2

let reverteOrdem = [1, 5, 10, 15, 20, 25]
console.log(reverteOrdem.reverse()); // vai imprimir [25, 20, 15, 10, 5, 1], exatamente o inverso do Array original.

const fruits = ['banana', 'maçã', 'laranja', 'abacaxi'];
console.log(fruits.sort()); // vai imprimir ['abacaxi', 'banana', 'laranja', 'maçã'], em ordem alfabética.

const organiza = [02, 93, 06, 44, 68, 16, 25, 09, 37, 03]
// const organiza = ["44", "68", "5", "10", "25", "2"]

console.log(organiza.sort()) 
console.log(organiza.sort((a,b)=>a-b)) 

// ao aplicar o sort() puro para organizar os números em ordem crescente, deu o resultado em que os números até 9 são lidos como se fossem 10, 20, 30 e na ordenação ficam assim: [16, 2, 25, 3, 37, 44, 6, 68, 9, 93]. Segundo uma documentação enviada pela Andréa, diz que em uma ordenação numérica como a que fizemos, apesar de 9 vir antes de 80, na ordenação Unicode os números são convertidos para texto, então acaba que "80" vêm antes de "9". 

// sort((a,b)=>a-b))
// Um dos alunos já com alguns conhecimentos em Javascript enviou no chat o código acima, e ao utilizá-lo no último console log acima, a ordenação numérica enfim foi obtida na ordem decrescente que era inicialmente esperada. O desafio é aprofundar esse assunto pra poder utilizar esse método sort() mais adiante, principalmente aplicando essa regra que de fato ordena os números de forma crescente sem o problema apresentado quando usamos o sort() de forma pura.

// Abaixo mais testes em Arrays após resolver alguns exercícios do projeto Lista Javascript, que quero deixar documentado aqui na aula de Arrays

let corFavorita1 = "Azul"
let corFavorita2 = "Amarelo"
let corFavorita3 = "Vermelho"

let coresFavoritas = [corFavorita1,corFavorita2,corFavorita3]
    
console.log(coresFavoritas);
// O exemplo acima, que veio do Exercício 5 do projeto Lista Javascript era pra criar 3 prompts perguntando as cores favoritas, e o dado inserido pelo usuário viria como String, portanto simulei acima os dados armazenados como strings como se tivessem sido inputados pelo usuário. O ponto principal desse exercício foi a criação de uma variável no formato de Arrays, utilizando os colchetes, e daí sim o console.log fará a impressão de um Array, caso contrário teríamos uma impressão de Strings comuns de forma separada.

let array = [1, 2, 3, 4, 5]

function retornaPrimeiroElemento(array) {
   
    // console.log(array[0])
    return array[0]
}
// retornaPrimeiroElemento(array)
console.log(retornaPrimeiroElemento(array))
// aqui no exemplo acima, trazer o primeiro elemento é simples, basta sinalizar que queremos o índice ZERO [0]. Preferi aproveitar o exercício 9 do projeto Lista Javascript o qual está estruturado como função, e foi até bom para treinar um pouco mais funções. Detalhe que criei o Array como variável global, ou seja, fora da função, para que eu pudesse utilizar os dados nos demais testes realizados abaixo. Outro ponto importante é que neste teste acima, optei por manter o return que chama o índice zero, e para a impressão no Console usei o console.log, chamei a função e passei o array como argumento. Já no teste log abaixo, eu optei por fazer o console.log dentro da função, e fora dela eu chamei apenas a função (obviamente sem o console.log), e coloquei o array como argumento pra puxar os dados. 

function retornaUltimoElemento(array) {
  
    console.log(array[array.length-1])
    // return array[array.length-1]
}
// console.log(retornaUltimoElemento(array))
retornaUltimoElemento(array)
// no exemplo acima, utilizamos a sintaxe nomeDoArray[nomeDoArray.length-1] para descobrir o último elemento do Array. Ver no final deste script um exemplo fora do modelo de função contendo toda a explicação de como utilizar esse método. 


function trocaPrimeiroEUltimo(array) {
    
    let primeiroElemento = array[0]
    let ultimoElemento = array[array.length -1]

    array[0] = ultimoElemento
    array[array.length -1] = primeiroElemento

    console.log(array)
}
trocaPrimeiroEUltimo(array)
// o exemplo acima, baseado no exercício 11 do projeto Lista Javascript, é uma demonstração mais avançada de como podemos solucionar certos problemas. Primeiro armazenamos em duas variáveis o primeiro e o último elemento do Array, como já havíamos feito nos exercícios 9 e 10, e em seguida dissemos que o elemento do índice zero era igual a variável ultimoElemento, e que o último elemento do Array era igual a variável primeiroElemenro, operação a qual inverteu os valores para a sequência do programa. Por fim, ao darmos o console.log, o resultado foi [5, 2, 3, 4, 1].


// Para descobrir o último elemento de um array em JavaScript, você pode usar o índice -1 para acessar o último elemento do array. Aqui está um exemplo:

const arrayExemplo = [1, 2, 3, 4, 5, 6, 7];
const ultimoElementoExemplo = arrayExemplo[arrayExemplo.length - 1];

console.log(ultimoElementoExemplo); // a saída no console será 7

// Neste exemplo, o array contém os números de 1 a 7. A expressão array.length retorna o tamanho do array, e subtraindo 1 obtemos o índice do último elemento. A atribuição array[array.length - 1] retorna o valor do último elemento e é armazenado na variável ultimoElementoExemplo. 
// Portanto, ultimoElementoExemplo terá o valor 7, que é o último elemento do array. Lembre-se de que o índice do último elemento em um array é sempre NomeDoArray.length - 1. Isso ocorre porque os índices dos arrays em JavaScript começam em 0, então o primeiro elemento tem índice 0, o segundo tem índice 1, e assim por diante.
