/* ### Parte 1
Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de (vinte é maior que cinquenta)

d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

Exemplo:

```jsx
const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);
/*false, porque 50 não é maior que 90, consequentemente temos true && false,
que devolve false*/



// RESOLUCAO 



 /*
let A = 5

let B = 20

// a) 5 é maior que 20 e também é menor que 2;

const op1 = (5 > 20) && (5 < 2)

console.log(`O resultado é:  ${op1}`)

//b) 5 é igual a 5 ou é igual a “5”;

const op2 = (5 === 5) || (5 === '5')
console.log(`O resultado é:  ${op2}`)

//c) negação de (vinte é maior que cinquenta)

const op3 = !(20 > 50)
console.log(`O resultado é:  ${op3}`)

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

const op4 = !(20 >50 || (50 > 60))
console.log(`O resultado é:  ${op4}`) */

/*




Na aula passada começamos a implementar um sistema para o RH de uma empresa. 

Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor,
 recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário

Calcule:

1) O salário fixo mais o auxílio creche

2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.) */


  let salario = 2000


  // 1) O salário fixo mais o auxílio creche
  const auxilio = 91

  const op1 = salario + 91
  console.log(` O salário fixo mais o auxílio creche ficara: ${op1}`)



 // 2) Comissão de 10% sobre o total de vendas mensal

 const totalVendas = 5784.50
 const percentualComissao = 0.1
 const comissao = totalVendas * percentualComissao
 const comissaoSalario = op1 + comissao
 
 console.log(`A Comissão de 10% sobre o total de vendas mensal é de R$${comissao.toFixed(2)}, o salario atual ficará de ${comissaoSalario}`) 
  // tofixed(2) exibira 2 casas decimais
 //formatar o número como uma string com um número específico de casas decimais. exibir valores financeiros de forma claramente legível.

 
// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

salario = 2578.45
const descontoInss = salario * 0.05
const salarioComDesconto = salario - descontoInss


console.log(`O salário com desconto de 5% é de R$${salarioComDesconto.toFixed(2)}`)


//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.


// JANEIRO

let salarioJaneiro = 2000
const auxilioCreche = 91
let vendasJaneiro = 5784.50
const acrescimoComissao = 0.1
const descontoDoInss = 0.05

salarioJaneiro += auxilioCreche

let comissao1 = vendasJaneiro * acrescimoComissao 

salarioJaneiro += comissao1

let descontoInss1 = salarioJaneiro * descontoDoInss

salarioJaneiro -= descontoInss1

console.log(`O salário final de  Janeiro é R$${salarioJaneiro.toFixed(2)}`)


// FEVEREIRO

let salarioFevereiro = 2000
let vendasFevereiro = 3418.41

salarioFevereiro += auxilioCreche

let comissao2 = vendasFevereiro * acrescimoComissao

salarioFevereiro += comissao2

let descontoInss2 = salarioFevereiro * descontoDoInss
salarioFevereiro -= descontoInss2

console.log(`O salário final  de Fevereiro é R$${salarioFevereiro.toFixed(2)}`)


// MARÇO 

let salarioMarco = 2000
let vendasMarco = 4124.10

salarioMarco += auxilioCreche

let comissao3 = vendasMarco * acrescimoComissao

salarioMarco += comissao3

let descontoInss3 = salarioMarco * descontoDoInss

salarioMarco  -= descontoInss3

console.log(`O salário final  de Março é R$${salarioMarco.toFixed(2)}`)


// ABRIL 

let salarioAbril = 2000
let vendasAbril = 1874.00

salarioAbril += auxilioCreche

let comissao4 = vendasAbril * acrescimoComissao

salarioAbril += comissao4

let descontoInss4 = salarioAbril * descontoDoInss
salarioAbril -= descontoInss4

console.log(`O salário final  de Abril é R$${salarioAbril.toFixed(2)}`)



// MAIO

let salarioMaio = 2000
let vendasMaio = 7000

salarioMaio += auxilioCreche

let comissao5 = vendasMaio * acrescimoComissao

salarioMaio += comissao5

let descontoInss5 = salarioMaio * descontoDoInss
salarioMaio -= descontoInss5

console.log(`O salário final  de Maio é R$${salarioMaio.toFixed(2)}`)



// JUNHO

let salarioJunho = 2000
let vendasJunho = 9450

salarioJunho += auxilioCreche

let comissao6 = vendasJunho * acrescimoComissao

salarioJunho += comissao6

let descontoInss6 = salarioJunho * descontoDoInss

salarioJunho -= descontoInss5


console.log(`O salário final  de Junho é R$${salarioJunho.toFixed(2)}`)




// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//  (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados.
// Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.) */

let media = 6


let mediaSalarial = (salarioJaneiro + salarioFevereiro + salarioMarco + salarioAbril + salarioMaio + salarioJunho) / media

console.log(`A media salario dos ultimos seis meses é de  R$${mediaSalarial.toFixed(2)}`)
























