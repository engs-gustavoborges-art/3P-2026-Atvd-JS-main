const input = document.getElementById("inputItem");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizar() {
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarefa.texto;

    if (tarefa.concluido) {
      span.classList.add("concluido");
    }
    
    span.addEventListener("click", () => {
      tarefas[index].concluido = !tarefas[index].concluido;
      salvar();
      renderizar();
    });

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";

    btnRemover.addEventListener("click", () => {
      tarefas.splice(index, 1);
      salvar();
      renderizar();
    });

    li.appendChild(span);
    li.appendChild(btnRemover);
    lista.appendChild(li);
  });
}

function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
botao.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") return;

  tarefas.push({
    texto: texto,
    concluido: false
  });

  input.value = "";
  salvar();
  renderizar();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    botao.click();
  }
});


renderizar();