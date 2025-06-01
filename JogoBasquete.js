

var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');

// Bola
var bola = {
    x: 100,
    y: canvas.height - 30,
    raio: 20,
    movendo: false,
    velocidadeY: -15
};

// Cesto
var cesto = {
    x: canvas.width - 150,
    y: 200,
    largura: 100,
    altura: 10
};

// Botões
var botaoLancar = document.createElement('button');
botaoLancar.innerHTML = "Lançar";
document.body.appendChild(botaoLancar);

var botaoReiniciar = document.createElement('button');
botaoReiniciar.innerHTML = "Reiniciar";
document.body.appendChild(botaoReiniciar);

botaoLancar.onclick = function() {
    bola.movendo = true;
};

botaoReiniciar.onclick = function() {
    bola.x = 100;
    bola.y = canvas.height - 30;
    bola.movendo = false;
    bola.velocidadeY = -15;
};

// Loop de animação
function desenhar() {
    // Fundo
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Cesto
    ctx.fillStyle = 'green';
    ctx.fillRect(cesto.x, cesto.y, cesto.largura, cesto.altura);

    // Bola
    ctx.beginPath();
    ctx.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();

    // Movimento da bola
    if (bola.movendo) {
        bola.x += 5;
        bola.y += bola.velocidadeY;
        bola.velocidadeY += 1; // Gravidade

        if (bola.y >= canvas.height - 30) {
            bola.movendo = false;
            bola.velocidadeY = -15;
        }
    }

    requestAnimationFrame(desenhar);
}

desenhar();