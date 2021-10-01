import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  console.log(posts)
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node._meta.uid}
            title={node.title}
            category={node.category}
            coverImage={node.coverimage}
            date={node.date}
            author={node.author}
            slug={node._meta.uid}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
