import React from 'react';
import AllItems from '../AllItems';
import data from '../data.json'

class Tags extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoryName : "",
        }
    }

    handleClick = (cate) => {
        this.setState({
            categoryName : cate
        })
    }
    handleClickAll = () => {
        this.setState({
            categoryName : ""
        })
    }

    render(){
        var category = data.map(eachCategory => eachCategory.category)
        let array = [];
        if(!this.state.categoryName){
            array = data
        }
        else{
            data.forEach((elem) => {
                // console.log(elem.category , this.state.categoryName)
                if(elem.category == this.state.categoryName){
                    array.push(elem);
                }
            })
            console.log(array)
        }
        var each =  Array.from(new Set(category))
        console.log(each)
        return(
            <>
                <div className="flex mt-10 w-6/12 m-auto md:flex-row sm:flex-col">
                    <h2 onClick={this.handleClickAll} className="w-3/12 border-2 text-yellow-500 py-1 rounded-md bg-gray-800  text-center hover:bg-white cursor-pointer sm:w-full sm:ml-6" id={this.state.categoryName === "" ? "active" : ""}>All</h2>
                    {
                        each.map((cate) => (
                            <h2 onClick={() => this.handleClick(cate)} key={cate} className="text-center text-yellow-500 rounded-md bg-gray-800 hover:bg-white cursor-pointer text-xl transition-all py-1 border-2 m-auto w-3/12 ml-6 sm:w-full" id={ cate===this.state.categoryName  ? "active" : ""}>{cate}</h2>
                        ))
                    }
                </div>

                <AllItems  key={category} item={array}/>
            </>
        )
    }
}

export default Tags