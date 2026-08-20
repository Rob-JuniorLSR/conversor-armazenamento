function Conversor({ setResultado }) {
  return (
    <main>
      <label>Valor:</label>
      <input type="number" />

      <label>De:</label>
      <select>
        <option>Bytes</option>
        <option>KB</option>
        <option>MB</option>
        <option>GB</option>
        <option>TB</option>
      </select>

      <button>Converter</button>
    </main>
  )
}

export default Conversor
