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
                <a className='menu-home'
                    href={link}>
                    ( {locale} )
                </a>
            </strong>
        </>
    )
}
