import { FiCalendar, FiClock, FiTag } from 'react-icons/fi';
import portfolioData from '../data/portfolio';
import PageHeader from '../components/PageHeader';

const Blog = () => {
  const { blogs } = portfolioData;

  return (
    <div className="page-wrapper-spacing">
      <div className="container-custom">
        <PageHeader
          title="Blog"
          subtitle="Thoughts, insights, and experiences from my tech journey"
        />

        {/* Blog Post List matching Screenshot 4 */}
        <div className="blog-posts-stack">
          {blogs && blogs.length > 0 ? (
            blogs.map((post) => (
              <article key={post.id || post.slug} className="blog-article-card">
                {/* Meta: Date and Read Time */}
                <div className="blog-meta-row">
                  {post.date && (
                    <span className="blog-meta-item">
                      <FiCalendar size={15} />
                      <span>{post.date}</span>
                    </span>
                  )}
                  {post.readTime && (
                    <span className="blog-meta-item">
                      <FiClock size={15} />
                      <span>{post.readTime}</span>
                    </span>
                  )}
                </div>

                {/* Blog Title */}
                <h2 className="blog-heading-title">{post.title}</h2>

                {/* Excerpt */}
                <p className="blog-excerpt-text">{post.excerpt}</p>

                {/* Tags Row */}
                {post.tags && post.tags.length > 0 && (
                  <div className="blog-tags-row">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag-badge">
                        <FiTag size={12} className="blog-tag-icon" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Full Article Content Paragraphs */}
                <div className="blog-body-paragraphs">
                  {Array.isArray(post.content) ? (
                    post.content.map((paragraph, idx) => (
                      <p key={idx} className="blog-paragraph-item">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="blog-paragraph-item">{post.content}</p>
                  )}
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state-box">
              <p>No blog posts published yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
