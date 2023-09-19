import React from "react";
import InputMask from "react-input-mask";

import '../../components/global-module.css'


type IPersonForm = {
    children: string | number | readonly string[] | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: any
    message:string;
    alert:string;
}

export function PersonForm({
    children,
    handleChange,
    handleSubmit,
    message,
    alert,
}: IPersonForm): JSX.Element {
    return (
        <>
        <div className='container-global'>
            <fieldset className='main-global'>
                <form className='main-global-form'>
                    <strong>Cadastro de Clientes</strong>
                    <label>{alert}</label>
                    <label>{message}</label>
                    <input className=""
                        type="text"
                        name="name_pers"
                        placeholder='seu nome'
                        value={children.name_pers || ""}
                        onChange={handleChange}
                    />
                    <InputMask className=""
                        type="text"
                        name="cpf_pers"
                        placeholder="seu CPF"
                        mask="999.999.999-99"
                        mask-selectonfocus="true"
                        maxLength={14}
                        autoComplete="off"
                        maskChar={null}
                        value={children.cpf_pers || ""}
                        onChange={handleChange}
                    />
                    <InputMask className=""
                        type="text"
                        name="phone_pers"
                        placeholder="seu telefone celular"
                        mask="(99)99999-9999"
                        mask-selectonfocus="true"
                        maxLength={14}
                        autoComplete="off"
                        maskChar={null}
                        value={children.phone_pers || ""}
                        onChange={handleChange}
                    />
                    <input className=""
                        type="text"
                        name="address_pers"
                        placeholder={'seu endereço'}
                        value={children.address_pers || ""}
                        onChange={handleChange}
                    />
                    <input className=""
                        type="hidden"
                        name="fk_name_filial"
                        placeholder='Filial do cliente'
                        disabled
                        value={children.fk_name_filial || ""}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Registrar</button><br />
                    <a href='###'>{'Mantenha seu cadastro atualizado'}</a>
                </form>
            </fieldset>
        </div>
        </>
    )
}