import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import * as action from '../../../store/actions';
import { LANGUAGE, LANGUAGES } from '../../../utils'
import { withRouter } from 'react-router';

class OutStandingDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDocters: []
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux)
            this.setState({
                arrDocters: this.props.topDoctorsRedux
            })

    }
    componentDidMount() {
        this.props.loadTopDoctor();
    }

    handleViewDetailDoctor = (doctor) => {
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`)
        }

    }

    render() {
        console.log('check topdocter redux: ', this, this.props.topDoctorsRedux)

        let allDocters = this.state.arrDocters;
        let { language } = this.props;
        // allDocters = allDocters.concat(allDocters).concat(allDocters)
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="homepage.outstanding-doctor" />
                        </span>
                        <button className='btn-section'><FormattedMessage id="homepage.view-more" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>

                            {allDocters && allDocters.length > 0 && allDocters.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary');

                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`;
                                let nameEn = `${item.positionData.valueEn},${item.lastName} ${item.firstName}`;
                                return (
                                    <div className='section-customize' key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                        <div className='customize-boder'>
                                            <div className='outer-bg'>
                                                <div className='bg-img section-outstanding-doctor'
                                                    style={{ backgroundImage: `url(${imageBase64})` }}
                                                />
                                            </div>
                                            <div className='position text-center'>
                                                <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                <div>Cơ xương khớp </div>
                                            </div>
                                        </div>
                                    </div >
                                )
                            })}

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
        topDoctorsRedux: state.admin.topDoctors,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctor: () => dispatch(action.fetchTopDoctor())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));
