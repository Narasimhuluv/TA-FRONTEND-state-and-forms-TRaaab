import React from 'react';

function AllItems(props){
//    var eachelm = props.item.map(each => each)
var eachelm = props.item
    // console.log(props, "category")
    
//    each = Array.from(each)
//    console.log(eachelm)
console.log(eachelm, "all items")
    return(
        <>
           <div>
               <div>
                    <h2 className="text-center text-4xl mt-16 mb-10 font-extrabold text-yellow-500">Food Items</h2>
                    <div className="flex w-10/12 m-auto flex-wrap justify-between md:flex-col lg:flex-row">
                        {
                            eachelm.map((elm) => (
                                <div key={elm.id} className=" m-6 shadow-lg border pb-5 rounded-lg hover:translate-y-0.5 md:w-full lg:w-3/12 ">
                                    <img src={elm.img} alt={elm.title} className="rounded-lg w-full" />
                                   <div className="p-4">
                                        <h3 className="capitalize font-extrabold text-lg mb-2 mt-3">{elm.title}</h3>
                                        <p>{elm.desc}</p>
                                        <h4 className="mt-4 font-extrabold text-yellow-600"><span className="text-black inline-block mr-3">Price :</span> {elm.price}</h4>
                                   </div>
                                </div>
                            ))
                        }
                    </div>
               </div>
           </div>
        </>
    )
}

export default AllItems;