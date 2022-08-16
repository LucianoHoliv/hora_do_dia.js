function ativarHora() {
  const texto = document.getElementById("texto-hora");
  const imagem = document.getElementsByClassName("imagem")[0];
  const date = new Date();
  let hora = date.getHours();
  let minutos = date.getMinutes();

  // Validação para incluir zero a esquerda e deixar a hora igual ao do input
  if (hora >= "0" && hora <= "9") {
    hora = `0${hora}`;
  }

  // Validação para incluir zero a esquerda e deixar o minuto igual ao do input
  if (minutos >= "0" && minutos <= "9") {
    minutos = `0${minutos}`;
  }

  let horaMin = `${hora}:${minutos}`;
  let saudacao = "Olá, ";
  let emoji = "🌞";

  const horaManual = document.getElementById("horaManual").value;
  if (horaManual.length != 0) {
    horaMin = horaManual;
  }

  if (horaMin >= "00:00" && horaMin <= "06:59") {
    saudacao = "Madrugouu";
    emoji = "🌚";
    imagem.src = "img/dawn.jpg";
    document.body.style.backgroundImage = "url('img/sky_dawn.jpg')";
  } else if (horaMin >= "07:00" && horaMin < "12:00") {
    saudacao = "Bom dia";
    emoji = "🌞";
    imagem.src = "img/morning.png";
    document.body.style.backgroundImage = "url('img/sky_blue.webp')";
  } else if (horaMin >= "12:00" && horaMin <= "18:59") {
    saudacao = "Boa tarde";
    emoji = "😎";
    imagem.src = "img/afternoon.png";
    document.body.style.backgroundImage = "url('img/sky_orange.webp')";
  } else {
    emoji = "🌔";
    saudacao = "Boa noite";
    imagem.src = "img/night.png";
    document.body.style.backgroundImage = "url('img/sky_night.png')";
  }

  //Validação para TEXTO de resultado
  if (horaManual.length == 0) {
    texto.innerHTML = `${saudacao}${emoji}<br>Agora são ${horaMin}hrs.`;
  } else {
    texto.innerHTML = `${saudacao}${emoji}<br>você informou ${horaManual}hrs.`;
  }
}

ativarHora();

function AnimaBtn() {
  const btnAnimation = document.getElementsByClassName("btn-hora")[0];
  const container = document.getElementsByClassName("container")[0];
  const horaManual = document.getElementById("horaManual");

  function refresh() {
    container.classList.add("ativo");

    setTimeout(function () {
      container.classList.remove("ativo");
    }, 500);
  }

  btnAnimation.addEventListener("click", refresh);
  horaManual.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      ativarHora();
      refresh();
    }
  });
}
AnimaBtn();
