let input = document.querySelector('input');
let enterbut = document.getElementById('enter');
let refbut = document.getElementById('refresh');
let para = document.getElementById('link');
let atag = document.getElementById('anchor');
let qr = document.getElementById('img');

refbut.addEventListener('click', refresh);
enterbut.addEventListener('click', shortit);
function shortit() {
    if(input.value==""){
        alert("Please enter a URL");
        return;
    }
    fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(input.value)}`)
  .then (response => response.text())
  .then(shortUrl =>{ atag.innerHTML=shortUrl; atag.href = shortUrl;
    qr.setAttribute("src",`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data==${encodeURIComponent(shortUrl)}`);
}) .catch(e => {atag.innerHTML= `ERROR ${e}`});
}
function refresh(){
    input.value = "";
    atag.innerHTML="";
    atag.href="";
    qr.setAttribute("src", ""); // Clears the QR image
}