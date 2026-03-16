import { Link } from "wouter";
import { Container, DotGrid } from "@/components/shared/UIElements";
import { useStore } from "@/lib/store";
import { FileText } from "lucide-react";
import { format } from "date-fns";
import InternwiseFooter from "@/components/internwise/InternwiseFooter";
import InternwiseNavbar from "@/components/internwise/InternwiseNavbar";

const BlogIndex = () => {
  const { posts } = useStore();
  const published = posts.filter((p) => p.status === "published");

  return (
    <>
      <InternwiseNavbar />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy-mid to-navy-dark overflow-hidden">
        <DotGrid opacity={7} />
        <Container className="relative z-10 text-center">
          <span className="text-sky text-xs font-semibold tracking-widest uppercase font-body">Insights & Inspiration</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">The Founders Blog</h1>
          <p className="text-white/60 font-body max-w-xl mx-auto">
            Practical thinking, honest stories, and resources for graduate founders building businesses from scratch.
          </p>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <Container>
          {published.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-navy mb-2">First article coming soon</h3>
              <p className="text-foreground/50 font-body">Our team is working on insightful content for aspiring founders. Check back soon.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {published.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-2xl h-48 mb-4" />
                  <span className="text-sky text-xs font-semibold font-body">{format(new Date(post.createdAt), "d MMM yyyy")}</span>
                  <h3 className="font-display font-bold text-navy text-lg mt-1 mb-2 line-clamp-2 group-hover:text-sky transition-colors">{post.title}</h3>
                  <p className="text-foreground/60 text-sm font-body line-clamp-3">{post.excerpt}</p>
                  <span className="text-coral text-sm font-semibold font-body mt-3 inline-block">Read more →</span>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>

      <InternwiseFooter />
    </>
  );
};

export default BlogIndex;
