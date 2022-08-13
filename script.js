function ativarHora() {
  const texto = document.getElementById("texto-hora");
  const imagem = document.getElementsByClassName("imagem")[0];
  const date = new Date();
  const hora = date.getHours();
  const minutos = date.getMinutes();
  let saudacao = "Olá, ";
  let emoji = "🌞";

  const horaManual = document.getElementById("horaManual").value;

    if (hora >= 0 && hora < 12 || horaManual >= '00:00' && horaManual < '11:59') {
      saudacao = "Bom dia,";
      emoji = "🌞";
      imagem.src = "img/morning.png";
      document.body.style.backgroundImage = "url('img/sky_blue.webp')";
    } else if (hora >= 12 && hora <= 18) {
      saudacao = "Boa tarde,";
      emoji = "🌇";
      imagem.src = "img/afternoon.png";
      document.body.style.backgroundImage = "url('img/sky_orange.webp')";
    } else {
      emoji = "🌜";
      saudacao = "Boa noite,";
      imagem.src = "img/night.png";
      document.body.style.backgroundImage = "url('img/sky_night.png')";
    }
    texto.innerHTML = `${saudacao} agora são ${hora}h${minutos} minutos. ${emoji}`;
}

ativarHora();
