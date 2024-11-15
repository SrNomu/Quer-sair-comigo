function sim() {
    alert("Você aceitou sair comigo! :)");
    // Redireciona para o URL após clicar no SIM
    location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
}

function desvia(btn) {
    // Muda a posição do botão "não" ao passar o mouse sobre ele
    btn.style.position = 'absolute';
    btn.style.top = geraPosicao(0, 90); // Ajuste para o eixo vertical
    btn.style.left = geraPosicao(0, 90); // Ajuste para o eixo horizontal
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
