import React from 'react';
import { Col } from 'react-bootstrap';

import style from './HeroInfo.module.css';


const HeroInfo = ({ avatar, title, description}) => {
    return (

        <Col className={style.padding} lg='12'>
            <div className={style.card}>
                <div className={style.image}>
                    <img src={avatar}></img>
                </div>
                <div>
                    <h4 className={style.title}>{title}</h4>
                    <p>{description}</p>
                    {description === "" &&
                    <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.... </p>
                    }
                </div>
            </div>
        </Col>
    )
}

export { HeroInfo }
