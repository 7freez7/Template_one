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
