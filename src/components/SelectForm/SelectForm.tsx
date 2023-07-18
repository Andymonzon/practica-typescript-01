import { useEffect, useState } from 'react'
import { useFilter, useOptionFilter } from '../../hooks'
import { OptionFilters } from '../../types.d'
import { OptionsForm } from './OptionsForm'

export const SelectForm = () => {
  const { handleChangeFilter } = useFilter()

  const [status, setStatus] = useState<string[]>([])
  const [gender, setGender] = useState<string[]>([])
  const [specie, setSpecie] = useState<string[]>([])
  const statusFilter = useOptionFilter(OptionFilters.status)
  const statusGender = useOptionFilter(OptionFilters.gender)
  const statusSpecie = useOptionFilter(OptionFilters.species)

  useEffect(() => {
    if (statusFilter.newDataArray.length === 0) return
    setStatus(statusFilter.newDataArray)
    setGender(statusGender.newDataArray)
    setSpecie(statusSpecie.newDataArray)
  }, [statusFilter.newDataArray])

  return (
    <>
      <div className="w-full flex gap-3 items-center">
        <label htmlFor={OptionFilters.status}>Status:</label>
        <select
          className="px-2 py-1 bg-zinc-300 rounded-md w-full"
          id={OptionFilters.status}
          onChange={(e) => {
            handleChangeFilter(e, OptionFilters.status)
          }}
        >
          <OptionsForm optionFilter={status} />
        </select>
      </div>

      <div className="w-full flex gap-3 items-center">
        <label htmlFor={OptionFilters.gender}>Gender:</label>
        <select
          className="px-2 py-1 bg-zinc-300 rounded-md w-full"
          id={OptionFilters.gender}
          onChange={(e) => {
            handleChangeFilter(e, OptionFilters.gender)
          }}
        >
          <OptionsForm optionFilter={gender} />
        </select>
      </div>

      <div className="w-full flex gap-3 items-center">
        <label htmlFor={OptionFilters.species}>Specie:</label>
        <select
          className="px-2 py-1 bg-zinc-300 rounded-md w-full"
          id={OptionFilters.species}
          onChange={(e) => {
            handleChangeFilter(e, OptionFilters.species)
          }}
        >
          <OptionsForm optionFilter={specie} />
        </select>
      </div>
    </>
  )
}
