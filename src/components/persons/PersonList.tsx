import '../global-module.css'

export type Props = {
    id_person: any;
    created_at: Date | any;
    updated_at: Date | any;
    name: string
    cpf: string;
    phone: string;
    address: string;
    filial: number;
    id_user: number;
    update: any
}

export const PersonList = (props: Props) => {
    return (
        <div className="container-global" >
            <div className="main-global">
                <span className='main-global-form'>
                <strong>Id</strong>{props.id_person}<br />
                <strong>Data cadastro</strong> {props.created_at}<br />
                <strong>Atualizado</strong>{props.updated_at}<br />
                <strong>Nome pessoa</strong>{props.name}<br />
                <strong>CPF</strong> {props.cpf}<br />
                <strong>Telefone</strong>{props.phone}<br />
                <strong>Endereço</strong>{props.address}<br />
                <strong>Filial</strong>{props.filial}<br />
                <strong>Usuário</strong>{props.id_user}<br />
                <button>{props.update}</button>
                <a href='/invoice_sales'><b>Clique aqui</b> para retornar ao <b>Faturamneto</b> !!</a>
                </span>
            </div>
        </div>
    )
}