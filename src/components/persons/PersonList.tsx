import '../global-module.css'

export type Props = {
    id_person: number
    created_at: Date | any
    updated_at: Date | any
    name: string
    cpf: string
    phone: string
    address: string
    bairro:string
    num_cep:string | undefined
    name_city:string | undefined
    uf:string | undefined
    filial: number
    id_user: number
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
                <strong>Nome</strong>{props.name}<br />
                <strong>CPF</strong> {props.cpf}<br />
                <strong>Telefone</strong>{props.phone}<br />
                <strong>Endereço</strong>{props.address}<br />
                <strong>Bairro</strong>{props.bairro}<br />
                <strong>CEP</strong>{props.num_cep}<br />
                <strong>Cidade</strong>{props.name_city}<br />
                <strong>Estado</strong>{props.uf}<br />
                <strong>Filial</strong>{props.filial}<br />
                <strong>Usuário</strong>{props.id_user}<br />
                <button>{props.update}</button>
                <a href='/invoice_sales'><b>Clique aqui</b> para retornar ao <b>Faturamneto</b> !!</a>
                </span>
            </div>
        </div>
    )
}