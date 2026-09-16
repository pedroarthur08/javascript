document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botaoTema');

  if (botao) {
    botao.addEventListener('click', () => {
      document.body.classList.toggle('tema-escuro');
      const estaEscuro = document.body.classList.contains('tema-escuro');
      botao.textContent = estaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro';
    });
  }
});
