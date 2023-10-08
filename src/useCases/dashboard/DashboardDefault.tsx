import { Dashboard } from "./Dashboard"
import { FooterHome } from "../../components/home/FooterHome"

export function DashboardDefault(){
    return(
        <>
        <Dashboard/>
             <h1 className='text-center p-2'>PANEL DASHBOARD</h1>
            <div className="text-center">
                <button className="btn btn-danger">
                    <a href="\sale" 
                        style={{color:'white'}}>
                            ACESSO AO TERMINAL DE COMPRAS</a></button></div>
            <hr></hr>
            <FooterHome/>
        </>
    )
}