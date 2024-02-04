import './SearchItens.css'

type PropsNavBar = {
    list?: HTMLSelectElement | HTMLOptionElement | any;
    handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined | any;
    descric?: string;
    messageItems?:any;

};

export function SearchItens(props: PropsNavBar): JSX.Element {

    return (
        <>
            <label className='search-items-message'>{props.messageItems}</label>
            <section className="p-1">
                    <form onSubmit={props.handleSubmit} className="d-flex mt-3 mt-lg-0" role="search">
                        <datalist id='data-itens' >{props.list}</datalist>
                        <input className="form-control p-2 mb-3 text-center" type="search"
                            placeholder="Do que você precisa ?" aria-label="Search"
                            list='data-itens' name='descric' value={props.descric}
                            style={{backgroundColor:'white'}}
                            onChange={props.handleChange} />   
                       <button className="btn-search" type="submit">
                        <img src='img/icons8-pesquisar.png'
                        className='search-items-img'></img></button>
                    </form>
            </section>
        </>
    )
}