export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Hôtel Nefertiti Palace. Tous droits réservés.
        </p>
        <p className="text-sm mt-1">
          Yopougon, Millionnaire, Abidjan, Côte d&apos;Ivoire
        </p>
      </div>
    </footer>
  );
}
