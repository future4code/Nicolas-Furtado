const criarTarefa = () => {
  const tarefa = document.getElementById("tarefa").value;
  if (tarefa != null && tarefa != "") {
    const dia = document.getElementById("dia").value;
    const elemento = document.createElement("div");
    elemento.onclick = () => {
      elemento.style.textDecoration = "line-through";
    };
    elemento.appendChild(document.createTextNode(tarefa));
    switch (dia) {
      case "segunda":
        document.querySelector("#" + dia).appendChild(elemento);
        break;
      case "terca":
        document.querySelector("#" + dia).appendChild(elemento);
        break;
      case "quarta":
        document.querySelector("#" + dia).appendChild(elemento);
        break;
      case "quinta":
        document.querySelector("#" + dia).appendChild(elemento);
        break;
      case "sexta":
        document.querySelector("#" + dia).appendChild(elemento);
        break;
      case "sabado":
        document.querySelector("#" + dia).appendChild(elemento);
        break;
      case "domingo":
        document.querySelector("#" + dia).appendChild(elemento);
        break;
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
