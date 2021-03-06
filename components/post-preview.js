import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';

export default function PostPreview({
   title,
   category,
   coverImage,
   date,
   excerpt,
   author,
   slug
}) {
   return (
      <div>
         <div className='mb-5'>
            <CoverImage
               title={RichText.asText(title)}
               slug={slug}
               url={coverImage.url}
            />
         </div>

         <h3 className='text-3xl mb-3 leading-snug'>
            <Link href={`/posts/${slug}`}>
               <a className='hover:underline'>
                  <RichText render={title} />
               </a>
            </Link>
         </h3>

         <h4 className='mb-4'>
            <Link href='/'>
               <a className='hover:underline'>{category.name[0].text}</a>
            </Link>
         </h4>

         <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>

         <div className='text-lg mb-4'>
            <Date dateString={date} />
         </div>

         <Avatar name={author.name} picture={author.picture} />
      </div>
   );
}
