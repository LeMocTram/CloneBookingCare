import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import specialtyImg from '../../../assets/specialty/co-xuong-khop.jpg';


class HandBook extends Component {


    //boostrap =>app khoi dong thanh cong
    render() {

        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang </span>
                        <button className='btn-section'><FormattedMessage id="homepage.view-more" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider{...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <div>Cơ xương khớp 1 </div>
                            </div >
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <div>Cơ xương khớp 2 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <div>Cơ xương khớp 3 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <div>Cơ xương khớp 4 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <div>Cơ xương khớp 5 </div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-img section-handbook'></div>
                                <div>Cơ xương khớp 6 </div>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        //inject
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
