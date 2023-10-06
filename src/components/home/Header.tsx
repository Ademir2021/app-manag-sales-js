import './Header.css'

type PropsHeader = {
    counter: number | string;
    subtotal: number | string;
    contact:any;
}

export function Header(props: PropsHeader) {
    return (
        <>  <div className='header-home'>
            <strong className='header-home-carrinho' >
                {props.counter}
                <img alt='Carrinho'
                    src="img/carrinho_counter.png">
                </img></strong>
            <a className='header-home-sub-total'>
                {props.subtotal}</a>
                 <a className='header-contact'>{props.contact}</a>
                 </div>
        </>
    )
}