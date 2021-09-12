import React from 'react'
import Cart from './Cart';

class Cloths extends React.Component{
    
    constructor(props) {
        super(props);
        this.state={
            size : "",
            cart : "",
            each : [],
        }
    }
    cartClick = (each, index) =>  {
  
        this.setState({
            cart : index,
            each : [...this.state.each,each]
        })
    }

    clearEach = (each, index) => {
        this.setState({
            cart : index,
            each : []
        })
    }

    render(){

        var elem = this.props.everydata;
        // console.log(elem)
        return(
            <div className="flex justify-between flex-wrap w-full ">
                {
                    elem.map((each , index) => (
                        <div key={each.id} className="border w-3/12 m-10 text-center rounded-lg relative shadow-md"> 
                            <p className="bg-black text-white absolute top-0 right-0 w-5/12 text-xs py-1 rounded-md opacity-60">Free Shipping</p>
                            <img src={"/static/products/"+each.sku+"_1.jpg"} alt={each.title} className="w-full mt-8"/>
                            <div className=" w-0  py-1 px-5 m-auto mt-4 rounded-md bg-yellow-400"></div>
                            <div className="py-5 w-full">
                                <h2>{each.title}</h2>
                                <h3>{each.style}</h3>
                                <div className="flex w-5/12 m-auto text-center">
                                    <h3 className="text-center">Price : <span className="inline-block">{each.currencyFormat}</span>{each.price}</h3>
                                </div>

                                <button className="border py-1  px-4 mt-4 rounded-md bg-black text-white hover:bg-yellow-500 transition-all" onClick={() => this.cartClick(each, index)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }

                <Cart element={this.state.each} fn={this.cartClick}/>
               
            </div>
        )
    }
}




export default Cloths;