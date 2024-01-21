import '../global-module.css'

export type Props = {
    id: number
    created_at: Date | any
    // updated_at: Date | any
    name: string
    email: string
    phone: string
    comments: string
}

export function ContactList(props: Props){
    return(
        <div className="container-global" >
        <div className="main-global">
            <ul className="main-global-form">
                <li><b>ID</b> {props.id}</li>
                <li><b>Post</b> {props.created_at}</li>
                {/* <li><b>Alterado</b> {props.updated_at}</li> */}
                <li><b>Nome</b> {props.name}</li>
                <li><b>Email</b> {props.email}</li>
                <li><b>Telefone</b> {props.phone}</li>
                <li><b>Assunto</b> {props.comments}</li>
            </ul>
        </div>
    </div>
    )
}