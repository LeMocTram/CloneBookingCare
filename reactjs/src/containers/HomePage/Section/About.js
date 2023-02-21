import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';





class About extends Component {


    //boostrap =>app khoi dong thanh cong
    render() {

        return (

            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói về BookingCare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/lY2yjAdbvdQ"
                            title="Shawn Mendes - Treat You Better" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                    <div className='content-right'>

                        <p>
                            I won't lie to you
                            I know he's just not right for you
                            And you can tell me if I'm off
                            But I see it on your face
                            When you say that he's the one that you want
                            And you're spending all your time
                            In this wrong situation
                            And anytime you want it to stop

                            I know I can treat you better than he can
                            And any girl like you deserves a gentleman
                            Tell me why are we wasting time
                            On all your wasted crying
                            When you should be with me instead
                            I know I can treat you better
                            Better than he can
                        </p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
