import '../global-module.css'

type Props = {
    id: number;
    create: Date | any;
    name: string | number;
    total_prod: number;
    disc_sale: number;
    total_note: number;
    issueNote: HTMLAnchorElement | string | undefined | HTMLLabelElement | any;
}

export function SalesList(props: Props) {
    return (
        <>
            <div className='container-global'>
                <div className='main-global'>
                    <span className='main-global-form'>
                        <strong>Venda</strong>{props.id}<br />
                        <strong>Emissão</strong>{props.create}<br />
                        <strong>Cliente</strong>{props.name}<br />
                        <strong>Total produtos</strong>{props.total_prod}<br />
                        <strong>Desconto</strong>{props.disc_sale}<br />
                        <strong>Total nota</strong>{props.total_note}<br />
                        <label>{props.issueNote}</label>
                    </span>
                </div>
            </div>
        </>
    )
}
