const MobileTranscription = () => {
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
        <div className="mx-auto p-[16px] pt-[12px] bg-[#e3e3e3]  w-[278px] h-[420px] rounded-xl ">
          <h3 className="helve  text-[15px]">Apricot Session</h3>
          <div className="bg-white w-full h-[36px] rounded-xl flex items-center justify-between">
            <div className="w-[66%] text-center">
              <h1 className="text-[14px] mx-auto font-thin border-r-2 px-[5px] border-[#acacac]  ">
                A4509-9210-1488
              </h1>
            </div>
            <div className="flex justify-center items-center mx-auto gap-2 ">
              <span className="inline-flex items-center justify-center w-2 h-2 bg-[#ed220d] rounded-full "></span>{' '}
              <h1 className="text-[14px] font-bold text-[#ed220d]  ">Live</h1>
            </div>
          </div>
          <div className="pt-[20px]">
            <h3 className="helve text-[15px]">Language</h3>
            <div className="bg-white w-full h-[36px] rounded-xl flex items-center">
              <h1 className="text-[15px] mx-auto font-bold">
                Catalan
              </h1>
              <div className="w-[20%] border-r-2 border-[#acacac]  ">
                <img
                  className="w-[28px] h-[18px] "
                  src="/public/images/catalonia.png"
                  alt="flag"
                />
              </div>
              <div className="text-[15px] mx-auto font-bold">
                <h1>From English</h1>
              </div>
            </div>
          </div>
          <div className="pt-[10px]" >
            <div className="w-[251px] h-[244px] bg-white rounded-lg p-[18px] pt-[13px]">
              <h1 className="text-[18px] helve font-bold leading-[1.4]">Transcription</h1>
              <p className="abcd  leading-[1.2]">
              La innovació tecnològica es el pilar sobre el qual es construeixen les
          economies modernas. Les empreses que inverteixen en investigació i
          desenvolupament (R+D) estan a l'avantguarda de la creació de nous
          productes, serveis i processos que no només impulsen el propi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTranscription;
