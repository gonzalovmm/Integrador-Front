import { renderCategories } from "./src/services/categories";
import './style.css'
import { handleGetProductsToStore } from "./src/views/store";
import { setInLocalStorage } from "./src/persistence/localStorage";
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/searchBar";


export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setproductoActivo = (productoIn) => {
    productoActivo = productoIn;
};




handleGetProductsToStore();
renderCategories();

const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", () => {

    openModal();

});

//buttonSearch

const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();

});








