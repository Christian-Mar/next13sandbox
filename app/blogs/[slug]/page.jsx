const BlogDetailPage = ({params}) => {
  return (
    <div className="page">
      <h1>Blog detail: {params.slug}</h1>
    </div>
  )
}

export default BlogDetailPage
