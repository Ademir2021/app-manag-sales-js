import { currencyFormat } from "../currentFormat/CurrentFormat";

type PropsMessages = {
    messages:string;
    subtotal:number;
    counter_:number;

}

export function MessagesCar(props:PropsMessages) {
    return (
            <ul style={{color:'blue'}}>
                <span>{props.messages}</span>
                <li><b>Quantidade</b> ( {props.counter_} )</li>
                <li><b>Total</b> ( {currencyFormat(props.subtotal)} )</li>
            </ul>
    )
}