const input = document.getElementById("inputTexto");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {
  const texto = input.value.trim();

  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
    input.value = "";
    input.focus();
  }
});