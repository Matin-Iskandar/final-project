import { instance } from "./index";
export const getProductById = async (productId)=>{
    const product=await instance.get(`/products/${productId}?populate=*`)
    console.log(product.data);
    return product.data;
}

