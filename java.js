document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botaoTema');

  if (botao) {
    botao.addEventListener('click', () => {
      // Alterna a classe no body
      document.body.classList.toggle('tema-escuro');

      // Atualiza o texto do botão
      const estaEscuro = document.body.classList.contains('tema-escuro');
      botao.textContent = estaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro';
    });
  } else {
    console.error('O botão com id="botaoTema" não foi encontrado no HTML.');
  }
});
