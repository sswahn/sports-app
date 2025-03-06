
const Select = ({ id = '', options, onChange, value = '' }) => {
  return (
    <select id={id} className="select" onChange={onChange} value={value}>
      {options.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
    </select>
  )
}

export default Select
