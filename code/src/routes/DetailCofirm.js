import React from "react";
import NavTopCart from "../component/NavTopCart";
import DetailConfirmCont from "./DetailConfirmCont";


class DetailCofirm extends React.Component{

    render(){
        return <section className='confirmCont'>
            <NavTopCart/>
            <DetailConfirmCont/>
        </section>
    };
}
export default DetailCofirm;