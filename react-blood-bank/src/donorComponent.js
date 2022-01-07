import React from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
class donorComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            bloodgroup: '',
            quantity: '',
            name: '',
            phone: ''

        }
    }
    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();
            const token = await localStorage.getItem('token');
            var decodedToken = jwt.decode(token);
            console.log(decodedToken);
            if(decodedToken.exp*1000 <= Date.now()){
                this.props.history.push('/')
            }else{
                try {
                    var response = await axios.post(
                        'http://localhost:3001/users/addblood', {
                            headers: {
                                'access-token':token
                            },
                        bloodgroup: this.state.bloodgroup,
                        quantity: this.state.quantity,
                        name: this.state.name,
                        phone: this.state.phone
                    })
                    if (response.data) {
                        localStorage.setItem('token', response.data);
                        this.props.history.push('/products');
                        console.log(response);
                    }
                } catch (err) {
                    console.warn(err)
                }
            }
        }
        return (
            <>hiii
                <div style={{ padding: '20px' }}>
                    <h3>Add blood donor details</h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label>Blood group</label> &nbsp;
                            <input type="text" name="bloodgroup" value={this.state.bloodgroup}
                                onChange={(e) => this.setState({ bloodgroup: e.target.value })}></input>
                        </div> <br />
                        <div>
                            <label>quantity</label>  &nbsp;
                            <input type="number" name="quantity" value={this.state.quantity}
                                onChange={(e) => this.setState({ quantity: e.target.value })}></input>
                        </div> <br />
                        <div>
                            <label>Name</label> &nbsp;
                            <input type="text" name="name" value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}></input>
                        </div> <br />
                        <div>
                            <label>Phone no.</label> &nbsp;
                            <input type="number" name="phone" value={this.state.phone}
                                onChange={(e) => this.setState({ phone: e.target.value })}></input>
                        </div> <br />
                        <button type="submit">Submit</button> <br />
                    </form>
                </div>


            </>

        )
    }
}
export default donorComponent;