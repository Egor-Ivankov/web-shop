import useHttp from "../hooks/http.hook";

export default function useShopService() {
    const { request, process, setProcess } = useHttp();
    const _apiBase = 'https://fakestoreapi.com/';

    const getProducts = async (product = '') => {
        const data = await request(`${_apiBase}products/${product}`);
        return data;
    }

    return { getProducts, process, setProcess };
}