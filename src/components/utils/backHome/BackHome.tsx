import { checksUserLogged } from "../checksUserLogged/ChecksUserLogged"

export const BackHome = () => {

    let link = ''
    let locale = ''
    if (checksUserLogged() !== undefined) {
        link = '/dashboardefault'
        locale = "Retornar - Panel"
    } else {
        link = '/'
        locale = 'Retornar - Home'
    }
    return (
        <>
            <strong>
                <div className="text-center">
                    <a href={link}><img
                        src="img/logo_centroinfo.png"
                        style={{ width: '130px', height: '48px' }}
                        alt="Logo Centro Informática" /></a>
                </div>
                <div className="p-1"></div>
                <a className='menu-home'
                    href={link}>
                    ( {locale} )
                </a>
            </strong>
        </>
    )
}
