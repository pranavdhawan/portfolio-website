import {
  type IconType,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  // SiJava,
  SiPython,
  SiFlask,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiAdobephotoshop,
  // SiMicrosoftoffice,
  SiGooglecolab,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPostgresql,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'flask',
          icon: SiFlask,
        },
      ],
    },
    {
      field: 'Programming and Tools',
      skills: [
        { skill: 'python', icon: SiPython },
        // { skill: 'java', icon: DiJava },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'photoshop', icon: SiAdobephotoshop },
        // { skill:'microsoft office', icon: SiMicrosoftoffice },
        { skill: 'google colab', icon: SiGooglecolab },
        { skill: 'git', icon: SiGit },
      ],
    },
  ]

export default SKILLS
