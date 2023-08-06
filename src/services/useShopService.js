import useHttp from "../hooks/http.hook";

export default function useShopService() {
    const { request, process, setProcess } = useHttp();
    const _apiBase = 'https://fakestoreapi.com/';

    const getProducts = async (product = '') => {
        const data = await request(`${_apiBase}products/${product}`);
        return data;
    }

    const getCategory = async (category) => {
        const data = request(`${_apiBase}products/category/${category}`)
        return data;
    }

    return { getProducts, getCategory, process, setProcess };
}