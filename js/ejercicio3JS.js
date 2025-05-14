document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const contenedor = document.createElement("div");
    contenedor.style.maxWidth = "900px";
    contenedor.style.margin = "0 auto";
    contenedor.style.padding = "20px";

    const header = document.createElement("div");
    header.style.display = "flex";
    header.style.flexDirection = "column"
    header.style.alignItems = "center";
    header.style.gap = "10px";
    header.style.marginBottom = "20px";

    const logo = document.createElement("h2");
    logo.innerText = "YOUR LOGO";

    const nav = document.createElement("nav");
    nav.innerHTML = `
      <a href="#" style="margin: 0 10px;">News</a>
      <a href="#" style="margin: 0 10px;">About us</a>
      <a href="#" style="margin: 0 10px;">Trends</a>
      <a href="#" style="margin: 0 10px;">Training</a>
    `;

    header.appendChild(logo);
    header.appendChild(nav);
    contenedor.appendChild(header);

    const workout = document.createElement("div");
    workout.style.position = "relative";
    workout.innerHTML = `
      <img src="../recursos/imagenes/images (3).jpeg" style="width: 100%; height: auto;">
      <div style="position: absolute; bottom: 20px; left: 80px; color: white;">
        <h1>WORKOUT</h1>
        <p style="max-width: 300px;">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <a href="#" style="background-color: #fff; color: #000; padding: 10px 20px; display: inline-block; margin-top: 10px; margin-left: 630px;">Subscribe</a>
      </div>
      <img src="../recursos/imagenes/a.png" alt="bandera con pico" style="width: 180px; display: block; position: absolute; top: 380px; right: 38.5px;">
    <div style="width:100px; position: absolute; top: 450px; right: 80px;text-align: center; font-weight: bold; color: #000;">
    Save up to <strong>30%</strong>
</div>

    `;
    workout.style.marginBottom = "30px";


    contenedor.appendChild(workout);


    const newsletter = document.createElement("div");
    newsletter.style.textAlign = "center";
    newsletter.style.marginBottom = "40px";
    newsletter.innerHTML = `
      <h2>Subscribe<br>our Newsletter</h2>
      <p style="max-width: 500px; margin: 0 auto;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et elit commodo, vehicula elit at, finibus sem.</p>
      <button style="margin-top: 15px; padding: 10px 20px; background-color: white; color: black; border: none; font-weight: bold;">GET IT NOW</button>
    `;
    contenedor.appendChild(newsletter);


    const bloques = [
        {
            img: "../recursos/imagenes/images(2).jpeg",
            title: "BUILD YOUR BODY",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            img: "../recursos/imagenes/descarga (3).jpeg",
            title: "Training Everyday",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            img: "../recursos/imagenes/descarga (4).jpeg",
            title: "MORE STRONGER",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ];

    bloques.forEach(b => {
        const box = document.createElement("div");
        box.style.display = "flex";
        box.style.marginBottom = "30px";
        box.style.gap = "20px";
        box.style.alignItems = "center";


        const img = document.createElement("img");
        img.src = b.img;
        img.style.width = "250px";
        img.style.borderRadius = "8px";


        const text = document.createElement("div");
        text.innerHTML = `
          <h3 style="margin: 0;">${b.title}</h3>
          <p style="margin: 5px 0;">${b.desc}</p>
          <a href="#" style="color: #ccc;">Read more our blog →</a>
        `;

        box.appendChild(img);
        box.appendChild(text);
        contenedor.appendChild(box);
    });


    const footer = document.createElement("footer");
    footer.style.textAlign = "center";
    footer.style.padding = "20px 0";
    footer.style.borderTop = "1px solid #444";
    footer.innerHTML = `
      <a href="#">Unsubscribe</a> | 
      <a href="#">Settings</a> | 
      <a href="#">Privacy policy</a>
    `;

    contenedor.appendChild(footer);
    body.appendChild(contenedor);
});
