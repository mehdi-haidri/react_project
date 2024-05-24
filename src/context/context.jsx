
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



export const AuthContext = createContext({
    isAuthenticated :false,
    login :()=>{},
    logout:()=>{}
});


export  const  AuthContextProvider =({children})=>{

    const [isAuthenticated, setisAuthenticated] = useState(false);
    const navigate = useNavigate();
   


    const Password = localStorage.getItem("password")
    useEffect(() => {
        if (!Password) {
            return
        }
  
        setisAuthenticated(true);
    },[])
    useEffect(() => {
        if (!Password) {
           navigate("/")
        }

    },[])
    

    const login = (data)=>{
        window.location.pathname = "/mainpage/" + data.user_type;
           
        localStorage.setItem("username", data.username);
        localStorage.setItem("id", data.id);
        localStorage.setItem("password", data.password);
        localStorage.setItem('user_type', data.user_type);
        setisAuthenticated(true);
        console.log(isAuthenticated);
    }
    const logout = ()=>{
        
        localStorage.removeItem("username");
        localStorage.removeItem("id");
        localStorage.removeItem("password");
        localStorage.removeItem('user_type');
        setisAuthenticated(false);
        window.location.pathname = "/";
    }


    return (
        <AuthContext.Provider value= {{isAuthenticated , login,logout}}>
           {children}
        </AuthContext.Provider>
    )
}