import '../global-module.css'
import InputMask from 'react-input-mask';

interface ICepsForm {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: any
    alertCep: string;
    message: string;
    listUf: any;
    listCity: any;
}

export function CepsForm({
    children,
    handleChange,
    handleSubmit,
    alertCep,
    message,
    listUf,
    listCity,
}: ICepsForm) {

    return (
        <>
            <div className="container-global">
                <fieldset className="main-global">
                    <form className="main-global-form">
                        <strong>Cadastro de Ceps<a href="form_person">Cadastro de clientes</a></strong>
                        <label>{alertCep}</label>

                        <div><a>Cep</a></div>
                        <InputMask
                            mask={"99.999-999"}
                            type="text"
                            name="num_cep"
                            placeholder='CEP de sua cidade - Confirmar/Registrar'
                            value={children.num_cep || ""}
                            onChange={handleChange}
                        />
                        <div><a>Endereço</a></div>
                        <input
                            type="text"
                            name="public_place"
                            placeholder='Logradouro'
                            value={children.public_place || ""}
                            onChange={handleChange}
                        />
                        <div><a>Tipo de Cep</a></div>
                        <input
                            type="text"
                            name="type_cep"
                            placeholder='Tipo de CEP'
                            value={children.type_cep || ""}
                            onChange={handleChange}
                        />
                        <div><a>Número inicial</a></div>
                        <input
                            type="number"
                            name="num_initial"
                            placeholder='número inicial'
                            value={children.num_initial || ""}
                            onChange={handleChange}
                        />
                        <div><a>Número Final</a></div>
                        <input
                            type="number"
                            name="num_final"
                            placeholder='número final'
                            value={children.num_final || ""}
                            onChange={handleChange}
                        />
                        <div><a>Complemento</a></div>
                        <input
                            type="text"
                            name="complement"
                            placeholder='Complemento'
                            value={children.complement || ""}
                            onChange={handleChange}
                        />

                        <label>{message}</label>

                        <label>
                            <strong>Selecione um Estado </strong>
                            {listUf}
                        </label>

                        <label>
                            <strong>Selecione um Município</strong>
                            {listCity}
                        </label>

                        {/* <input
                            type="text"
                            name="city"
                            placeholder="Município"
                            value={children.city || ""}
                            onChange={handleChange}
                            disabled
                        /> */}

                        {/* <button type="reset">Reset</button> */}
                        <button onClick={handleSubmit}>Registrar</button>
                        <a href='###'>{''}</a>
                    </form>
                </fieldset>
            </div>
        </>
    )
}