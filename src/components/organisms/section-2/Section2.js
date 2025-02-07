import { useEffect } from 'react';
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal';
import Title from '~/components/atoms/Title/Title';

export default function Section2({
  sizeImg,
  borderImg,
  src,
  altImg,
  text,
  text2,
  mainText,
  subText,
  buttonText,
  disclaimer1,
  disclaimer2,
  mainText2,
  subText2
}) {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .gradient-text {
        background: linear-gradient(180deg, #30DA74 100%, #3578DE 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media (min-width: 1536px) {
        .mt-2xl {
          margin-top: 20rem; 
        } 
      }

      @media (min-width: 1660px) {
        .mb-3xl {
          bottom: 30rem; 
        }
      }

      @media (min-width: 1920px) { 
        .mt-3xl {
          margin-top: 40rem;
        }
        
        .mr-3xl {
          margin-right: 20rem; 
        }
      }

      @media (min-width: 400px) and (max-width: 420px) {
        .bottom-custom {
          bottom: 2rem;
        }
      }

      @media (min-width: 420px) and (max-width: 460px) {
        .bottom-custom {
          bottom: 4rem;
        }
      }

      @media (min-width: 360px) and (max-width: 399px) {
        .bottom-custom {
          bottom: 5.5rem;
        }
      }

      @media (min-width: 450px) {
        .custom-top-margin {
          margin-top: 2rem;
        }
      }

      @media (min-width: 500px) {
        .custom-top-margin {
          margin-top: 3rem;
        }
      }

      @media (min-width: 550px) {
        .custom-top-margin {
          margin-top: 4rem;
        }
      }

      @media (min-width: 600px) {
        .custom-top-margin {
          margin-top: 5rem;
        }
      }

      @media (min-width: 650px) {
        .custom-top-margin {
          margin-top: 6rem;
        }
      }

      @media (min-width: 700px) {
        .custom-top-margin {
          margin-top: 7rem;
        }
      }

      @media (min-width: 750px) {
        .custom-top-margin {
          margin-top: 8rem;
        }
      }

       @media (min-width: 800px) {
        .custom-top-margin {
          margin-top: 9rem;
        }
      }

      @media (min-width: 850px) {
        .custom-top-margin {
          margin-top: 10rem;
        }
      }

      @media (min-width: 1200px) {
        .custom-top-margin {
          margin-top: 15rem;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const applyGradient = (text) => {
    const gradientText = text.replace(
      /CoughCheck/g,
      '<span class="gradient-text">CoughCheck</span>'
    );
    return { __html: gradientText };
  };

  return (
    <div className="relative flex justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="contrast-1 brightness-100 w-full">
        <ImageAtomLocal
          ImageStyleProps=""
          imagesize={sizeImg}
          border={borderImg}
          src={src}
          alt={altImg}
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-start p-4 md:p-8 lg:p-12 text-center sm:text-left text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col">
        <div className="mt-[0rem] custom-top-margin sm:mt-[0rem] md:mt-[12.5rem] lg:mt-[14rem]">
          <div className="flex flex-col mt-12 text-center xl:mt-[18rem] sm:mx-0 lg:mx-20 ml-[0rem] lg:ml-[6rem]">
            <Title Text={text} H="" TitleClassProps="text-white text-[0.99rem] leading-[2.25rem] sm:text-[0.99rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3rem] xl:leading-[3.5rem]"/>
            <div className="flex flex-col mt-0 lg:mt-12 sm:text-center">
              <Title
                Text={text2}
                H=""
                TitleClassProps="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-[0.99rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3rem] xl:leading-[3.5rem]"
              />
            </div>
          </div>
          <div className="flex flex-col items-start  mt-[3.5rem] sm:mt-24 lg:mt-100 xl:mt-[10rem] mt-2xl mt-3xl space-y-2 md:space-y-8 sm:ml-0">
            <div className="w-full max-w-xs md:max-w-md">
              <p className="text-[0.7rem] leading-[0.7rem] sm:text-[0.75rem] sm:leading-[1rem] md:text-[1rem] md:leading-[1.5rem] lg:text-[1.125rem] lg:leading-[1.75rem] xl:text-[1.25rem] xl:leading-[2rem]">
                {mainText}
              </p>
            </div>

            <div className="w-full max-w-md md:max-w-lg">
              <p
                className="text-[0.6rem] leading-[0.9rem] md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:text-[1.5rem] xl:leading-[2.5rem] font-bold"
                dangerouslySetInnerHTML={applyGradient(subText)}
              />
            </div>
            
            <div className="w-full max-w-md md:max-w-lg px-0 mt-2">
              <button
                  className={`medium primary text-white
                              w-[270px] h-[35px]
                              sm:w-[315px] sm:h-[45px]
                              xl:w-[250px] xl:h-[65px]`}
                  style={{
                    borderRadius: "50px",
                    background: "linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)",
                  }}
                  onClick={() => window.location.href = "/ai"}
                >
                  {buttonText}
                </button>
            </div>
          </div>
          <div className="flex flex-col items-start mt-[0.2rem] sm:mt-[0.3rem] sm:ml-0">
            <div className="w-full max-w-screen-lg">
              <p className="text-[0.4rem] leading-[0.6rem] md:text-[0.875rem] md:leading-[1.25rem] lg:text-[1rem] lg:leading-[1.5rem] xl:text-[1.125rem] xl:leading-[1.75rem] text-gray-400">
                {disclaimer1}
              </p>
            </div>
            <div className="w-full max-w-screen-lg">
              <p className="text-[0.4rem] leading-[0.6rem] md:text-[0.875rem] md:leading-[1.25rem] lg:text-[1rem] lg:leading-[1.5rem] xl:text-[1.125rem] xl:leading-[1.75rem] text-gray-400">
                {disclaimer2}
              </p>
            </div>
          </div>
          </div>
          <div className="mb-2xl mb-3xl mr-3xl bottom-[3rem] bottom-custom sm:bottom-[7rem] md:bottom-[8rem] lg:mr-[5rem] xl:bottom-[20rem] px-[2rem] absolute flex flex-col items-center mt-[1rem] sm:mt-[2rem] lg:mt-[4rem] xl:mt-[15rem] md:space-y-8 sm:space-y-2 ml-[5.5rem] sm:ml-[8rem] lg:ml-[20rem] sm:mr-[2rem] max-w-[50rem]">
            <p className="text-[0.8rem] leading-[0.9rem] sm:text-[0.8rem] sm:leading-[1.5rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.75rem] lg:leading-[2.25rem] xl:text-[2rem] xl:leading-[2.5rem]">
              {mainText2}
            </p>
            <p
              className="text-[0.4rem] leading-[0.7rem] sm:text-[0.5rem] text-center sm:leading-[0.8rem] md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:text-[1.5rem] xl:leading-[3rem] font-bold"
              dangerouslySetInnerHTML={applyGradient(subText2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
