import Image from "next/image"
import { Eye, Heart } from "lucide-react"
import NewsImages from "../../public/news.png"
import { work_sans } from "@/data"

export default function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      image: NewsImages,
      date: "Monday 06, September 2021",
      author: "Author",
      title: "This Article's Title goes Here, but not too long.",
      views: 68,
      likes: 86,
    },
    {
      id: 2,
      image: NewsImages,
      date: "Monday 06, September 2021",
      author: "Author",
      title: "This Article's Title goes Here, but not too long.",
      views: 68,
      likes: 86,
    },
    {
      id: 3,
      image: NewsImages,
      date: "Monday 06, September 2021",
      author: "Author",
      title: "This Article's Title goes Here, but not too long.",
      views: 68,
      likes: 86,
    },
    {
      id: 4,
      image: NewsImages,
      date: "Monday 06, September 2021",
      author: "Author",
      title: "This Article's Title goes Here, but not too long.",
      views: 68,
      likes: 86,
    },
  ]

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm md:text-base font-medium tracking-wider uppercase mb-2">
            Better Information, Better Health
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">News</h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-4 p-6">
                {/* Article Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt="News article"
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className={`flex-1 min-w-0 ${work_sans.className}`}>
                  {/* Date and Author */}
                  <p className={`text-blue-500 text-sm mb-2`}>
                    {article.date} | By {article.author}
                  </p>

                  {/* Title */}
                  <h3 className="text-gray-900 font-semibold text-lg leading-tight mb-4 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Engagement Metrics */}
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{article.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-[#ED1B24]" />
                      <span className="text-sm">{article.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
