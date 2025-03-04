
const Select = ({ options, onChange }) => {
  return (
    <select className="select" onChange={onChange}>
      {options.map(item => <option>{item}</option>)}
    </select>
  )
}

export default Select
