function registrar(){

const usuario =
document.getElementById("usuario").value.trim();

const correo =
document.getElementById("correo").value.trim();

const password =
document.getElementById("password").value;

const confirmar =
document.getElementById("confirmar").value;

if(
usuario === "" ||
correo === "" ||
password === ""
){
alert("Completa todos los campos");
return;
}

if(password !== confirmar){
alert("Las contraseñas no coinciden");
return;
}

let usuarios =
JSON.parse(
localStorage.getItem("usuarios")
) || [];

const existe =
usuarios.find(
u => u.usuario === usuario
);

if(existe){

alert(
"Este usuario ya existe"
);

return;

}

usuarios.push({

usuario: usuario,
correo: correo,
password: password

});

localStorage.setItem(
"usuarios",
JSON.stringify(usuarios)
);

alert(
"Cuenta creada correctamente"
);

window.location.href =
"login.html";

}