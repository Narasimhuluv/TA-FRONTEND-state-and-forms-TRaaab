import React from "react";
class Sidecart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            total : "",
            activeIndex : null,
            quantity : 1,
            min : 0
        }
    }

    addQuantity = (each, index) => {
        this.setState({
            activeIndex : this.state.activeIndex == index ? null : index,
            quantity : this.state.quantity + 1
        })
    }
    removeQuatinty = (each, index) => {
        this.setState({
            activeIndex : this.state.activeIndex == index ? null : index,
            quantity : this.state.quantity - 1
        })
    }
    
    render(){
        console.log(this.props.side)
        var sider = this.props.side
        return(
            <div className=" top-0 right-0 h-screen overflow-y-scroll  px-4 py-4 bg-black w-full text-white">
                <div className="flex w-3/12 border m-auto items-center justify-between">
                    <img src="/static/bag-icon.png" className="" alt="" />
                    <h2 className="ml-4 font-bold text-xl">Cart</h2>
                </div>
                {
                    sider.map((each, index) => (
                        <div>
                            <div key={each.id} className="w-full border mt-8 flex items-center">
                            <img className="w-2/12" src={"/static/products/"+each.sku+"_1.jpg" } alt={each.title} />
                            <div className="ml-4">
                                <h6>{each.title}</h6>
                                <p>{each.style}</p>
                                {/* {this.state.activeIndex === index ? <p>Quantity : {this.state.quantity}</p> : ""} */}
                                {
                                    
                                }
                                <p>Quantity : {this.state.quantity}</p>
                            </div>

                            <div className="ml-20">
                                <i className="fas fa-times" onClick={this.clearEach}></i>
                                <h5 className="text-yellow-500">{each.currencyFormat} {each.price}</h5>
                                <div className="flex mt-4">
                                    <button className="px-2 bg-gray-500 rounded-md py-1 border mr-2" onClick={() => this.removeQuatinty(each,index)}>-</button>
                                    <button className="px-3 py-1 bg-gray-500 rounded-md border" onClick={() => this.addQuantity(each,index)}>+</button>
                                </div>

                            </div>
                        </div>


                        
                        </div>
                    ))
                }

                        <div className="text-2xl text-white">
                            <p>Total : {this.state.total}</p>
                        </div>

                
            </div>
        )
    }
}

export default Sidecart;