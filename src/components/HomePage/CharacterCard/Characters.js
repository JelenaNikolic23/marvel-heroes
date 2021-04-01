import React from 'react';

import { CharacterCard } from './CharacterCard';

const Characters = ({ filteredHeroes, heroesAdd }) => {

    return (

        filteredHeroes.map((hero) => (
            <CharacterCard
                heroesAdd={heroesAdd}
                key={hero.id}
                name={hero.name}
                avatar={hero.avatar}
                id={hero.id} />
        ))

    )

}
export { Characters };
