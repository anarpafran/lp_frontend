import React from "react";
import Layout from "../Layout";
import {Spinner} from './Spinner'
import {AlertState} from './AlertState'
import {AlertError} from './AlertError'
import {postRequest} from '../Api'

class Home extends React.Component {
  state = {
    tax_id: '',
    business_name: '',
    requested_amount: '',
    loading: false,
    application: '',
    error: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading: true, application: '', error: ''})
    try {
      const res = await postRequest(this.state);
      this.setState({loading: false, application: res.state})
    } catch (error) {
      this.setState({loading: false, error: error.message})
    }
  }

  onInputChange = event => {
    const {id, value} = event.target;
    this.setState({[id]: value})
  }

  render() {

    return (
      <Layout>
        <h1>Request</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputTaxId">Tax Id</label>
            <input type="number" required={true} autoFocus={true} className="form-control" id="tax_id" value={this.state.tax_id} onChange={(event) => {this.onInputChange(event)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputBusinessName">Business Name</label>
            <input type="text" required={true} className="form-control" id="business_name" value={this.state.business_name} onChange={(event) => {this.onInputChange(event)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputRequestedAmount">Amount</label>
            <input type="number" required={true} className="form-control" id="requested_amount" value={this.state.requested_amount} onChange={(event) => {this.onInputChange(event)}}/>
          </div>
          <div className='p2'>
          {this.state.loading ? 
            (<Spinner />): 
            <button className="btn btn-primary mb1">Send Request</button>
          }
          </div>
        </form>
        <AlertState className='mt-3' type={this.state.application}/>
        <AlertError className='mt-3' message={this.state.error } />
      </Layout>
    );
  }
};

export default Home;
