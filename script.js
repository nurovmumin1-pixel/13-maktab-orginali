// Mobil menyuni ochish/yopish

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}


// Menyu bandi bosilganda mobil menyuni yopish

document.querySelectorAll("#menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("menu").classList.remove("active");
    });
});


// Kontakt formasi

function sendMessage(event) {
    event.preventDefault();

    alert(
        "Xabaringiz qabul qilindi! Tez orada siz bilan bog‘lanamiz."
    );

    event.target.reset();
}
