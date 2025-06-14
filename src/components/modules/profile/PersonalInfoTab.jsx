import React, { useState } from 'react';
import { Paper, Title, Text, TextInput, Select, Textarea, Button, Group, Stack, Badge, ActionIcon } from '@mantine/core';
import { User, X, Plus } from 'lucide-react';

const PersonalInfoTab = () => {
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    dob: '1988-06-15',
    gender: 'male',
    location: 'San Francisco, CA, USA',
    language: 'english',
    passport: 'US12345678',
    passportExpiry: '2028-09-20',
    nationality: 'United States',
    travelFrequency: 'monthly',
    travelStyle: 'adventure',
    accommodation: 'hotel',
    budget: 'midrange',
    tripDuration: 'short',
    bio: 'Passionate traveler with a love for mountains and outdoor adventures. I\'ve been exploring the world for over 10 years, with a particular focus on hiking trails and remote destinations. My goal is to visit all seven continents and experience the unique cultures and landscapes each has to offer.',
    funFact: 'I once hiked the entire Appalachian Trail in a single summer!'
  });

  const [frequentFlyer, setFrequentFlyer] = useState([
    'United Airlines',
    'Delta SkyMiles',
    'British Airways'
  ]);

  const [hotelLoyalty, setHotelLoyalty] = useState([
    'Marriott Bonvoy',
    'Hilton Honors'
  ]);

  const [travelInterests, setTravelInterests] = useState([
    'Hiking',
    'Photography',
    'Food & Dining',
    'History',
    'Adventure Sports'
  ]);

  const [languages, setLanguages] = useState([
    { name: 'English', level: 5, levelText: 'Native' },
    { name: 'Spanish', level: 3, levelText: 'Intermediate' },
    { name: 'French', level: 2, levelText: 'Basic' }
  ]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const removeTag = (list, setList, index) => {
    setList(prev => prev.filter((_, i) => i !== index));
  };

  const addTag = (list, setList, newTag) => {
    if (newTag && !list.includes(newTag)) {
      setList(prev => [...prev, newTag]);
    }
  };

  const LanguageLevel = ({ level }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${
            i <= level ? 'bg-blue-500' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );

  const TagContainer = ({ items, onRemove, onAdd, placeholder = "Add new" }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <Badge
          key={index}
          variant="light"
          rightSection={
            <ActionIcon
              size="xs"
              color="red"
              radius="xl"
              variant="transparent"
              onClick={() => onRemove(index)}
            >
              <X size={12} />
            </ActionIcon>
          }
          className="bg-blue-50 text-blue-700"
        >
          {item}
        </Badge>
      ))}
      <Badge
        variant="outline"
        className="cursor-pointer hover:bg-gray-50"
        rightSection={<Plus size={12} />}
        onClick={() => {
          const newItem = prompt(`Add new ${placeholder.toLowerCase()}:`);
          if (newItem) onAdd(newItem);
        }}
      >
        {placeholder}
      </Badge>
    </div>
  );

  return (
    <Stack gap="md">
      <Title order={2} className="text-gray-900 flex items-center gap-sm">
        <User size={24} />
        Personal Information
      </Title>

      {/* Basic Information */}
      <Paper className="p-md shadow-sm">
        <Title order={3} className="text-gray-800 mb-md">Basic Information</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <TextInput
            label="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          <TextInput
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
          <TextInput
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <TextInput
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
          <TextInput
            label="Date of Birth"
            type="date"
            value={formData.dob}
            onChange={(e) => handleInputChange('dob', e.target.value)}
          />
          <Select
            label="Gender"
            value={formData.gender}
            onChange={(value) => handleInputChange('gender', value)}
            data={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'non-binary', label: 'Non-binary' },
              { value: 'prefer-not', label: 'Prefer not to say' }
            ]}
          />
          <TextInput
            label="Current Location"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
          <Select
            label="Primary Language"
            value={formData.language}
            onChange={(value) => handleInputChange('language', value)}
            data={[
              { value: 'english', label: 'English' },
              { value: 'spanish', label: 'Spanish' },
              { value: 'french', label: 'French' },
              { value: 'german', label: 'German' },
              { value: 'mandarin', label: 'Mandarin' },
              { value: 'japanese', label: 'Japanese' },
              { value: 'other', label: 'Other' }
            ]}
          />
        </div>
      </Paper>

      {/* Travel Profile */}
      <Paper className="p-md shadow-sm">
        <Title order={3} className="text-gray-800 mb-md">Travel Profile</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-md">
          <TextInput
            label="Passport Number"
            value={formData.passport}
            onChange={(e) => handleInputChange('passport', e.target.value)}
          />
          <TextInput
            label="Passport Expiry"
            type="date"
            value={formData.passportExpiry}
            onChange={(e) => handleInputChange('passportExpiry', e.target.value)}
          />
          <TextInput
            label="Nationality"
            value={formData.nationality}
            onChange={(e) => handleInputChange('nationality', e.target.value)}
          />
          <Select
            label="Travel Frequency"
            value={formData.travelFrequency}
            onChange={(value) => handleInputChange('travelFrequency', value)}
            data={[
              { value: 'monthly', label: 'Monthly' },
              { value: 'quarterly', label: 'Quarterly' },
              { value: 'biannually', label: 'Biannually' },
              { value: 'annually', label: 'Annually' }
            ]}
          />
        </div>

        <Stack gap="md">
          <div>
            <Text size="sm" fw={500} className="mb-xs">Frequent Flyer Programs</Text>
            <TagContainer
              items={frequentFlyer}
              onRemove={(index) => removeTag(frequentFlyer, setFrequentFlyer, index)}
              onAdd={(item) => addTag(frequentFlyer, setFrequentFlyer, item)}
              placeholder="Add Program"
            />
          </div>

          <div>
            <Text size="sm" fw={500} className="mb-xs">Hotel Loyalty Programs</Text>
            <TagContainer
              items={hotelLoyalty}
              onRemove={(index) => removeTag(hotelLoyalty, setHotelLoyalty, index)}
              onAdd={(item) => addTag(hotelLoyalty, setHotelLoyalty, item)}
              placeholder="Add Program"
            />
          </div>
        </Stack>
      </Paper>

      {/* Travel Preferences */}
      <Paper className="p-md shadow-sm">
        <Title order={3} className="text-gray-800 mb-md">Travel Preferences</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md mb-md">
          <Select
            label="Preferred Travel Style"
            value={formData.travelStyle}
            onChange={(value) => handleInputChange('travelStyle', value)}
            data={[
              { value: 'adventure', label: 'Adventure' },
              { value: 'luxury', label: 'Luxury' },
              { value: 'budget', label: 'Budget' },
              { value: 'cultural', label: 'Cultural' },
              { value: 'eco', label: 'Eco-friendly' }
            ]}
          />
          <Select
            label="Preferred Accommodation"
            value={formData.accommodation}
            onChange={(value) => handleInputChange('accommodation', value)}
            data={[
              { value: 'hotel', label: 'Hotel' },
              { value: 'hostel', label: 'Hostel' },
              { value: 'apartment', label: 'Apartment' },
              { value: 'resort', label: 'Resort' },
              { value: 'camping', label: 'Camping' }
            ]}
          />
          <Select
            label="Average Budget per Trip"
            value={formData.budget}
            onChange={(value) => handleInputChange('budget', value)}
            data={[
              { value: 'budget', label: 'Under $1,000' },
              { value: 'midrange', label: '$1,000 - $3,000' },
              { value: 'luxury', label: '$3,000 - $5,000' },
              { value: 'ultraluxury', label: '$5,000+' }
            ]}
          />
          <Select
            label="Typical Trip Duration"
            value={formData.tripDuration}
            onChange={(value) => handleInputChange('tripDuration', value)}
            data={[
              { value: 'weekend', label: 'Weekend (1-3 days)' },
              { value: 'short', label: 'Short (4-7 days)' },
              { value: 'medium', label: 'Medium (8-14 days)' },
              { value: 'long', label: 'Long (15+ days)' }
            ]}
          />
        </div>

        <div>
          <Text size="sm" fw={500} className="mb-xs">Travel Interests</Text>
          <TagContainer
            items={travelInterests}
            onRemove={(index) => removeTag(travelInterests, setTravelInterests, index)}
            onAdd={(item) => addTag(travelInterests, setTravelInterests, item)}
            placeholder="Add Interest"
          />
        </div>
      </Paper>

      {/* About Me */}
      <Paper className="p-md shadow-sm">
        <Title order={3} className="text-gray-800 mb-md">About Me</Title>
        <Stack gap="md">
          <Textarea
            label="Bio"
            rows={5}
            value={formData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
          />
          <TextInput
            label="Fun Fact"
            value={formData.funFact}
            onChange={(e) => handleInputChange('funFact', e.target.value)}
          />
          
          <div>
            <Text size="sm" fw={500} className="mb-md">Languages Spoken</Text>
            <Stack gap="sm">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-sm bg-gray-50 rounded">
                  <Text fw={500}>{lang.name}</Text>
                  <div className="flex items-center gap-md">
                    <LanguageLevel level={lang.level} />
                    <Text size="sm" className="text-gray-600 min-w-20">{lang.levelText}</Text>
                    <ActionIcon
                      size="sm"
                      color="red"
                      variant="subtle"
                      onClick={() => setLanguages(prev => prev.filter((_, i) => i !== index))}
                    >
                      <X size={14} />
                    </ActionIcon>
                  </div>
                </div>
              ))}
              <Button
                variant="subtle"
                leftSection={<Plus size={16} />}
                onClick={() => {
                  const newLang = prompt('Enter language name:');
                  if (newLang) {
                    const level = parseInt(prompt('Enter proficiency level (1-5):') || '1');
                    const levelTexts = ['', 'Beginner', 'Basic', 'Intermediate', 'Advanced', 'Native'];
                    setLanguages(prev => [...prev, { 
                      name: newLang, 
                      level: Math.max(1, Math.min(5, level)), 
                      levelText: levelTexts[Math.max(1, Math.min(5, level))] 
                    }]);
                  }
                }}
                className="w-fit"
              >
                Add Language
              </Button>
            </Stack>
          </div>
        </Stack>
      </Paper>

      {/* Form Actions */}
      <Group justify="flex-end" gap="md">
        <Button variant="outline" color="gray">
          Cancel Changes
        </Button>
        <Button>
          Save Changes
        </Button>
      </Group>
    </Stack>
  );
};

export default PersonalInfoTab;