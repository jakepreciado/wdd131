// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

const guitarsContainer = document.querySelector('#guitars');  

const accessoriesContainer = document.querySelector('#accessories');

async function getGuitarData() {
    const response = await fetch('data/guitars.json');
    const data = await response.json();
    console.table(data.guitars);
    displayGuitars(data.guitars);  
}

async function getAccessoryData() {
    const response = await fetch('data/accessories.json');
    const data = await response.json();
    console.table(data.accessories);
    displayAccessories(data.accessories); 
}

const displayGuitars = (guitarList) => {
    guitarList.forEach((guitar) => {  
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let color = document.createElement('p');
        let strings = document.createElement('p');

        name.textContent = `${guitar.name}`;
        color.textContent = `Finish: ${guitar.color}`;
        strings.textContent = `${guitar.strings} String Guitar`;
        image.setAttribute('src', guitar.image);
        image.setAttribute('alt', `Image of ${guitar.name}.`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(color);
        card.appendChild(strings);

        card.classList.add('card');

        guitarsContainer.appendChild(card);  
    });
}

const displayAccessories = (accessoryList) => {
    accessoryList.forEach((accessory) => {  
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let description = document.createElement('p');

        name.textContent = `${accessory.name}`;
        description.textContent = `${accessory.description}`;
        image.setAttribute('src', accessory.image);
        image.setAttribute('alt', `Image of ${accessory.name}.`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);

        card.classList.add('card');

        accessoriesContainer.appendChild(card);  
    });
}

getGuitarData();
getAccessoryData();
