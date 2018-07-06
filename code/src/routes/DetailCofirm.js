import React from "react";
import ReactDOM,{render} from "react-dom";
import NavTopCart from "../component/NavTopCart";
import DetailConfirmCont from "./DetailConfirmCont";


class DetailCofirm extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return <section className='confirmCont'>
            <NavTopCart/>
            <DetailConfirmCont/>
        </section>
    };
}
export default DetailCofirm;