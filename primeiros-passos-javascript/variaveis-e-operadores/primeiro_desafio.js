/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem; 

Imprima no console o valor que será gasto para realizar esta viagem. */

let combustivelPreco = 6; /* preço da gasolina na Paraíba */
const KmPorLitro = 10;
let distanciaKm = 100;

let litrosConsumidos = distanciaKm / KmPorLitro;
let valorGasto = litrosConsumidos * combustivelPreco;
console.log(
  valorGasto.toFixed(2)
); /* toFIxed define quantas casas decimais depois da vírgula */
