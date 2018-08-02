import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      showModel: true,
      concurrentData: data.transactions,
      accountData: data.transactions,
      accountDetail: {},
      values: []
    };
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleShowModal(event)
  {
    const data = event;
    this.setState({ accountDetail : data });
  }

  
  handleCheckBox(event){
    const name = event.target.name // checkbox name
    const value = event.target.value // checkbox value
    this.state.values.push(name);
    const mydata = this.state.concurrentData.map((item) => 
    {
       if(this.state.values.indexOf(item.transactionType) !== -1)
       {
          return {
            ...item
          }
       }
    });
    const myAccdata = this.state.concurrentData.map((item) => 
    {
      if(this.state.values.indexOf(item.accountName) !== -1)
      {
         return {
           ...item
         }
      }

    });
    var filteredData =  (mydata.filter(n => n)).concat(myAccdata.filter(n => n));
    this.setState({ concurrentData : filteredData  })

}

  render() {
    const renderData = this.state.concurrentData;
    return (
      <div>
        <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h3>Filters</h3>
              <div>
                <h4>Account Name</h4><br/>
                <label>
                  <input
                    name="Savings Account"
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="Savings Account"
                  />
                  Savings Account
                </label><br/>
                <label>
                  <input
                    name="Checking Account"          
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="Checking Account"
                  />
                  Checking Account
                </label><br/>
                <label>
                  <input
                    name="Auto Loan Account"          
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="Auto Loan Account"
                  />
                  Auto Loan Account
                </label><br/>
                <label>
                  <input
                    name="Credit Card Account"          
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="Credit Card Account"
                  />
                  Credit Card Account
                </label><br/>
                <label>
                  <input
                    name="Investment Account"
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="Investment Account"
                  />
                  Investment Account
                </label><br/>
                <label>
                  <input
                    name="Personal Loan Account"          
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="Personal Loan Account"
                  />
                  Personal Loan Account
                </label><br/>
                <label>
                  <input
                    name="Money Market Account"          
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="Money Market Account"
                  />
                  Money Market Account
                </label><br/>
                <label>
                  <input
                    name="Home Loan Account"          
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="Home Loan Account"
                  />
                  Home Loan Account
                </label>
              </div><br/>
              <div>
                <h4>Transaction Type</h4><br/>
                <label>
                  <input
                    name="deposit"
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="deposit"
                  />
                  deposit
                </label><br/>
                <label>
                  <input
                    name="withdrawal"          
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="withdrawal"
                  />
                  withdrawal
                </label><br/>
                <label>
                  <input
                    name="invoice"          
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="invoice"
                  />
                  invoice
                </label><br/>
                <label>
                  <input
                    name="payment"          
                    text="Test"
                    type="checkbox"
                    onChange={this.handleCheckBox}
                    value="payment"
                  />
                  payment
                </label>
              </div>
              
            </div>
            <div className="col-sm-8">
            <h3>Account Data</h3>
             <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ACCOUNT NO</th>
                  <th>ACCOUNT NAME</th>
                  <th>CURRENCY</th>
                  <th>AMOUNT</th>
                  <th>TRANSACTION TYPE</th>
                </tr>
                </thead>
                <tbody>
                {
                  renderData.map((item, index) => (
                    <tr onClick={() => this.handleShowModal(item)} key={index}>
                      <td><a  data-toggle="modal" data-target="#exampleModal"  >{ item && item.account }</a></td>
                      <td>{ item && item.accountName }</td>
                      <td>{ item && item.currencyCode }</td>
                      <td>{ item && item.amount }</td>
                      <td>{ item && item.transactionType }</td>
                    </tr> 
                  ))
                }
                </tbody>
             </table>
            </div>
          </div>
        </div>  
        
      </div>
      {
           <div className="modal fade"  id="exampleModal" role="dialog" ariaLabelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Account Detail</h4>
                </div>
                <div className="modal-body">
                    <p>Account No. : { this.state.accountDetail.account }</p><br/>
                    <p>Account Name. : { this.state.accountDetail.accountName }</p><br/>
                    <p>Currency Code. : { this.state.accountDetail.currencyCode }</p><br/>
                    <p>Amount. : { this.state.accountDetail.amount }</p><br/>
                    <p>Transaction Type. : { this.state.accountDetail.transactionType }</p><br/>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
           </div>
      }
     
      </div>
    );
  }
}

export default App;
