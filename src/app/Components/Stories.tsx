"use client";

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "The Birth of K&H Fashion",
      image: "/images/stories/story1.jpg",
      excerpt: "How two visionaries turned a dream into a luxury brand...",
      date: "October 2025",
    },
    {
      id: 2,
      title: "From Sketch to Runway",
      image: "/images/stories/story2.jpg",
      excerpt: "A deep dive into our creative design process.",
      date: "September 2025",
    },
    {
      id: 3,
      title: "Sustainability in Style",
      image: "/images/stories/story3.jpg",
      excerpt: "Our journey toward eco-conscious fashion innovation.",
      date: "August 2025",
    },
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-20 lg:px-16">
      <h1 className="text-4xl font-bold mb-12 text-center uppercase tracking-wide">
        Brand Stories
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{story.date}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {story.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
