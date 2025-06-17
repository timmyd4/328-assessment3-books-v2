window.addEventListener('DOMContentLoaded', loadReviews);

async function loadReviews() {
    const reviews = document.getElementById("reviews");

    const response = await fetch("/api/reviews");
    const data = await response.json();

    data.forEach(item => {
        row.innerHTML = ''
        const row = document.createElement('tr');

        row.innerHTML =
        `
            <td>${item}</td>
        `

        reviews.appendChild(row);
    })
}
