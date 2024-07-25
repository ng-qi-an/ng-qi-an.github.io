export default function Page(){
  return <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="w-full flex items-center justify-center gap-2">
      <h1 className="cabin text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b  from-neutral-500 dark:from-neutral-200 to-neutral-500 py-8">
        Hi, 
      </h1>
      <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 dark:from-blue-300 to-blue-500 py-8">
        I'm Qi An
      </h1>
    </div>
</div>
}