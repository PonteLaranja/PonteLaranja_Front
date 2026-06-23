import secureLocalStorage from "react-secure-storage";

export function verificarAuth()
{
    const token = secureLocalStorage.getItem("Token")
    return !!token
}