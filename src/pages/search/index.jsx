import { useState } from "react";
import { TextInput, Card, Title, Text, Group, Image } from "@mantine/core";
import { useNavigate } from "react-router";

const mockData = [
  { id: 1, name: "Phewa Lake", type: "place", image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg", description: "Beautiful freshwater lake with mountain reflections" },
  { id: 2, name: "Hotel Lakeside Retreat", type: "hotel", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400", description: "A beautiful lakeside hotel with stunning views and modern amenities." },
  { id: 3, name: "Mahendra Cave", type: "place", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mahendra_Cave.JPG", description: "Dark cave for those adventure and exploring enthusiasts." },
  { id: 4, name: "World Peace Pagoda", type: "place", image: "https://api.luxuryholidaynepal.com/media/blog/banner/how-to-reach-peace-pagoda-pokhara.jpg", description: "Buddhist stupa with panoramic views" },
  { id: 5, name: "Hotel Mountain View", type: "hotel", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400", description: "Modern hotel with mountain views and great amenities." },
];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = mockData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full bg-gray-100 pt-md px-xl min-h-screen">
      <Title order={2} className="mb-lg text-gray-900">Search Places & Hotels</Title>
      <TextInput
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        className="mb-xl max-w-md"
        size="md"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-lg">
        {filtered.map((item) => (
          <Card
            key={item.id}
            shadow="sm"
            padding="md"
            radius="md"
            withBorder
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(item.type === "hotel" ? `/hotel/${item.id}` : `/location/${item.id}`)}
          >
            <Image src={item.image} alt={item.name} height={120} radius="md" className="mb-sm" />
            <Group justify="space-between" className="mb-xs">
              <Title order={5}>{item.name}</Title>
              <Text size="xs" color="gray">
                {item.type === "hotel" ? "Hotel" : "Place"}
              </Text>
            </Group>
            <Text size="sm" color="gray">
              {item.description}
            </Text>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchPage; 