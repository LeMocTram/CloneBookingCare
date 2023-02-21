import { flatMap } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { isPropertyAccessChain } from 'typescript';
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''

        }
        this.lisenToEmmiter();
    }

    lisenToEmmiter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            //reset state
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    }
    componentDidMount() {
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
    handleAddNewUser = () => {
        //validate
        let isValid = this.checkValidInput();
        if (isValid === true) {
            //goi API 
            this.props.createNewUser(this.state);
        }

    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size='lg'
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }} >Creat a new user</ModalHeader>
                <ModalBody>

                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                type='text'
                                onChange={(event) => { this.handleOnchangeInput(event, "email") }}
                                value={this.state.email}
                            ></input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                type='password'
                                onChange={(event) => { this.handleOnchangeInput(event, "password") }}
                                value={this.state.password}
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
                    <Button color="primary" className='px-3' onClick={() => { this.handleAddNewUser() }}>
                        Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
