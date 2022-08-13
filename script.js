function ativarHora() {
  const texto = document.getElementById("texto-hora");
  const imagem = document.getElementsByClassName("imagem")[0];
  const date = new Date();
  let hora = date.getHours();
  const minutos = date.getMinutes();
  let saudacao = "Olá, ";
  let emoji = "🌞";

  const horaManual = document.getElementById("horaManual").value;
  if (horaManual.length != 0) {
    hora = horaManual;
  }

  if ((hora >= 0 && hora < 12) || (hora >= "00:00" && hora < "12:00")) {
    saudacao = "Bom dia,";
    emoji = "🌞";
    imagem.src = "img/morning.png";
    document.body.style.backgroundImage = "url('img/sky_blue.webp')";
  } else if (
    (hora >= 12 && hora <= 18) ||
    (hora >= "12:00" && hora <= "18:59")
  ) {
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

  //Validação para TEXTO de resultado
  if (horaManual.length == 0) {
    texto.innerHTML = `${saudacao} agora são ${hora}h${minutos} minutos. ${emoji}`;
  } else {
    texto.innerHTML = `${saudacao} você informou ${horaManual}hrs. ${emoji}`;
  }
}

ativarHora();

const btnAnimation = document.getElementsByClassName("btn-hora")[0];
const container = document.getElementsByClassName("container")[0];

console.log(container);

function refresh() {
  container.classList.add("ativo");

  setTimeout(function () {
    container.classList.remove("ativo");
  }, 500);
}

btnAnimation.addEventListener("click", refresh);
