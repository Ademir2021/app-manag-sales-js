import './SearchItens.css'

type SearchItens = {
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
    descric: string;
    messageItems: string;
    selectSector: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    sectors: Array<object>;
    products: Array<object>
}

export function SearchItens(props: SearchItens) {

    return (
        <>
            <select className='search-select' onChange={props.selectSector} >
                <option>Todos</option>
                {props.sectors.map((sector: any) => (
                    <option key={sector.id_sector}>
                        {sector.name_sector}</option>))}
            </select>

            <label className='search-items-message'>{props.messageItems}</label>
            <section className="p-1">
                <form onSubmit={props.handleSubmit} className="d-flex mt-1 mt-lg-0" role="search">
                    <datalist id='data-itens' ><select>{props.products.map((product: any) => (
                        <option key={product.id_product}>
                            {product.descric_product}</option>))}
                    </select></datalist>

                    <input className="form-control p-2 mb-3 text-center" type="search"
                        placeholder="Do que você precisa ?" aria-label="Search"
                        list='data-itens' name='descric' value={props.descric}
                        style={{ backgroundColor: 'white' }}
                        onChange={props.handleChange} />
                    <button className="btn-search" type="submit">
                        <img src='img/icons8-pesquisar.png'
                            className='search-items-img'></img></button>
                </form>
            </section>
        </>
    )
}