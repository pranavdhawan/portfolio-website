import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          My Github and Resume might do a better job at explaining my tech background rather than my words.
          Apart from that I love reading surreal and fantasies when I get the time for long stories, and mysteries
          and comedy when I am short on time. I'm an sucker for classical movies, be it any language. I grind my
          time on story drive video games and love to cook disastrous recipes with zero regrets.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
