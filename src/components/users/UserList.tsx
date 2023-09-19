import '../global-module.css'

export type PropsUsers = {
    id: number;
    created_at:Date | any;
    updated_at:Date | any;
    name: string;
    username: string;
    password?: string;
    // update?: Date | any;
};

export const ListUSers = (props: PropsUsers) => {
    return (
        <>
            <div className="container-global">
                <div className="main-global">
                    <span className='main-global-form'>
                    <strong>Id</strong>{props.id}<br />
                    <strong>Criado</strong>{props.created_at}<br />
                    <strong>Atualizado</strong>{props.updated_at}<br />
                    <strong>Nome completo</strong>{props.name}<br />
                    <strong>Email</strong>{props.username}<br />
                    {/* <button>Inativo</button> */}
                    </span>
                </div>
            </div>
        </>
    )
}