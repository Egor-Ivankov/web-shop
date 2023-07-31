import { useCallback, useState } from "react";

export default function useHttp () {

    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url,
        method = 'GET',
        body = null,
        headers = {
            'Content-type': 'application/json'
        }) => { 
            setProcess('loading');

            try {
                const response = await fetch(url, {method, body, headers});

                if (!response.ok) {
                throw new Error (`Could not fetch ${url}, status: ${response.status}`)
                }   

                
                const data = await response.json();

                return data;
                } catch(error) {
                    setProcess('error');
                    throw error;
                }
    }, []);

    return {request, process, setProcess};
}
