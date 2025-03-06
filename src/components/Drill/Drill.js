
const Drill = ({ title, description, image, age, category }) => {
  return (
    <article>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>{age}</p>
      <p>{category}</p>
    </article>
  )
}

export default Drill
