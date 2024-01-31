import { Globais } from '../globais/Globais'
import './FooterHome.css'
import './cookies.css'

export function FooterHome() {

    return (
        <>
            <footer>
                <p id="cookies"></p>
                <p>
                   <div><strong>SIGA-NOS NAS REDES SOCIAIS</strong></div>
                    <a target="_blank" href="https://www.facebook.com/ademir.souzadealmeida"><img className="social-icons" src="img/social/facebook.png"></img></a>
                    <a target="_blank" href="https://www.instagram.com/ademir_devel"><img className="social-icons" src="img//social//instagram.png"></img></a>
                    <a target="_blank" href="https://linkedin.com/in/ademir-dev"><img className="social-icons" src="img//social//linkedin.png"></img></a>
                    <a target="_blank" href="https://github.com/Ademir2021"><img className="social-icons" src="img//social//github.png"></img></a>
                    <a target="_blank" href="https://twitter.com/AdemirDeveloper"><img className="social-icons" src="img//social//twitter.png"></img></a>
                </p>

                <strong>Seguimentos</strong>
                <p>INFORMÁTICA, ANTENAS E TELECOM EM GERAL</p>

                <strong>CANAIS DE ACESSO</strong>
                {/* <hr></hr> */}
                <div className=''>
                    <div className='container-footer'>
                        <div className='main-footer'>
                            <ul>
                            <li><a href='contact'>Rma</a></li>
                            <li><a href='invoice_sales'>Faturamento</a></li>
                            <li><a href='direct_payment'>Financeiro</a></li>
                            <li><a href='pe'>Carrinho</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='container-footer'>
                        <div className='main-footer'>
                            <ul>
                            <li><a href='form_person'>Clientes</a></li>
                            <li><a href='sale'>Compras</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='container-footer'>
                        <div className='main-footer'>
                            <ul>
                            <li><a href={"contact"}>Fale conosco</a></li>
                            <li><a href='contacts_list'>Posts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p><a href="#"><img src="img//btn-top.png" className="btn-top" alt="Topo"></img></a></p>

                <ul><li><a href='contact'>Consulte nossas Formas de Entregas</a></li></ul>
            <hr></hr>
               <a href={'direct_payment'}>
              <b>Pague com</b>
                    <img src='/img/band_cartao_creditos.png' className='footer-payment'/>
                </a>
            <p></p>
                {/* Google Maps */}
                <div className="maps">
                    <p>
                        {/* <strong>Localização Geográfica</strong> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8920.78111493576!2d-52.01010715806461!3d-24.032808720407672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0eeb219df7154b0!2sCENTRO%20INFORMATICA!5e0!3m2!1sen!2sbr!4v1631551065418!5m2!1sen!2sbr" className="maps" loading="lazy"></iframe><br />
                        {/* fim */}
                    </p>
                </div>
                {/**Text Footer */}
                <div className='text-footer'>
                    <div>{Globais.rights_reserved}</div>
                    <div>{Globais.address}</div>
                    <div>Powered by <a href={Globais.URL} title="Powered By." target="_self">{Globais.title}</a> Contato {Globais.phone}</div>
                    <br/>
                    <strong>Política de cookies: </strong>
                    <span>
                        O <b>cookies</b> pemite que o website "lembre" suas ações ou preferencias ao longo do tempo. A
                        maioria dos navegadores da internet aceitam <a>cookies;</a> entretanto, os usuários podem configurar
                        seus navegadores para recusar certos tipos de <a>cookies</a> ou <a>cookies</a> específicos.
                        <a href={Globais.URL + '/#cookies'} title="Politica de cookies">cokies</a>
                    </span>
                    <div>
                        <img className="site-ssl" src='img/ssl_cert.png' alt="Certificado SSL"></img>
                    </div>
                    <p className='text-center'><span>Desenvolvido pela agência: <b>CENTRO INFORMÁTICA </b><a target="_blank" href={Globais.URL_CENTROINFO}>www.centroinfo.com.br</a></span></p>
                </div>
            </footer>
        </>
    )
}