export default function Resultado({ titulo, texto }) {
  return (
    <div className="resultado">
      <p className="resultado-titulo">{titulo}</p>
      <p className="resultado-texto">{texto}</p>
    </div>
  )
}
