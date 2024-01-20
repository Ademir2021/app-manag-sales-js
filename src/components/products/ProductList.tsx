import '../global-module.css'

type Props = {
    id: number;
    created_at: Date | any;
    updated_at?: Date | any | null;
    name: string | number;
    val_max: number;
    val_min: number;
    brand: string | undefined;
    sector: string | undefined;
    bar_code: string;
    update: any,
    image?: string
}

export function ProductList(props: Props) {
    return (
        <div className="container-global" >
            <div className="main-global">
                <ul className="main-global-form">
                    <li><b>ID</b> {props.id}</li>
                    <li><b>Cadastro</b> {props.created_at}</li>
                    <li><b>Alterado</b> {props.updated_at}</li>
                    <li><b>Descrição</b> {props.name}</li>
                    <li><b>Valor máximo</b> {props.val_max}</li>
                    <li><b>Valor minimo</b> {props.val_min}</li>
                    <li><b>Marca</b> {props.brand}</li>
                    <li><b>Setor</b> {props.sector}</li>
                    <li><b>Barras</b> {props.bar_code}</li>
                    <li><b>Imagem</b> {props.image}</li>
                    <>{props.update}</>
                </ul>
            </div>
        </div>
    )
}