// código do ator

let yAtor = 365;
let xAtor = 85;
let velocidadeAtor = 5;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= velocidadeAtor;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
       yAtor += velocidadeAtor;     
    }
  }
}

function podeSeMover() {
  return yAtor < 365;
}

function verificaColisao() {
  for (let i = 0; i < imagemDosCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 365;
}

function incluiPlacar() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 28);
}

function marcaPonto() {
  if (yAtor < 18) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}