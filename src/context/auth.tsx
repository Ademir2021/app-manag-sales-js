import React, { useState, createContext, useEffect } from "react";
import bcrypt from "bcryptjs-react"
import { useNavigate } from "react-router";
import { TUserLogin  } from '../useCases/users/UserLogin'
import api from '../services/api/api'

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }: any) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<any>(true)
    const [message, setMessage] = useState<string>("")

    useEffect(() => {
        const recoverUser = localStorage.getItem('u')
        if (recoverUser) {
            setUser(JSON.parse(recoverUser))
        }
        setLoading(false)
    }, []);

    const login = async (email: string, password: string) => {
        function compare(pass: string, username: string) {
            if (bcrypt.compareSync(password, pass) === true && email === username) {
                setUser(true)
                navigate("/dashboardefault")
            } else {
                localStorage.removeItem('u');
                setMessage("Email ou senha inválida !!")
            }
        }

        await api.get<TUserLogin[]>(`/login/${email}`)
            .then(response => {
                const res = response.data
                if (res[0] !== undefined) {
                    compare(res[0].password, res[0].username)
                    if (user === true) {
                        setUser(user)
                    }
                } else {
                    setMessage("Email não Localizado !!")
                }
                localStorage.setItem("u", JSON.stringify(res))
            })
    };

    const logout = () => {
        localStorage.removeItem('u');
        setUser(null)
        navigate("/")
    }
    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, message, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}