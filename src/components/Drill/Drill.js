
const Drill = ({ data }) => {

  console.log('Drill data: ', data)
  
  return (
    <article className="drill">
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} />
      <p>{data.description}</p>
      <p>{data.age}</p>
      <p>{data.category}</p>
    </article>
  )
}

export default Drill
