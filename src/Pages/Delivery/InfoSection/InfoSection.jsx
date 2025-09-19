
export const InfoSection = ({ title, subtitle, items }) => {
  return (
    <div className="my-16 px-8">
      <h2 className="text-3xl font-bold mb-5">{title}</h2>
      {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}

      <div className="flex flex-wrap gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-1  min-w-[250px]  max-w-[300px] bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg hover:scale-110 transition"
          >
            <div className="text-orange-500 text-4xl mb-4">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default InfoSection