const MobileSession = () => {
  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <div className="bg-[#e3e3e3] p-[10px]">
        <img
          className="w-[94px] h-[26px] "
          src="/public/images/Link3rsLogoPng.png"
          alt="Link3rs"
        />
      </div>
      <div className="mx-auto text-center">
        <div className="pt-[11px]">
          <h1 className="text-[24px] helve leading-[1] pt-[10px] ">
            Hear in your language. <br />
            With your headphones.
          </h1>
        </div>
      </div>
      <div className=" pt-[12px]">
        <div className="mx-auto  bg-[#e3e3e3]  w-[278px] h-[420px] rounded-xl ">
          <div className=" p-[16px] pt-[16px]">
            <h3 className="helve  text-[15px]">Apricot Session</h3>
            <div className="bg-white w-full h-[37px] rounded-xl flex items-center justify-between">
              <div className="w-[66%] text-center">
                <h1 className="text-[14px] mx-auto font-thin border-r-2 px-[5px] border-[#acacac]  ">
                  A4509-9210-1488
                </h1>
              </div>
              <div className="flex justify-center items-center mx-auto gap-2 ">
                <span className="inline-flex items-center justify-center w-2 h-2 bg-[#909090] rounded-full "></span>{' '}
                <h1 className="text-[14px] font-bold text-[#2c2c2c]  ">Off</h1>
              </div>
            </div>

            <div className="mx-auto text-center pt-[32px]">
              <h1 className="text-[21px] helve font-bold">The session has ended!</h1>
            </div>
          </div>

          <div className="">
            <img src="/public/images/connector.png" alt="connection" />
          </div>

          <div className="pt-[20px] mx-auto flex flex-col items-center justify-center">
            <div className=" rounded-xl w-[112px] h-[55px] border-2 border-black">
              <h1 className="text-[16px] p-[7px] abcd text-center leading-[1]">
                {' '}
                *Company logo in png*
              </h1>
            </div>
            <div className="pt-[11px]">
              <h1 className="text-[18px] abcd">Thank you!</h1>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex justify-center items-center w-[167px] h-[37px] rounded-xl bg-white">
              <img
                src="/public/images/arrowDownload.png"
                className="w-[41px] h-[41px]"
                alt="arrow"
              />
              <h2 className="text-[18px] abcd ">Transcription</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSession;
