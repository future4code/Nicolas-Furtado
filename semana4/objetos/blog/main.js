let posts = [];
if (document.cookie != "") {
  posts = JSON.parse(document.cookie);
}

const criarPost = () => {
  const post = {
    imagem: "",
    titulo: "",
    autor: "",
    conteudo: "",
  };
  post.titulo = document.querySelector("#titulo-post").value;
  post.autor = document.querySelector("#autor-post").value;
  post.conteudo = document.querySelector("#conteudo-post").value;
  post.imagem = document.querySelector("#imagem-post").value;
  const imagem = document.createElement("img");
  imagem.src = post.imagem;

  if (
    post.titulo != "" &&
    post.autor != "" &&
    post.conteudo != "" &&
    post.imagem != ""
  ) {
    document.querySelector("#conteudo-post").value = "";
    document.querySelector("#autor-post").value = "";
    document.querySelector("#titulo-post").value = "";
    document.querySelector("#imagem-post").value = "";
    posts.push(post);

    imagem.onerror = () => {
      alert("Link inválido");
      posts.splice(posts.length - 1, 1);
      document.querySelector("#conteudo-post").value = post.conteudo;
      document.querySelector("#autor-post").value = post.autor;
      document.querySelector("#titulo-post").value = post.titulo;
      document.querySelector("#imagem-post").value = post.imagem;
    };
  } else {
    alert("Preencha todos os campos");
  }
  document.cookie = JSON.stringify(posts);
};

const renderizarPosts = () => {
  posts = JSON.parse(document.cookie);
  for (post of posts) {
    document.querySelector("#container-de-posts").innerHTML += `
      <div id='post'>
        <img src ='${post.imagem}'>
        <h4>${post.titulo}</h4>
        <p>${post.conteudo}</p>
        <span>autor:${post.autor}</span>
      </div>
    `;
  }
};
