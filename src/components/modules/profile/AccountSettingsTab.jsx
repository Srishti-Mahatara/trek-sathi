import React, { useState } from 'react';
import { Paper, Stack, Title, Text, Group, Button, TextInput, Switch, Progress, Badge, Divider } from '@mantine/core';
import {
    Settings,
    Shield,
    Check,
    X,
    Laptop,
    Smartphone,
    Tablet,
    Eye,
    EyeOff,
    AlertCircle,
    LogOut,
    Power,
    ShieldCheck,
    Globe,
    Mail,
    Phone,
    CheckCircle,
    XCircle
} from 'lucide-react';

const AccountSettingsTab = () => {
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [privacySettings, setPrivacySettings] = useState({
        profileVisible: true,
        showTravelHistory: true,
        locationSharing: false,
        activityStatus: true
    });

    const [linkedAccounts, setLinkedAccounts] = useState({
        google: { connected: true, email: 'alex.johnson@gmail.com' },
        facebook: { connected: false, email: '' },
        apple: { connected: true, email: 'alex********@icloud.com' }
    });

    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const sessions = [
        {
            id: 1,
            device: 'MacBook Pro',
            icon: Laptop,
            location: 'San Francisco, CA, USA',
            status: 'Active now',
            browser: 'Chrome 120.0.6099',
            current: true
        },
        {
            id: 2,
            device: 'iPhone 15',
            icon: Smartphone,
            location: 'San Francisco, CA, USA',
            status: 'Last active: 2 hours ago',
            browser: 'Safari Mobile',
            current: false
        },
        {
            id: 3,
            device: 'iPad',
            icon: Tablet,
            location: 'Los Angeles, CA, USA',
            status: 'Last active: 3 days ago',
            browser: 'Safari 16.2',
            current: false
        }
    ];

    const getPasswordStrength = (password) => {
        if (!password) return { strength: 0, label: 'Enter password', color: 'gray' };

        let strength = 0;
        if (password.length >= 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[^A-Za-z0-9]/.test(password)) strength += 25;

        if (strength < 50) return { strength, label: 'Weak', color: 'red' };
        if (strength < 75) return { strength, label: 'Fair', color: 'yellow' };
        if (strength < 100) return { strength, label: 'Good', color: 'blue' };
        return { strength, label: 'Strong', color: 'green' };
    };

    const passwordStrength = getPasswordStrength(passwords.new);

    const handlePasswordChange = (field, value) => {
        setPasswords(prev => ({ ...prev, [field]: value }));
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handlePrivacyToggle = (setting) => {
        setPrivacySettings(prev => ({ ...prev, [setting]: !prev[setting] }));
    };

    const handleAccountToggle = (provider) => {
        setLinkedAccounts(prev => ({
            ...prev,
            [provider]: { ...prev[provider], connected: !prev[provider].connected }
        }));
    };

    const handleLogoutSession = (sessionId) => {
        console.log(`Logging out session ${sessionId}`);
    };

    const handleLogoutAllOthers = () => {
        console.log('Logging out all other sessions');
    };

    return (
        <Stack gap="md">
            <Title order={2} className="text-gray-900 flex items-center gap-xs">
                <Settings size={24} />
                Account Settings
            </Title>

            {/* Security Section */}
            <Paper className="p-md shadow-sm">
                <Title order={3} className="text-gray-800 mb-md flex items-center gap-xs">
                    <Shield size={20} />
                    Security
                </Title>

                <Stack gap="md">
                    <TextInput
                        label="Current Password"
                        placeholder="Enter your current password"
                        type={showPassword.current ? 'text' : 'password'}
                        value={passwords.current}
                        onChange={(e) => handlePasswordChange('current', e.target.value)}
                        rightSection={
                            <Button
                                variant="subtle"
                                size="xs"
                                onClick={() => togglePasswordVisibility('current')}
                                className="text-gray-500"
                            >
                                {showPassword.current ? <EyeOff size={16} /> : <Eye size={16} />}
                            </Button>
                        }
                    />

                    <Group grow>
                        <TextInput
                            label="New Password"
                            placeholder="Enter new password"
                            type={showPassword.new ? 'text' : 'password'}
                            value={passwords.new}
                            onChange={(e) => handlePasswordChange('new', e.target.value)}
                            rightSection={
                                <Button
                                    variant="subtle"
                                    size="xs"
                                    onClick={() => togglePasswordVisibility('new')}
                                    className="text-gray-500"
                                >
                                    {showPassword.new ? <EyeOff size={16} /> : <Eye size={16} />}
                                </Button>
                            }
                        />
                        <TextInput
                            label="Confirm New Password"
                            placeholder="Confirm new password"
                            type={showPassword.confirm ? 'text' : 'password'}
                            value={passwords.confirm}
                            onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                            rightSection={
                                <Button
                                    variant="subtle"
                                    size="xs"
                                    onClick={() => togglePasswordVisibility('confirm')}
                                    className="text-gray-500"
                                >
                                    {showPassword.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                                </Button>
                            }
                        />
                    </Group>

                    {passwords.new && (
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Text size="sm" className="font-medium">Password Strength</Text>
                                <Text size="sm" className={`font-medium text-${passwordStrength.color}-600`}>
                                    {passwordStrength.label}
                                </Text>
                            </div>
                            <Progress
                                value={passwordStrength.strength}
                                color={passwordStrength.color}
                                size="sm"
                            />
                        </div>
                    )}

                    <div className="flex items-start gap-xs p-xs rounded-lg bg-blue-50">
                        <AlertCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <Text size="sm" className="text-blue-700">
                            Your password should be at least 8 characters and include uppercase letters, numbers, and special characters.
                        </Text>
                    </div>

                    <Button className="w-fit">Update Password</Button>
                </Stack>
            </Paper>

            {/* Account Verification */}
            <Paper className="p-md shadow-sm">
                <Title order={3} className="text-gray-800 mb-md">Account Verification</Title>

                <Group grow>
                    <div className="space-y-2">
                        <Text size="sm" className="font-medium">Email Verification</Text>
                        <div className="flex items-center gap-xs">
                            <CheckCircle size={16} className="text-green-600" />
                            <Text size="sm" className="text-green-600 font-medium">Verified</Text>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Text size="sm" className="font-medium">Phone Verification</Text>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-xs">
                                <XCircle size={16} className="text-red-600" />
                                <Text size="sm" className="text-red-600 font-medium">Not Verified</Text>
                            </div>
                            <Button size="xs" variant="outline">Verify Now</Button>
                        </div>
                    </div>
                </Group>
            </Paper>

            {/* Two-Factor Authentication */}
            <Paper className="p-md shadow-sm">
                <Title order={3} className="text-gray-800 mb-md flex items-center gap-xs">
                    <ShieldCheck size={20} />
                    Two-Factor Authentication
                </Title>

                <div className="space-y-md">
                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <Text className="font-medium">Enable Two-Factor Authentication</Text>
                            <Text size="sm" className="text-gray-600 ">
                                Add an extra layer of security to your account by requiring a verification code in addition to your password when signing in.
                            </Text>
                        </div>
                        <Switch
                            checked={twoFactorEnabled}
                            onChange={(event) => setTwoFactorEnabled(event.currentTarget.checked)}
                            size="md"
                        />
                    </div>

                    <Button
                        variant="outline"
                        disabled={!twoFactorEnabled}
                        leftSection={<Shield size={16} />}
                    >
                        Set Up Two-Factor Authentication
                    </Button>
                </div>
            </Paper>

            {/* Session Management */}
            <Paper className="p-md shadow-sm">
                <Title order={3} className="text-gray-800 mb-md">Session Management</Title>

                <Stack gap="md">
                    {sessions.map((session) => {
                        const IconComponent = session.icon;
                        return (
                            <div key={session.id} className={`flex items-center justify-between p-sm rounded-lg ${session.current ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'}`}>
                                <div className="flex items-center gap-sm">
                                    <IconComponent size={20} className="text-gray-600" />
                                    <div>
                                        <div className="flex items-center gap-xs">
                                            <Text className="font-medium">{session.device}</Text>
                                            {session.current && (
                                                <Badge size="xs" color="blue">Current Device</Badge>
                                            )}
                                        </div>
                                        <Text size="xs" className="text-gray-600">{session.location}</Text>
                                        <Text size="xs" className="text-gray-500">{session.status} • {session.browser}</Text>
                                    </div>
                                </div>

                                {!session.current && (
                                    <Button
                                        size="xs"
                                        variant="outline"
                                        color="red"
                                        leftSection={<LogOut size={14} />}
                                        onClick={() => handleLogoutSession(session.id)}
                                    >
                                        Log Out
                                    </Button>
                                )}
                            </div>
                        );
                    })}

                    <Button
                        color="red"
                        variant="outline"
                        leftSection={<Power size={16} />}
                        onClick={handleLogoutAllOthers}
                        className="w-fit"
                    >
                        Log Out of All Other Devices
                    </Button>
                </Stack>
            </Paper>

            {/* Privacy Settings */}
            <Paper className="p-md shadow-sm">
                <Title order={3} className="text-gray-800 mb-md">Privacy Settings</Title>

                <Stack gap="lg">
                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <Text className="font-medium">Profile Visibility</Text>
                            <Text size="sm" className="text-gray-600">
                                Make your profile visible to other TravelBuddy users
                            </Text>
                        </div>
                        <Switch
                            checked={privacySettings.profileVisible}
                            onChange={() => handlePrivacyToggle('profileVisible')}
                            size="md"
                        />
                    </div>

                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <Text className="font-medium">Show Travel History</Text>
                            <Text size="sm" className="text-gray-600">
                                Allow others to see your past trips and destinations
                            </Text>
                        </div>
                        <Switch
                            checked={privacySettings.showTravelHistory}
                            onChange={() => handlePrivacyToggle('showTravelHistory')}
                            size="md"
                        />
                    </div>

                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <Text className="font-medium">Location Sharing</Text>
                            <Text size="sm" className="text-gray-600">
                                Share your current location with friends during trips
                            </Text>
                        </div>
                        <Switch
                            checked={privacySettings.locationSharing}
                            onChange={() => handlePrivacyToggle('locationSharing')}
                            size="md"
                        />
                    </div>

                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <Text className="font-medium">Activity Status</Text>
                            <Text size="sm" className="text-gray-600">
                                Show when you're active on TravelBuddy
                            </Text>
                        </div>
                        <Switch
                            checked={privacySettings.activityStatus}
                            onChange={() => handlePrivacyToggle('activityStatus')}
                            size="md"
                        />
                    </div>
                </Stack>
            </Paper>

            {/* Linked Accounts */}
            <Paper className="p-md shadow-sm">
                <Title order={3} className="text-gray-800 mb-md">Linked Accounts</Title>

                <Stack gap="md">
                    <div className="flex items-center justify-between p-sm border rounded-lg">
                        <div className="flex items-center gap-sm">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <Globe size={20} className="text-red-600" />
                            </div>
                            <div>
                                <Text className="font-medium">Google</Text>
                                <Text size="sm" className={linkedAccounts.google.connected ? 'text-green-600' : 'text-gray-500'}>
                                    {linkedAccounts.google.connected ? `Connected as ${linkedAccounts.google.email}` : 'Not connected'}
                                </Text>
                            </div>
                        </div>
                        <Button
                            size="xs"
                            variant={linkedAccounts.google.connected ? "outline" : "filled"}
                            onClick={() => handleAccountToggle('google')}
                        >
                            {linkedAccounts.google.connected ? 'Disconnect' : 'Connect'}
                        </Button>
                    </div>

                    <div className="flex items-center justify-between p-sm border rounded-lg">
                        <div className="flex items-center gap-sm">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Globe size={20} className="text-blue-600" />
                            </div>
                            <div>
                                <Text className="font-medium">Facebook</Text>
                                <Text size="sm" className={linkedAccounts.facebook.connected ? 'text-green-600' : 'text-gray-500'}>
                                    {linkedAccounts.facebook.connected ? `Connected as ${linkedAccounts.facebook.email}` : 'Not connected'}
                                </Text>
                            </div>
                        </div>
                        <Button
                            size="xs"
                            variant={linkedAccounts.facebook.connected ? "outline" : "filled"}
                            onClick={() => handleAccountToggle('facebook')}
                        >
                            {linkedAccounts.facebook.connected ? 'Disconnect' : 'Connect'}
                        </Button>
                    </div>

                    <div className="flex items-center justify-between p-sm border rounded-lg">
                        <div className="flex items-center gap-sm">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Globe size={20} className="text-gray-600" />
                            </div>
                            <div>
                                <Text className="font-medium">Apple</Text>
                                <Text size="sm" className={linkedAccounts.apple.connected ? 'text-green-600' : 'text-gray-500'}>
                                    {linkedAccounts.apple.connected ? `Connected as ${linkedAccounts.apple.email}` : 'Not connected'}
                                </Text>
                            </div>
                        </div>
                        <Button
                            size="xs"
                            variant={linkedAccounts.apple.connected ? "outline" : "filled"}
                            onClick={() => handleAccountToggle('apple')}
                        >
                            {linkedAccounts.apple.connected ? 'Disconnect' : 'Connect'}
                        </Button>
                    </div>
                </Stack>
            </Paper>

            {/* Account Actions - Danger Zone */}
            <Paper className="p-md shadow-sm border-l-4 border-l-red-500">
                <Title order={3} className="text-gray-800 mb-md">Account Actions</Title>

                <Stack gap="lg">
                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <Text className="font-medium">Deactivate Account</Text>
                            <Text size="sm" className="text-gray-600 ">
                                Temporarily disable your account. You can reactivate it at any time.
                            </Text>
                        </div>
                        <Button variant="outline" color="orange">
                            Deactivate
                        </Button>
                    </div>

                    <Divider />

                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <Text className="font-medium">Delete Account</Text>
                            <Text size="sm" className="text-gray-600 ">
                                Permanently delete your account and all associated data. This action cannot be undone.
                            </Text>
                        </div>
                        <Button color="red">
                            Delete
                        </Button>
                    </div>
                </Stack>
            </Paper>

            {/* Save Actions */}
            <div className="flex justify-end gap-sm">
                <Button variant="outline">Cancel Changes</Button>
                <Button>Save All Changes</Button>
            </div>
        </Stack>
    );
};

export default AccountSettingsTab;