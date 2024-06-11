document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/mdoqvpnw", {
        method: 'POST',
        body: data,
    }).then(response => {
        if (response.ok) {
            alert("success");
        } else {
            alert("error");
        }
    });
    document.getElementById('contact-form').reset();
});
