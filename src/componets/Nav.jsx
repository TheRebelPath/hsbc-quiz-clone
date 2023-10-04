import { logo } from "../assets"

const Nav = () => {
  return (
    <div
    className="flex bg-black fixed w-full h-14 sm:h-20 top-0 left-0 px-5 sm:px-96 z-10 shadow-md shadow-slate-500 items-center"
    >
      <img className="h-full mr-2" src={logo} alt="logo" />
     <span className="text-white font-bold sm:text-xl">HSBC</span>
      </div>
  )
}

export default Nav