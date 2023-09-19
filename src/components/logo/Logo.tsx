import "./Logo.css"

export function Logo() {
    const logo = <img
        src="img/logo_centroinfo.png"
        className="logo"
        alt="Centro Informática"
    >
    </img>
    return (
        <>{logo}</>
    )
}