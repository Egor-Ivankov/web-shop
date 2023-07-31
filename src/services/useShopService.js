import useHttp from "../hooks/http.hook";

export default function useShopService () {
    const { request, process, setProcess } = useHttp();
    const _apiBase = 'https://fakestoreapi.com/';

    const getProducts = async () => {
        const data = await request(`${_apiBase}products`);
        return data;
    }

    const getCategories = async () => {
        const data = await request(`${_apiBase}products/categories`);
        return data;
    }

    return { getProducts, getCategories, process, setProcess };
}