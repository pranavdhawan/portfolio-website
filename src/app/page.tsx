import Links from '@/components/links'
import ImageCard from '@/components/ui/image-card'

export default function Home() {

  return (
    <>
      <div className="font-base">
        <h1 className="text-2xl font-heading sm:text-4xl">Pranav Dhawan</h1>
        <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
        <div className="mt-8 text-base sm:text-lg">
          <p>Hi, my name is Pranav Dhawan, I'm in my final year of Computer Science Engineering.</p>

          <br />
          <span>
            <ImageCard
              caption="Image"
              imageUrl='/img.jpg'
            ></ImageCard>
          </span>

          {/* <p>
            dsajdawjks{' '}
            <a
              target="_blank"
              className="font-heading underline"
              href=""
            >
              github repo
            </a>{' '}
            for more info.
          </p> */}
        </div>

        <Links />
      </div>
    </>
  )
}
