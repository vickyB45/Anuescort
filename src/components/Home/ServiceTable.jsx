export default function ServiceTable() {
  const services = [
    ["Dating", "Dancing", "Partying"],
    ["Personal Experience", "Hand Massage", "Dinner Dates"],
    ["Photography", "Creative Arts", "Workshops"],
    ["Travel Guide", "Fitness Training", "Cooking Classes"],
    ["Music Sessions", "Group Activities", "Outdoor Adventures"],
    ["Event Hosting", "Companionship", "Social Gatherings"],
    ["Mentoring", "Consultation", "Therapy Sessions"],
    ["Workshops", "Seminars", "Learning Support"],
    ["Virtual Meetings", "Video Calls", "Role Play"],
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Variety of Services We Provide
        </h2>
        <p className="text-gray-600 mb-4">
         One of the major reasons why our escorts are worth your time and attention is its expertise in a Variety of Escorts Service. You will be pleased to know that all the girls we bring to you offer you a wide range of escort services Delhi. All the services they offer to you are premium and top-notch.
        </p>
        <p className="text-gray-600 mb-8">
        Delhi Escorts never make you feel bored. You always understand your feelings and come up with services that are curated to your preferences. Therefore, you can find complete pleasure, joy, and waves of laughter with such escort services in the town.
        </p>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full border border-gray-200 bg-white text-left">
            <tbody>
              {services.map((row, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                  {row.map((service, j) => (
                    <td key={j} className="px-6 py-4 text-gray-700 font-medium">
                      {service}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


