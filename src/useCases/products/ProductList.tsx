import { useState, useEffect, useContext } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { ProductList } from "../../components/products/ProductList";
import { TProductRegister } from "./type/TypeProducts";
import { BackHome } from "../../components/utils/backHome/BackHome"
import api from "../../services/api/api";
// import { AuthContext } from '../../context/auth'

export function ProductsList() {

    // const { user: isLogged }: any = useContext(AuthContext);

    const [products, setProducts] = useState<TProductRegister[]>([])

    async function getProducts () {
        try {
            // await api.get<TProductRegister[]>(`/products/${isLogged[0].id}`)
            await api.get<TProductRegister[]>('/products_home')
                .then(response => {
                    setProducts(response.data);
                });
        } catch (err) {
            alert("error occurred !!" + err);
        }
    };

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <BackHome />
            {products.length === 0 ? <p>Carregando...</p> : (
                products.map((product: TProductRegister) => (
                    <ProductList
                        key={product.id_product}
                        id={product.id_product}
                        created_at={FormatDate(product.created_at)}
                        updated_at={product.updated_at === null ?
                            "não houve atualização" : FormatDate(product.updated_at)}
                        name={product.descric_product}
                        val_max={product.val_max_product}
                        val_min={product.val_min_product}
                        brand={product.fk_brand}
                        sector={product.fk_sector}
                        bar_code={product.bar_code}
                        update={'Somente Listagem'}
                    />
                )))}
        </>
    )

}