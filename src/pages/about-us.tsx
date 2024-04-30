import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { HalfToneDots, MaskHeader } from '~/assets/static/images/aboutUs/index'
import ValuesCard from '~/components/molecules/Card/ValuesCard'
import { useI18n } from '~/i18n'

export default function AboutUs() {
  const {
    AboutUs: { aboutUsSection, storySection, valuesSection, privacySection },
  } = useI18n()

  return (
    <div className="relative -top-24">
      {/* About Us/Hero Section */}
      <section>
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <Image
            className="absolute h-full w-full object-cover opacity-40"
            src={MaskHeader}
            alt=""
            priority
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center py-60 lg:right-28">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl space-y-6 px-10 text-center font-medium text-white lg:max-w-2xl lg:text-left">
              <h2 className="text-5xl font-normal">{aboutUsSection.title}</h2>
              {aboutUsSection.texts.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <Image
          src={HalfToneDots}
          alt=""
          className="absolute h-full w-full object-cover opacity-40"
        />

        {/* Story, Values, and Privacy Container */}
        <div className="-mb-24 py-40">
          {/* Story Section */}
          <section className="mb-40">
            {/* Story Container */}
            <div className="relative flex items-center justify-center lg:right-28">
              {/* Sizing & Spacing Container */}
              <div className="max-w-xl space-y-6 px-10 text-center font-medium text-white opacity-95 lg:max-w-2xl lg:text-left">
                <h2 className="text-5xl font-normal">{storySection.title}</h2>
                {storySection.texts.map((el, i) => (
                  // render fragment or link component in paragraph element
                  <p key={i}>
                    {el.map((text, i) =>
                      text.type === 'text' ? (
                        <Fragment key={i}>{text.text}</Fragment>
                      ) : (
                        <Link className="text-blue-500" key={i} href={text.url}>
                          {text.text}
                        </Link>
                      ),
                    )}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-40">
            {/* Values Container */}
            <div className="flex items-center justify-center">
              {/* Sizing & Spacing Container */}
              <div className="max-w-3xl space-y-6 px-10 text-left font-medium text-white opacity-95 lg:max-w-4xl">
                <h2 className="text-center text-5xl font-normal lg:text-left">
                  {valuesSection.title}
                </h2>

                {/* Cards Container */}
                <div className="grid grid-cols-1 grid-rows-6 gap-y-6 rounded-3xl bg-[#132d62] px-16 py-12 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-y-16 lg:gap-x-20 lg:space-y-0 lg:px-20">
                  {valuesSection.cards.map((card) => (
                    <div key={card.title}>
                      <ValuesCard {...card} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Section */}
          <section>
            {/* Privacy Container */}
            <div className="mx-auto max-w-xl px-10 text-center font-medium text-white opacity-95 lg:max-w-2xl">
              <h2 className="mb-10 text-5xl font-normal">
                {privacySection.title}
              </h2>
              {privacySection.texts.map((text, i) => (
                <p className="leading-10 lg:leading-normal" key={i}>
                  {text}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
