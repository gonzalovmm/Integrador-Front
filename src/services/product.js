import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
import { closeModal } from "../views/modal";
import { productoActivo } from "../../main";
import Swal from 'sweetalert2';




// GUARDAR O MODIFICAR ELEMENTOS

//=========PRODUCTOS=========



const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
})
const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("name").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categories = document.getElementById("categoria").value;
    let object = null;
    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        }

    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
    }
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado!",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();

    closeModal();
};


//Eliminar elemento

export const handleDeleteProduct =()=>{
    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "Si lo eliminas sera permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            const result = products.filter((el)=>el.id != productoActivo.id);
            //setear nuevo array
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        }else{
            closeModal();
        }
      });
    

}