const InputBox = ({ type, placeholder}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className='bg-white px-4 py-2 w-full sm:px-6 sm:py-4 shadow-sm
        rounded-md focus:ring-2 focus:ring-green-400 outline-none'
      />
    </>
  );
}

export default InputBox;