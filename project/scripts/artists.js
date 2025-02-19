// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

const artistSpotlight = document.querySelector('#artists');
const modal = document.createElement('div');
const modalContent = document.createElement('div');
const modalHeader = document.createElement('h2');
const modalBody = document.createElement('p');
const closeBtn = document.createElement('button');

modal.classList.add('modal');
modalContent.classList.add('modal-content');
modalHeader.classList.add('modal-header');
modalBody.classList.add('modal-body');
closeBtn.classList.add('close-btn');

closeBtn.textContent = "Close";

modalContent.appendChild(modalHeader);
modalContent.appendChild(modalBody);
modalContent.appendChild(closeBtn);
modal.appendChild(modalContent);
document.body.appendChild(modal);

const closeModal = () => {
    modal.style.display = "none";
};

const openModal = (name, band, bio) => {
    modalHeader.textContent = `${name} - ${band}`;
    modalBody.textContent = bio;
    modal.style.display = "flex";
};

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

async function getArtistData() {
    const response = await fetch('data/artists.json');
    const data = await response.json();
    console.table(data.artists);
    fetchSpotlights(data.artists);
}

const clearSpotLight = () => {
    artistSpotlight.innerHTML = "";
};

const fetchSpotlights = (artists) => {
    clearSpotLight();
    const shuffled = artists.sort(() => 0.5 - Math.random());
    const spotlights = shuffled.slice(0, 10);

    spotlights.forEach((spotlight) => {
        let card = document.createElement('section');
        let overlay = document.createElement('div');
        let artistName = document.createElement('h2');
        let band = document.createElement('p');
        let image = document.createElement('img');

        image.setAttribute('src', `${spotlight.image}`);
        image.setAttribute('alt', `Image of ${spotlight.name}`);

        overlay.classList.add('overlay');
        artistName.textContent = `${spotlight.name} - ${spotlight.band}`;
        overlay.appendChild(artistName);

        card.appendChild(image);
        card.appendChild(overlay);
        card.classList.add('card');
        card.classList.add('spotlight-card');


        card.addEventListener('click', () => {
            openModal(spotlight.name, spotlight.band, spotlight.bio);
        });

        artistSpotlight.appendChild(card);
    });
}

getArtistData();
