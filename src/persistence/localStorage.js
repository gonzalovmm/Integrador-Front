//====LOCALSTORAGE====

export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem('products'));
    if (products){
        return products;
    } else{
        return [];
    }
};

//guardar en LS

export const setInLocalStorage = (productIn)=>{
    //traer los elementos
    let productsInLocal = handleGetProductLocalStorage();
    console.log(productIn);

    const existingIndex = productsInLocal.findIndex((productsLocal)=>
        productsLocal.id == productIn.id)
    //verificar si el elemento existe

    if(existingIndex !== -1 ){
        //si  existe, reemplazarlo
        productsInLocal [existingIndex] = productIn;

    }else{
        //si no existe, agregarlo
        productsInLocal.push(productIn);
    }
    //setear nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
    
}