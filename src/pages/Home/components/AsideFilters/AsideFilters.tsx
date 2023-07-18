import { SelectForm } from '../../../../components'

export const AsideFilters = () => {
  return (
    <div className="w-[90%] bg-zinc-100 h-[calc(100vh-100px)] rounded-md p-3"
    style={{
      boxShadow: '0 0 7px #aaa'
    }}>
        <h3 className="text-2xl text-center">Filters</h3>
        <form className='flex flex-col gap-10 mt-10'>
            <SelectForm />
        </form>
    </div>
  )
}
