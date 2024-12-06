import { useState } from 'react';
import { Link } from 'react-router-dom';

const Transcription = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" bg-[#e7e7e7] min-h-screen flex justify-center gap-8 pt-[48px]">
      <div className="bg-white  shadow-2xl shadow-[#bbd1de] flex flex-col items-start rounded-2xl w-[807px] h-[554px] p-[45px]">
        <h1 className="text-[28px] helve">Transcription</h1>
        <p className="text-[22px] abcd -tracking-tight pt-[15px]">
          La innovació tecnològica es el pilar sobre el qual es construeixen les
          economies modernas. Les empreses que inverteixen en investigació i
          desenvolupament (R+D) estan a l'avantguarda de la creació de nous
          productes, serveis i processos que no només impulsen el propi{' '}
          <span className="inline-flex items-center justify-center w-4 h-4 bg-red-500 rounded-full"></span>
        </p>
      </div>

      <div className=" w-[316px] pt-[8px] ">
        <div className="w-full ">
          <img
            className="w-[102px] pt-[55px] mb-2"
            src="/images/Link3rsLogoPng.png"
            alt="Link3rs"
          />
          <div className=" mx-auto relative">
            <h1 className="text-[28px] helve leading-[31px] ">
              Hear in your language. <span>With your headphones.</span>{' '}
            </h1>
          </div>
          <div className="pt-[20px]">
            <div className="bg-white w-full h-[49px] rounded-3xl flex items-center justify-between">
              <div className='w-[66%] text-center'>
                <h1 className="text-[22px] mx-auto font-thin border-r-2 px-[5px] border-[#acacac]  ">
                  A4509-9210-1488
                </h1>
              </div>
              <div className="flex justify-center items-center mx-auto gap-2 ">
              <span className="inline-flex items-center justify-center w-2 h-2 bg-[#ed220d] rounded-full "></span>{' '}
                <h1 className="text-[20px] font-bold text-[#ed220d]  ">
                  Live
                </h1>
              </div>
            </div>
          </div>
          <div className="pt-[25px]">
            <div className="bg-white w-full h-[172px] rounded-3xl flex flex-col items-center pt-[36px] ">
              <div className="flex justify-center items-center gap-2 ">
                <h1 className="text-[22px] helve ">
                  Translating from<span className="abcd"> English</span>
                </h1>
              </div>
              <div className="pt-[15px]">
                <div className="flex justify-center items-center bg-[#e8e8e8]  w-[221px] h-[50px] rounded-3xl gap-2">
                  <h2 className="text-[20px] helve "> Catalan</h2>
                  <img
                    src="/public/images/catalonia.png"
                    className="w-[35px] h-[22px]"
                    alt="arrow"
                  />
                  <div className="relative inline-block text-left">
                    <button
                      onClick={toggleDropdown}
                      className="inline-flex justify-center w-full pl-6 text-[#000000]  bg-[#e7e7e7] rounded-md  "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-8 h-8 ml-2 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className=" w-[221px] absolute right-3  bg-white border  shadow-lg">
                        <ul className="py-5 grid grid-cols-2">
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Option 1
                          </li>
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Option 2
                          </li>
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Option 3
                          </li>
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Option 3
                          </li>
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Option 3
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
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

export default Transcription;
