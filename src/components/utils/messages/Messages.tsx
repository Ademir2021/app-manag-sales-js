type PropsMessages = {
    messages:string;
    subtotal:number | string;
    counter_:number | string;

}

export function Messages(props:PropsMessages) {
    return (
            <>
            <p style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color:"red"
            }}>{props.messages}</p>
                <p style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>{props.counter_}</p>
                 <p style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>{props.subtotal}</p>
            </>
    )
}