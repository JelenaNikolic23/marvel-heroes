import React from 'react';
import { Row } from 'react-bootstrap';

import { FavoriteHeroesCard } from './FavoriteCard.js';


const FavoriteHeroes = ({ favoriteHeroes, removeHero }) => {
    return (
        <Row>
            {favoriteHeroes.map(hero => (
                <FavoriteHeroesCard
                    removeHero={removeHero}
                    key={hero.id}
                    id={hero.id}
                    name={hero.name}
                    avatar={hero.avatar}
                />
            ))}
        </Row>
    );
};

export { FavoriteHeroes };
