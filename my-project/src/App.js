import Image1 from './Images/4115CDAB-6649-4DBA-8E77-DA9D181C1250.jpg'


export default function App() {
  return (
    <div className="bg-black h-[1000px]">
      <div className=" h-[210px] flex">
        <div className="mx-auto container"></div>
        <div className="mt-[220px] mx-auto container">
          <div className="font-mono font-bold text-[30px] text-white">
            Hello, it's me
          </div>
          <div className="font-mono font-extrabold text-[70px] text-white mt-[-20px]">
            Bernardus
          </div>
          <div className="font-mono font-extrabold text-[70px] text-white ml-[50px] mt-[-80px]">
            Willson
            <span className="font-mono font-extrabold text-[100px] text-[#5f99ff] mt-[-63px]">
              .
            </span>
          </div>
          <div className="font-mono text-[18px] text-slate-400 mt-[-20px]">
          An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world.
          </div>
        </div>
        <div className="mt-[220px] mx-auto container z-5">
          <img src={Image1} alt="Author" className="rounded-xl"/>
        </div>
        <div className="mt-[220px] z-2">
          <img src={Image1} alt="Author" className="rounded-xl"/>
        </div>
        <div className="mx-auto container"></div>
      </div>
    </div>
  )
}
