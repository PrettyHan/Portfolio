import React from 'react'
import { Image } from 'react-bootstrap';
import Header from '../Header';
import './Style.css';

const SectionMain = () => {

    return (
        <>
          <Header />
            <div className="text-wrap sectionMain">
                <Image className="MainImg" src={('./imgs/main.png')}/>
                <div className="TextBox">
                    <div>
                    <span className='mainText1'>개발자 포트폴리오<br />
                      이젠 쉽게 공유하자!</span> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionMain;