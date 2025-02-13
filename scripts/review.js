let reviewCount = parseInt(localStorage.getItem('reviews')) || 0;

if (!reviewCount) {
    localStorage.setItem('reviews', 0);
}


window.onload = function () {
    reviewCount++;
    localStorage.setItem('reviews', reviewCount);
    document.getElementById('reviews').innerHTML = reviewCount;
}