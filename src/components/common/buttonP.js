const ButtonP = ({ children }) => {
    return (
        <>
            <button className={`bg-green-400 dark-text
            duration-300 hover:bg-green-500 
            font-semibold py-2 px-6
            lg:py-2.5 text-base sm:text-lg rounded-full`}>
                {children}
            </button>
        </>
    );
}
 
export default ButtonP;