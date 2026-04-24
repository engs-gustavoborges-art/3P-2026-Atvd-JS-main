document.getElementById("btnAdicionar").addEventListener("click", adicionarItem);

function adicionarItem() {
  const input = document.getElementById("inputItem");
  const texto = input.value.trim();

  if (texto === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  span.addEventListener("click", function () {
    span.classList.toggle("concluido");
  });

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";

  botaoRemover.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(botaoRemover);

  document.getElementById("lista").appendChild(li);

  input.value = "";
}