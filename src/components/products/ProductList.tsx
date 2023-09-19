import '../global-module.css'

type Props = {
    id:number;
    created_at:Date | any;
    updated_at?:Date | any | null;
    name:string | number;
    val_max:number;
    val_min:number;
    brand:number;
    sector:number;
    bar_code:string;
    update:any;
}

export function ProductList(props: Props) {
    return (
        <>
             <div className="container-global">
                <div className="main-global">
                <span className='main-global-form'>
                <strong>Id</strong> {props.id}<br />
                <strong>Data cadastro</strong>  {props.created_at}<br />
                <strong>Atualizado</strong>  {props.updated_at}<br />
                <strong>Descrição</strong>  {props.name}<br />
                <strong>Valor max</strong>  {props.val_max}<br />
                <strong>Valor min</strong>  {props.val_min}<br />
                <strong>Marca</strong>  {props.brand}<br />
                <strong>Setor</strong>  {props.sector}<br />
                <strong>Código de barras</strong>  {props.bar_code}<br />
                <button>{props.update}</button>
                </span>
                </div>
            </div>
        </>
    )
}