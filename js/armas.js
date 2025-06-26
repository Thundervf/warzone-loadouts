
fetch('data/armas.json')
  .then(res => res.json())
  .then(data => {
    const galeria = document.getElementById("galeria");
    data.armas.forEach(arma => {
      const div = document.createElement("div");
      div.className = "arma";
      div.innerHTML = `
        <h2>${arma.nombre}</h2>
        <a href="${arma.enlace}" data-lightbox="image">
          <img src="${arma.enlace}" alt="${arma.nombre}">
        </a>
      `;
      galeria.appendChild(div);
    });
  });
