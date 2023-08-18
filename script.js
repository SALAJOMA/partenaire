const partnerList = document.querySelector('.partner-list');

function scrollLogos() {
    partnerList.appendChild(partnerList.firstElementChild);
}

let scrollInterval = setInterval(scrollLogos, 1000); // Ajustez la vitesse du défilement si nécessaire
