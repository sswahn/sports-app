
const DrillList = ({ drills, onClick }) => {
  return (
    <div className="drill-list">
      {drills.map(item => 
        <div key={item.id} id={item.id} onClick={onClick}>
          <header>
            <h2>{item.title}</h2>
          </header>
          <img src={item.image} alt={item.title} />
        </div>
      )}
    </div>
  )
}

export default DrillList
