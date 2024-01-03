import { useState, useEffect} from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { ProductList } from "../../components/products/ProductList";
import { TBrand, TProductRegister, TSector } from "./type/TypeProducts";
import { BackHome } from "../../components/utils/backHome/BackHome"
import api from "../../services/api/api";

export function ProductsList() {

    const [products, setProducts] = useState<TProductRegister[]>([]);

    const [brands, setBrand] = useState<TBrand[]>([]);

    const [sectors, setSector] = useState<TSector[]>([]);

    /**
     * Listar Produtos
     */
    async function getProducts() {
        try {
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

    /**
     * Listar Marca
     */
    async function getBrands() {
        try {
            await api.get<TBrand[]>('/brands')
                .then(response => {
                    setBrand(response.data);
                });
        } catch (err) {
            alert("error occurred !!" + err);
        }
    };
    useEffect(() => {
        getBrands()
    }, [])

    /**
     * Listar Setor
     */
    async function getSectors() {
        try {
            await api.get<TSector[]>('/sectors')
                .then(response => {
                    setSector(response.data);
                });
        } catch (err) {
            alert("error occurred !!" + err);
        }
    };
    useEffect(() => {
        getSectors()
    }, [])

    /**
     * Setar o nome da Marca
     * @param idBrand 
     * @returns brand
     */
    function  nameBrands(idBrand: number) {
        for (let i = 0; i < brands.length; i++) {
            if (brands[i].id_brand === idBrand) {
                const brand:string = brands[i].name_brand;
                return brand;
            }
        }
    }

    /**
     * Setar o nome do Setor
     * @param idSector
     * @returns 
     */
    function  nameSector(idSector: number) {
        for (let i = 0; i < sectors.length; i++) {
            if (sectors[i].id_sector === idSector) {
                const sector:string = sectors[i].name_sector;
                return sector;
            }
        }
    }
    
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
                        brand={nameBrands(product.fk_brand)}
                        sector={nameSector(product.fk_sector)}
                        bar_code={product.bar_code}
                        image={product.image}
                        update={'Somente Listagem'}
                    />
                )))}
        </>
    )
}