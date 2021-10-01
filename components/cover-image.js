import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Image
      width={1200}
      height={800}
      alt={`Cover Image for ${title}`}
      className={cn('rounded-lg', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
      layout="responsive"
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
