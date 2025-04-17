import axios  from "axios";
const instance=axios.create({baseURL:import.meta.env.VITE_BASE_URL})

export const Login=async(correo:string, password:string) => {
    
    try {
    const response=await instance.post("/auth/Login", {correo, password})
    const {access_token}=response.data
    localStorage.setItem("token", access_token)
    return response.data
} 
catch (error) {
    throw new Error(error.response?.data?.message || "Error al ingresar")
}

}
  
