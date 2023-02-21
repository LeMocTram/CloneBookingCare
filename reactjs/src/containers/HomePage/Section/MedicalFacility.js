import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật </span>
                        <button className='btn-section'><FormattedMessage id="homepage.view-more" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Hệ thống Thu Cúc 1 </div>
                            </div >
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Hệ thống Thu Cúc 2 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Hệ thống Thu Cúc 3 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Hệ thống Thu Cúc 4 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Hệ thống Thu Cúc 5 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-medical-facility'></div>
                                <div>Hệ thống Thu Cúc 6 </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
