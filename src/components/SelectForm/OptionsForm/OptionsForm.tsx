import { OptionFilters } from '../../../types.d'

interface Props {
  optionFilter: string[]
}

export const OptionsForm: React.FC<Props> = ({ optionFilter }): JSX.Element => {
  return (
    <>
      <option value={OptionFilters.all}>Set filter</option>
      {optionFilter.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </>
  )
}
