import axios from 'axios';

export const signUp = (body) => // Diğer tarafta kullanılabilsin diye export eklenir
{
    return axios.post("/api/1.0/users", body);
}