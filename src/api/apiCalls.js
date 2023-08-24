import axios from 'axios';

export const signUp = (body) => // Diğer tarafta kullanılabilsin diye export eklenir
{
    return axios.post("/api/1.0/users", body);
}

export const login = credentials =>
{
    // Basic authentication header ı oluşturulacak, username ve password istiyor. Bu yüzden credentials denebilir
    return axios.post("/api/1.0/auth", {}, {auth : credentials});
    // auth kısmı konfigürasyon kısmıdır
}