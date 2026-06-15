const autos = [

{
marca:"Ford",
modelo:"Mustang (Generación S550)",
motor:"5.0L V8",
potencia:"450 HP",
velocidad:"250 km/h",
precio:"$45,000",
imagen:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
},

{
marca:"BMW",
modelo:"Serie 4 Coupé (F32)",
motor:"3.0L Twin Turbo",
potencia:"382 HP",
velocidad:"250 km/h",
precio:"$55,000",
imagen:"https://images.unsplash.com/photo-1502877338535-766e1452684a"
},

{
marca:"Bugatti",
modelo:"Chiron",
motor:"8.0L W16 Quad Turbo",
potencia:"1500 HP",
velocidad:"420 km/h",
precio:"$3,000,000",
imagen:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b"
},

{
marca:"Lamborghini",
modelo:"Huracán",
motor:"5.2L V10",
potencia:"631 HP",
velocidad:"325 km/h",
precio:"$250,000",
imagen:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
},

{
marca:"Ferrari",
modelo:"458 Italia (o 458 Spider",
motor:"4.5L V8",
potencia:"562 HP",
velocidad:"325 km/h",
precio:"$240,000",
imagen:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
},

{
marca:"Chevrolet",
modelo:"Camaro (Generación 6)",
motor:"6.2L V8",
potencia:"455 HP",
velocidad:"290 km/h",
precio:"$43,000",
imagen:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
},

{
marca:"Mercedes-Benz",
modelo:"Clase S Coupé (o Clase CL)",
motor:"4.0L V8 Biturbo",
potencia:"463 HP",
velocidad:"250 km/h",
precio:"$130,000",
imagen:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
},

{
marca:"Mercedes-AMG",
modelo:"GT R (Color AMG Green Hell Magno/Rojo)",
motor:"4.0L V8 Biturbo",
potencia:"577 HP",
velocidad:"318 km/h",
precio:"$170,000",
imagen:"https://images.unsplash.com/photo-1553440569-bcc63803a83d"
},

{
marca:"Porsche",
modelo:"Panamera (Generación 971)",
motor:"4.0L V8 Turbo",
potencia:"620 HP",
velocidad:"315 km/h",
precio:"$110,000",
imagen:"https://images.unsplash.com/photo-1503376780353-7e6692767b70"
},

{
marca:"Ford",
modelo:"Mustang Mach 1 (1971/1973)",
motor:"7.0L V8",
potencia:"375 HP",
velocidad:"210 km/h",
precio:"$70,000",
imagen:"https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd"
},

{
marca:"Volkswagen",
modelo:"Gol (Polo / Fox)",
motor:"1.6L 4 Cilindros",
potencia:"110 HP",
velocidad:"185 km/h",
precio:"$15,000",
imagen:"https://images.unsplash.com/photo-1541899481282-d53bffe3c35d"
},

{
marca:"BMW",
modelo:"M5",
motor:"4.4L V8 Twin Turbo",
potencia:"617 HP",
velocidad:"305 km/h",
precio:"$120,000",
imagen:"https://images.unsplash.com/photo-1555215695-3004980ad54e"
},

{
marca:"Ferrari",
modelo:"F8 Tributo",
motor:"3.9L V8 Twin Turbo",
potencia:"710 HP",
velocidad:"340 km/h",
precio:"$280,000",
imagen:"https://images.unsplash.com/photo-1592198084033-aade902d1aae"
},

];

const contenedor = document.getElementById("contenedor-autos");

autos.forEach((auto,index)=>{

contenedor.innerHTML += `

<div class="tarjeta" onclick="mostrarAuto(${index})">

<img src="${auto.imagen}">

<div class="info">

<h3>${auto.marca}</h3>

<p><strong>Modelo:</strong> ${auto.modelo}</p>

</div>

</div>

`;

});

const modal = document.getElementById("modal");

function mostrarAuto(index){

const auto = autos[index];

document.getElementById("modal-img").src = auto.imagen;
document.getElementById("modal-marca").textContent = auto.marca;
document.getElementById("modal-modelo").textContent = auto.modelo;
document.getElementById("modal-motor").textContent = auto.motor;
document.getElementById("modal-potencia").textContent = auto.potencia;
document.getElementById("modal-velocidad").textContent = auto.velocidad;
document.getElementById("modal-precio").textContent = auto.precio;

modal.style.display = "flex";
}

document.getElementById("cerrar").onclick = ()=>{
modal.style.display = "none";
};

window.onclick = (e)=>{
if(e.target === modal){
modal.style.display = "none";
}
};
