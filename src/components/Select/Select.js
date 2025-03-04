
const Select = ({ options, onChange }) => {
  return (
    <select className="select" onChange={onChange}>
      {options.map((item, index) => <option key={index} {index === 0 ? 'hidden' : ''}>{item}</option>)}
    </select>
  )
}

export default Select
