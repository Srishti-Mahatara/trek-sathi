import React, { useState } from 'react';
import { Paper, Stack, Title, Text, Group, Button, Select, Switch, Radio, Divider, TextInput, Badge } from '@mantine/core';
import { 
  Mail,
  Percent,
  Compass,
  Bell,
  Users,
  Newspaper,
  CheckCircle,
  Star,
  Trash2,
  Plus,
  AlertCircle,
  Pause,
  Shield,
  X
} from 'lucide-react';

const EmailSettingsTab = () => {
  const [subscriptions, setSubscriptions] = useState({
    deals: { enabled: true, frequency: 'weekly' },
    inspiration: { enabled: true, frequency: 'biweekly' },
    tripUpdates: { enabled: true, frequency: 'always' },
    community: { enabled: false, frequency: 'weekly' },
    travelTips: { enabled: true, frequency: 'biweekly' }
  });

  const [emailFormat, setEmailFormat] = useState('html');
  const [imageLoading, setImageLoading] = useState('always');
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: true
  });

  const [emails, setEmails] = useState([
    { id: 1, address: 'alex.johnson@email.com', verified: true, primary: true },
    { id: 2, address: 'alex.work@company.com', verified: true, primary: false }
  ]);

  const [newEmail, setNewEmail] = useState('');
  const [unsubscribeOption, setUnsubscribeOption] = useState('');

  const handleSubscriptionToggle = (type) => {
    setSubscriptions(prev => ({
      ...prev,
      [type]: { ...prev[type], enabled: !prev[type].enabled }
    }));
  };

  const handleFrequencyChange = (type, frequency) => {
    setSubscriptions(prev => ({
      ...prev,
      [type]: { ...prev[type], frequency }
    }));
  };

  const handleNotificationToggle = (type) => {
    setNotifications(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handleMakePrimary = (emailId) => {
    setEmails(prev => prev.map(email => ({
      ...email,
      primary: email.id === emailId
    })));
  };

  const handleRemoveEmail = (emailId) => {
    setEmails(prev => prev.filter(email => email.id !== emailId));
  };

  const handleAddEmail = () => {
    if (newEmail.trim()) {
      const newId = Math.max(...emails.map(e => e.id)) + 1;
      setEmails(prev => [...prev, {
        id: newId,
        address: newEmail.trim(),
        verified: false,
        primary: false
      }]);
      setNewEmail('');
    }
  };

  const subscriptionCategories = [
    {
      key: 'deals',
      icon: Percent,
      title: 'Deals & Promotions',
      description: 'Special offers, discounts, and limited-time deals curated for your travel interests.',
      frequencies: ['daily', 'weekly', 'monthly']
    },
    {
      key: 'inspiration',
      icon: Compass,
      title: 'Destination Inspiration',
      description: 'Discover new destinations, seasonal travel ideas, and trending locations.',
      frequencies: ['weekly', 'biweekly', 'monthly']
    },
    {
      key: 'tripUpdates',
      icon: Bell,
      title: 'Trip Updates & Reminders',
      description: 'Important information about your upcoming trips, booking confirmations, and travel reminders.',
      isEssential: true
    },
    {
      key: 'community',
      icon: Users,
      title: 'Community Updates',
      description: 'Updates from travelers you follow, community events, and forum activity.',
      frequencies: ['daily', 'weekly', 'none']
    },
    {
      key: 'travelTips',
      icon: Newspaper,
      title: 'Travel Tips & Articles',
      description: 'Expert travel advice, guides, and articles tailored to your interests.',
      frequencies: ['weekly', 'biweekly', 'monthly']
    }
  ];

  return (
    <Stack gap="md">
      <Title order={2} className="text-gray-900 flex items-center gap-xs">
        <Mail size={24} />
        Email Preferences
      </Title>

      {/* Subscription Categories */}
      <Paper className="p-md shadow-sm">
        <Title order={3} className="text-gray-800 mb-md">Manage Your Subscriptions</Title>
        <Text size="sm" className="text-gray-600 mb-lg">
          Choose what types of emails you'd like to receive from TravelBuddy. You can opt out of any category at any time.
        </Text>

        <Stack gap="lg">
          {subscriptionCategories.map((category) => {
            const IconComponent = category.icon;
            const subscription = subscriptions[category.key];
            
            return (
              <div key={category.key} className="border rounded-lg p-md">
                <div className="flex items-start justify-between mb-sm">
                  <div className="flex items-center gap-sm">
                    <IconComponent size={20} className="text-blue-600" />
                    <Title order={4} className="text-gray-800">{category.title}</Title>
                  </div>
                  <Switch
                    checked={subscription.enabled}
                    onChange={() => handleSubscriptionToggle(category.key)}
                    size="md"
                  />
                </div>
                
                <Text size="sm" className="text-gray-600 mb-md">
                  {category.description}
                </Text>

                {category.isEssential && (
                  <div className="flex items-start gap-xs p-xs rounded-lg bg-blue-50 mb-md">
                    <AlertCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <Text size="sm" className="text-blue-700">
                      These are essential emails related to your bookings and cannot be disabled entirely.
                    </Text>
                  </div>
                )}

                {category.frequencies && subscription.enabled && (
                  <div className="space-y-2">
                    <Text size="sm" className="font-medium">Frequency:</Text>
                    <Radio.Group
                      value={subscription.frequency}
                      onChange={(value) => handleFrequencyChange(category.key, value)}
                    >
                      <Group gap="md">
                        {category.frequencies.map((freq) => (
                          <Radio
                            key={freq}
                            value={freq}
                            label={freq.charAt(0).toUpperCase() + freq.slice(1)}
                            size="sm"
                          />
                        ))}
                      </Group>
                    </Radio.Group>
                  </div>
                )}
              </div>
            );
          })}
        </Stack>
      </Paper>

      {/* Email Format Preferences */}
      <Paper className="p-md shadow-sm">
        <Title order={3} className="text-gray-800 mb-md">Email Format Preferences</Title>
        
        <Group grow>
          <Select
            label="Email Format"
            value={emailFormat}
            onChange={setEmailFormat}
            data={[
              { value: 'html', label: 'HTML (Rich Text)' },
              { value: 'text', label: 'Plain Text' }
            ]}
          />
          <Select
            label="Image Loading"
            value={imageLoading}
            onChange={setImageLoading}
            data={[
              { value: 'always', label: 'Always Load Images' },
              { value: 'wifi', label: 'Only on WiFi' },
              { value: 'never', label: 'Never Load Images' }
            ]}
          />
        </Group>
      </Paper>

      {/* Notification Delivery */}
      <Paper className="p-md shadow-sm">
        <Title order={3} className="text-gray-800 mb-md">Notification Delivery</Title>
        
        <Stack gap="md">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <Text className="font-medium">Email</Text>
              <Text size="sm" className="text-gray-600">
                Receive all notifications via email
              </Text>
            </div>
            <Switch
              checked={notifications.email}
              onChange={() => handleNotificationToggle('email')}
              size="md"
            />
          </div>

          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <Text className="font-medium">Push Notifications</Text>
              <Text size="sm" className="text-gray-600">
                Receive notifications in your browser
              </Text>
            </div>
            <Switch
              checked={notifications.push}
              onChange={() => handleNotificationToggle('push')}
              size="md"
            />
          </div>

          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <Text className="font-medium">SMS</Text>
              <Text size="sm" className="text-gray-600">
                Receive text message alerts for important updates
              </Text>
            </div>
            <Switch
              checked={notifications.sms}
              onChange={() => handleNotificationToggle('sms')}
              size="md"
            />
          </div>
        </Stack>
      </Paper>

      {/* Email Address Management */}
      <Paper className="p-md shadow-sm">
        <Title order={3} className="text-gray-800 mb-md">Email Address Management</Title>
        
        <Stack gap="lg">
          <div>
            <Title order={4} className="text-gray-700 mb-sm">Primary Email</Title>
            {emails.filter(email => email.primary).map(email => (
              <div key={email.id} className="flex items-center justify-between p-sm bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-sm">
                  <Text className="font-medium">{email.address}</Text>
                  <Badge size="sm" color="blue">Primary</Badge>
                  {email.verified && (
                    <div className="flex items-center gap-xs text-green-600">
                      <CheckCircle size={14} />
                      <Text size="xs">Verified</Text>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <Title order={4} className="text-gray-700 mb-sm">Secondary Emails</Title>
            <Stack gap="sm">
              {emails.filter(email => !email.primary).map(email => (
                <div key={email.id} className="flex items-center justify-between p-sm border rounded-lg">
                  <div className="flex items-center gap-sm">
                    <Text>{email.address}</Text>
                    {email.verified ? (
                      <div className="flex items-center gap-xs text-green-600">
                        <CheckCircle size={14} />
                        <Text size="xs">Verified</Text>
                      </div>
                    ) : (
                      <Badge size="sm" color="orange">Unverified</Badge>
                    )}
                  </div>
                  <div className="flex gap-xs">
                    <Button
                      size="xs"
                      variant="outline"
                      leftSection={<Star size={14} />}
                      onClick={() => handleMakePrimary(email.id)}
                    >
                      Make Primary
                    </Button>
                    <Button
                      size="xs"
                      variant="outline"
                      color="red"
                      leftSection={<Trash2 size={14} />}
                      onClick={() => handleRemoveEmail(email.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="flex gap-sm">
                <TextInput
                  placeholder="Add another email address"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="flex-1"
                />
                <Button
                  leftSection={<Plus size={16} />}
                  onClick={handleAddEmail}
                  disabled={!newEmail.trim()}
                >
                  Add Email
                </Button>
              </div>
            </Stack>
          </div>
        </Stack>
      </Paper>

      {/* Unsubscribe Options */}
      <Paper className="p-md shadow-sm border-l-4 border-l-orange-500">
        <Title order={3} className="text-gray-800 mb-md">Unsubscribe Options</Title>
        
        <Radio.Group
          value={unsubscribeOption}
          onChange={setUnsubscribeOption}
        >
          <Stack gap="md">
            <div className="border rounded-lg p-sm">
              <Radio
                value="pause"
                label={
                  <div className="space-y-1">
                    <div className="flex items-center gap-xs">
                      <Pause size={16} className="text-orange-600" />
                      <Text className="font-medium">Pause all emails for 30 days</Text>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      Take a break from emails but don't unsubscribe completely
                    </Text>
                  </div>
                }
              />
            </div>

            <div className="border rounded-lg p-sm">
              <Radio
                value="essential"
                label={
                  <div className="space-y-1">
                    <div className="flex items-center gap-xs">
                      <Shield size={16} className="text-blue-600" />
                      <Text className="font-medium">Receive only essential emails</Text>
                    </div>
                    <Text size="sm" className="text-gray-600">
                      Only get emails related to your bookings and account
                    </Text>
                  </div>
                }
              />
            </div>

            <div className="border-2 border-red-200 rounded-lg p-sm bg-red-50">
              <Radio
                value="all"
                color="red"
                label={
                  <div className="space-y-1">
                    <div className="flex items-center gap-xs">
                      <X size={16} className="text-red-600" />
                      <Text className="font-medium text-red-700">Unsubscribe from all marketing emails</Text>
                    </div>
                    <Text size="sm" className="text-red-600">
                      You'll still receive transactional emails related to your bookings
                    </Text>
                  </div>
                }
              />
            </div>
          </Stack>
        </Radio.Group>
      </Paper>

      {/* Save Actions */}
      <div className="flex justify-end gap-sm">
        <Button variant="outline">Cancel Changes</Button>
        <Button>Save Preferences</Button>
      </div>
    </Stack>
  );
};

export default EmailSettingsTab;