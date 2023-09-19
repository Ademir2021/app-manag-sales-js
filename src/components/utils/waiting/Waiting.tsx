type PropsWaiting = {
    waiting:string;
}

export function Waiting(props:PropsWaiting) {
    return (
            <p style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>{props.waiting}</p>
    )
}