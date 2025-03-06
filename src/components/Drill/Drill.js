
const Drill = ({ data }) => {
  return (
    <article className="drill">
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <strong>Key Teaching Points:</strong>
      <p>{data.subdescription}</p>
      <hr />
      <small><b>Age</b>: {data.age}</small> &nbsp; 
      <small><b>Category</b>: {data.category}</small>
    </article>
  )
}

export default Drill
