import { useState, useEffect, useCallback, useContext } from "react";
import { RegisterSaleForm } from "../../components/sales/RegisterSaleForm";
import { Itens } from "../../components/sales/Itens";
import { TProductRegister, TItens } from "../products/type/TypeProducts";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import api from "../../services/api/api";

export function RegisterSale() {

    const [product, setProduct] = useState<TItens>(
        { id: 0, item: 0, descric: "", valor: 0, amount: 1, tItem: 0 });
    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [itens, setItens] = useState<TItens[]>([]);
    const [id, setId] = useState<number>(1);
    const [editId, setEditId] = useState<number | null | any>(null);
    const [, setPreco] = useState<number>(0);
    const [totalItens, setTotalItens] = useState<number>(0)
    const [statusBtnSaleSubmit, setStatusBtnSaleSubmit] = useState<"Iniciar Pedido" | "Faturar Pedido">("Iniciar Pedido");
    const [statusBtnSaveUpdate, setStatusBtnSaveUpdate] = useState<"Salvar Item" | "Atualizar Item">("Salvar Item");
    const [itemImg, setIemImg] = useState<string>('./img/car_sale.jpg');
    const [itenStorage, setItenStorage] = useState<TItens[]>([]);
    const [statuStore, setStatuStore] = useState<boolean>(false)

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    };

    const getProducts = useCallback(async () => {
        try {
            await api.get<TProductRegister[]>('/products_home')
                .then(response => { setProducts(response.data) })
        } catch (err) { console.log("error occurred !" + err) }
    }, [setProducts]);
    useEffect(() => { getProducts() }, [setProduct]);

    function updateListProduct(item: TItens) {
        setStatusBtnSaveUpdate("Atualizar Item");
        setEditId(item.id);
        product.id = item.id;
        product.item = item.item;
        product.descric = item.descric;
        product.amount = item.amount;
        product.valor = item.valor;
        product.tItem = item.amount * item.valor;
        product.image = item.image;
        if (product.image === null) {
            setIemImg('./img/car_sale.jpg')
        } else {
            findProducts();
        }
    };

    function findProducts() {
        for (let i = 0; products.length > i; i++) {
            if (product.descric == products[i].id_product
                || product.descric === products[i].bar_code
                || product.descric === products[i].descric_product) {
                if (editId !== null) {
                    product.id = editId;
                } else {
                    product.id = id;
                }
                product.item = products[i].id_product;
                product.descric = products[i].descric_product;
                product.valor = products[i].val_max_product;
                product.tItem = product.valor * product.amount;
                if (products[i].image === null) {
                    setIemImg('./img/car_sale.jpg')
                } else {
                    setIemImg("./img/img_itens/" + products[i].image);
                }
            }
        }
    };

    function deleteProduct() {
        for (let i = 0; itens.length > i; i++) {
            setEditId(editId)
            if (itens[i].id === editId) {
                itens.splice(i, 1);
                setEditId(null);
                openClearNewSale();
                setStatusBtnSaleSubmit("Faturar Pedido");
                sumItens();
            }
        }
    };

    function verifItem(product: TItens) {
        if (product.item !== 0) {
            for (let i = 0; itens.length > i; i++)
                if (product.item === itens[i].item && editId == null) {
                    return alert("Item já foi lançado")
                }
            setId(id + 1);
            return itens.push(product)
        } else {
            alert("Item não localizado")
        }
    };

    function verifItemUP(product: TItens) {
        for (let i = 0; itens.length > i; i++)
            if (product.item === itens[i].item && editId !== null) {
                itens[i].amount = product.amount
                itens[i].tItem = product.amount * product.valor
                return alert("Item já foi lançado ! a quantidade é de " + product.amount + " item(s)")
            }
        deleteProduct();
        setItens(itens);
        return itens.push(product);
    };

    function sumItens() {
        let sum = 0
        for (var i = 0; i < itens.length; i++) {
            sum += (itens[i].amount * itens[i].valor)
        }
        setTotalItens(sum)
        return sum
    };

    function handleSaveUpdate(e: Event) {
        e.preventDefault();
        if (editId === null) {
            findProducts();
            verifItem(product);
            sumItens();
            openClearNewSale();
            setStatusBtnSaleSubmit("Faturar Pedido");
        } else {
            findProducts();
            verifItemUP(product);
            sumItens();
            openClearNewSale();
            setEditId(null);
            setPreco(0);
        }
    };

    function handleDelete(e: Event) {
        e.preventDefault();
        if (editId !== null) {
            if (window.confirm(
                "Realmente deseja remover o Item de ID: "
                + editId + " ?")) {
                deleteProduct();
                openClearNewSale();
            }
        } else {
            alert("Busque um novo item !");
            openClearNewSale();
        }
    };

    function handleSubmit(e: Event) {
        e.preventDefault();
        if (statusBtnSaleSubmit === "Iniciar Pedido") {
            itens.length === 0 ? alert("Iniciar compra !") :
                openClearNewSale();
            setStatusBtnSaleSubmit("Faturar Pedido");
        } else {
            setStatusBtnSaleSubmit("Iniciar Pedido");
            if (itens.length === 0) {
                alert("Informe ao menos um item e clique em salvar !");
            } else {
                alert("Seu pedido será gravado");
                const itens_store_res: [] | any = localStorage.getItem('i');
                if (itens_store_res === null) {
                    localStorage.setItem("i", JSON.stringify(itens))
                    localStorage.setItem("s", JSON.stringify(sumItens().toFixed(2)));
                    alert("Pedido gravado com sucesso")
                    setTimeout(() => {
                        window.location.replace("/invoice_sales");
                    }, 1000);
                } else {
                    alert("Aguarde retorno! existe um pedido  em aberto !");
                }
            }
        }
    };

    function openClearNewSale() {
        setProduct({ id: 0, item: 0, descric: '', valor: 0, amount: 1, tItem: 0 });
        setStatusBtnSaveUpdate("Salvar Item");
        setStatusBtnSaleSubmit("Iniciar Pedido");
        setEditId(null);
        setPreco(0);
        setIemImg('./img/car_sale.jpg')
    };

    function searchItem(e: Event) {
        e.preventDefault();
        if (statuStore === false) {
            itensStore()
            setStatuStore(true)
            sumItens()
        }
        findProducts();
        setPreco(product.valor);
    };

    function itensStore() {
        const itens_store_res: [] | any = localStorage.getItem('p');
        if (itens_store_res !== null) {
            const itens_store: TItens[] = JSON.parse(itens_store_res)
            setItenStorage(itens_store);
            for (let i = 0; itenStorage.length > i; i++) {
                itens.push(itenStorage[i]);
                setItens(itens)
                const res_id: any = localStorage.getItem('id');
                setId(JSON.parse(res_id))
            }
        }
    };

    useEffect(() => {
        itensStore()
    }, []);

    return (
        <>
            <RegisterSaleForm
                handleChange={handleChange}
                handleSaveUpdate={handleSaveUpdate}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
                handleSearchItem={searchItem}
                products={products}
                item={(product.descric)}
                statusBtnSaveUpdate={statusBtnSaveUpdate}
                statusBtnSaleSubmit={statusBtnSaleSubmit}
                item_img={itemImg}
                alert=""
                message=""
                totalItens={totalItens <= 0 ? '' : "SubTotal " + currencyFormat(totalItens)}
                loadItens={itens.length === 0 ?
                    <strong>Carregando...</strong> : (
                        itens.map((item: TItens) => (
                            <Itens
                                key={item.id}
                                id={item.id}
                                item={item.item}
                                descric={item.descric}
                                amount={item.amount}
                                valor={currencyFormat(item.valor)}
                                tItem={currencyFormat(item.tItem)}
                                editar={<a href="#"><button className="btn btn-primary" onClick={() =>
                                    updateListProduct(item)}>E</button></a>}
                            />
                        )))}
            >
                {product}
            </RegisterSaleForm>
        </>
    )
}