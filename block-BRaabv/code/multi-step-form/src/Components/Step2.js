import React from 'react';

class Step2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname : "",
            lastname : "",
            dateofbirth : "",
            email : "",
            address : "",
            errors : {
                firstname : "",
                lastname : "",
                dateofbirth : "",
                email : "",
                address : "",
            }
        }
    }

     // Validates email address of course.
     validEmail = (email) => {
        var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return re.test(email)
    }
    

    handleChange=({target}) => {
        var {name , value} = target;
        var errors = this.state.errors
        switch (name) {
            case "firstname":
                    errors.firstname = value.length < 4 ? "First Name must not be less than 4 characters" : ""
                break;

            case "lastname":
                    errors.lastname = value.length < 4 ? "Last Name must not be less than 4 characters" : ""
                break;
            case "email":
                    errors.email = this.validEmail(value) ? "" : "Email is Invalid"
                break;
        
            default:
                break;
        }
        this.setState({
            [name] : value
        })
    }

    

    render(){
        var state = this.state
        var {firstname, lastname, email} = this.state.errors;
        return(
            <div>
                <div className="flex justify-center items-center h-screen ">
                    <div className="w-full border flex items-center">
                        <aside className="w-3/6  flex justify-center items-center">
                            <lottie-player  src="https://assets1.lottiefiles.com/packages/lf20_u8o7BL.json"  background="transparent"  speed="0.5" loop  autoplay></lottie-player>
                        </aside>


                        <div className="w-3/6  px-20 py-10">
                            <div className="flex ">
                                <h4 className="mr-6"><span className="border bg-blue-700 text-white p-2 py-1 rounded-lg">1</span> Sign Up</h4>
                                <h4 className="mr-6"><span className="border bg-blue-700 text-white p-2 py-1 rounded-lg">2</span> Message</h4>
                                <h4 className="mr-6"><span className="border bg-blue-700 text-white p-2 py-1 rounded-lg">3</span> Checkbox</h4>
                            </div>
                            <h5 className="mt-10 font-light">Step 1/3</h5>
                            <h2 className="text-4xl mt-4 font-extrabold">Sign Up</h2>

                            <div>
                                <form className="flex flex-wrap justify-between relative" onSubmit={this.handleSubmit}>
                                    <div className=" w-5/12 mt-8">
                                        <label className="block" htmlFor="FirstName">First Name</label>
                                        <input className="block border w-full py-2 px-2 rounded-lg mt-2" type="text" placeholder="Enter your full Name" value={this.state.firstname} name="firstname" onChange={this.handleChange} />
                                        <span className="text-red-600 text-xs">{firstname}</span>
                                    </div>

                                    <div className=" w-5/12 mt-8">
                                        <label className="block" htmlFor="LastName">Last Name</label>
                                        <input className="block border w-full py-2 px-2 rounded-lg mt-2" type="text" placeholder="Enter Your Last Name" value={this.state.lastname} name="lastname" onChange={this.handleChange}/>
                                        <span className="text-red-600 text-xs">{lastname}</span>
                                    </div>

                                    <div className=" w-5/12 mt-8">
                                        <label className="block" htmlFor="DateOfBirth">Date Of Birth</label>
                                        <input className="block border w-full py-2 px-2 rounded-lg mt-2" type="date" value={this.state.dateofbirth} name="dateofbirth" onChange={this.handleChange}/>
                                    </div>

                                    <div className=" w-5/12 mt-8">
                                        <label className="block" htmlFor="EmailAddress">Email Address</label>
                                        <input className="block border w-full py-2 px-2 rounded-lg mt-2" type="text" placeholder="Enter Your Email Address" value={state.email} name="email" onChange={this.handleChange}/>
                                        <span className="text-red-600 text-xs">{email}</span>
                                    </div>

                                    <div className=" w-full mt-8">
                                        <label className="block" htmlFor="Address">Address</label>
                                        <input className="block border w-full py-2 px-2 rounded-lg mt-2" type="text" placeholder="Enter Your Address" value={this.state.address} name="address" onChange={this.handleChange}/>
                                    </div>

                                    <hr  className="border"/>
                                    <button className="border bg-blue-700  mt-5 rounded-lg py-1 px-4 relative right-0 text-white" onClick={this.handleClick}>Next step</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default  Step2;