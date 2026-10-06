type Amenity = {
  label: string;
  icon?: React.ReactNode;
};

export default function AmenitiesList({ amenities }: { amenities: Amenity[] }) {
  return (
    <div className="space-y-4">
      {amenities.map((amenity, idx) => (
        <div key={idx} className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-0.5">
            {amenity.icon ?? (
              <span className="h-3 w-3 bg-green-500 rounded-full flex-shrink-0"/>
            )}
          </div>
          <div>
            <p className="font-medium text-gray-800">{amenity.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
