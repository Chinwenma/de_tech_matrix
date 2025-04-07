import { BiSun } from "react-icons/bi"

const ThemeToggle = () => {
  return (
    <button className="rounded-full p-2 bg-gray-300 hover:bg-gray-400 transition">
        <BiSun className="text-yellow-500 h-6 w-6"/>
    </button>
  )
}

export default ThemeToggle