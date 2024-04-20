import { useEffect, useState } from 'react';
import Questao from '../components/Questao';
import QuestaoModel from "../model/questao";
import Botao from '../components/Botao';
import Questionario from '../components/Questionario';
import React from 'react';
import { useRouter } from 'next/router';



const BASE_URL = "/api"

export default function Home() {
  const router = useRouter()
  const [idQuestoes, setIdsQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState(0)

  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idQuestoes = await resp.json()
    setIdsQuestoes(idQuestoes)
  }


  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsQuestoes()
  }, [])


  useEffect(() => {
    idQuestoes.length > 0 && carregarQuestao(idQuestoes[0])
  }, [idQuestoes])



  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
    console.log(respostasCertas + (acertou ? 1 : 0))
  }

  function idProximaPergunta() {

    const proximoIndice = idQuestoes.indexOf(questao.id) + 1
    return idQuestoes[proximoIndice]


  }

  function irPraProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : finalizar()
  }


  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }



  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idQuestoes.length,
        certas: respostasCertas
      }
    })
  }




  function respostaFornecida(indice: number) {
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  }


  function tempoEsgotado() {
    if (questao.naorespondida) {
      setQuestao(questao.responderCom(-1))

    }
  }



  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      proximoPasso={irPraProximoPasso}
    />
  ) : false


  


}
