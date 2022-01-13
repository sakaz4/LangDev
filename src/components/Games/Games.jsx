import React from "react";

import styles from './Games.module.css'
import {NavLink} from 'react-router-dom'
import imgChechCorrect from './../../assets/img/check-the-correct-one.svg'
import imgSelectTranslation from './../../assets/img/select-translation.svg'
import imgSprintGuess from './../../assets/img/sprint-guess.svg'
import imgPutTranslation from './../../assets/img/put-translation.svg'
import imgSpeakAndCheck from './../../assets/img/speak-and-check.svg'
import imgSprintListen from './../../assets/img/listen-sprint.svg'
import imgRememberranslation from './../../assets/img/remember-translation.svg'
import imgWriteTranslation from './../../assets/img/write-translation.svg'
import imgListenAndGuess from './../../assets/img/listen-and-guess.svg'

const Games = () => {

    const GAMES = [
        {img: imgChechCorrect, path: 'check-it', name: 'Check correct word', description:'Check correct word'},
        {img: imgWriteTranslation, path: 'write-it', name: 'Write correct word', description:'Write correct word'},
        {img: imgSprintGuess, path: 'check-it', name: 'Check correct word', description:'Check correct word'},
        {img: imgPutTranslation, path: 'check-it', name: 'Check correct word', description:'Check correct word'},
        {img: imgSpeakAndCheck, path: 'check-it', name: 'Check correct word', description:'Check correct word'},
        {img: imgSprintListen, path: 'check-it', name: 'Check correct word', description:'Check correct word'},
        {img: imgRememberranslation, path: 'check-it', name: 'Check correct word', description:'Check correct word'},
        {img: imgWriteTranslation, path: 'check-it', name: 'Check correct word', description:'Check correct word'},
        {img: imgListenAndGuess, path: 'check-it', name: 'Check correct word', description:'Check correct word'},
    ]

    return (
        <section className={styles.gameContainer}>
            {GAMES.map((game, index) => (
                <NavLink key={index} to={'games/' + game.path}>
                    <div className={styles.gameBlock}>
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                        </div>

                        <img src={game.img} alt="#" />
                    </div>
                </NavLink>
            ))}
        </section>  
    )
}

export default Games