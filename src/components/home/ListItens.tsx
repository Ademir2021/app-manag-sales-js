import { checksUserLogged } from '../utils/checksUserLogged/ChecksUserLogged';
import './ListItens.css'

type PropsListItens = {
    handleItem: any;
    id?: number;
    item_img: string;
    item?: number;
    descric: string | number;
    sector: number | string | undefined;
    brand: number | string | undefined;
    amount: number | undefined;
    valor: number;
    tItem?: number;
    selectAmount: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    itemParameter: {};
}

export function ListItens(props: PropsListItens) {
    return (
        <div className='container-itens'>
            <div className='main-itens'>
                <img className='itens-img' src={props.item_img} alt="Aguardando Item !"></img>
                <ul style={{ color: 'textGray' }}>
                    <li><b>ITEM</b> {props.id}</li>
                    <li>{props.descric}</li>
                    {props.amount}
                    <li><b>Marca</b> {props.brand}</li>
                    <li><b>Setor</b> {props.sector}</li>
                    {checksUserLogged() !== undefined ? <li><b>R$</b> {props.valor}</li> : null}
                </ul>

                {checksUserLogged() !== undefined ?
                    < select onChange={props.selectAmount}
                    ><option>{"Quant: 1"}</option>
                        <option>{2}</option>
                        <option>{3}</option>
                        <option>{4}</option>
                        <option>{5}</option>
                        <option>{6}</option>
                        <option>{7}</option>
                        <option>{8}</option>
                        <option>{9}</option>
                        <option>{10}</option>
                    </select> : null}

                {checksUserLogged() !== undefined ? <div className='mb-1'><a href='pe'>Ir para o Carrinho</a></div> : null}

                {checksUserLogged() !== undefined ? <button className='btn btn-primary mb-2' onClick={() =>
                    props.handleItem(props.itemParameter)}>Comprar</button> : <button className='btn btn-primary mb-2'
                        onClick={() => { window.location.replace("/pe") }}>Solicitar cotação</button>}
            </div>
        </div>
    )
}