import { useState, useEffect, SetStateAction } from 'react';
import { NavBar } from "../../components/navbar/Navbar";
import { TProductRegister, TItem, TItens, TBrand, TSector } from '../products/type/TypeProducts';
import api from '../../services/api/api'
import { ListItens } from '../../components/home/ListItens';
import { Header } from '../../components/home/Header';
import { FooterHomePage } from './FooterHome';
import { Whats } from '../../components/whats/Whats';
import { SearchItens } from '../../components/home/SearchItens';
import { currencyFormat } from '../../components/utils/currentFormat/CurrentFormat';
import { Globais } from '../../components/globais/Globais';
import { Carousel } from '../../components/carousel/Carousel';

export function HomePage() {
    const [id, setId] = useState<number>(1);
    let [amount, setAmount] = useState<number>(1)
    const [counter, setCounter] = useState<number>(0)
    const [subtotal, setsubtotal] = useState<number>(0)
    const [itemImg,] = useState<string>('./img/img_itens/sale_avatar.png');
    const [messages, setMessages] = useState<string>("")
    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [listProd, setlistProd] = useState<TProductRegister[]>([]);
    const [itens, setItens] = useState<TItens[]>([]);
    const [item, setItem] = useState<TItem>({ descric: '' });
    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);
    const [selectSector, setSelectSector] = useState<string>("Todos")
    const [flgItens, setFlgItens] = useState<boolean>(false)
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setItem(values => ({ ...values, [name]: value }))
    };

    async function getProducts() {
        try {
            await api.get<TProductRegister[]>('products_home')
                .then(response => {
                    const resultProducts: TProductRegister[] = []
                    const items: TProductRegister[] = response.data

                    if (flgItens === false) {
                        setlistProd(items)
                        setFlgItens(true)
                    }

                    for (let i = 0; items.length > i; i++) {
                        if (items[i].fk_sector === idSector(selectSector)?.id_sector) resultProducts.push(items[i]);
                        selectSector !== "Todos" ? setProducts(resultProducts) : setProducts(items);
                    }
                })
        } catch (err) { console.log("error occurred !" + err) }
    }
    useEffect(() => {
        getProducts()
    }, [products])

    function getItensStorage() {
        const res_itens = localStorage.getItem('p')
        if (res_itens !== null)
            setItens(JSON.parse(res_itens))
        const res_counter = localStorage.getItem('c')
        if (res_counter !== null)
            setCounter(JSON.parse(res_counter))
        const res_sub_total = localStorage.getItem('t')
        if (res_sub_total !== null)
            setsubtotal(JSON.parse(res_sub_total))
    }
    useEffect(() => {
        getProducts()
        getItensStorage()
    }, [item, itens])

    function sumItens() {
        let sum = 0
        for (let i = 0; i < itens.length; i++) {
            sum += (itens[i].amount * itens[i].valor)
        }
        setsubtotal(sum)
        localStorage.setItem("t", JSON.stringify(sum));
        return sum
    }

    function verifItem(element: TItens) {
        for (let i = 0; itens.length > i; i++)
            if (element.item === itens[i].item) {
                itens[i].amount = itens[i].amount + element.amount;
                return itens[i].tItem = itens[i].amount * itens[i].valor;
            }

        setCounter(counter + 1)
        localStorage.setItem("c", JSON.stringify(counter + 1));
        setId(id + 1);
        return itens.push(element);
    }

    function checkItemAlreadyExists(id: number) {
        for (let i = 0; itens.length > i; i++) {
            if (itens[i].item === id)
                alert('Item (' + itens[i].item + ') já estava com (' + itens[i].amount + ' UN) no carrinho !')
        }
        return true
    }

    function handleItem(item: TProductRegister) {
        if (checkItemAlreadyExists(item.id_product) === true) {
            const getItem: TItens = {
                id: 0,
                item: 0,
                descric: '',
                amount: 0,
                valor: 0,
                tItem: 0
            }
            getItem.id = id;
            getItem.item = item.id_product;
            getItem.descric = item.descric_product;
            getItem.amount = amount
            setAmount(amount)
            amount = 1
            setAmount(amount)
            getItem.valor = item.val_max_product;
            getItem.tItem = getItem.valor * getItem.amount;
            verifItem(getItem);
            setItens(itens);
            setsubtotal(sumItens)
            localStorage.setItem("p", JSON.stringify(itens));
            localStorage.setItem("id", JSON.stringify(id));
            for (let i = 0; itens.length > 0; i++) {
                if (itens[i].item === item.id_product) {
                    setMessages('Adicionado ' + itens[i].amount +
                        ' UN ' + item.descric_product);
                    setTimeout(() => { setMessages('') }, 9000)
                    alert(itens[i].amount + " UN do Item (" + itens[i].item + ") adicionado com sucesso !")
                }
            }
        }
    }

    function handleProducts() {
        if (item.descric !== '') {
            const res: TProductRegister[] = []
            for (let i = 0; products.length > 0; i++) {
                if (item.descric === products[i].descric_product) {
                    res.push(products[i])
                    setlistProd(res)
                    item.descric = ""
                }
            }
        }
        setlistProd(products)
    }

    function handleSubmit(e: Event) {
        e.preventDefault()
        handleProducts()
    }

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

    function nameBrands(idBrand: number) {
        for (let i = 0; i < brands.length; i++) {
            if (brands[i].id_brand === idBrand) {
                return brands[i].name_brand;
            }
        }
    }

    function nameSector(idSector: number) {
        for (let i = 0; i < sectors.length; i++) {
            if (sectors[i].id_sector === idSector) {
                return sectors[i].name_sector;
            }
        }
    }

    function idSector(nameSector: string) {
        for (let i = 0; i < sectors.length; i++) {
            if (sectors[i].name_sector === nameSector) {
                return sectors[i]
            }
        }
    }

    return (
        <>
            <Header
                counter={counter !== 0 ? counter : 0}
                subtotal={subtotal === 0 ? '' : currencyFormat(subtotal)}
                contact={<a href={"/contact"} style={{ color: 'GrayText' }}>Fale Conosco {Globais.phone}</a>}
            />
            <NavBar />
            <Carousel/>
            <SearchItens
                selectSector={(e: { target: { value: SetStateAction<string> } }) => setSelectSector(e.target.value)}
                sectors={sectors}
                messageItems={messages !== "" ? messages : ""}
                products={products}
                descric={item.descric}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
            {(listProd.map((item: TProductRegister) => (
                <ListItens
                    key={item.id_product}
                    item_img={item.image !== null ? `./img/img_itens/${item.image}` : itemImg}
                    id={item.id_product}
                    brand={nameBrands(item.fk_brand)}
                    sector={nameSector(item.fk_sector)}
                    descric={item.descric_product}
                    amount={item.amount}
                    valor={item.val_max_product}
                    selectAmount={e => e.target.value !== "Quant: 1" ? setAmount(parseInt(e.target.value)) : setAmount(1)}
                    handleItem={handleItem}
                    itemParameter={item}
                />
            )))}
            <Whats />
            <FooterHomePage />
        </>
    )
} 