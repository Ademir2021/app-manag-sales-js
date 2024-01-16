import '../global-module.css'

interface ICepsForm {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: any
    alert: string;
    message: string;
}

export function CepsForm({
    children,
    handleChange,
    handleSubmit,
    alert,
    message
}: ICepsForm) {

    return (
        <>
            <div className="container-global">
                <fieldset className="main-global">
                    <form className="main-global-form">
                        <strong>Cadastro de Ceps</strong>
                        <label>{alert}</label>
                        <label>{message}</label>
                        <input
                            type="text"
                            name="num_cep"
                            placeholder='CEP de sua cidade'
                            value={children.num_cep || ""}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="public_place"
                            placeholder='Logradouro'
                            value={children.public_place || ""}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="type_cep"
                            placeholder='Tipo de CEP'
                            value={children.type_cep || ""}
                            onChange={handleChange}
                        />

                        <input
                            type="number"
                            name="num_initial"
                            placeholder='número inicial'
                            value={children.num_initial || ""}
                            onChange={handleChange}
                        />

                        <input
                            type="number"
                            name="num_final"
                            placeholder='número final'
                            value={children.num_final || ""}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="complement"
                            placeholder='Complemento'
                            value={children.complement || ""}
                            onChange={handleChange}
                        />

                        <label>
                            <strong>Selecione um Estado </strong>
                            {""}
                        </label>

                        <label>
                            <strong>Selecione um Município</strong>
                            {""}
                        </label>

                        <input
                            type="text"
                            name="complement"
                            placeholder='Complemento'
                            value={children.complement || ""}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder='Cidade'
                            value={children.city || ""}
                            onChange={handleChange}
                        />

                        <button onClick={handleSubmit}>Registrar</button>
                        <a href='###'>{''}</a>
                    </form>
                </fieldset>
            </div>
        </>
    )
}