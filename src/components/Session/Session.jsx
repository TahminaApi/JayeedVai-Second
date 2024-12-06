import { Link } from "react-router-dom";

const Session = () => {
  return (
    <div className=" bg-[#e7e7e7] min-h-screen flex justify-center gap-[40px] pt-[48px]">
      <div className=" bg-white rounded-2xl w-[807px] h-[554px] shadow-2xl flex flex-col justify-center items-center ">
        <h1 className="text-[42px] helve ">The session has ended!</h1>
        <h3 className="text-[42px] pt-[17px]"> Thank you!</h3>
      </div>

      <div className=" w-[316px] pt-[8px] ">
        <div className="w-full ">
          <img
            className="w-[114px] "
            src="/images/Link3rsLogoPng.png"
            alt="Link3rs"
          />
          <div className=" mx-auto relative ">
          <h1 className="text-[28px] helve leading-[31px] pt-[10px] ">
              Hear in your language. <span>With your headphones.</span>{' '}
            </h1>
          </div>
          <div className="pt-[24px]">
            <div className="bg-white w-full h-[49px] rounded-3xl flex items-center justify-between">
              <div className='w-[66%] text-center'>
                <h1 className="text-[22px] mx-auto font-thin border-r-2 border-[#acacac]  ">
                  A4509-9210-1488
                </h1>
              </div>
              <div className="flex justify-center items-center mx-auto gap-2 ">
              <span className="inline-flex items-center justify-center w-2 h-2 bg-[#1f1f1f] rounded-full"></span>{' '}
                <h1 className="text-[20px] font-bold text-[#919191]  ">
                  Off
                </h1>
              </div>
            </div>
          </div>
          <div className="pt-[20px] px-[20px] ">
            <div className=" rounded-3xl w-[263px] h-[129px] border-2 border-black">
              <h1 className="text-[35px] p-[28px] abcd text-center  leading-[1]">
                {' '}
                *Company logo in png*
              </h1>
            </div>
          </div>
          <div className="pt-[25px]">
            <div className="bg-white w-full h-[148px] rounded-3xl flex flex-col items-center pt-[22px] ">
              <div className="flex justify-center items-center gap-2 ">
                <img
                  src="/public/images/spain.png"
                  className="w-[33px] h-[25px]"
                  alt="flag"
                />
                <h1 className="text-[24px] helve">Español</h1>
              </div>
              <div className="pt-[18px]">
                <div className="flex justify-center items-center boxShadowBlue w-[221px] h-[50px] rounded-3xl">
                  <img
                    src="/public/images/arrowDownload.png"
                    className="w-[60px] h-[58px]"
                    alt="arrow"
                  />
                  <h2 className="text-[22px] abcd ">Transcription</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Session;
