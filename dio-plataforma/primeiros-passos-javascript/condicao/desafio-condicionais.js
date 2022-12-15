/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol; 
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/
let precoEtanol = 3.3; /* preço do etanol na Paraíba */
let gasolinaPreco = 6; /* preço da gasolina na Paraíba */
const KmPorLitro = 10;
let distanciaKm = 100;
let tipoCombustível = "Gasolina";
let litrosConsumidos = distanciaKm / KmPorLitro;

if (tipoCombustível === "Etanol") {
  let valorGasto = litrosConsumidos * precoEtanol;
  console.log("O valor do Etanol é de R$", valorGasto);
} else {
  let valorGasto = litrosConsumidos * gasolinaPreco;
  console.log("O valor da Gasolina é de R$", valorGasto);
}
