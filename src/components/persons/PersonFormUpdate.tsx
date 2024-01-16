import InputMask from "react-input-mask";

import '../global-module.css'

type PropsPersonsFormUpdate = {
    children: string | number | readonly string[] | undefined | any
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    handleSubmit: any
    handleUpdate: any
    handleDelete: any
    modalRef?: any
    className?: string
    close?: any
    alert: string
    message: string
}

export function PersonFormUpdate({
    handleChange,
    handleSubmit,
    children,
    handleUpdate,
    handleDelete,
    modalRef,
    className,
    close,
    alert,
    message
}: PropsPersonsFormUpdate) {
    return (
        <div ref={modalRef} className={`${className} modal`}>
            <div className="container-global">
                <div className="main-global">
                    <form className="main-global-form">
                        <strong>Cadastro de Clientes</strong>
                        <label>{alert}</label>
                        <label>{message}</label>
                        <input
                            type="hidden"
                            name="id_person"
                            value={children.id_person || ""}
                            placeholder="ID do cliente"
                            disabled
                            onChange={handleChange}
                        />
                        <div><a>Nome</a></div>
                        <input
                            type="text"
                            name="name_pers"
                            value={children.name_pers || ""}
                            placeholder="Seu nome"
                            onChange={handleChange}
                        />
                        <div><a>CPF</a></div>
                        <InputMask
                            type="text"
                            name="cpf_pers"
                            placeholder="Seu CPF"
                            mask="999.999.999-99"
                            mask-selectonfocus="true"
                            maxLength={14}
                            autoComplete="off"
                            maskChar={null}
                            value={children.cpf_pers}
                            onChange={handleChange}
                        />
                        <div><a>Telefone</a></div>
                        <InputMask
                            type="text"
                            name="phone_pers"
                            placeholder="Seu telefone"
                            mask="(99)99999-9999"
                            mask-selectonfocus="true"
                            maxLength={14}
                            autoComplete="off"
                            maskChar={null}
                            value={children.phone_pers || ''}
                            onChange={handleChange}
                        />
                        <div><a>Endereço</a></div>
                        <input
                            type="text"
                            name="address_pers"
                            value={children.address_pers || ''}
                            placeholder="Seu endereço"
                            onChange={handleChange}
                        />
                        <div><a>Bairro</a></div>
                        <input
                            type="text"
                            name="bairro_pers"
                            value={children.bairro_pers || ''}
                            placeholder="Seu bairro"
                            onChange={handleChange}
                        />
                        <div><a>CEP</a></div>
                        <InputMask
                            mask={"99.999-999"}
                            type="text"
                            name="num_cep"
                            value={children.num_cep || ''}
                            placeholder="CEP de sua cidade"
                            onChange={handleChange}
                        />
                        <div><a>Cidade</a></div>
                        <input
                            type="text"
                            name="name_city"
                            value={children.name_city || ''}
                            placeholder="Cidade"
                            disabled
                            onChange={handleChange}
                        />
                           <div><a>Estado</a></div>
                        <input
                            type="text"
                            name="uf"
                            value={children.uf || ''}
                            placeholder="Estado"
                            disabled
                            onChange={handleChange}
                        />
                        <input
                            type="hidden"
                            name="fk_name_filial"
                            value={children.fk_name_filial || ''}
                            placeholder="Filial do cliente"
                            disabled
                            onChange={handleChange}
                        />
                        <input
                            type="hidden"
                            name="fk_id_user"
                            value={children.fk_id_user || ''}
                            placeholder="Usuário do cliente"
                            disabled
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit}>Registrar</button>
                        <button onClick={handleUpdate} >Atualizar</button>
                        <button onClick={handleDelete}>Novo</button>
                        <button onClick={close}>Sair</button>
                        <a href='###'>{'Mantenha seu cadastro atualizado'}</a>
                    </form>

                </div>
            </div>
        </div>
    )
}