export default function Conversor({
  valorArquivo,
  setValorArquivo,
  unidadeArquivo,
  setUnidadeArquivo,
  unidadeDestino,
  setUnidadeDestino,
  tamanhoPendrive,
  setTamanhoPendrive,
  unidadePendrive,
  setUnidadePendrive,
  onCalcular,
}) {
  return (
    <section className="conversor">
      <div className="grupo">
        <label htmlFor="valor">Tamanho do arquivo</label>
        <div className="linha">
          <input
            id="valor"
            type="number"
            min="0"
            placeholder="Ex: 500"
            value={valorArquivo}
            onChange={(e) => setValorArquivo(e.target.value)}
          />
          <select
            value={unidadeArquivo}
            onChange={(e) => setUnidadeArquivo(e.target.value)}
          >
            <option value="KB">KB</option>
            <option value="MB">MB</option>
            <option value="GB">GB</option>
            <option value="TB">TB</option>
          </select>
        </div>
      </div>

      <div className="grupo">
        <label htmlFor="destino">Converter para</label>
        <select
          id="destino"
          value={unidadeDestino}
          onChange={(e) => setUnidadeDestino(e.target.value)}
        >
          <option value="KB">KB</option>
          <option value="MB">MB</option>
          <option value="GB">GB</option>
          <option value="TB">TB</option>
        </select>
      </div>

      <div className="grupo">
        <label htmlFor="pendrive">Capacidade do pendrive</label>
        <div className="linha">
          <input
            id="pendrive"
            type="number"
            min="0"
            placeholder="Ex: 16"
            value={tamanhoPendrive}
            onChange={(e) => setTamanhoPendrive(e.target.value)}
          />
          <select
            value={unidadePendrive}
            onChange={(e) => setUnidadePendrive(e.target.value)}
          >
            <option value="KB">KB</option>
            <option value="MB">MB</option>
            <option value="GB">GB</option>
            <option value="TB">TB</option>
          </select>
        </div>
      </div>

      <button type="button" className="botao-converter" onClick={onCalcular}>
        Converter
      </button>
    </section>
  )
}
