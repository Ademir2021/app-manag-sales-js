import './HomePage.css'

type Props = {
    id?: number;
    item_img: string;
    item?: number;
    descric: string | number | "" | 0;
    sector: number | string | undefined;
    brand: number | string | undefined;
    amount: number | undefined;
    valor: number | string | "money";
    tItem?: number | string | "money";
    incrementAmount?: any;
    addItem: any;
    decrementAmount?: any;
    selectAmount: any;
    inputAmout?: any;
}

export function ListItens(props: Props) {
    return (
        
        <div className='container-itens'>
            <div className='main-itens'>
                <img className='itens-img' src={props.item_img} alt="Aguardando Item !!"></img>
                <ul>
                <li><b>ITEM</b> {props.id}</li>
                <li>{props.descric}</li>
                {props.amount}
                <li><b>Marca: </b>{props.brand}</li>
                <span><b>Setor: </b>{props.sector}</span>
                <li><b>R$</b> {props.valor}</li>
                </ul>
                <div className='select-amount'>{props.selectAmount}</div>

                {/* <>{props.decrementAmount}</>
                    <>/</>
                    <>{props.incrementAmount}</>
                    <>{props.selectAmount}</> */}

                {/* <label>Informe a quantidade</label>
                    <div className='input-amount'>{props.inputAmout}</div> */}

                <>{props.addItem}</>

                <p><a href='pe'>Ir para o Carrinho</a></p>

            </div>
        </div>
    )
}