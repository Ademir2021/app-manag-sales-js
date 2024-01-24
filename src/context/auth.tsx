import { useState, createContext, useEffect } from "react";
import bcrypt from "bcryptjs-react"
import { useNavigate } from "react-router";
import { TUserLogin } from '../useCases/users/UserLogin'
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
    }, [user]);

    const login = async (email: string, password: string) => {
        function compare(pass: string, username: string) {
            if (bcrypt.compareSync(password, pass) === true && email === username) {
                setUser(true)
                const res_uri = localStorage.getItem('uri')?.replace(/"/g, "")
                if (res_uri !== undefined) {
                    setTimeout(() => {
                        navigate(res_uri)
                    }, 1000);
                }
            } else {
                localStorage.removeItem('u');
                setMessage("Email ou senha inválida ! Tente novamente.");
                setTimeout(() => {
                    setMessage('');
                }, 3000);
            }
        };

        try {
            await api.get<TUserLogin[]>(`/login/${email}`)
                .then(response => {
                    const res = response.data
                    if (res !== null) {
                        compare(res[0].password, res[0].username);
                        localStorage.setItem("u", JSON.stringify(res));
                    }
                })
        } catch (err) {
            // console.log("error occurred !!: " + err);
            setMessage("Email ou senha inválida ! Tente novamente.");
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    };

    const logout = () => {
        localStorage.removeItem('u');
        setUser(null)
        localStorage.setItem("uri", JSON.stringify("dashboardefault"));
        navigate("/")
    }

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, message, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}