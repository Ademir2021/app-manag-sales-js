type Props = {
    id: number;
    item: number;
    descric: string | number | "" | 0;
    amount: number;
    valor: number | string | "money";
    tItem: number | string | "money";
    editar: any;
}

export function Itens(props: Props) {
    return (
        <>
        <main className="container-global">
        <div className="main-global">
        <div style={{fontSize:'12px'}}>
            <table className='table bg-light mt-3'>
                <tbody>
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.descric}</td>
                        <td>{props.amount}</td>
                        <td>{props.valor}</td>
                        <td>{props.tItem}</td>
                        <td>{props.editar}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
            </main>
        </>
    )
}