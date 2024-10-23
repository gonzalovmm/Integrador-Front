import { setproductoActivo } from "../../main";
import { productoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";

// POPUP



const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', () => {
    closeModal();
});
// FUNCIONES ABRIR CERRAR MODAL
export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");

    if(productoActivo){
        buttonDelete.style.display="block";

    }else{
        buttonDelete.style.display="none";
    }

    if (productoActivo) {
        const nombre = document.getElementById("name"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");
            nombre.value = productoActivo.nombre;
            imagen.value = productoActivo.imagen;
            precio.value = productoActivo.precio;
            categories.value = productoActivo.categories;


    }
};

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none";
    setproductoActivo(null);
    resetModal();
};

export const resetModal = () => {
    const nombre = document.getElementById("name"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categories.value = "Seleccione una categoria";

}

const deleteButton=document.getElementById("deleteButton");
deleteButton.addEventListener('click',()=>{
    handlebuttonDelete();
})

const handlebuttonDelete =()=>{
    handleDeleteProduct();
}