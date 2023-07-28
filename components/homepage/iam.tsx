import siteMetadata from '@/data/siteMetadata'
import Link from '../Link'
import SocialIcon from '../social-icons'

export default function Iam() {
  return (
    <div className="space-y-6 md:my-16">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <div className="space-y-4 md:max-w-lg">
          <h1 className="text-accent-fg text-4xl font-bold">Miguel</h1>
          <h2 className="text-accent-5 text-lg font-medium text-gray-500 dark:text-gray-400">
            24 y/o • Engenheiro • Pesquisador • Full-stack Mobile
          </h2>
          <p className="text-lg">
            Eu amo ciência, tecnologia e projetos DIY. Em 2022, me formei em engenharia de controle
            e automação. Durante a faculdade, me apaixonei por programação e pesquisa de inovação
            tecnológica.
          </p>
          <p className="text-lg">
            Atualmente, trabalho na{' '}
            <Link
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              href="https://osirisagtech.com.br/"
            >
              Osíris Agtech
            </Link>
            , onde desenvolvo novas tecnologias para o cultivo de plantas hortícolas.
          </p>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <img
            alt="GIF"
            width="360px"
            src="https://media.giphy.com/media/836HiJc7pgzy8iNXCn/giphy.gif"
          ></img>
        </div>
      </div>
      <div className="flex gap-6">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
        <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
        <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
      </div>
    </div>
  )
}
