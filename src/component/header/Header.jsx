import { Link } from "react-router-dom"
 
 
 

const Header = () => {
  return (
     <header className="py-5 flex w-full h-[60px] bg-white items-center justify-between border-b px-[50px]  border-slate-200">
      <Link to='/' className="logo">
        <img src="./src/assets/img/4books-logo.svg" alt="" />
      </Link>

    
      <Link className="text-lg font-bold" to="/login"> Login  </Link>
    
     </header>
  )
}

export default Header