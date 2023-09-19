import '../global-module.css'

type PropsProductFormUpdate = {
    children?: string | number | readonly string[] | undefined | any;
    handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit?:any;
    handleUpdate?: any;
    handleDelete?: any;
    modalRef?: any;
    className?: string;
    close?: any;
    alert:string;
    message:string;
}

export function ProductFormUpdate({
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
}:PropsProductFormUpdate){

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <div className="container-global">
                <div className="main-global">
                        <form className='main-global-form'>
                        <strong>Atualização de Produtos</strong>
                        <label>{alert}</label>
                        <label>{message}</label>
                            <input
                                type="hidden"
                                name="id_person"
                                value={children.id_product || ''}
                                placeholder='ID produto'
                                disabled
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="descric_product"
                                value={children.descric_product || ""}
                                placeholder='descrição do produto'
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="val_max_product"
                                mask-selectonfocus="true"
                                maxLength={14}
                                autoComplete="off"
                                value={children.val_max_product || ""}
                                placeholder="valor maxímo"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="val_min_product"
                                mask-selectonfocus="true"
                                maxLength={14}
                                autoComplete="off"
                                value={children.val_min_product || ""}
                                onChange={handleChange}
                                placeholder="valor mínimo"
                            />
                            <input
                                type="text"
                                name="fk_brand"
                                mask-selectonfocus="true"
                                maxLength={14}
                                autoComplete="off"
                                value={children.fk_brand || ''}
                                onChange={handleChange}
                                placeholder="marca"
                            />
                            <input
                                type="text"
                                name="fk_sector"
                                mask-selectonfocus="true"
                                maxLength={14}
                                autoComplete="off"
                                value={children.fk_sector || ''}
                                onChange={handleChange}
                                placeholder="setor"
                            />
                            <input
                                type="text"
                                name="bar_code"
                                value={children.bar_code || ''}
                                onChange={handleChange}
                                placeholder='código de barras'
                            />
                            <button onClick={handleSubmit}>Registrar</button>
                            <button onClick={handleUpdate}>Atualizar</button>
                            <button onClick={handleDelete}>Novo</button>
                            <button onClick={close}>Sair</button>
                            <a href='###'>{'Mantenha seu cadastro atualizado'}</a>
                        </form>
                    </div>
                </div>
            </div>
    )
}