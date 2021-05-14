const CommonHero = ({ title, children }) => {
  return (
    <section id="">
      <div className="relative h-96 dark-bg bgg-gray-600 w-full text-white"> {/* ----------full hero---------- */}

        {/* ----------black part---------- */}
        <div className="h-full contaier">

          <div data-aos="fade-up" className="text-white text-center container 
            h-full pb-10 flex flex-col justify-center items-center">
            <h2 className="text-center font-bold text-5xl sm:text-6xl"> {/* ----------Text---------- */}
              {title}
            </h2>
            <p>
              {children}
            </p>
          </div>
        </div> {/* ----------black part ends---------- */}

        {/* ----------white part---------- */}
        <div className="absolute radius-top bg-white h-10 w-full bottom-0"> 
          
        </div> 
        {/* ----------white part end---------- */}

      </div> {/* ----------full hero end---------- */}
    </section>);
}

export default CommonHero;