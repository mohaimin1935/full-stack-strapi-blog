import {BsArrowRightShort} from 'react-icons/bs'

const ButtonS = ({ children }) => {
    return (
        <>
            <button className={`bg-green-400 dark-text shadow-md
            duration-300 hover:shadow-lg flex space-x-2 mx-auto
            font-semibold py-3 sm:py-4 px-6 sm:px-8 items-center arrow-btn
            text-base sm:text-lg rounded-md`}>
                <div className="">
                    {children}
                </div>
                <div className="arrow-btn-arrow duration-300">
                    <BsArrowRightShort size={'26px'} />
                </div>
            </button>
        </>
    );
}
 
export default ButtonS;