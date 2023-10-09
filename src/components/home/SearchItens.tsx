import './SearchItens.css'

type PropsNavBar = {
    list?: HTMLSelectElement | HTMLOptionElement | any;
    handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined | any;
    descric?: string;
};

export function SearchItens(props: PropsNavBar): JSX.Element {

    return (
        <>
            <section className="p-3">
                    <form onSubmit={props.handleSubmit} className="d-flex mt-3 mt-lg-0" role="search">
                        <datalist id='data-itens' >{props.list}</datalist>
                        <input className="form-control p-2 mb-3" type="search"
                            placeholder="Do que você precisa ?" aria-label="Search"
                            list='data-itens' name='descric' value={props.descric}
                            onChange={props.handleChange} />
                       <button className="btn-navbar-seach" type="submit">
                        <img src='img/icons8-pesquisar.png'
                        className='btn-navbar-img'></img></button>
                    </form>
            </section>
        </>
    )
}