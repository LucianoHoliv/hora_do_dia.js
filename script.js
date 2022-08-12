function ativarHora() {
  const texto = document.getElementById("texto-hora");
  const imagem = document.getElementsByClassName("imagem")[0];
  const date = new Date();
  const hora = date.getHours() + 'h' + date.getMinutes();
  let saudacao = "Olá, ";
  let emoji = '🌞'

  if (hora >= 0 && hora < 12) {
    saudacao = "Bom dia,";
    emoji = '🌞';
    imagem.src = "img/good_morning.jpg";
    document.body.style.backgroundImage = "url(' img/sky_blue.webp')"
  } else if (hora >= 12 && hora <= 18) {
    saudacao = "Boa tarde,";
    emoji = '🌇'
    imagem.src = "img/good_afternoon.jpg";
    document.body.style.backgroundImage = "url('/img/sky_orange.webp')";
  } else {
    emoji = '🌜'
    saudacao = "Boa noite,";
    imagem.src = "img/good_night.webp";
    document.body.style.backgroundImage = "url('/img/sky_night.jpg')";
  }

  texto.innerHTML = `${saudacao} agora são ${hora}. ${emoji}`;
}

ativarHora();
