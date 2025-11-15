

// let h1 = document.createElement("h1").textContent = "Taller de crafteo";






























let tipo_elemento = null;

const maderaS = Array.from(document.getElementsByClassName("elemento madera"));
const hierroS = Array.from(document.getElementsByClassName("elemento hierro"));
const polvoraS = Array.from(document.getElementsByClassName("elemento polvora"));


const estacion_forja = document.getElementById("forja");
const estacion_banco = document.getElementById("banco");
const estacion_mesa = document.getElementById("mesa");

const estacionesDeTrabajo = Array.from(document.getElementsByClassName("estacion_trabajo"));




let elemento;

maderaS.forEach(madera => {
    madera.addEventListener('dragstart', e => {
        console.log(madera.getAttribute("id"));
        elemento = madera.getAttribute("id");

    })
});

hierroS.forEach(hierro => {
    hierro.addEventListener('dragstart', e => {
        console.log(hierro.getAttribute("id"));
        elemento = hierro.getAttribute("id");
    })
});

polvoraS.forEach(polvora => {
    polvora.addEventListener('dragstart', e => {
        console.log(polvora.getAttribute("id"))
        elemento = polvora.getAttribute("id");
    })
});






estacion_forja.addEventListener('dragover', e => {
    if(validarElemento(e.currentTarget.id, elemento)){
        e.preventDefault();
        console.log("se puede insertar elemento");
        e.currentTarget.classList.remove("invalida");
        e.currentTarget.classList.add("valida");
    }
    else{
        e.currentTarget.classList.remove("valida");
        e.currentTarget.classList.add("invalida");
    }
});
estacion_forja.addEventListener('dragleave', e => {
    estacion_forja.classList.remove("invalida", "valida");
})
estacion_forja.addEventListener('drop', e =>{
    e.preventDefault();
    estacion_forja.classList.remove("invalida", "valida");
    document.getElementById(elemento).remove();
    let sum_contador = parseInt(document.getElementById("num_lingotes").textContent)+1;
    document.getElementById("num_lingotes").textContent = sum_contador;

    comprobarEstadoAlmacen();
});




estacion_banco.addEventListener('dragover', e => {
    if(validarElemento(e.currentTarget.id, elemento)){
        e.preventDefault();
        console.log("se puede insertar elemento");
        e.currentTarget.classList.remove("invalida");
        e.currentTarget.classList.add("valida");
    }
    else{
        e.currentTarget.classList.remove("valida");
        e.currentTarget.classList.add("invalida");
    }
});
estacion_banco.addEventListener('dragleave', e => {
    estacion_banco.classList.remove("invalida", "valida");
})
estacion_banco.addEventListener('drop', e =>{
    e.preventDefault();
    estacion_banco.classList.remove("invalida", "valida");
    document.getElementById(elemento).remove();
    let sum_contador = parseInt(document.getElementById("num_flechas").textContent)+1;
    document.getElementById("num_flechas").textContent = sum_contador;

    comprobarEstadoAlmacen();
});





estacion_mesa.addEventListener('dragover', e => {
    if(validarElemento(e.currentTarget.id, elemento)){
        e.preventDefault();
        console.log("se puede insertar elemento");
        e.currentTarget.classList.remove("invalida");
        e.currentTarget.classList.add("valida");
    }
    else{
        e.currentTarget.classList.remove("valida");
        e.currentTarget.classList.add("invalida");
    }
});
estacion_mesa.addEventListener('dragleave', e => {
    estacion_mesa.classList.remove("invalida", "valida");
})
estacion_mesa.addEventListener('drop', e =>{
    e.preventDefault();
    estacion_mesa.classList.remove("invalida", "valida");
    document.getElementById(elemento).remove();
    let sum_contador = parseInt(document.getElementById("num_bombas").textContent)+1;
    document.getElementById("num_bombas").textContent = sum_contador;

    comprobarEstadoAlmacen();
});



function validarElemento(estacion, elemento){

    if(estacion === "forja" && elemento.includes('hierro')) return true;
    else if (estacion === "banco" && elemento.includes('madera')) return true;
    else if (estacion === "mesa" && elemento.includes('polvora')) return true;
    else return false;
    
}

function comprobarEstadoAlmacen(){
    const contenedor_items = document.getElementById("contenedor_items");
    const mensaje = document.getElementById("mensaje_vacio");

    if(contenedor_items.childElementCount === 0){
        mensaje.classList.remove("lleno");
        mensaje.classList.add("vacio");
        // documet.getElementById("mensaje_vacio").classList.remove("lleno");
        // documet.getElementById("mensaje_vacio").classList.add("vacio");
    }
}





// function Stackear(){
    
    
//     let elementos_madera = document.getElementsByClassName("madera");
//     let elementos_hierro = document.getElementsByClassName("hierro");
//     let elementos_polvora = document.getElementsByClassName("polvora");
//     document.getElementsByClassName("madera").remove;
//     document.getElementsByClassName("hierro").remove;
//     document.getElementsByClassName("polvora").remove;

//     document.querySelectorAll(".madera").forEach(elemento => {
//         elemento.remove();
//     });    
//     document.querySelectorAll(".hierro").forEach(elemento => {
//         elemento.remove();
//     });    
//     document.querySelectorAll(".polvora").forEach(elemento => {
//         elemento.remove();
//     });

//     let caja_inventario = document.getElementById("caja_inventario");
    
//     let num_madera = elementos_madera.length;
//     let num_hierro = elementos_hierro.length;
//     let num_polvora = elementos_polvora.length;
//     if(!num_madera === 0){

//         let mad = document.createElement("div");
//         mad.className = "elemento madera";
//         mad.setAttribute("madera");
//         mad.setAttribute("draggable", "true");
//         mad.textContent="Madera"+num_madera;
//         caja_inventario.appendChild(mad); 
//         document.getElementById("caja_inventario").appendChild(mad); 

//     }
//     if(!num_hierro === 0){
//         let met = document.createElement("div");
//         met.className = "elemento madera";
//         met.setAttribute("madera");
//         met.setAttribute("draggable", "true");
//         met.textContent="Madera"+num_madera;
        
//         caja_inventario.appendChild(met); 
//         document.getElementById("caja_inventario").appendChild(met); 

//     }
//     if(!num_polvora === 0){
//         let polv = document.createElement("div");
//         polv.className = "elemento madera";
//         polv.setAttribute("madera");
//         polv.setAttribute("draggable", "true");
//         polv.textContent="Madera"+num_madera;
        
//         document.getElementById("caja_inventario").appendChild(polv); 
//     }


// }
