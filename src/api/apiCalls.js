import axios from "axios";

export const signUp = (body) => // Diğer tarafta kullanılabilsin diye export ekleriz
{
    return axios.post("/api/1.0/users", body);
}