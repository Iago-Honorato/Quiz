import style from '../styles/Enucniado.module.css'

interface EnucniadoProps {
    texto: string
}

export default function Enunciado(props: EnucniadoProps) {
    return (
        <div className={style.enunciado}>
            <div className={style.texto}>
                {props.texto}
            </div>
        </div>
    )
}