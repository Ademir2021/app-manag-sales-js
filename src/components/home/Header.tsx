import './Header.css'

type PropsHeader={
    counter:number | string;
    subtotal:number | string;
}

export function Header(props:PropsHeader){
    return(
        <>
        <div className='header-home'>
        <strong className='header-home-carrinho'></strong>
        <strong className='header-home-counter'>{props.counter} Item(s)</strong>
        <strong className='header-home-sub-total'> {props.subtotal}</strong>
        </div>
        </>
    )
}