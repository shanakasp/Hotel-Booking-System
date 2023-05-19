import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
          /*  role:'',
            phoNeNumber:''*/
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    // step 3
   
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, /*role: this.state.role, phoNeNumber:this.state.*/};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
    });
}
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
   /* changeRoleHandler= (event) => {
        this.setState({userRole: event.target.value});
    }
    changePhoneNumberHandler= (event) => {
        this.setState({phoNeNumber: event.target.value});
    }*/

    cancel(){
        this.props.history.push('/employees');
    
    }
  
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               <h3 className='text-center'>Add User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                       {/* <div className = "form-group">
                                            <label> Role: </label>
                                            <input placeholder="Roles" name="rolelId" className="form-control" 
                                                value={this.state.role} onChange={this.changeRoleHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                                value={this.state.phoNeNumber} onChange={this.changePhoneNumberHandler}/>
                                        </div> */}

                                        <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
