import React from 'react';
import { Link } from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import { Container, Row, Col } from 'react-bootstrap';

import { Header } from '../Header/Header';
import { HeroInfo } from './HeroInfo/HeroInfo';
import { SwitchComics } from "./Comics/SwitchComics";
import { HeroService } from "../../services/HeroService"


import style from './HeroInfoPage.module.css';

class HeroInfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            heroInfo: [],
            comicsShown: false,
            comics: [],
        }
    }

    componentDidMount() {
        this.fetchCharacter();
        this.fetchComics();
    }

    fetchCharacter(){
        HeroService.fetchSingleHero(this.props.match.params.id)
            .then(data => {this.setState({
                heroInfo: data
                });
            });
    }

    fetchComics(){
         HeroService.fetchAllCharacterComics(this.props.match.params.id)
            .then( data => {this.setState({
                comics: data,
                isLoading: false,
                });
            });
    }

    showComics = (e) => {
        this.setState((prevState) => {
            return {comicsShown: !prevState.comicsShown}
        });
    }

    render() {
        const { heroInfo, comics, comicsShown } = this.state;
        const { link, info, home } = style;

        if(!heroInfo) {
            return <div>Loading...</div>
        }

        return (
            <Container fluid className={info}>
                <Header title='Marvels Heroes'/>
                <Link className={link} to='/'>
                    <div className={home}>Homepage</div>
                </Link>
                <Row>
                    <HeroInfo
                        key={heroInfo.id}
                        title={heroInfo.name}
                        avatar={heroInfo.avatar}
                        description={heroInfo.description}
                    />
                </Row>
                <Row>
                    <Col lg='12'>
                        <Switch
                            id='1'
                            onChange={this.showComics}
                            label='Show comics'
                        />
                    </Col>
                </Row>
                <Row>
                    {comicsShown
                        ? <SwitchComics
                            comics={comics}
                        />
                    : <></>
                    }
                </Row>
            </Container>
        )
    }
}

export { HeroInfoPage }
