import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const naipes = [
  { symbol: '♠', color: 'black' },
  { symbol: '♥', color: 'red' },
  { symbol: '♦', color: 'red' },
  { symbol: '♣', color: 'black' }
];

const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function generadorDeNaipes() {
  const palo = naipes[Math.floor(Math.random() * naipes.length)];
  const valorSeleccionado = valores[Math.floor(Math.random() * valores.length)];

  document.getElementById("paloSuperior").textContent = palo.symbol;
  document.getElementById("valor").textContent = valorSeleccionado;
  document.getElementById("paloInferior").textContent = palo.symbol;

  document.getElementById("paloSuperior").style.color = palo.color;
  document.getElementById("valor").style.color = palo.color;
  document.getElementById("paloInferior").style.color = palo.color;

}
  window.onload = generadorDeNaipes;
