import { instance } from "./index";
export const getProducts = async ({
  categoryId,
  priceGte,
  priceLte,
  currentPage,
  priceSortOption,
  totalPages,
  searchItem,
}) => {
  let url = "/products?populate=*&filters[Title][$contains]=";

  if (categoryId) {
    url += `&filters[categories][$eq]=${categoryId}`;
  }

  if (priceGte) {
    url += `&filters[price][$gte]=${priceGte}`;
  }
  if (priceLte) {
    url += `&filters[price][$lte]=${priceLte}`;
  }
  if (currentPage) {
    url += `&pagination[page]=${currentPage}&pagination[pageSize]=9`;
  }
  if (priceSortOption) {
    url += `&sort[0]=price:${priceSortOption}`;
  }
  if(totalPages){
    url += `&pagination[page]=${totalPages}&pagination[pageSize]=8`;
  }
  const res = await instance.get(url);

  return res.data;
};
