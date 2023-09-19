import { checksUserLogged, checkAdminPrivilege } from "../utils/checksUserLogged/ChecksUserLogged";
import { Globais } from "../globais/Globais";
import { Logo } from "../logo/Logo";

import "../assets/dist/css/bootstrap.min.css"
import '../global-module.css'

export function NavBar() {

    const privilAdmin = Globais.privilAdmin;
    const privilegeShopping = Globais.checksUserLogged;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary" aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <a className="navbar-brand bg-secondary" href="/dashboardefault">{<Logo />}</a>
                    <button className="navbar-toggler" style={{ background: 'black', border: 'none' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                        aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end bg-secondary" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Store online.</h5>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a className="nav-link active" aria-current="page" href="/">Home</a> :
                                        <a className="nav-link active" aria-current="page" href="/dashboardefault">Panel</a>}
                                </li>
                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a style={{ color: 'black' }} className="nav-link active" aria-current="page" href="/pe">Pedido</a> :
                                        <a style={{ color: 'black' }} className="nav-link active" aria-current="page" href="/pe">Pedido</a>}
                                </li>

                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a style={{ color: 'black' }} className="nav-link" href='/register'>Criar conta</a> :
                                        <a style={{ color: 'black' }} className="nav-link" href='/user_update'>Sua conta</a>}
                                </li>

                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a style={{ color: 'black' }} className="nav-link" href='/login'>Login</a> :
                                        <a style={{ color: 'black' }} className="nav-link" href='/logout'>Logout</a>}
                                </li>
                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ? <a style={{ color: 'black' }} className="nav-link" href="/sale">Compras</a> :
                                        <a style={{ color: 'black' }} className="nav-link" href="/sale">Suas compras</a>}
                                </li>

                                <li className="nav-item dropdown">
                                    <a style={{ color: 'black' }} className="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Cadastros</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/form_person">Pessoa (Privilégio comprador)</a></li>

                                        <li>{checkAdminPrivilege() === privilAdmin ? <a className="dropdown-item" href="/form_product">Produto (Privilégio admin)</a> :
                                            <a className="dropdown-item" href="#">-</a>}</li>
                                        <li>

                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="/person_update">Up Pessoa (Privilégio comprador)</a></li>
                                        <li>{checkAdminPrivilege() === privilAdmin ? <a className="dropdown-item" href="/product_update">Up Produto (Privilégio admin)</a> :
                                            <a className="dropdown-item" href="#">-</a>}</li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a style={{ color: 'black' }} className="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">Listagem</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/person_list">Pessoas</a></li>
                                        <li><a className="dropdown-item" href="/product_list">Produtos</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="/list_sale">Notas de Venda</a></li>
                                        <li><a className="dropdown-item" href="/users_list">Usuários</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <i>{Globais.calendar}</i>
        </>
    )
}