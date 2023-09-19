import './UserFormLogin.css'

type PropsUsersFormUpdate = {
    children: string | number | readonly string[] | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
    handleUpdate: any;
    handleDelete: any;
    modalRef?: any;
    className?: string;
    close?: any;
    message: string;
    alert: string;
}

export function UserFormUpdate({
    handleChange,
    handleSubmit,
    children,
    handleUpdate,
    handleDelete,
    modalRef,
    className,
    close,
    message,
    alert
}: PropsUsersFormUpdate) {
    return (

        <div ref={modalRef} className={`${className} modal`}>
            <div className="container-user-login">
                    <fieldset className='main-user'>
                    <form  className='main-user-login' >
                            <strong>Sua conta </strong>
                        <label>{alert}</label>
                        <label>{message}</label>
                                <input
                                    type="hidden"
                                    name="ID user"
                                    value={children.id || 0}
                                    disabled
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="name"
                                    value={children.name}
                                    placeholder='Seu nome'
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="username"
                                    value={children.username}
                                    placeholder='seu email'
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={children.password || ''}
                                    placeholder='Digite sua senha'
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="psw_repeat"
                                    value={children.psw_repeat || ''}
                                    placeholder='Confirme sua senha'
                                    onChange={handleChange}
                                    required
                                />
                                <button onClick={handleSubmit} >Registrar</button>
                                <button onClick={handleUpdate} >Atualizar</button>
                                <button onClick={handleDelete} >Novo</button>
                                 <button onClick={close}>Sair</button>
                                <a href='#'>{'Utilize senhas com números e letras'}</a>
                                </form>
                        </fieldset>
                </div>
            </div>
    )
}