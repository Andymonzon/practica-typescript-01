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
      <select
        className="px-2 py-1 bg-zinc-300 rounded-md"
        id={OptionFilters.status}
        onChange={(e) => {
          handleChangeFilter(e, OptionFilters.status)
        }}
      >
        <OptionsForm optionFilter={status} />
      </select>
      <select className="px-2 py-1 bg-zinc-300 rounded-md"
      onChange={(e) => {
        handleChangeFilter(e, OptionFilters.gender)
      }}>
        <OptionsForm optionFilter={gender} />
      </select>
      <select className="px-2 py-1 bg-zinc-300 rounded-md"
      onChange={(e) => {
        handleChangeFilter(e, OptionFilters.species)
      }}>
        <OptionsForm optionFilter={specie} />
      </select>
    </>
  )
}
