const criarTarefa = () => {
  const tarefa = document.getElementById("tarefa").value;
  if (tarefa != null && tarefa != "") {
    const dia = document.getElementById("dia").value;
    const elemento = document.createElement("div");
    elemento.onclick = () => {
      elemento.style.textDecoration = "line-through";
    };
    elemento.appendChild(document.createTextNode(tarefa));
    if(dia == "segunda" || dia == "terca" || dia == "quarta" || dia == "quinta" || dia == "sexta" || dia == "sabado" || dia == "domingo"){
      document.querySelector("#" + dia).appendChild(elemento);
    }
    document.querySelector("input").value = "";
  } else {
    alert("Coloque algum texto antes de adicionar!");
  }
};

const resetar = () => {
  const dias = [
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo",
  ];
  for (x of dias) {
    document.querySelector("#" + x).innerHTML = "";
  }
};
