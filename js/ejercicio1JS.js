document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.maxWidth = "600px";
  container.style.margin = "0 auto";
  container.style.textAlign = "center";
  container.style.fontFamily = "Arial, sans-serif";

  const logo = document.createElement("div");
  logo.innerText = "YOUR LOGO";
  logo.style.border = "1px solid black";
  logo.style.display = "inline-block";
  logo.style.padding = "10px 20px";
  logo.style.margin = "20px auto";
  container.appendChild(logo);

  const topImage = document.createElement("div");
  topImage.style.backgroundImage = "url('../recursos/imagenes/textura-grunge-oscura_1048-4055.avif')";
  topImage.style.height = "250px";
  topImage.style.backgroundSize = "cover";
  topImage.style.backgroundPosition = "center";
  topImage.style.position = "relative";

  const styleText = document.createElement("h1");
  styleText.innerText = "STYLE";
  styleText.style.color = "white";
  styleText.style.position = "absolute";
  styleText.style.bottom = "20px";
  styleText.style.left = "50%";
  styleText.style.transform = "translateX(-50%)";
  styleText.style.fontSize = "40px";
  topImage.appendChild(styleText);

  container.appendChild(topImage);


  const oferta = document.createElement("div");
  oferta.style.padding = "30px 20px";
  oferta.innerHTML = `
      <h2>UP TO 50%OFF</h2>
      <p>Lorem ipsum dolor amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    `;

  const btnShop = document.createElement("button");
  btnShop.innerText = "SHOP NOW";
  btnShop.style.backgroundColor = "#f8a502";
  btnShop.style.border = "none";
  btnShop.style.color = "white";
  btnShop.style.padding = "10px 20px";
  btnShop.style.fontWeight = "bold";
  btnShop.style.cursor = "pointer";

  oferta.appendChild(btnShop);
  container.appendChild(oferta);


  const inferior = document.createElement("div");
  inferior.style.display = "flex";
  inferior.style.flexWrap = "wrap";
  inferior.style.justifyContent = "space-between";

  const imgHombre = document.createElement("div");
  imgHombre.style.flex = "1";
  imgHombre.style.minWidth = "250px";
  imgHombre.style.backgroundImage = "url('../recursos/imagenes/images.jpeg')";
  imgHombre.style.backgroundSize = "cover";
  imgHombre.style.backgroundPosition = "center";
  imgHombre.style.height = "300px";


  const textoDerecha = document.createElement("div");
  textoDerecha.style.flex = "1";
  textoDerecha.style.minWidth = "250px";
  textoDerecha.style.backgroundColor = "#f8a502";
  textoDerecha.style.color = "white";
  textoDerecha.style.padding = "30px";

  const titleNew = document.createElement("h2");
  titleNew.innerText = "NEW STYLE";
  const para = document.createElement("p");
  para.innerText = "Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor.";
  const btnBuy = document.createElement("button");
  btnBuy.innerText = "BUY NOW";
  btnBuy.style.backgroundColor = "black";
  btnBuy.style.color = "#f8a502";
  btnBuy.style.border = "none";
  btnBuy.style.padding = "10px 20px";
  btnBuy.style.fontWeight = "bold";
  btnBuy.style.cursor = "pointer";

  textoDerecha.appendChild(titleNew);
  textoDerecha.appendChild(para);
  textoDerecha.appendChild(btnBuy);

  inferior.appendChild(imgHombre);
  inferior.appendChild(textoDerecha);

  container.appendChild(inferior);

  body.appendChild(container);
});
