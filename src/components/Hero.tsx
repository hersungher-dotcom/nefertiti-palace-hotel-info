export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-6 pt-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1600x900/?hotel,luxury')] bg-center bg-cover"></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Hôtel Nefertiti Palace
        </h1>
        <p className="text-xl text-gray-100 mb-6">
          Yopougon, Millionnaire, Abidjan, Côte d&apos;Ivoire
        </p>
        <p className="text-lg text-gray-200">
          Élégance, confort et service exceptionnel pour un séjour inoubliable.
        </p>
      </div>
    </section>
  );
}
