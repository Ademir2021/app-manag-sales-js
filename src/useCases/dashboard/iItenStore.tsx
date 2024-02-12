import { useState, useEffect } from 'react';
import { NavBar } from '../../components/navbar/Navbar';
import { ListItensStore } from '../../components/dashboard/ListItensStore';
import { Thead } from '../../components/dashboard/Thead';
import { BackHome } from '../../components/utils/backHome/BackHome';
import { Waiting } from '../../components/utils/waiting/Waiting';
import { MessagesCar } from '../../components/utils/messages/MessagesCar';
import { TItens } from '../products/type/TypeProducts';

export function ItenStore() {

    const [itens, setItens] = useState<TItens[]>([]);
    const [messages, setMessages] = useState<string>('');
    const [subtotal, setsubtotal] = useState<number>(0);
    const [counter_, setCounter] = useState<number>(0)

    function getItensStorage() {
        const itens_store_res = localStorage.getItem('p');
        if (itens_store_res !== null)
            setItens(JSON.parse(itens_store_res));
        const counter_res = localStorage.getItem('c');
        if (counter_res !== null)
            setCounter(JSON.parse(counter_res));
        const subTotal_res = localStorage.getItem('t');
        if (subTotal_res !== null)
            setsubtotal(JSON.parse(subTotal_res));
    }
    useEffect(() => {
        getItensStorage()
    },[itens]);

    function sumItens() {
        let sum = 0
        for (let i = 0; i < itens.length; i++) {
            sum += (itens[i].amount * itens[i].valor)
        }
        localStorage.setItem("t", JSON.stringify(sum));
        return sum
    }

    function deleteListStore(item: TItens) {
        if (window.confirm('Deseja remover, ' + item.descric + ' ?')) {
            for (let i = 0; itens.length > 0; i++) {
                if (itens[i].id === item.id) {
                    itens.splice(i, 1);
                    localStorage.setItem("p", JSON.stringify(itens));
                    setMessages(item.descric + ', foi removido com sucesso !');
                    let res_counter = localStorage.getItem('c');
                    if (res_counter !== null) {
                        const counter = JSON.parse(res_counter)
                        localStorage.setItem("c", JSON.stringify(counter - 1));
                        res_counter = localStorage.getItem('c');
                        setCounter(counter_);
                    }
                    sumItens()
                    setTimeout(() => {
                        setMessages('');
                    }, 3000);
                }
            }
        }
    }
    
    return (
        <>
            <NavBar />
            <BackHome />
            <ul>
                <li><a href='/'>Retornar as Compras</a></li>
                <li><a href='sale'>Finalizar as Compras</a></li>
            </ul>
            <hr></hr>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1px' }}>
                <a href='sale'><img style={{ width: '60px', height: '60px' }} src="img/car_sale.png" alt="Carrinho de Compras" /></a></div>

            {itens.length !== 0 ? <MessagesCar
                messages={messages}
                counter_={counter_}
                subtotal={subtotal} /> : ''}
            {itens.length === 0 ? <Waiting waiting={"O seu Carrinho de compras está vazio"} /> : <Thead />}
           {itens.length === 0 ? <div
           style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1px' }}><button
           className='btn btn-primary' onClick={()=>{window.location.replace("/")}}>Voltar as Compras</button></div> : null}
            {(itens.map((item: TItens) => (
                <ListItensStore
                    key={item.item}
                    id={item.item}
                    descric={item.descric}
                    amount={item.amount}
                    valor={item.valor}
                    tItem={item.tItem}
                    editar={<button className='btn btn-danger' onClick={() =>
                        deleteListStore(item)}><b>x</b></button>}
                />
            )))}
        </>
    )

}