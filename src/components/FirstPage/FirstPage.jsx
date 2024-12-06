import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="w-full bg-[#e7e7e7]   min-h-screen ">
     <div className='pt-[73px] '> 
      <img
        className="w-[126px] mx-auto  "
        src="/images/Link3rsLogoPng.png"
        alt="Link3rs"
      /></div>

      <div className="w-[650px] mx-auto  pt-[2px] relative ">
        <img
          className="h-[96px] absolute -left-2 top-0"
          src="/images/airpodA.png"
          alt="airpod"
        />
        <h1 className="text-[50px]  helve text-center leading-[1.2] ">
          Hear in your language.
        </h1>
        <h1 className="text-[50px] helve text-center leading-[1.2] ">
          With your headphones.
        </h1>
        <img
          className="h-[96px] absolute -right-2 -bottom-7 "
          src="/images/airpodB.png"
          alt="airpod"
        />
      </div>


<div className="w-[764px] h-[268px]   bg-white rounded-3xl shadow-lg shadow-black/5 mx-auto mt-9  p-[25px]  flex  justify-between relative ">
        <div >
          <div className='flex justify-start items-center '>
            <h3 className="text-[28px] abcd pt-[25px] leading-[1.2] ">
              This session is{' '}
              <span className="inline-flex items-center justify-center w-3 h-3 bg-[#ed220d] rounded-full"></span>
            </h3>
            <h1 className='pt-[18px] text-[28px] font-bold px-1  text-[#ed220d]'>Live</h1>
          </div>
          <h1 className="text-[37px] font-light  leading-[1.1]"> A4509-9210-1488</h1>
          <h2 className="pt-[50px] pb-5 text-[24px] abcd">
            Original audio in <span className="helve">English</span>
          </h2>
          <div className="w-9/12">
            <button className="ms-[62px] absolute bg-gradient-to-l from-[#0d7dc0] to-[#51bbf7] w-[166px] h-[55px] px-4 py-3 rounded-[50px] helveticafont text-white  flex justify-center items-center helve text-[24px] ">
              Connect
            </button>
          </div>
        </div>
        <div className="w-[376px] h-[218px] rounded-3xl bg-gradient-to-t from-[#0a5d93] to-[#51bbf7]  "></div>
      </div>


      <Link
        className="text-lg abcd font-bold block absolute right-8 bottom-6"
        to="https://www.link3rs.com"
      >
        Discover Apricot
      </Link>
    </div>
  );
};

export default FirstPage;
