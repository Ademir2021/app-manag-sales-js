import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useContext } from 'react'
import { HomePage } from "./useCases/home/HomePage";
import { UserLogin } from './useCases/users/UserLogin';
import { DashboardDefault } from "./useCases/dashboard/DashboardDefault";
import { ItenStore } from "./useCases/dashboard/iItenStore";
import { UserRegister } from './useCases/users/UserRegister';
import { Contacts } from "./useCases/contacts/Contacts";
import { UsersList } from './useCases/users/UsersList';
import { UserUpdate } from "./useCases/users/UserUpdate";
import { RegisterSale } from "./useCases/sales/RegisterSale";
import { InvoiceSales } from './useCases/sales/InvoiceSales';
import { PaymentSale } from "./useCases/sales/PaymentSale";
import { DirectPaymentSale } from "./useCases/sales/DirectPaymentSale";
import { ListSales } from './useCases/sales/ListSale';
import { FormProduct } from "./useCases/products/ProductRegister";
import { ProductsList } from './useCases/products/ProductList';
import { ProductUpdate } from "./useCases/products/ProductUpdate";
import { FormPerson } from "./useCases/persons/PersonRegister";
import { PersonUpdate } from "./useCases/persons/PersonUpdate";
import { PersonsList } from './useCases/persons/PersonList';
import { AuthProvider, AuthContext } from "./context/auth";
import { Logout } from "./components/utils/logout/Logout";
import { FormModel } from "./useCases/formModel/FormModel";
import { BackHome } from './components/utils/backHome/BackHome';

export function AppRoutes() {
    const Private = ({ children }: any) => {
        const { authenticated, loading }: any = useContext(AuthContext)
        if(loading){
            return <div className="loading">Carregando...</div>
        }
        
        if (!authenticated) {
            return <Navigate to="/login" />
        }
        return children
    };
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/login" Component={UserLogin} />
                    <Route path="/logout" Component={Logout} />
                    <Route path="/form_model" Component={FormModel} />
                    <Route path="/register" Component={UserRegister} />
                    <Route path="/contact" Component={Contacts}/>
                    <Route path="/dashboardefault" element={<Private><DashboardDefault/></Private>}/>
                    <Route path="/pe" element={<Private><ItenStore/></Private>}/>
                    <Route path="/users_list" element={<Private><UsersList/></Private>} />
                    <Route path="/user_update" element={<Private><UserUpdate/></Private>} />
                    <Route path="/invoice_sales" element={<Private><InvoiceSales/></Private>} />
                    <Route path="/payment" element={<Private><PaymentSale/></Private>} />
                    <Route path="/direct_payment" element={<Private><DirectPaymentSale/></Private>} />
                    <Route path="/sale" element={<Private><RegisterSale/></Private>} />
                    <Route path="/list_sale" element={<Private><ListSales/></Private>} />
                    <Route path="/form_product" element={<Private><FormProduct/></Private> } />
                    <Route path="/product_list" element={<Private><ProductsList/></Private>} />
                    <Route path="product_update" element={<Private><ProductUpdate/></Private>}/>
                    <Route path="/form_person" element={<Private><FormPerson/></Private>} />
                    <Route path="/person_list" element={<Private><PersonsList/></Private>} />
                    <Route path="/person_update" element={<Private><PersonUpdate/></Private>} />
                    <Route path="*" element={<><BackHome/><strong>Error 404: <label>Endereço URL inválido</label></strong><br/></>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}