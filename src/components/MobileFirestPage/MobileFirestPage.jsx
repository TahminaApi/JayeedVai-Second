import { Link } from 'react-router-dom';

const MobileFirestPage = () => {
  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <div className="bg-[#e3e3e3] p-[10px]">
        <img
          className="w-[94px] h-[26px] "
          src="/public/images/Link3rsLogoPng.png"
          alt="Link3rs"
        />
      </div>
      <div className="mx-auto text-center ">
        <div className="pt-[57px]">
          <h1 className="text-[24px] helve leading-[1] pt-[10px] ">
            Hear in your language. <br />
            With your headphones.
          </h1>
        </div>
        <div className="pt-[9px]">
          <div className="mx-auto bg-[#d2d4d6] w-[281px] h-[307px] rounded-xl pt-[12px]">
            <div className="pt-[4px] ">
              <div className="mx-auto  w-[258px] h-[230px] bg-white rounded-xl">
                <div>
                  <div className="pt-[10px] p-[10px]">
                    <div className="flex justify-start items-center  ">
                      <h3 className="text-[18px] abcd leading-[1] ">
                        This session is{' '}
                        <span className="inline-flex items-center justify-center w-2 h-2 bg-[#ed220d] rounded-full"></span>
                      </h3>
                      <h1 className="text-[18px] font-bold px-1  text-[#ed220d]">
                        Live
                      </h1>
                    </div>
                    <h1 className="text-[14px] text-start font-light  leading-[1]">
                      {' '}
                      A4509-9210-1488
                    </h1>
                  </div>
                  <div className="mx-auto rounded-xl w-[236px] h-[135px] bg-gradient-to-t from-[#0a5d93] to-[#51bbf7]  ">
                    <h1 className='text-[30px] font-bold helve leading-[1] text-start p-[30px] text-white'>Link3rs <br />Brainstorm</h1>
                  </div>
                  <h2 className="text-[13px] text-start abcd p-[7px] pl-[15px]">
                    Original audio in <span className="helve">English</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-[10px] text-end">
              <button className="mx-auto bg-gradient-to-l from-[#0d7dc0] to-[#51bbf7] w-[130px] h-[41px]  rounded-[50px] helveticafont text-white helve text-[20px] ">
                Connect
              </button>
            </div>
            <div className="mx-auto p-[6px] ">
              <Link
                className="text-[16px] text-lg abcd font-bold block absolute"
                to="https://www.link3rs.com"
              >
                Discover Apricot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFirestPage;
