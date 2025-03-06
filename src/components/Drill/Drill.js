
const Drill = ({ data }) => {
  return (
    <article className="drill">
      <header>
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} />
      </header>
      <p>{data.description}</p>
      <strong>Key Teaching Points:</strong>
      <p>{data.subdescription}</p>
      <footer>
        <small><b>Age</b>: {data.age}</small> &nbsp; 
        <small><b>Category</b>: {data.category}</small>
      </footer>
    </article>
  )
}

export default Drill
