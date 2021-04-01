import React from 'react';
import { Comic } from './Comic';


const SwitchComics = ({ comics}) => {
    return (
            comics.map(com => (
                <Comic
                    key={com.id}
                    title={com.name}
                    image={com.image}
                />
            )));
}

export { SwitchComics };
