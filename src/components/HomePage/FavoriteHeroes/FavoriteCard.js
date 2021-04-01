import React from 'react';
import { Button } from "react-bootstrap";

import style from './FavoriteHeroes.module.css';

const FavoriteHeroesCard = ({ name, avatar, id, removeHero }) => {
    return (

        <div className="col-12">
            <div className={style.card}>
                <div className={style.image}>
                <img src={avatar} alt='hero-image'/>
                <Button onClick={() => {removeHero(id)}} className={style.remove} size='sm'> Delete </Button>
                </div>
                <div className={style.name}>{name}</div>
            </div>
        </div>
    )
}

export { FavoriteHeroesCard };
