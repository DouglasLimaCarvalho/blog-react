import { Children } from "react";
import Footer from "../Footer";
import Header from "../Header";




function Layout({children}){
    return (
      <>
        <Header />
          {children}
        <Footer />
      
      </>
 
 
    ); // para escrever muitas linhas de html
 
 
 
 }
 
 export default Layout;