
import axios from 'axios';

export const quote: () => Promise<string> = () => {
    return axios
        .get('https://api.kanye.rest/')
        .then(response => response.data.quote)
        .catch(() => new Error('Error fetching quote'));
};
