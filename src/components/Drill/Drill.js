
const Drill = ({ data }) => {
  return (
    <article className="drill">
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <strong>Key Teaching Points:</strong>
      <p>{data.subdescription}</p>
      <small>Age: {data.age}</small>
      <small>Category: {data.category}</small>
    </article>
  )
}

export default Drill
