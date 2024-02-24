import { useState } from 'react';
import { crypt } from '../../components/utils/crypt/Crypt'
import { UserFormRegister } from '../../components/users/UserFormRegister';

import api from '../../services/api/api'

type TUserRegister = {
  name: string;
  username: string;
  password: string;
  psw_repeat: string;
}

export function UserRegister() {
  const [user, setUsers] = useState<TUserRegister>({
    name: "",
    username: "",
    password: "",
    psw_repeat: ""
  })

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsers(values => ({ ...values, [name]: value }))
  }

  const [msg, setAlert] = useState<string>("")
  const [message, setMessage] = useState<any>("")

  async function handleUser() {
    await api.post<TUserRegister>('/users', user)
      .then(response => {
        setMessage(response.data)
      }).catch(error => console.log(error))
  }

  function UsersValFields(user:any) {
    let msg = ""
    if (user.name === "") { msg += "Digite o seu nome completo !\n" };
    if (user.username === "") { msg += "Digite um email válido !\n" };
    if (user.password === "") { msg += "Digite sua senha !\n" };
    if (user.psw_repeat !== user.password) { msg += "Senha digitada está errada !\n" };
    if (msg !== "") {
      setAlert(msg)
      return false;
    };
    return true;
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (UsersValFields(user)) {
      user.password = crypt(user.password)
      handleUser()
      setUsers({
        name: "",
        username: "",
        password: "",
        psw_repeat: ""})
      setMessage("")
    }
    setTimeout(() => {
      setAlert('')
  }, 2000);
  }

  return (
    <>
      <UserFormRegister
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        message={message}
        alert={msg}
      >
        {user}
      </UserFormRegister>
    </>
  );
};