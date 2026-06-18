function login(){

const usuario =
document.getElementById("usuario").value;

const password =
document.getElementById("password").value;

const usuarios =
JSON.parse(
localStorage.getItem("usuarios")
) || [];

const existe =
usuarios.find(u =>

u.usuario === usuario &&
u.password === password

);

if(existe){

localStorage.setItem(
"sesion",
usuario
);

window.location.href =
"index.html";

}else{

alert(
"Usuario o contraseña incorrectos"
);

}

}