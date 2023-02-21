import '../styles/index.css'

document.querySelector("button").addEventListener("click", () => {
  const message = prompt("Insira uma mensagem a ser inserida na tela: ")
  document.querySelector("#message").innerText = `Novo conteúdo de texto: ${message}`
})
