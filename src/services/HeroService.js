import { Comics } from "../entities/Comics";
import { Hero } from "../entities/HeroEntity";
import {CharacterInfo} from "../entities/CharacterInfo";



class HeroService {
    static api_Key= "566d612ce09bb9caafddf6626b102532";
    static baseUrl = 'https://gateway.marvel.com/v1/public/characters';

    static search(name = '') {
        const nameQueryString = !!name ? `&nameStartsWith=${name}` : '';
        return fetch(`${this.baseUrl}?apikey=${this.api_Key}${nameQueryString}`)
               .then((response) => response.json())
               .then(data => {
                    return data.data.results.map(({name, thumbnail, id}) => (
                    	new Hero(name, thumbnail, id)
		            ))
               })
    }

    static fetchSingleHero(id) {
        return fetch(`${this.baseUrl}/${id}?apikey=${this.api_Key}`)
            .then(response => response.json())
            .then(response => new CharacterInfo(response.data.results[0]));
    }

    static fetchAllCharacterComics(id) {
        return fetch(`${this.baseUrl}/${id}/comics?apikey=${this.api_Key}`)
            .then(response => response.json())
            .then(response => response.data.results)
            .then(response => response.map(comics => new Comics(comics)))

        // url example
        // https://gateway.marvel.com:443/v1/public/characters/1009144/comics?apikey=
    }
}

export { HeroService };



// public key 566d612ce09bb9caafddf6626b102532
// private key c257c272bbd9ef310e4cda0ea2980e7b5ef7d761
