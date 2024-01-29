import './HomePage.css'

type Props = {
    id?: number;
    item_img: string;
    item?: number;
    descric: string | number | "" | 0;
    sector: number | string | undefined;
    brand: number | string | undefined;
    amount: number | undefined;
    valor: number;
    tItem?: number;
    addItem: any;
    selectAmount: any;
    inputAmout?: any;
}

export function ListItens(props: Props) {
    return (
        <div className='container-itens'>
            <div className='main-itens'>
                <img className='itens-img' src={props.item_img} alt="Aguardando Item !"></img>
                <ul style={{color:'textGray'}}>
                <li><b>ITEM</b> {props.id}</li>
                <li>{props.descric}</li>
                {props.amount}
                <li><b>Marca</b> {props.brand}</li>
                <li><b>Setor</b> {props.sector}</li>
                <li><b>R$</b> {props.valor}</li>
                </ul>
                <div className='select-amount'>{props.selectAmount}</div>
                <>{props.addItem}</>
                <p><a href='pe'>Ir para o Carrinho</a></p>

            </div>
        </div>
    )
}