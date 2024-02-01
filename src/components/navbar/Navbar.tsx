import { checksUserLogged, checkAdminPrivilege } from "../utils/checksUserLogged/ChecksUserLogged";
import { Globais } from "../globais/Globais";
import { Logo } from "../logo/Logo";

import "../assets/dist/css/bootstrap.min.css"
import "./Navbar.css"

export function NavBar() {

    const privilAdmin = Globais.privilAdmin;
    const privilegeShopping = Globais.checksUserLogged;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'rgb(237,237,237', border: '1px solid rgb(237,237,237)'}} aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/dashboardefault">{<Logo />}</a>
                    <button className="navbar-toggler" style={{ background: 'gray', border: 'none' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                        aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end bg-secondary-old" style={{ background: 'rgb(237, 237, 237)', border: '3px solid gray', padding: '0px' }} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label"><a href={Globais.URL_CENTROINFO + '/contact'}>Fale conosco</a></h5>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <b>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a className="nav-link" aria-current="page" href="/dashboardefault">PAINEL</a> :
                                        <a className="nav-link" aria-current="page" href="/">HOME</a>}
                                </li>
                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a className="nav-link" aria-current="page" href="/pe">CARRINHO</a> :
                                        <a className="nav-link" aria-current="page" href="/pe">CARRINHO</a>}
                                </li>

                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a className="nav-link" href='/register'>CRIAR CONTA</a> :
                                        <a className="nav-link" href='/user_update'>SUA CONTA</a>}
                                </li>

                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a className="nav-link" href='/login'>ENTRAR</a> :
                                        <a className="nav-link" href='/logout'>SAIR</a>}
                                </li>
                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a className="nav-link" href="/sale">COMPRAS</a> :
                                        <a className="nav-link" href="/sale">SUAS COMPRAS</a>}
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">CADASTROS</a>
                                    <ul className="dropdown-menu" style={{ background: 'rgb(237,237,237)', border: '0px solid gray', padding: '12px' }}>
                                        <li><a className="dropdown-item nav-link" href="/form_person">CLIENTES</a></li>

                                        <li>{checkAdminPrivilege() === privilAdmin ? <a className="dropdown-item nav-link" href="/form_product">PRODUTOS</a> :
                                            <></>}</li>
                                        <li>

                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item nav-link" href="/person_update">ATUALIZAR - CLIENTES</a></li>
                                        <li>{checkAdminPrivilege() === privilAdmin ? <a className="dropdown-item nav-link" href="/product_update">ATUALIZAR - PRODUTOS</a> :
                                            <></>}</li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">CONSULTAR</a>
                                    <ul className="dropdown-menu" style={{ background: 'rgb(237, 237, 237)', border: '0px solid gray', padding: '12px' }}>
                                        <li><a className="dropdown-item nav-link" href="/person_list">CLIENTES</a></li>
                                        <li><a className="dropdown-item nav-link" href="/product_list">PRODUTOS</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item nav-link" href="/list_sale">EMITIR NOTAS</a></li>
                                        <li><a className="dropdown-item nav-link" href="/users_list">USUÁRIOS</a></li>
                                    </ul>
                                </li>
                            </ul>
                            </b>
                        </div>
                    </div>
                </div>
            </nav>
            <p style={{ color: 'rgb(34, 34, 147)', fontSize: '14px' }}>{Globais.calendar}</p>
        </>
    )
}