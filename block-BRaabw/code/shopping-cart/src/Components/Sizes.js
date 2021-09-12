import React from 'react';
import data from '../data.json'
import Cloths from './Cloths'
class Sizes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : "",
        }
    }
    handleSize = (eachSize) => {
        this.setState({
            size : eachSize
        })
    }
    
    render() {
        // sizes loop 
        var allsizes = [];
        var sizes = data.products.map((size) => {
            size.availableSizes.map((sizeLength) => {
                // console.log(sizeLength)
                return allsizes.push( sizeLength)
            })
        })
        var all = Array.from(new Set(allsizes))
        // console.log(all)
        // end 

        // alldata loop
        var everydata= []
        if(!this.state.size){
            data.products.map((eachdata) => {
                return everydata.push(eachdata)
            })
        }else{
            data.products.map((eachdata) => {
                eachdata.availableSizes.map((eachsize) => {
                    if(eachsize == this.state.size){
                        return everydata.push(eachdata)
                    }
                })
            })
            
        }

        // price high to low loop

        
        

        return(
            <div className="flex">
                <div className="w-3/12 h-3/6 border p-8 m-10">
                    <h2 className="text-lg font-bold">sizes :</h2>
                    {
                        all.map((eachSize) => (
                            <button key={eachSize} className="border text-xs w-2/12 h-12 bg-gray-300 mr-3 mt-2  p-2 rounded-full" onClick={() => this.handleSize(eachSize)}>{eachSize}</button>
                        ))
                    }
                    <p className="text-sm mt-5 opacity-70">Leave a 💕 on Github if You like this styling</p>
                </div>

                <Cloths everydata = {everydata} clothsState={this.state.size}/>
            </div>
        )
    }
}



export default Sizes