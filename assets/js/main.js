const button = document.getElementById("btn");
button.addEventListener("click",() =>{

// aca se guardo el comentario ingresado por el usuario
    let comments = document.getElementById("comment").value;

// limpiar el texarea
document.getElementById("comment").value=" ";

// contenedor donde dejare mis comentarios en html
const cont = document.getElementById("cont");

// crear un div contenedor
const newComments = document.createElement("div");
// validar que el textarea tenga un comentario
if (comments.length === 0 || comments == null){
    alert (" Debes ingresar un mensaje ");
    return false;
}

// crear chekbox
const chck = document.createElement("input");
chck.type = "checkbox";


// crear icono corazon
const heart = document.createElement("i");
heart.classList.add('fas','fa-heart','heart');

// crear icono basura
const trash = document.createElement("i");
trash.classList.add('fas','fa-trash','trash');

// crear icono retweet
const retweet = document.createElement("i");
retweet.classList.add('fas','fa-retweet','retweet');

// nodos de texto del texarea
let textNewComment = document.createTextNode(comments);

const contenedorElemento = document.createElement("p");
contenedorElemento.appendChild(textNewComment);
newComments.appendChild(chck);
newComments.appendChild(trash);
newComments.appendChild(heart);
newComments.appendChild(retweet);
newComments.appendChild(contenedorElemento);

cont.appendChild(newComments);

});
