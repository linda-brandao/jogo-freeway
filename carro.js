// código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 100, 155, 215, 270, 320];
let velocidadeCarros = [2, 3.5, 5, 4, 6, 3];
let comprimentoCarro = 40;
let alturaCarro = 30;

function mostraCarro() {
  for (let i = 0; i < imagemDosCarros.length; i++) {
    image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);   
  }
}

function movimentaCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro) {
  return xCarro < -40;
}





