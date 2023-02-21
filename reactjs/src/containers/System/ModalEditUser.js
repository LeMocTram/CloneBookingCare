
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { isPropertyAccessChain } from 'typescript';
import { emitter } from '../../utils/emitter';
import _ from 'lodash';
class ModalEditUser extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''

        }
    }

    componentDidMount() {
        let user = this.props.currentUser;//{}
        // let {currentUser}= this.props;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hardcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
            console.log('didmount edit modal ', this.props.currentUser)
        }
    }


    toggle = () => {
        this.props.toggleUserModal();
    }

    handleOnchangeInput = (event, id) => {
        //bad code.modify state
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check bad state: ', this.state)
        // })
        //good code
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter:  ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleSaveUser = () => {
        //validate
        let isValid = this.checkValidInput();
        if (isValid === true) {
            //goi API edit user 
            this.props.editUser(this.state);
        }

    }

    render() {
        // console.log('check props from parent: ', this.props)
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }} >Edit Users</ModalHeader>
                <ModalBody>

                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchangeInput(event, "email") }}
                                value={this.state.email}
                                disabled
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(event) => { this.handleOnchangeInput(event, "password") }}
                                value={this.state.password}
                                disabled
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "firstName") }}
                                value={this.state.firstName}
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "lastName") }}
                                value={this.state.lastName}
                            ></input>
                        </div>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input type='text' onChange={(event) => { this.handleOnchangeInput(event, "address") }}
                                value={this.state.address}
                            ></input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>
                        Save changes
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}



const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
