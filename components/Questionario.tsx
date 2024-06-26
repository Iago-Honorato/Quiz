import QuestaoModel from "../model/questao"
import styles from '../styles/Questionario.module.css'
import Botao from "./Botao"
import Questao from "./Questao"

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    proximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if (props.questao.naorespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao ?
                <Questao
                    valor={props.questao}
                    tempoPraResposta={20}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.proximoPasso} />
                : false}

            <Botao onClick={props.proximoPasso} texto={props.ultima ? 'Finalizar' : 'Próxima'} />
        </div>
    )
}