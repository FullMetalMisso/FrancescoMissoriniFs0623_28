const libriApiUrl = "https://striveschool-api.herokuapp.com/books"
const sfogliaLibri = document.querySelector(".sfogliaLibri")

window.onload = () => {
    caricaLibreria();
}

const caricaLibreria = function() {
fetch(libriApiUrl)
.then((response) => response.json())
.then((libri) => {
    mostraLibri(libri) 
    
})
.catch((error) => {
    console.error('Errore durante il recupero dei libri:', error);
});
}

function mostraLibri(libri) {
sfogliaLibri.innerHTML = ""

libri.forEach((libro) => {
    sfogliaLibri.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${libro.img}" class="card-img-top" alt="${libro.title}">
            <div class="card-body">
                <h5 class="card-title">${libro.title}</h5>
                <p class="card-text">${libro.category}</p>
                <a href="#" class="btn btn-primary">Aggiungi al carrello</a>
                <a href="#" class="btn btn-danger" onclick="libriAlRogo(event)">Scarta</a>
            </div>
        </div>`;
});
}

const libriAlRogo = (event) => {
    event.target.closest('.col').remove()
}