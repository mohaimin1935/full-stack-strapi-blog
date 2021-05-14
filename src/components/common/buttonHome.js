const ButtonHome = ({ children }) => {
    return (
        <>
            <button className={`bg-green-400 dark-text
            duration-300 font-semibold py-3 w-28 sm:w-32
            text-base sm:text-lg rounded-md hover:rounded-full`}>
                {children}
            </button>
        </>
    );
}
 
export default ButtonHome;