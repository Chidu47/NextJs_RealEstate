import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': 'fd6b71adf6msh79a3e6153993f42p101126jsna183e39ae65d'
        }
    });

    return data;
}