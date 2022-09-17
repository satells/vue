

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

  console.log(vue);

}


;