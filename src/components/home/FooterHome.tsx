import { Globais } from '../globais/Globais' 
import './FooterHome.css'
import './cookies.css'

export function FooterHome() {
  // const date = new Date().getFullYear()
  return (
    <>
    <footer>
    <p id="cookies"></p>
    <p>
    <div>SIGA-NOS NAS REDES SOCIAIS</div>   
    <a target="_blank" href="https://www.facebook.com/ademir.souzadealmeida"><img className="social-icons" src="img/social/facebook.png"></img></a>
    <a target="_blank" href="https://www.instagram.com/ademir_devel"><img className="social-icons" src="img//social//instagram.png"></img></a>
    <a target="_blank" href="https://linkedin.com/in/ademir-dev"><img className="social-icons" src="img//social//linkedin.png"></img></a>
    <a target="_blank" href="https://github.com/Ademir2021"><img className="social-icons" src="img//social//github.png"></img></a>
    <a target="_blank" href="https://twitter.com/AdemirDeveloper"><img className="social-icons" src="img//social//twitter.png"></img></a>
    </p>

    <strong>Seguimentos</strong>
    <p>INFORMÁTICA, ANTENAS E TELECOM EM GERAL</p>
    <div className=''>
    <div className='container-footer'>
        <div className='main-footer'>
        <span><strong>Logistica</strong></span>
        <span><a href='##'>Rma</a></span>
        <span><a href='/invoice_sales'>Faturamento</a></span>
        <span><a href='/direct_payment'>Financeiro</a></span>
        <span></span>
        </div>
    </div>
    <div className='container-footer'>
        <div className='main-footer'>
        <span><strong>Cadastros</strong></span>
        <span><a href='form_person'>Pessoas</a></span>
        <span><a href='##'></a></span>
        <span><a href='##'></a></span>
        <span><a href='##'></a></span>
        </div>
    </div>
    <div className='container-footer'>
        <div className='main-footer'>
        <span><strong>Contatos</strong></span>
        <span><a href='https://www.centroinfo.com.br/contact'>Fale conosco</a></span>
        <span><a href='##'></a></span>
        <span><a href='##'></a></span>
        <span><a href='##'></a></span>
        </div>
    </div>
</div>

<div className='container-footer-img'>
<img src='/img/formas_entrega.png' className='itens-img-footer-entrega'></img>
</div>

<div className='container-footer'>

<img src='/img/band_cartao_creditos.png' className='itens-img-footer-pyment'></img>
</div>

    <hr/>

    <a href="#"><img src="img//btn-top.png" className="btn-top" alt="Voltar ao topo."></img></a>
    {/* Google Maps */}
    <div className="maps">
    <p>
    <div><h1>Localização Geográfica.</h1></div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8920.78111493576!2d-52.01010715806461!3d-24.032808720407672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0eeb219df7154b0!2sCENTRO%20INFORMATICA!5e0!3m2!1sen!2sbr!4v1631551065418!5m2!1sen!2sbr" className="maps"  loading="lazy"></iframe><br/>
    {/* fim */}
    </p>
    </div>
    <hr></hr>

    <p>{ Globais.rights_reserved }</p>
    <p>{ Globais.address }</p>

    <p>Powered by <a href={ Globais.URL } title="Power By." target="_self">{ Globais.title }</a> | Contato {Globais.phone}</p>
    
    <strong>Política de cookies:</strong>
    <span>
        O <b>cookies</b> pemite que o website "lembre" suas ações ou preferencias ao longo do tempo. A
        maioria dos navegadores da internet aceitam <a>cookies;</a> entretanto, os usuários podem configurar
        seus navegadores para recusar certos tipos de <a>cookies</a> ou <a>cookies</a> específicos.
        <a  href={ Globais.URL + '/#cookies' } title="Politica de cookies">cokies.</a>
    </span>
<p className='p-1'></p>
<img className="site-ssl" src='img/ssl_cert.png' alt="Certificado SSL"></img>

    <hr></hr>
    <div className='text-center'><span>Desenvolvido pela agência: <b>CENTRO INFORMÁTICA </b> | <a target="_blank" href='http://www.centroinfo.com.br'>www.centroinfo.com.br</a> : )</span></div>

    </footer>
  
    </>
  )
}