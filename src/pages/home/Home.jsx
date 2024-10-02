import { Link } from "react-router-dom"

 

const Home = () => {
  return (
    <div className="   w-full lg:flex items-start justify-start px-[20px] md:px-[50px] py-8  gap-6">

    <div className=" w-[100%] lg:w-[50%] items-center md:items-start justify-center flex flex-col gap-6   ">
      <span className=" hidden sm:flex p-2 bg-[#efedff] text-sm font-bold rounded ">Welcome to 4books  </span>
      <h1 className=" text-center md:text-left  text-4xl md:text-5xl leading-[46px] md:leading-[60px] font-bold text-black ">Invest in your personal growth, 15 minutes a day is enough</h1>
      <p className=" text-center md:text-left  text-[#6f7181] text-lg font-semibold ">Thousands of books, podcasts and news bulletins specially selected for you, so you can learn something new every day</p>

      <Link className=" px-12   py-2 md:px-10 text-lg font-bold bg-[#3b49ff] rounded-full text-white " to=''> Try 4books for free </Link>

    </div>
    
    <div className=" w-[100%] lg:w-[50%] flex items-center justify-center">
    <img className=" rounded-md w-[100%] md:w-[85%] lg:w-[100%]  " src="./src/assets/img/visitor@2x.jpg" alt="" />
    </div>
    
    </div>
  )
}

export default Home