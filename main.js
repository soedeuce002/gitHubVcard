let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/soedeuce002");
myRequest.addEventListener("load", function () {
let data = JSON.parse(this.responseText);



let main = document.getElementById("profile");



let vCard =
`<header>${data.name}</header>
<section>
<div>
<h1>The Basics</h1>
<p>Name: ${data.name}</p>
<p>Github URL: ${data.login}</p>
<p>Email: ${data.email}</p>
<p>Company: ${data.company}</p>
</div>
<div>
<h1>The Story</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua.  ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis
aute irure minim exercitation veniam adipisicing, quis nostrud
dolor laboris exercitation.</p>
</div>
<div>
<img src=${data.avatar_url}>
</div>
</section>`


main.innerHTML = vCard;



});
myRequest.send();
