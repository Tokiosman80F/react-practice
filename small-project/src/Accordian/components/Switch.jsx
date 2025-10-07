import clsx from 'clsx'

export default function Switch({checked}) {
    
  return (
    <div  className={clsx("w-14 h-5  mt-10 rounded-full", checked ? "bg-green-500":"bg-gray-500" )} >
      <span className={clsx(" w-5 h-5 block rounded-full", checked ? "bg-gray-500 ml-10 transition-all duration-300": "bg-red-400")} ></span>
    </div>
  )
}
