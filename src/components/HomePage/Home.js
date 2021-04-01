import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import { Header } from "../Header/Header";
import { Search } from "./SearchBar/Search";
import { Characters} from "./CharacterCard/Characters";
import { HeroService} from "../../services/HeroService.js";
import { FavoriteHeroes } from "./FavoriteHeroes/FavoriteHeroes";

import style from './Home.module.css';


class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            heroes: [],
            favoriteTeam: []
        }
    }
    componentDidMount() {
        this.fetchHeroes();
    }
    fetchHeroes() {
        const favTeamLocalStorage = window.localStorage.getItem("favoriteTeam");
        HeroService.search().then((heroes) => {
            this.setState({
                heroes,
                favoriteTeam: favTeamLocalStorage ? JSON.parse(favTeamLocalStorage) : []
            });
        });
    }

    searchedHeroes = (name) => {
        HeroService.search(name).then((heroes) => {
            this.setState({heroes});
        });
    };

    heroesAdd = (id) => {
        if (!!this.state.favoriteTeam.find(fav => fav.id === id)) {
            return;
        }
        const hero = this.state.heroes.find((hero) => hero.id === Number(id));
        this.setState(prevState => {
            return {
                ...prevState.favoriteTeam.push(hero),
            }
        }, () => {
            localStorage.setItem("favoriteTeam", JSON.stringify(this.state.favoriteTeam))
        });
    };

    removeHero = (id) => {
        let arr = this.state.favoriteTeam.filter((hero) => hero.id !== id)
        this.setState({favoriteTeam: arr});
        window.localStorage.setItem("favoriteTeam", JSON.stringify(arr));
    };




    render() {
        return (
            <Container fluid>
                <Header
                    title='Hero Team'/>

                    <Row className='justify-content-lgs-center'>
                        <Col lg="9" md='7' sm='5'>
                            <Search searchedHeroes={this.searchedHeroes}/>
                            <div className={style.content}>
                                <Characters
                                    filteredHeroes={this.state.heroes}
                                    heroesAdd={this.heroesAdd}
                                />
                            </div>
                        </Col>
                        <Col lg="3" md='5' sm='7'>
                            <Row className='justify-content-lg-center'>
                                <Col lg="12">
                                    <h4 className={style.title}>Favorite Heroes</h4>
                                    <FavoriteHeroes
                                        favoriteHeroes={this.state.favoriteTeam}
                                        removeHero={this.removeHero}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </Container>
        );
    }
}
export { Home };
