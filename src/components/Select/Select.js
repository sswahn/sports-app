
const Select = ({ id = '', options, onChange }) => {
  return (
    <select id={id} className="select" onChange={onChange}>
      {options.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
    </select>
  )
}

export default Select
