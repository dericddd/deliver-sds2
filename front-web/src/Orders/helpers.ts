import { Product } from "./Types";

export function checkIsSelected(selectedProducts: Product[], product: Product){
    return selectedProducts.some(intem => intem.id === product.id)
}

export function formatPrice(price: number){
    const formatter = new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL', 
    });    
    return formatter.format(price);
}
