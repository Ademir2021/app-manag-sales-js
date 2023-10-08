import { LogoIn } from '../utils/logoIn/LogoIn';
import { UserHome } from './UserHome';
import './UserFormLogin.css'

type PropsUserFormLogin = {
    children: string | number | readonly string[] | undefined | any;
    handleChange: any
    handleSubmit: any
    message: string;
    alert: string;
}

export function UserFormLogin({
    children,
    handleChange,
    handleSubmit,
    message,
    alert
}: PropsUserFormLogin) {
    return (
            <div className='container-user-login'>
                <fieldset className='main-user'>
                    <form className='main-user-login'>
                        <LogoIn/>
                        <strong>Logar_se no Panel</strong>
                        <label>{alert}</label>
                        <label>{message}</label>
                        <input
                            type="email"
                            name="username"
                            placeholder='Email'
                            value={children.username || ""}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder='Senha'
                            value={children.password || "" }
                            onChange={handleChange}
                            />
                        <button  onClick={handleSubmit} >Entrar</button>
                        <a href='/register'>{'Não tem Login'}</a>
                       <UserHome/>
                    </form>
                </fieldset>
            </div>
    )
}