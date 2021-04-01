import React from 'react';

import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

import style from './CharacterCard.module.css'

const CharacterCard = ({ name, avatar, heroesAdd, id }) => {

    return (
        <div className={style.cardwrap}>
            <div className={style.card} >
                <img src={avatar} className={style.pic} />
                    <div className={style.name}>{name}</div>
                <div className={style.buttons}>
                    <Link to={`/hero-info/${id}`}><Button className={style.info} variant="primary">Info</Button></Link>
                        <Button className={style.add} onClick={() => heroesAdd(id)} variant="primary">Add</Button>
                </div>
            </div>
    </div>

    )
}

export { CharacterCard };
