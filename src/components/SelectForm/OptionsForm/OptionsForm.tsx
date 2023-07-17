interface Props {
  optionFilter: string[]
}

export const OptionsForm: React.FC<Props> = ({ optionFilter }): JSX.Element => {
  return (
    <>
      {optionFilter.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </>
  )
}
