import { instance } from "./index";
export const getCategories = async ()=>{
    const category=await instance.get("/categories?populate=*")
    return category.data;
};