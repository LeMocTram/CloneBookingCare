import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';





class HomeFooter extends Component {


    //boostrap =>app khoi dong thanh cong
    render() {

        return (

            <div className='home-footer'>
                <p>&copy; 2022 moctram. More information. <a target='_blank' href='#'> 	&#8594; Click here &#8592;</a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        //inject
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
