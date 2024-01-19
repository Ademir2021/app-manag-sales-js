type PropsMessages = {
    messages:string;
    subtotal:number | string;
    counter_:number | string;

}

export function Messages(props:PropsMessages) {
    return (
            <>
            <b style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color:"red"
            }}>{props.messages}</b>
                <b style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>{props.counter_}</b>
                 <b style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>{props.subtotal}</b>
            </>
    )
}