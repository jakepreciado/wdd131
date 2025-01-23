const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;


const temp = 55
const windSpeed = 3

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        const windChill = Math.round((35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16)) *100) / 100;
        console.log(windChill);
        return windChill
    } else {
        return "N/A";
    }
}
const windChillFactor = document.querySelector("#windchill-factor");
windChillFactor.textContent = calculateWindChill(temp, windSpeed);