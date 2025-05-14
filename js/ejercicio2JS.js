document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const container = document.createElement("div");
    container.style.maxWidth = "800px";
    container.style.margin = "0 auto";
    container.style.fontFamily = "Arial, sans-serif";
    container.style.color = "#333";

    const logo = document.createElement("h3");
    logo.style.textAlign = "center";
    logo.innerHTML = `<span style="color: #003366;">YOUR LOGO</span><br><span style="color: coral; font-weight: bold;">THE BLOG</span>`;
    container.appendChild(logo);

    const seccion1 = document.createElement("div");
    seccion1.style.position = "relative";
    seccion1.style.backgroundImage = "url('../recursos/imagenes/descarga.jpeg')";
    seccion1.style.backgroundSize = "cover";
    seccion1.style.backgroundPosition = "center";
    seccion1.style.height = "350px";
    seccion1.style.margin = "30px 0";

    const overlayTexto = document.createElement("div");
    overlayTexto.style.position = "absolute";
    overlayTexto.style.top = "50%";
    overlayTexto.style.right = "10%";
    overlayTexto.style.transform = "translateY(-50%)";
    overlayTexto.style.color = "#003366";
    overlayTexto.style.padding = "20px";
    overlayTexto.style.maxWidth = "300px";

    overlayTexto.innerHTML = `
  <h2>New Season<br>Fashion Trends</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
  <button style="padding: 10px 20px; background-color: #003366; color: white; border: none; cursor: pointer; border-radius:50px;">Shop Now</button>
`;

    seccion1.appendChild(overlayTexto);
    container.appendChild(seccion1);



    const hits = document.createElement("h2");
    hits.innerText = "Fashion Hits";
    hits.style.textAlign = "center";
    hits.style.color = "#003366";
    container.appendChild(hits);

    const cards = document.createElement("div");
    cards.style.display = "flex";
    cards.style.flexWrap = "wrap";
    cards.style.justifyContent = "space-between";
    cards.style.gap = "10px";

    const items = [
        { img: "../recursos/imagenes/images (1).jpeg", title: "Title" },
        { img: "../recursos/imagenes/descarga (1).jpeg", title: "Title" },
        { img: "../recursos/imagenes/descarga (2).jpeg", title: "Title" }
    ];

    items.forEach(item => {
        const card = document.createElement("div");
        card.style.flex = "1 1 250px";
        card.style.border = "1px solid #ddd";
        card.style.padding = "10px";
        card.style.boxSizing = "border-box";
        card.style.textAlign = "center";

        const img = document.createElement("img");
        img.src = item.img;
        img.style.width = "100%";
        img.style.height = "250px";
        img.style.objectFit = "cover";
        img.style.borderTopLeftRadius = "8px";
        img.style.borderTopRightRadius = "8px";;

        const h3 = document.createElement("h3");
        h3.innerText = item.title;

        const p = document.createElement("p");
        p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

        const btn = document.createElement("button");
        btn.innerText = "Read more";
        btn.style.padding = "10px 20px";
        btn.style.backgroundColor = "#003366";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.borderRadius = "50px";
        btn.style.cursor = "pointer";

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(btn);
        cards.appendChild(card);
    });

    container.appendChild(cards);


    const finalSeccion = document.createElement("div");
    finalSeccion.style.position = "relative";
    finalSeccion.style.marginTop = "40px";
    finalSeccion.style.height = "300px";
    finalSeccion.style.backgroundImage = "url('../recursos/imagenes/images (2).jpeg')";
    finalSeccion.style.backgroundSize = "cover";
    finalSeccion.style.backgroundPosition = "center";
    finalSeccion.style.borderRadius = "10px";

    const bloqueCoral = document.createElement("div");
    bloqueCoral.style.position = "absolute";
    bloqueCoral.style.left = "3%";
    bloqueCoral.style.top = "10%";
    bloqueCoral.style.bottom = "10%";
    bloqueCoral.style.width = "40%";
    bloqueCoral.style.backgroundColor = "#f88d69";
    bloqueCoral.style.color = "white";
    bloqueCoral.style.padding = "40px 20px";
    bloqueCoral.style.display = "flex";
    bloqueCoral.style.flexDirection = "column";
    bloqueCoral.style.justifyContent = "center";

    bloqueCoral.innerHTML = `
  <h2 style="margin: 0;">The Best<br>Collection</h2>
  <p style="margin: 10px 0 20px;">Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.<br> Your description goes here.</p>
`;

    const botonFinal = document.createElement("button");
    botonFinal.innerText = "Shop Now";
    botonFinal.style.width = "150px";
    botonFinal.style.height = "45px";
    botonFinal.style.alignSelf = "center";
    botonFinal.style.backgroundColor = "#003366";
    botonFinal.style.color = "white";
    botonFinal.style.padding = "10px 20px";
    botonFinal.style.border = "none";
    botonFinal.style.cursor = "pointer";
    botonFinal.style.borderRadius = "8px";
    bloqueCoral.appendChild(botonFinal);

    finalSeccion.appendChild(bloqueCoral);
    container.appendChild(finalSeccion);

    body.appendChild(container);
});
