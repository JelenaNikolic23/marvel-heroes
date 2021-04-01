import React from 'react';
import { Col } from 'react-bootstrap';

import style from './SwitchComics.module.css';

const Comic = ({ image, title }) => {

    return (
        <Col lg="2" md='3' sm='4' xs='4'>
             <div className={style.image}>
                    <img src={image}></img>
                </div>
                <div>
                    <h6 className={style.comic}>{title}</h6>
                </div>
        </Col>

    )
}

export { Comic };
