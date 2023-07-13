import { ReactNode } from 'react'
import { PageSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import siteMetadata from '@/data/siteMetadata'

export interface ResumeLayoutProps {
    children: ReactNode
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  const description = 'Minha carreira profissional, experiência e habilidades.'

  return (
    <>
      <PageSEO
        title={`Resumo - ${siteMetadata.fullName} - ${description}`}
        description={`Resumo - ${siteMetadata.fullName} - ${description}`}
      />
      <ScrollTopAndComment />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Currículo
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <div className="items-start space-y-2 xl:space-y-0">
          <div className="prose prose-lg max-w-none pb-8 pt-8 dark:prose-dark">{children}</div>
        </div>
      </div>
    </>
  )
}