type Room = {
  name: string;
  price: string;
  amenities: string[];
};

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">{room.name}</h2>
        <p className="text-lg font-medium mb-4 text-green-600">{room.price}</p>
        <ul className="space-y-2 text-sm text-gray-600">
          {room.amenities.map((amenity, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
