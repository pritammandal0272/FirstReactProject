import './style.css'
export const Loader = () => {
  return (
    <>
    <div className="Loader rounded-md flex-col gap-4 w-fit p-20 flex items-center justify-center fixed z-[100] bg-transparent left-[50%] top-[50%]">
        <div className="w-20 h-20 border-8 text-blue-400 text-4xl animate-spin border-white flex items-center justify-center border-t-blue-400 rounded-full">
        </div>
      </div>
    </>
  );
};
