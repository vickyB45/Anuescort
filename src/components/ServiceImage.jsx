import React from 'react'

const ServiceImage = () => {
       const categories = [
        {
            title: "Collage Girl",
            image: "/images/aboutImages/2.webp",
        },
        {
            title: "HouseWife",
            image: "/images/aboutImages/3.webp",
        },
        {
            title: "Pretty Girl",
            image: "/images/aboutImages/4.webp",
        },
        {
            title: "Russion",
            image: "/images/aboutImages/5.webp",
        },
    ];

  return (
    <div>
        <section className="bg-gray-100 py-12 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-purple-600 relative inline-block">
                    <span className="px-4">— Other Top Escort Categories —</span>
                </h2>
                <p className="mt-6 max-w-3xl mx-auto text-gray-700 leading-relaxed">
                    We have wide range of escorts categories to provide complete satisfaction
                    to our clients. We have everything for everyone. Here are some of our most
                    demanded escort categories girls list to help you to find your desired type
                    of women. Pick your favorite one and enjoy the best escort service till now.
                </p>
            </section>
            <section className="max-w-6xl mx-auto py-12 px-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            {/* Image Circle */}
                            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-200 hover:scale-105 transition-transform">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg">{cat.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
    </div>
  )
}

export default ServiceImage