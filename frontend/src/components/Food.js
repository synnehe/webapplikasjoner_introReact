export default function Food({food}) {
  return (
    <ul>
    {food.map((f) => (<li key={f}>{f}</li>))}
  </ul>
  )
}