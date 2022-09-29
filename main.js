const input = document.getElementById("input");;
const btn = document.getElementById("btn");
const cards = document.getElementById("cards");

class pizza {
    constructor(ID, nombre, ingredientes, precio, imagen) {
        this.ID = ID
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
        this.imagen = imagen
    }
}

let pizzas = [muzzarella = new pizza(`1`, `Muzzarella`, ingredientes = [`tomate`, `muzzarella`, `oregano`], 800, `https://www.nueva-ciudad.com.ar/advf/imagenes/editadas/5e05008a2355e_800x550.jpg`),
    especial = new pizza(`2`, `Especial`, ingredientes = [`tomate`, `muzzarella`, `jamon`], 1000, `https://media-cdn.tripadvisor.com/media/photo-s/0e/0a/27/05/pizza-especial-salsa.jpg`),
    cuarne = new pizza(`3`, `Carne`, ingredientes = [`tomate`, `muzzarella`,`carne`], 1500, `https://imag.bonviveur.com/pizza-de-carne-picada.jpg`),
    palmitos = new pizza(`4`, `Palmitos`, ingredientes = [`tomate`, `muzzarella`, `palmitos`, `salas golf`], 1300, `https://cdn.pedix.app/slls9fa3oHkPi5fvl2hP/products/1638216591832.png?size=1500x1500`),
    anana = new pizza(`5`, `Anana`, ingredientes = [`tomate`, `muzzarella`, `anana`], 1200, `https://media-cdn.tripadvisor.com/media/photo-s/03/40/08/5f/bardpizzas.jpg`),
    Jamon = new pizza(`6`, `Jamon Crudo y Rucula`, ingredientes = [`tomate`, `oregano`,`Rucula`,`Jamon Crudo`], 1200,`https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo-731x411.jpg`),
]


const saveLocalStorage = (laPizza) => {
    localStorage.setItem('pizzaLs', JSON.stringify(laPizza))
};

let pizzaLs = JSON.parse(localStorage.getItem('pizzaLs')) || [];


const renderCard = laPizza => {
  const {nombre, ingredientes, precio, imagen} = laPizza
  return `
    <div class="card">
    <img src="${imagen}" alt="${nombre}" class="card-img">
    <div class="card-body"> 
      <h3> Nombre: ${nombre} </h3>
      <h3> Ingredientes: ${ingredientes} </h3>
      <h3> Precio: $ ${precio} </h4>
    </div>
    </div>
  `
}

const renderCards = pizzas => {
    cards.innerHTML = pizzas.map(renderCard).join('');
  }


function filtro(inputID) {
    const laPizza = pizzas.filter((piza) => piza.ID == inputID)
    for (piza of laPizza) {
        input.value = '';  
        renderCards(laPizza);
        saveLocalStorage(laPizza);
    }
}

function error() {
    const nroPizza = input.value.trim();
    if (!nroPizza.length){
        localStorage.removeItem(pizzaLs);
        alert('No existe este Menu');
    return;}
    }

btn.addEventListener('click', button)

function button(e) {
    e.preventDefault();
    var inputID = input.value.trim();
    inputID <= pizzas.length && inputID > 0 ? filtro(inputID) : error();
    input.value = ""
}

window.addEventListener('DOMContentloaded', renderCards(pizzaLs));