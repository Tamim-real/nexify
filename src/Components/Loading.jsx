

const Loading = () => {
  return (
     <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-blue-600">Loading...</p>
    </div>
  );
};

export default Loading;