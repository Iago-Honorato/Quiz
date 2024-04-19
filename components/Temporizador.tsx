import React from 'react'
import styles from '../styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}
export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={["#BCE596", "#F7B801", "#ED827A", "#FF0000"]}
                colorsTime={[10, 6, 4, 0]}>
           
                
            {({ remainingTime}) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}