import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from '@/components/onThisPage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export default async function Page({ params }) {
  // ✅ Fix: await params before accessing slug
  const { slug } = await params

  const filepath = `content/${slug}.md`

  if (!fs.existsSync(filepath)) {
    notFound()
    return
  }

  const fileContent = fs.readFileSync(filepath, "utf-8")
  const { content, data } = matter(fileContent)

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title || 'Blog Post' })
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeStringify)

  const htmlContent = (await processor.process(content)).toString()

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold dark:text-gray-100 mb-4">{data.title}</h1>

      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot;{data.description}&quot;
      </p>

      <div className="flex gap-2 mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">By {data.author}</p>
        <p className="text-sm text-gray-500">{data.date}</p>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      />

      <OnThisPage htmlContent={htmlContent} />
    </div>
  )
}
