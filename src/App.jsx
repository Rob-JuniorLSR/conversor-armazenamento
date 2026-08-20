import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Conversor from './components/Conversor'
import Resultado from './components/Resultado'
import './App.css'

// Transforma um valor de uma unidade (KB, MB, GB, TB) em bytes
function converterParaBytes(valor, unidade) {
  const potencias = { KB: 1, MB: 2, GB: 3, TB: 4 }
  return valor * Math.pow(1024, potencias[unidade])
}

// Converte um valor de uma unidade de origem para uma unidade de destino
function calcularConversao(valor, unidadeOrigem, unidadeDestino) {
  const potencias = { KB: 1, MB: 2, GB: 3, TB: 4 }
  const bytes = converterParaBytes(valor, unidadeOrigem)
  return bytes / Math.pow(1024, potencias[unidadeDestino])
}

// Calcula quantos arquivos (do tamanho informado) cabem no pendrive
function calcularArquivosNoPendrive(valorArquivo, unidadeArquivo, tamanhoPendrive, unidadePendrive) {
  const bytesArquivo = converterParaBytes(valorArquivo, unidadeArquivo)
  const bytesPendrive = converterParaBytes(tamanhoPendrive, unidadePendrive)
  if (bytesArquivo <= 0) return 0
  return Math.floor(bytesPendrive / bytesArquivo)
}

function App() {
  const [valorArquivo, setValorArquivo] = useState('')
  const [unidadeArquivo, setUnidadeArquivo] = useState('MB')
  const [unidadeDestino, setUnidadeDestino] = useState('GB')
  const [tamanhoPendrive, setTamanhoPendrive] = useState('')
  const [unidadePendrive, setUnidadePendrive] = useState('GB')

  const [erro, setErro] = useState(null)
  const [textoConversao, setTextoConversao] = useState(null)
  const [textoArquivos, setTextoArquivos] = useState(null)

  function handleCalcular() {
    const valor = parseFloat(valorArquivo)

    if (isNaN(valor) || valor <= 0) {
      setErro('Informe um tamanho de arquivo maior que zero.')
      setTextoConversao(null)
      setTextoArquivos(null)
      return
    }

    setErro(null)

    const conversao = calcularConversao(valor, unidadeArquivo, unidadeDestino)
    setTextoConversao(
      `${valor} ${unidadeArquivo} equivalem a ${conversao.toFixed(2)} ${unidadeDestino}`
    )

    const pendrive = parseFloat(tamanhoPendrive)
    if (!isNaN(pendrive) && pendrive > 0) {
      const arquivos = calcularArquivosNoPendrive(valor, unidadeArquivo, pendrive, unidadePendrive)
      setTextoArquivos(`Cabem aproximadamente ${arquivos} arquivo(s) desse tamanho`)
    } else {
      setTextoArquivos(null)
    }
  }

  return (
    <>
      <Cabecalho />
      <main className="conteudo">
        <Conversor
          valorArquivo={valorArquivo}
          setValorArquivo={setValorArquivo}
          unidadeArquivo={unidadeArquivo}
          setUnidadeArquivo={setUnidadeArquivo}
          unidadeDestino={unidadeDestino}
          setUnidadeDestino={setUnidadeDestino}
          tamanhoPendrive={tamanhoPendrive}
          setTamanhoPendrive={setTamanhoPendrive}
          unidadePendrive={unidadePendrive}
          setUnidadePendrive={setUnidadePendrive}
          onCalcular={handleCalcular}
        />

        {erro && <p className="erro">{erro}</p>}

        {textoConversao && <Resultado titulo="Conversão" texto={textoConversao} />}

        {textoArquivos && (
          <Resultado titulo="Capacidade do pendrive" texto={textoArquivos} />
        )}
      </main>
    </>
  )
}

export default App