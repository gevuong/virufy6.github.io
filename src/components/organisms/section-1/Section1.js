import PropTypes from 'prop-types';
import ImageAtomLocal from '~/components/atoms/imageAtom/ImageAtomLocal';
import Title from '~/components/atoms/Title/Title';
import Button1 from "~/components/atoms/button1/Button1";

export default function section1({
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
  return (
    <div className="relative flex justify-center overflow-hidden">
      <div className="contrast-1 brightness-100">
        <ImageAtomLocal
          ImageStyleProps=""
          imagesize={sizeImg}
          border={borderImg}
          src={src}
          alt={altImg}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-start p-4 md:p-8 lg:p-12 text-center sm:text-left text-white">
        <div className="flex flex-col mt-12 text-center lg:mt-12 xl:mt-[18rem] sm:mx-0 lg:mx-20 ml-[0rem] lg:ml-[6rem]">
          <Title Text={text} H="h1" TitleClassProps="text-white text-[0.99rem] leading-[2rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3rem] xl:leading-[3.5rem]"/>
          <div className="flex flex-col mt-0 sm:mt-0 lg:mt-12 sm:text-center">
            <Title
              Text={text2}
              H="h1"
              TitleClassProps="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-[0.99rem] leading-[1rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3rem] xl:leading-[3.5rem]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start mt-24 lg:mt-100 xl:mt-[27rem] space-y-2 md:space-y-8 sm:space-y-2 sm:ml-0 lg:ml-20">
          <div className="w-full max-w-xs md:max-w-md">
            <p className="text-[0.75rem] leading-[1rem] sm:text-[0.3rem] sm:leading-[1.25rem] md:text-[1rem] md:leading-[1.5rem] lg:text-[1.125rem] lg:leading-[1.75rem] xl:text-[1.25rem] xl:leading-[2rem]">
              {mainText}
            </p>
          </div>

          <div className="w-full max-w-md md:max-w-lg">
            <p className="text-[0.7rem] leading-[0.9rem] md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:text-[1.5rem] xl:leading-[2.5rem] font-bold">
              {subText}
            </p>
          </div>
          
          <div className="w-full max-w-md md:max-w-lg px-4 sm:px-0 mt-2">
            <Button1 
              size="medium" 
              type="primary" 
              path="/ai"
              label={buttonText} 
              radius="50px"
              gradientBackground="linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)"
              width="315px"
              height="45px"
              className="md:w-[250px] md:h-[65px] p-[9px] px-[27px] gap-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start mt-1 xl:mt-4 sm:ml-0 lg:ml-20">
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
        <div className="flex flex-col items-center mt-[1rem] sm:mt-[2rem] lg:mt-[4rem] xl:mt-[15rem] md:space-y-8 sm:space-y-2 ml-[7rem] lg:ml-[35rem]">
          <p className="text-[0.8rem] leading-[1.5rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.75rem] lg:leading-[2.25rem] xl:text-[2rem] xl:leading-[2.5rem]">
           {mainText2}
          </p>
          <p className="text-[0.5rem] leading-[0.8rem] md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:text-[1.5rem] xl:leading-[3rem] font-bold">
            {subText2}
          </p>
        </div>
      </div>
    </div>
  );
}