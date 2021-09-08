import React from 'react';
import questions from '../data';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeAns: null,
        }
    }
    handleClick = (each, index) => {
        this.setState({
            activeAns : this.state.activeAns === index ? null : index,
        })
    }
    render(){
        return(
            <>
                <div className="w-8/12 border-2 m-auto mt-16 p-8 transition-all">
                    <h1 className="text-3xl ml-10 mb-4 text-yellow-500">Accordion FAQ</h1>
                    <hr />
                    {
                        questions.map((each,index) => (
                            <div className="m-10 transition-all shadow-md p-6 border py-10">
                                <h2 className="text-xl text-green-400 font-extrabold cursor-pointer transition-all"  onClick={() => this.handleClick(each,index)}>{each.Q}{this.state.activeAns === index ? <span className="inline-block ml-6">👆</span> : <span className="inline-block ml-6">👇</span>}</h2>   
                                {index === this.state.activeAns  ? <p className="transition-all mt-3">{each.A}</p> : null}  
                            </div> 
                        ))
                    }
                </div>
            </>
        )
        
    }
}

export default App