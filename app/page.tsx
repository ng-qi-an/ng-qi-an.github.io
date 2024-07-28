import Icon from "../components/Icon";

export default function Page(){
  return <>
  <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center px-[50px]">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
  </div>
  <div className="w-screen flex items-center px-[70px] justify-center h-screen absolute z-[10] top-0 left-0">
    <img src="/pfp.jpg" className="min-w-[200px] h-[200px] object-cover object-left rounded-xl mr-8"/>
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center">
        <h1 className="cabin flex items-center text-2xl sm:text-3xl font-semibold relative z-20 text-neutral-500 dark:text-neutral-500 py-2">
          Hey there 
        </h1>
        <p className="text-4xl ml-2">👋</p>
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold relative z-20 text-black dark:text-white py-2">
        I'm Qi An
      </h1>
    </div>
  </div>
  </>
}