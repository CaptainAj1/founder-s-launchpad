import { Link } from "wouter";
import { Container } from "@/components/shared/UIElements";
import { useStore } from "@/lib/store";
import InternwiseNavbar from "@/components/internwise/InternwiseNavbar";
import InternwiseFooter from "@/components/internwise/InternwiseFooter";
import { format } from "date-fns";

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const { posts } = useStore();
  const post = posts.find((p) => p.slug === params.slug && p.status === "published");

  if (!post) {
    return (
      <>
        <InternwiseNavbar />
        <div className="min-h-screen pt-32 bg-white">
          <Container className="text-center py-20">
            <h1 className="font-display text-3xl font-bold text-navy mb-4">Article not found</h1>
            <Link href="/blog" className="text-sky font-semibold font-body">← Back to Blog</Link>
          </Container>
        </div>
        <InternwiseFooter />
      </>
    );
  }

  return (
    <>
      <InternwiseNavbar />
      <div className="bg-gradient-to-br from-navy to-navy-dark h-64" />
      <Container className="-mt-20 relative z-10 pb-24">
        <div className="bg-white rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto shadow-xl">
          <Link href="/blog" className="text-sky text-sm font-semibold font-body mb-6 inline-block">← Back to Blog</Link>
          <span className="block text-sky text-xs font-semibold tracking-widest uppercase font-body mb-3">{format(new Date(post.createdAt), "d MMMM yyyy")}</span>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">{post.title}</h1>
          <div className="border-l-4 border-coral pl-6 mb-8">
            <p className="text-foreground/60 font-body italic">{post.excerpt}</p>
          </div>
          <div className="prose max-w-none font-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Container>
      <InternwiseFooter />
    </>
  );
};

export default BlogPost;
