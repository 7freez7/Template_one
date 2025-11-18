async function loadComponent(id, url) {
  const response = await fetch(url);
  const html = await response.text();
  document.getElementById(id).innerHTML = html;
}
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');

loadComponent('sluzby', 'components/sluzby.html');
loadComponent('kontakt', 'components/kontakt.html');

loadComponent('partneri', 'role/partneri.html');
loadComponent('advokati', 'role/advokati.html');
loadComponent('koncipienti', 'role/koncipienti.html');
loadComponent('administrativa', 'role/administrativa.html');

function sendMail() {
  const parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_ql4ycqi", "template_1qlx1hc", parms)
    .then(() => {
      alert("Email byl odeslán! Děkujeme.");
    })
    .catch((error) => {
      console.error("Email send error:", error);
      alert("Odeslání se nezdařilo. Zkuste to prosím později.");
    });
}
