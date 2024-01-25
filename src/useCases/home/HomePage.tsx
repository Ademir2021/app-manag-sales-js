import { useState, useCallback, useEffect } from 'react';
import { NavBar } from "../../components/navbar/Navbar";
import { TProductRegister, TItem, TItens, TBrand, TSector } from '../products/type/TypeProducts';
import api from '../../services/api/api'
import { ListItens } from '../../components/home/HomePage';
import { Header } from '../../components/home/Header';
import { FooterHomePage } from './FooterHome';
import { Whats } from '../../components/whats/Whats';
import { SearchItens } from '../../components/home/SearchItens';
import { currencyFormat } from '../../components/utils/currentFormat/CurrentFormat';

export function HomePage() {

    const [id, setId] = useState<number>(1);
    let [amount, setAmount] = useState<number>(1)
    const [counter, setCounter] = useState<number>(0)
    const [subtotal, setsubtotal] = useState<number>(0)
    const [itemImg,] = useState<string>('./img/img_itens/sale_avatar.png');
    const [messages, setMessages] = useState<string>('')
    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [listProd, setlistProd] = useState<TProductRegister[]>([]);
    const [itens, setItens] = useState<TItens[]>([]);
    const [item, setItem] = useState<TItem>({ descric: '' });

    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setItem(values => ({ ...values, [name]: value }))
    };

    const getProducts = useCallback(async () => {
        try {
            await api.get<TProductRegister[]>('products_home')
                .then(response => {
                    const resultProducts: TProductRegister[] = []
                    const items: TProductRegister[] = response.data
                    for (let i = 0; items.length > i; i++) {
                        if (items[i].fk_sector != 7 && items[i].fk_sector != 6) { // Remover grupo especifico.
                            resultProducts.push(items[i])
                            setlistProd(resultProducts)
                            setProducts(resultProducts)
                        }
                    }
                })
        } catch (err) {
            console.log("error occurred !" + err)
        }
    }, [products]);

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
                itens[i].amount = itens[i].amount + 1;
                return itens[i].tItem = itens[i].amount * itens[i].valor;
            }
        setCounter(counter + 1)
        localStorage.setItem("c", JSON.stringify(counter + 1));
        setId(id + 1);
        return itens.push(element);
    }

    function checkItemAlreadyExists(id: number) {
        for (let i = 0; itens.length > i; i++) {
            if (products[i].id_product === id)
                return alert('Item ' + products[i].id_product + ' Já foi adicionado ao carrinho !')
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
                    alert("Item " + item.id_product + " Adicionado ao Carrinho !")
                }
            }
        }
    }

    function handleSubmit(e: Event) {
        e.preventDefault()
        const res = []
        for (let i = 0; products.length > 0; i++) {
            if (item.descric === products[i].descric_product) {
                let num_sector = 0;
                item.descric = '';
                num_sector = products[i].fk_sector
                for (let j = 0; products.length > j; j++) {
                    if (num_sector === products[j].fk_sector) {
                        res.push(products[j])
                        setlistProd(res)
                    }
                }
            }
        }
    }

    // function handleAmountIncrement() {
    // amount++
    // setAmount(amount);
    // }
    // function handleAmountDecrement() {
    // if (amount > 1) {
    // amount--
    // setAmount(amount);
    // }
    // }

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

    return (
        <>
            <Header
                counter={counter !== 0 ? counter : 0}
                subtotal={subtotal === 0 ? '' : 'Subtotal ' + currencyFormat(subtotal)}
                contact={<a href={"/contact"} style={{ color: 'gray' }}>Fale conosco +55 (44) 98852-1033</a>}
            />
            <NavBar />
            <div className='text-center'><a href='form_person'><b>Cadastre-se aqui em nossa Loja-OnLine e Finalize suas Compras</b></a></div>
            <SearchItens
                messageItems={messages}
                list={<select>{products.map((product) => (
                    <option key={product.id_product}>
                        {product.descric_product}</option>))}
                </select>}
                descric={item.descric}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {(listProd.map((item: TProductRegister) => (
                <ListItens
                    key={item.id_product}
                    item_img={item.image !== null ?
                        `./img/img_itens/${item.image}` : itemImg}
                    id={item.id_product}
                    brand={nameBrands(item.fk_brand)}
                    sector={nameSector(item.fk_sector)}
                    descric={item.descric_product}
                    amount={item.amount}
                    valor={item.val_max_product}

                    selectAmount={<select onChange={e => setAmount(parseInt(e.target.value))}>
                        <option>{1}</option>
                        <option>{2}</option>
                        <option>{3}</option>
                        <option>{4}</option>
                        <option>{5}</option>
                        <option>{6}</option>
                        <option>{7}</option>
                        <option>{8}</option>
                        <option>{9}</option>
                        <option>{10}</option>
                        <option>{11}</option>
                        <option>{12}</option>
                        <option>{13}</option>
                        <option>{14}</option>
                        <option>{15}</option>
                        <option>{16}</option>
                        <option>{17}</option>
                        <option>{18}</option>
                        <option>{19}</option>
                        <option>{20}</option>
                        <option>{21}</option>
                        <option>{22}</option>
                        <option>{23}</option>
                        <option>{24}</option>
                        <option>{25}</option>
                        <option>{26}</option>
                        <option>{27}</option>
                        <option>{28}</option>
                        <option>{29}</option>
                        <option>{30}</option>
                    </select>}

                    // decrementAmount={<button style={{ display: 'contents', color: 'gray', fontSize: '14px' }} onClick={() =>
                    //     handleAmountDecrement()}>{'Diminuir'}</button>}

                    // incrementAmount={<button style={{ display: 'contents', color: 'blue', fontSize: '14px' }} onClick={() =>
                    //     handleAmountIncrement()}>{'Aumentar'}</button>}

                    // inputAmout={<input
                    //     onChange={e => setAmount(parseInt(e.target.value))}
                    //     placeholder='Informe a quantidade'
                    // />}

                    addItem={<button className='btn btn-primary' onClick={() =>
                        handleItem(item)}>Comprar</button>}
                />
            )))}
            <Whats />
            <FooterHomePage />
        </>
    )
} 