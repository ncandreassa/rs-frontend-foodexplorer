import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    async function signIn({ email, password }) {
        try {        

            setLoading(true)
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
            setLoading(false)

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar.")
            }
            setLoading(false)
        }

    }

    function signOut() {
        const token = localStorage.removeItem("@foodexplorer:token");
        const user = localStorage.removeItem("@foodexplorer:user");

        setData({});
    }



    useEffect(() => {
        async function loadUserData() {
          setLoading(true);
          const token = localStorage.getItem("@foodexplorer:token");
          const user = localStorage.getItem("@foodexplorer:user");
    
          if (token && user) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setData({
              token,
              user: JSON.parse(user),
            });
          }
    
          setLoading(false);
        }
    
        loadUserData();
      }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            user: data.user,
            signOut,
            loading,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context
}


export { AuthProvider, useAuth };