
const Drill = ({ data }) => {
  return (
    <article className="drill">
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <strong>Key Teaching Points:</strong>
      <p>{data.subdescription}</p>
      <p>{data.age}</p>
      <p>{data.category}</p>
    </article>
  )
}

export default Drill
