import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Banner: React.FC = () => (
    <>
        {/* <div className='carousel-left' style={contentStyle}></div> */}
        <div className='carousel-box'>
            <Carousel autoplay autoplaySpeed={3000}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>5</h3>
                </div>
            </Carousel>
        </div>
        {/* <div className='carousel-right' style={contentStyle}></div> */}
    </>
  );

export default Banner;