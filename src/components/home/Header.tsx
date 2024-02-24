import { Globais } from '../globais/Globais';
import './Header.css'

type PropsHeader = {
    counter: number | string;
    subtotal: number | string;
    // contact:any;
}

export function Header(props: PropsHeader) {
    return (
        <>  <div className='header-home'>
          <a href='pe' > <strong className='header-home-carrinho' >
                {props.counter}
                <img alt='Carrinho'
                    src="img/carrinho_counter.png">
                </img></strong></a>
            <a className='header-home-sub-total'>
                {props.subtotal}</a>
                {<a href={"/contact"} className='header-contact-speak'>Fale Conosco {Globais.phone}</a>}
                 </div>
        </>
    )
}