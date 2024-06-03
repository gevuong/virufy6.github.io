import Image from 'next/image'
import Link from 'next/link'
import { type OywSection } from '~/i18n/types/OneYoungWorld'
import TestimonialSlider from './TestimonialSlider'

const OneYoungWorld = ({
  virufyAndOyw: { title: oywTitle, subTitle, texts, videoUrl, videoTitle },
  whyOyw: { title: whyOywTitle, cards },
  volunteerStories: { title: volunteerTitle, text, testimonials },
}: OywSection) => {
  return (
    <div className="mx-auto max-w-5xl">
      {/* One Young World Section */}
      <section>
        {/* OYW Container */}
        <div className="flex flex-col items-center justify-center px-8 py-12 text-white opacity-95 md:py-0 md:pt-20">
          {/* Virufy & OYW Text Container */}
          <div>
            <h1 className="hidden md:mb-4 md:block md:text-5xl md:text-[#3074dc]">
              {oywTitle}
            </h1>
            <h2 className="mb-8 text-center text-2xl font-bold md:text-left md:text-3xl md:font-medium">
              {subTitle}
            </h2>

            {/* Text Container */}
            <div className="mb-12 space-y-8">
              {texts.map((text, i) => (
                <p
                  key={i}
                  className="text-sm font-medium leading-relaxed md:text-base"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Call to Action video */}
          <iframe
            className="aspect-video w-full px-4 py-1 md:px-16 md:py-9"
            src={videoUrl}
            title={videoTitle}
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>

      {/* Horizontal divider */}
      <div className="mx-8 border-b border-b-white md:hidden"></div>

      {/* Why OYW Section */}
      <section className="mb-16 md:opacity-95">
        {/* Why OYW Container */}
        <div className="mx-8 flex flex-col text-white">
          <h2 className="my-14 text-center text-2xl font-bold md:my-10 md:text-left md:text-3xl md:font-medium">
            {whyOywTitle}
          </h2>

          {/* Cards Container */}
          <div className="space-y-16 rounded-2xl bg-[#3578de4f] py-10 pr-4 font-medium md:grid md:grid-cols-2 md:gap-12 md:space-y-0 md:space-x-0 md:bg-inherit md:py-0">
            {cards.map((card) => (
              <div key={card.title} className="flex justify-center space-x-2">
                <Image
                  className="my-auto h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]"
                  src={card.image}
                  alt={card.altText}
                />
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl">{card.title}</h3>
                  <p className="text-sm md:text-base">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal divider */}
      <div className="mx-8 border-b border-b-white md:opacity-95"></div>

      {/* Volunteer Section */}
      <section className="pb-14 md:opacity-95">
        {/* Volunteer Container */}
        <div className="mx-8 flex flex-col items-center space-y-10 text-white">
          {/* Title and Text Container */}
          <div className="md:pb-12">
            <h2 className="my-12 text-center text-2xl font-bold md:mb-6 md:mt-16 md:text-left md:text-3xl md:font-medium">
              {volunteerTitle}
            </h2>
            <p className="text-sm font-medium leading-relaxed md:text-base">
              {text}
            </p>
          </div>
          {/* Slider Container */}
          <TestimonialSlider testimonials={testimonials} />
          {/* TODO: add link to Join our Team page */}
          <Link
            className="w-auto rounded-full bg-gradient-to-b from-[#38b76b] to-[#3578de] px-6 py-4 text-sm font-medium md:py-4 md:px-12 md:text-base"
            href="#"
          >
            Join our Team
          </Link>
        </div>
      </section>
    </div>
  )
}

export default OneYoungWorld
