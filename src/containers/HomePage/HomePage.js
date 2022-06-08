import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import TopNews from './Section/TopNews';
import Speciality from './Section/Speciality';
import MedicalCentre from './Section/MedicalCentre'
import Doctor from './Section/Doctor'
import Handbook from './Section/Handbook'
import ForDoctorCentre from './Section/ForDoctorCentre';
import HomeFooter from './HomeFooter';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let setting1 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 1,
            useCSS: true,
            autoplay: true,
            autoplaySpeed: 6000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        };
        let setting2 = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          useCSS: true,
          autoplay: true,
          autoplaySpeed: 6000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
        return (
            <div>
                <HomeHeader />
                <TopNews 
                    settings={setting1}
                />
                <Speciality 
                    settings={setting1}
                />
                <MedicalCentre 
                    settings={setting1}
                />
                <Doctor 
                    settings={setting1}
                />
                <Handbook 
                    settings={setting2}
                />
                <ForDoctorCentre 
                    settings={setting2}
                />
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
