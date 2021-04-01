import React from 'react';

import style from './Search.module.css';
import search from "../../../assets/image/search.svg";

const Search = ({ searchedHeroes }) => {

    const onSearch = (e) => {
        searchedHeroes(e.target.value)
    }

    return (
        <div className={style.search}>
            <img src={search} className={style.pic} />
            <input className={style.hero}
                   type="text"
                   placeholder="Search"
                   onChange={onSearch}
            />
        </div>
    );
}

export { Search }
