/* Faça um programa que pergunte ao usuário dois números. Em seguida, 
faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que o segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: A resposta (true ou false) vai depender dos números inseridos
 e do resultado das operações. As respostas colocadas acima são apenas exemplos! */

 let primeiroNumero = Number(prompt('Por favor digite um número: '))
 let segundoNumero = Number(prompt('Por favor outro um número: '))
 console.log(primeiroNumero, segundoNumero)

 // EX A 
 const comparacao1 = primeiroNumero > segundoNumero

 console.log(`O primeiro numero é maior que o segundo?
 ${comparacao1}`)

 //EX B

 const comparacao2 = primeiroNumero === segundoNumero

 console.log(`O primeiro numero é igual ao segundo
 ${comparacao2}`)

 //EX C 

 const comparacao3 = primeiroNumero % segundoNumero === 0
 

 console.log(`O primeiro número é divisível pelo segundo? ${comparacao3}`)
 


 //EX D

 const comparacao4 = segundoNumero % primeiroNumero === 0



 console.log(`O segundo numero é divisível pelo primeiro? ${comparacao4}`)

 


