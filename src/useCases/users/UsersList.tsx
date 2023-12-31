import { useState, useEffect, useContext } from "react"
import { ListUSers, PropsUsers } from "../../components/users/UserList"
import { FormatDate } from "../../components/utils/formatDate";
import { BackHome } from "../../components/utils/backHome/BackHome"
import api from '../../services/api/api'
import { AuthContext } from '../../context/auth'

export function UsersList() {

const { user: isLogged }: any = useContext(AuthContext);

const [users, setUsers] = useState<PropsUsers[]>([])

  async function getUSers() {
    await api.get<PropsUsers[]>(`/users/${isLogged[0].id}`)
      .then(response => {
        setUsers(response.data)
      })
  }

  useEffect(() => {
    getUSers()
  }, []);

  return (
    <>
      <BackHome/>
      {users.length === 0 ? <p>Carregando...</p> : (
        users.map((user) => (
          <ListUSers
            key={user.id}
            id={user.id}
            created_at={FormatDate(user.created_at)}
            updated_at={user.updated_at === null ?
              "não houve atualização": FormatDate(user.updated_at)}
            name={user.name}
            username={user.username}
          />
        )))}
    </>
  )
}
