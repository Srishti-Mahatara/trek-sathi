import { Button, Rating } from "@mantine/core";
import { useNavigate } from "react-router";
import { IconBan, IconLockOpen } from '@tabler/icons-react';
import { useState } from "react";
import { Modal, Badge, ActionIcon, Group, Menu } from "@mantine/core";
import { IconPlus, IconX, IconTag, IconDots } from '@tabler/icons-react';

const AttractionCard = (props) => {
  const { data, isAdmin } = props;

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [tags, setTags] = useState((data.tags && data.tags.length > 0) ? data.tags : ["Scenic", "Popular", "Family-friendly"]);
  const [newTag, setNewTag] = useState("");

  const removeTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags((prev) => [...prev, newTag.trim()]);
      setNewTag("");
    }
  };

  return (
    <div className=" bg-white rounded-md overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-[10px] flex flex-col h-full" >
      {/* Modal for editing tags */}
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title={<Group gap="xs"><IconTag size={18}/> Edit Tags</Group>} centered>
        <div className="flex flex-wrap gap-2 mb-md">
          {tags.map((tag, idx) => (
            <Badge
              key={idx}
              variant="light"
              rightSection={
                <ActionIcon size="xs" color="red" radius="xl" variant="transparent" onClick={() => removeTag(idx)}>
                  <IconX size={12} />
                </ActionIcon>
              }
              className="bg-blue-50 text-blue-700"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-xxs mb-md">
          <input
            type="text"
            value={newTag}
            onChange={e => setNewTag(e.target.value)}
            placeholder="Add new tag"
            className="border border-gray-300 rounded px-xs py-xxs text-sm flex-1"
            onKeyDown={e => { if (e.key === 'Enter') { addTag(); } }}
          />
          <Button leftSection={<IconPlus size={14}/>} size="xs" variant="light" onClick={addTag}>
            Add
          </Button>
        </div>
        <Group justify="flex-end" gap="sm">
          <Button variant="outline" color="gray" onClick={() => setModalOpen(false)} size="sm">Cancel</Button>
          <Button onClick={() => setModalOpen(false)} size="sm">Save</Button>
        </Group>
      </Modal>
      <div className="h-[180px] overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="no-underline">
            <h3 className="w-fit text-lg font-semibold text-gray-800 mb-xs cursor-pointer" onClick={() => {
                if (data.type === "hotel") {
                  navigate(`/hotel/${data.id ?? data.title}`);
                } else {
                  navigate(`/location/${data.id ?? data.title}`);
                }
              }}>
              {data.title}
            </h3>
          </div>
          <p className="text-gray-500 text-sm mb-[10px] flex items-center gap-xxs">
            <i className="fas fa-map-marker-alt"></i> {data.distance} {data.unit}{" "}
            away
          </p>
          <p className="text-gray-600 text-sm mb-xs leading-normal">
            {data.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-xxs text-yellow-500 text-sm mt-auto pt-sm">
          <div className="flex gap-xxs items-center">
            <Rating defaultValue={data.rating} fractions={2} readOnly />
            <span className="text-gray-700 ml-xxs">{data.rating}</span>
          </div>
          {isAdmin ? (
            <div className="flex gap-xxs items-center">
              {data.status && data.status.toLowerCase() === 'blocked' ? (
                <Button
                  color="green"
                  leftSection={<IconLockOpen size={16} />}
                  variant="light"
                  size="xs"
                >
                  Unblock
                </Button>
              ) : (
                <Button
                  color="yellow"
                  leftSection={<IconBan size={16} />}
                  variant="light"
                  size="xs"
                >
                  Block
                </Button>
              )}
              <Menu shadow="md" width={160} position="bottom-end">
                <Menu.Target>
                  <Button variant="subtle" color="gray" size="xs" px={6} py={0} style={{ minWidth: 0, width: 32, height: 32, borderRadius: '50%' }}>
                    <IconDots size={18} />
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item leftSection={<IconTag size={14}/>} onClick={() => setModalOpen(true)}>
                    Edit Tags
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          ) : (
            data.type === "hotel" && (
              <Button className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-dark text-white" onClick={() => {
                if (data.type === "hotel") {
                  navigate(`/hotel/${data.id ?? data.title}`);
                } else {
                  navigate(`/location/${data.id ?? data.title}`);
                }
              }}>
                Book Now
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
