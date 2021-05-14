const Loader = () => {
  return (
    <>
      <div className="w-full h-96 flex space-x-8">
        <div className="h-full w-full sm:w-1/2 lg:w-1/3 bg-gray-200 animate-pulse rounded-3xl p-6 space-y-6">
          <LoadItem />
        </div>
        <div className="h-full hidden sm:block w-full sm:w-1/2 lg:w-1/3 bg-gray-200 animate-pulse rounded-3xl p-6 space-y-6"><LoadItem /></div>
        <div className="h-full hidden lg:block w-full sm:w-1/2 lg:w-1/3 bg-gray-200 animate-pulse rounded-3xl p-6 space-y-6"><LoadItem /></div>
      </div>
    </>
  );
}

function LoadItem() {
  return(
    <>
      <div className="h-16 w-full bg-gray-300 rounded-lg"></div>
      <div className="h-12 w-3/4 bg-gray-300 rounded-lg"></div>
      <div className="h-20 w-4/6 bg-gray-300 rounded-lg"></div>
      <div className="h-12 w-5/6 bg-gray-300 rounded-lg"></div>
    </>
  )
}

export default Loader;