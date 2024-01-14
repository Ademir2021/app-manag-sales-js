import '../global-module.css'
import InputMask from "react-input-mask";

type IContact = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleSubmit: any
}

export function ContactForm({
    children,
    handleChange,
    handleSubmit
}: IContact) {

    return (
        <>
            <h2 className="p-1"><strong>Formulário de contato !</strong></h2>
            {/* <div ><i className="bi bi-pencil-fill"></i> Seus comentários !</div>
            <div ><i className="bi bi-question-square-fill"></i> Solicitações !</div>
            <div ><i className="bi bi-exclamation-square-fill"></i> Dúvidas !</div> */}

            <form method="" className="form-control input-contact bg-secondarys">

                <div className="mb-3">
                    <div className="form-label">Nome</div>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Seu nome" required
                        value={children.name || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <div className="form-label">Email </div>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Seu email" required
                        value={children.email || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <div className="form-label">Telefone</div>
                    <InputMask
                         mask="(99)99999-9999"
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Seu telefone" required
                        value={children.phone || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <div className="form-label">Seu texto</div>
                    <textarea
                        className="form-control"
                        name="comments"
                        placeholder="Deixe aqui seus comentários..." required
                        value={children.comments || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-primary  btn-block"
                    >Registrar</button>
                </div>
            </form>
        </>
    )
}