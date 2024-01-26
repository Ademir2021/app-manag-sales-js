import { currencyFormat } from "../utils/currentFormat/CurrentFormat";

type Props = {
    id?: number;
    item?: number;
    descric: string | number | "" | 0;
    amount: number;
    valor: number;
    tItem: number;
    editar?: any;
    item_img?: string;
}

export function ListItensStore(props: Props) {
    return (
        <div className="container-global">
            <main className="main-global">
                <div style={{ fontSize: '12px' }}>
                    <table className='table table-hover  mt-3'>
                        <tbody>
                            <tr>
                                <th scope="row">{props.id}</th>
                                <td>{props.descric}</td>
                                <td>{props.amount}</td>
                                <td>{currencyFormat(props.valor)}</td>
                                <td>{currencyFormat(props.tItem)}</td>
                                <td>{props.editar}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}