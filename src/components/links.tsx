import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiTwitter,
  SiPinterest,
  SiLetterboxd,
  SiGoodreads,
  SiSpotify,
  SiNpm,
  SiInstagram,
  SiXbox
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:dhawan.pranav8@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/pranavdhawan',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/pranav-dhawan-7a639b221/',
    },
    // {
    //   icon: SiTwitter,
    //   href: 'https://x.com/pranavdhawan27',
    // },
    // {
    //   icon: SiPinterest,
    //   href: 'https://www.pinterest.com/dhawanpranav8/_profile/',
    // },
    {
      icon: SiLetterboxd,
      href: 'https://letterboxd.com/pranavdhawan/'
    },
    {
      icon: SiGoodreads,
      href: 'https://www.goodreads.com/user/show/94654436-pranav-dhawan'
    },
    {
      icon: SiSpotify,
      href: 'https://open.spotify.com/user/dbsuhrg2byont4z1vjra7qyq9'
   },
   {
    icon: SiNpm,
    href: 'https://www.npmjs.com/~killkennyale'
 },
 {
  icon: SiInstagram,
  href: 'https://www.instagram.com/7228blocparty/'
 },
//  {
//   icon: SiXbox,
//   href:''
//  }
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
