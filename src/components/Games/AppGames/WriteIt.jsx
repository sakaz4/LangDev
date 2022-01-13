import React, {useContext, useRef, useState} from "react";
import Store from "../../../context";

import styles from './AppGames.module.css'

const WriteIt = ({setWordIndex, wordIndex, playWords, errorWords, setErrorWords, correctWords, setCorrectWords, speak}) => {
    const input = useRef()
    const data = useContext(Store)
    const [randomWords, setRandomWords] = useState(data.playWords.sort(()=> Math.random() - 0.5));

    const checkWord = (event) => {
        event.preventDefault();
        if (input.current.value === randomWords[wordIndex].translate) {
            speak(randomWords[wordIndex].translate);
            data.setCorrectWords(data.correctWords + 1)
            if(wordIndex !== data.playWords.length - 1) {
               setWordIndex(wordIndex + 1)
            } else {
                alert('game is over')
            }
            input.current.value=''
        } else {
            data.setCorrectWords(data.errorWords + 1)
        }
    }
    return (
        <section >
            <span>write a translation for this word</span>
            <h3>{randomWords[wordIndex].word}</h3>
           <form onSubmit={checkWord} className={styles.writeWordBlock}>
                <input ref={input} type="text" />

                <button className={styles.btnOk}>OK</button>
           </form>
        </section>  
    )
}

export default WriteIt