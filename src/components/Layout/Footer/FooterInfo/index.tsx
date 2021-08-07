import Link from 'next/link'

type Props = {
  title: string,
  content: Content[] | string[]
}

type Content = {
  label: string,
  href: string
}

const FooterInfo = ({ title, content }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-gray-100 font-label font-bold text-heading-3 mb-4">
        {title}
      </h2>
      {content.map((item: Content | string, index: number) => {
        if (typeof item !== 'string') {
          return (
            <Link href={item.href} key={index}>
              <a className="text-heading-4 text-gray-50 mb-3">
                {item.label}
              </a>
            </Link>
          )
        }

        return (
          <p className="text-heading-4 text-gray-50 mb-3" key={index}>
            {item}
          </p>
        )
      })}
    </div>
  );
};

export default FooterInfo;