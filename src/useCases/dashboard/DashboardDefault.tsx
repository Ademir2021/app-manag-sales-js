import { Dashboard } from "./Dashboard"
import { FooterHome } from "../../components/home/FooterHome"

export function DashboardDefault(){
    return(
        <>
        <Dashboard/>
             <h1 className='dashboard'>Control panel</h1>
             <h1 className="text-center"><a href="\sale">Terminal de Vendas</a></h1>
            <hr style={{margin:"9.8rem"}}></hr>
            <FooterHome/>
        </>
    )
}