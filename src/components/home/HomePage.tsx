import './HomePage.css'

type Props = {
    id?: number;
    item_img:string;
    item?: number;
    descric: string | number | "" | 0 ;
    fk_sector: number | string;
    amount: number | undefined;
    valor: number | string | "money";
    tItem?: number | string | "money";
    incrementAmount:any;
    addItem: any;
    decrementAmount:any;
}

export function ListItens(props:Props){
    return(
    <div className='container-itens'>
        <div className='main-itens'>
        <img className='itens-img' src={props.item_img} alt='Imagem Produto'></img>
            <p><b>ITEM</b> {props.id}</p>
            <p className='text-center'>{props.descric}</p>
            {props.amount}
            <p><b>SECTOR</b> {props.fk_sector}</p>
            <p><b>R$</b> {props.valor}</p>
            <>{props.addItem}</>
            <>{props.decrementAmount}</>
            <>/</>
            <>{props.incrementAmount}</>
        </div>
    </div>
    )
}