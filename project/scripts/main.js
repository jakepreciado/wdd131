// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });


// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

// Artist
const artistSpotlight = document.querySelector('#artists');

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
    const spotlights = shuffled.slice(0, 1);

    spotlights.forEach((spotlight) => {
        let card = document.createElement('section');
        let cardContent = document.createElement('div');
        let artist = document.createElement('h2');
        let band = document.createElement('p');
        let bio = document.createElement('p');
        let image = document.createElement('img');

        artist.textContent = `${spotlight.name}`;
        band.textContent = `${spotlight.band}`;
        bio.textContent = `${spotlight.bio}`;
        image.setAttribute('src', `${spotlight.image}`);
        image.setAttribute('alt', `Image of ${spotlight.name}`);
       

        card.appendChild(image);
        card.appendChild(cardContent);
        cardContent.appendChild(artist);
        cardContent.appendChild(band);
        cardContent.appendChild(bio);

        card.classList.add('card');
        cardContent.classList.add('artist-content');

        artistSpotlight.appendChild(card);
    });
}

getArtistData();