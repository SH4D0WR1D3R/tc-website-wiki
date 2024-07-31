import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AboutUs from '@site/src/components/home/about-us.mdx';
import Hires from '@site/src/components/home/hires.mdx';
import GetInvolved from '@site/src/components/home/get-involved.mdx';
import TheExec from '@site/src/components/home/the-exec';
import Shows from '@site/src/components/home/shows.mdx';
import TechCrewCarousel, { CarouselSlide } from '@site/src/components/carousel';
import showsCarousel from '@site/src/components/home/shows-carousel';
import generalCarousel from '@site/src/components/home/general-carousel';
import CaptionedImage from '@site/src/components/captioned-image';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Welcome to Warwick Tech Crew, the society for anyone interested in technical theatre or entertainment."
    >
      <header className="relative">
        <div>
          <TechCrewCarousel
            slides={showsCarousel}
            slideClasses="opacity-40 xs:opacity-60"
            bottomRightCaption
          />
        </div>

        <div className="absolute top-12 right-16 2xs:right-20 sm:right-24 bottom-32 left-16 2xs:left-20 sm:left-24">
          <div className="max-w-screen-xl mx-auto text-white h-full">
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 xs:items-center h-full">
              <img
                src="/logo-light.svg"
                alt="Tech Crew Logo"
                className="w-20 md:w-24 lg:w-32 h-auto"
              />
              <div>
                <p className="2xs:text-lg lg:text-xl -mb-2">Welcome to</p>
                <h1 className="text-xl 2xs:text-2xl md:text-4xl lg:text-5xl font-bold">
                  Warwick Tech Crew
                </h1>
                <p className="text-sm 2xs:text-base lg:text-lg font-medium">
                  Providing technical services at the University of Warwick
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="-mt-16 2xs:-mt-12 xs:-mt-28 sm:-mt-32">
        <section className="relative my-4 mx-8 sm:mx-12 md:mx-16">
          <div className="max-w-screen-xl mx-auto p-6 bg-gray-200 flex gap-4 flex-wrap">
            <div className="w-80 flex-grow">
              <AboutUs />
            </div>
            <CaptionedImage
              src={
                require('@site/static/images/home/streetcar-joshheng.jpg')
                  .default
              }
              alt="Streetcar"
              caption="A Streetcar Named Desire, WUDS, 2024. Photo © Josh Heng"
              width="w-56"
            />
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto content-styling px-2 sm:px-4">
          <section className="p-4">
            <Hires />
            <div className="flex flex-wrap gap-4">
              <CaptionedImage
                src={
                  require('@site/static/images/home/improvmusical-joshheng.jpg')
                    .default
                }
                alt="The Improv Musical"
                caption="The Improv Musical, Music Theatre Warwick, 2023. Photo © Josh Heng"
              />
              <CaptionedImage
                src={
                  require('@site/static/images/home/snowwhite-echovaughan.jpg')
                    .default
                }
                alt="Snow White"
                caption="Show White, Warwick Panto, 2023. Photo © Echo Vaughan"
              />
              <CaptionedImage
                src={
                  require('@site/static/images/home/wsaf-joshheng.jpg').default
                }
                alt="Warwick Student Arts Festival"
                caption="Warwick Student Arts Festival, 2024. Photo © Josh Heng"
              />
            </div>
          </section>
          <section className="p-4">
            <GetInvolved />
            <div className="flex flex-wrap gap-4">
              <CaptionedImage
                src={
                  require('@site/static/images/home/dccupboard-kishansharma.jpg')
                    .default
                }
                alt="DC Cupboard"
                caption="The DC Cupboard, 2024. Photo © Kishan Sharma"
              />
              <CaptionedImage
                src={
                  require('@site/static/images/home/soundtraining-unknown.jpg')
                    .default
                }
                alt="Sound Training"
                caption="Sound Training, 2022. Photo © Unknown"
              />
              <CaptionedImage
                src={
                  require('@site/static/images/home/wacstudiobridges-kishansharma.jpg')
                    .default
                }
                alt="Warwick Arts Centre Studio Bridges"
                caption="Warwick Arts Centre Studio Bridges. Photo © Kishan Sharma"
              />
            </div>
          </section>
        </div>
        <section>
          <div
            className="bg-fixed bg-center bg-cover"
            style={{
              backgroundImage: `url('${require('@site/static/images/home/company-kishansharma.jpg').default}')`,
            }}
          >
            <div className="px-4 pt-8 sm:pt-16 pb-16 sm:pb-24 max-w-screen-2xl mx-auto flex flex-col">
              <div className="max-w-screen-xl mx-auto p-4 sm:p-6 bg-gray-200 gap-4 content-styling w-full">
                <Shows />
                <div className="flex gap-4 flex-wrap">
                  <CaptionedImage
                    src={
                      require('@site/static/images/home/anoblegame-joshheng.jpg')
                        .default
                    }
                    alt="A Noble Game Get-in"
                    caption="A Noble Game, WUDS, 2023. Photo © Josh Heng"
                  />
                  <CaptionedImage
                    src={
                      require('@site/static/images/home/manon-joshheng.jpg')
                        .default
                    }
                    alt="Manon Get-in"
                    caption="Manon, Warwick Opera, 2023. Photo © Josh Heng"
                  />
                  <CaptionedImage
                    src={
                      require('@site/static/images/home/godspell-echovaughan.jpg')
                        .default
                    }
                    alt="Godspell Get-in"
                    caption="Godspell, Music Theatre Warwick, 2023. Photo © Echo Vaughan"
                  />
                  <CaptionedImage
                    src={
                      require('@site/static/images/home/fame-joshheng.jpg')
                        .default
                    }
                    alt="FAME Get-in"
                    caption="FAME, Music Theatre Warwick, 2023. Photo © Josh Heng"
                  />
                  <CaptionedImage
                    src={
                      require('@site/static/images/home/anythinggoes-chrismiles.jpg')
                        .default
                    }
                    alt="Anything Goes Get-in"
                    caption="Anything Goes, Music Theatre Warwick, 2016. Photo © Chris Miles"
                  />
                </div>
              </div>
            </div>
          </div>
          <figcaption className="text-center mt-1">
            Company, Music Theatre Warwick, 2024. Photo &copy; Kishan Sharma
          </figcaption>
        </section>
        <section className="mt-4 mb-12 p-4 max-w-screen-2xl mx-auto">
          <TheExec />
        </section>

        <TechCrewCarousel slides={generalCarousel} />
      </main>
    </Layout>
  );
}
