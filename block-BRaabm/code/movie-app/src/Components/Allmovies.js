import React from 'react';
import data from '../data.json'

class Allmovies extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activIndex : null,
        }
    }

    handleClick = (each, index) => {
        this.setState({
            activIndex : this.state.activIndex === index ? null : index,
            // activIndex : index,
        })
        
    }

    render(){
        console.log(data)
        return(
            <div className="container transition-all w-full m-auto border p-6 flex flex-col md:flex-row md:flex-wrap md:justify-between">
                {
                    data.map((each,index) => (
                    
                        <div key={each.Title} onClick={()=> this.handleClick(each, index)} className="eachcard w-full  border mt-10 transition-all rounded-lg shadow-md md:w-3/12 md:m-4">
                            <img src={each.Poster} alt={each.Title}  className="w-full rounded-lg"/>
                            <div className="px-4 py-2">
                                <h2 className="text-lg font-bold text-yellow-500">{each.Title}</h2>
                                <h3>{each.Released}</h3>
                            </div>

                            <div>
                                {this.state.activIndex === index ? <Model {...each}/> : ""}
                            </div>
                        </div>
                    ))
                    
                }
            </div>
        )
    }
}


function Model(props){
    console.log(props.Images)
    return (
       <div className="flex justify-center w-full items-center md:flex md:justify-center md:items-center ">
            <div className="absolute h-screen  md:left-0 md:top-20 md:right-0 w-11/12 md:w-11/12 m-auto shadow-md p-3 rounded-lg bg-white display">
                    <i className="fas fa-times text-red-700 text-2xl absolute right-5 bg-white px-2 top-5 rounded-lg cursor-pointer" ></i>
                    <img src={props.Poster} alt={props.Title} className="w-full rounded-lg "/>
                <div className="p-5">
                    <h2 className="font-bold"><span className="text-yellow-500  font-bold inline-block mr-4">Title : </span> {props.Title}</h2>
                    <h3 className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Year : </span> {props.Year}</h3>
                    <h4 className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Rated : </span> {props.Rated}</h4>
                    <h5 className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Released : </span>{props.Released}</h5>
                    <h6 className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Runtime : </span>{props.Runtime}</h6>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Genre : </span>{props.Genre}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Director : </span>{props.Director}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Writer : </span>{props.Writer}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Actors : </span>{props.Actors}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Plot : </span>{props.Plot}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Language : </span>{props.Language}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Country : </span>{props.Country}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Awards : </span>{props.Awards}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Metascore : </span>{props.Metascore}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">imdbRating : </span>{props.imdbRating}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">imdbVotes : </span>{props.imdbVotes}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">imdbID : </span>{props.imdbID}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Type : </span>{props.Type}</p>
                    <p className="font-bold"><span className="text-yellow-500 font-bold inline-block mr-4">Response : </span>{props.Response}</p>
                </div>
                {/* <img src={props.Images} alt="" /> */}
                <div className="flex p-2 flex-wrap justify-between">
                    {
                        props.Images.map((eachImg) => (   
                            <img key={props.Type} className="w-5/12 m-3 rounded-lg" src={eachImg} alt={props.Title} />
                        ))
                    }
                </div>
            </div>
       </div>
    )
}

export default Allmovies;

