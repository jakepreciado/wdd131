// Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

// Hamburger Toggle
document.getElementById('hamburger-menu').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('show');
});

// Thank You / Local Storage
function handleFormSubmission(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("serviceDate").value;
    const comments = document.getElementById("comments").value;

    const services = Array.from(document.querySelectorAll('input[name="service[]"]:checked'))
        .map(checkbox => checkbox.nextElementSibling.textContent); 

    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("date", date);
    localStorage.setItem("services", JSON.stringify(services)); 
    localStorage.setItem("comments", comments);

    window.location.href = "thankyou.html";
}


document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("thankyou.html")) {
        document.getElementById('firstNameDisplay').textContent = localStorage.getItem('name') || "N/A";
        document.getElementById('phoneDisplay').textContent = localStorage.getItem('phone') || "N/A";
        document.getElementById('emailDisplay').textContent = localStorage.getItem('email') || "N/A";
        document.getElementById('commentsDisplay').textContent = localStorage.getItem('comments') || "N/A";
        document.getElementById('servicesDisplay').textContent = localStorage.getItem('services') || "N/A";
        document.getElementById('formTimestampDisplay').textContent = new Date().toLocaleString();
    }
});
