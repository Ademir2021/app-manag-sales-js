import { useState, useEffect } from 'react';
import { NavBar } from '../../components/navbar/Navbar';
import { ListItensStore } from '../../components/dashboard/ListItensStore';
import { Thead } from '../../components/dashboard/Thead';
import { BackHome } from '../../components/utils/backHome/BackHome';
import { Waiting } from '../../components/utils/waiting/Waiting';
import { Messages } from '../../components/utils/messages/Messages';
import { TItens } from '../products/type/TypeProducts';

export function ItenStore() {
    
    const [itens, setItens] = useState<TItens[]>([]);
    const [messages, setMessages] = useState<string>('');
    const [subtotal, setsubtotal] = useState<number>(0);
    const [counter_,  setCounter] = useState<number>(0)

    function itensStore() {
        const itens_store_res = localStorage.getItem('p');
        if (itens_store_res !== null) {
            setItens(JSON.parse(itens_store_res));
        }
        const counter_res = localStorage.getItem('c');
        if (counter_res !== null ){
        setCounter(JSON.parse(counter_res));
        }
        const subTotal_res = localStorage.getItem('t');
        if(subTotal_res !== null ){
        setsubtotal(JSON.parse(subTotal_res));
        }
    };
    useEffect(() => {
        itensStore();
    },[itens]);

    function sumItens() {
        let sum = 0
        for (let i = 0; i < itens.length; i++) {
            sum += (itens[i].amount * itens[i].valor)
        }
        localStorage.setItem("t", JSON.stringify(sum));
        return sum
    };

    function deleteListStore(item: TItens) {
        if (window.confirm('Deseja remover, ' + item.descric + ' ??')) {
            for (let i = 0; itens.length > 0; i++) {
                if (itens[i].id === item.id) {
                    itens.splice(i, 1);
                    localStorage.setItem("p", JSON.stringify(itens));
                    setMessages(item.descric + ', foi removido com sucesso !');
                    const res_counter = localStorage.getItem('c');
                    if(res_counter !== null ){
                    const counter = JSON.parse(res_counter)
                    localStorage.setItem("c", JSON.stringify(counter - 1));
                    }
                    sumItens()
                    setTimeout(() => {
                        setMessages('');
                    },3000);
                }
            }
        }
    }

    return (
        <>
            <NavBar/>
            <BackHome />
            {itens.length !== 0 ?  <Messages
                    messages={messages}
                    counter_= {counter_ + " : Item(s) comprado"}
                    subtotal={'Subtotal: R$ ' + subtotal}/>:''}
            {itens.length === 0 ? <Waiting waiting='Sem itens no pedido !!' /> : <Thead />}
            {(itens.map((item: TItens) => (
                <ListItensStore
                    key={item.item}
                    id={item.item}
                    descric={item.descric}
                    amount={item.amount}
                    valor={item.valor}
                    tItem={item.tItem}
                    editar={<button className='btn btn-info' onClick={() =>
                        deleteListStore(item)}><b>-</b></button>}
                />
            )))}
        </>
    )

}