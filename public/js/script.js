

function envoyerEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const mailtoLink = `mailto:emilie.gignier@example.com?subject=Message de ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0ADe: ${email}`;
    
    window.location.href = mailtoLink;
}
