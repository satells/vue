

window.onload=()=>{
  options={

    el: "#app",
    data: {
      produto: "doce de leite",
      produtos: ["laranja", "maça", "banana"],
      mensagem: "olá vue",
    },

  };

  const vue = new Vue(options);


  console.log(vue.produto);

  console.log(vue.mensagem);

  vue.mensagem="isto é reatividade";
  console.log(vue.mensagem);
  console.log(vue);

}


;