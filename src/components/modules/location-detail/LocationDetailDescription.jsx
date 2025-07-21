import PokharaImage from "../../../assets/images/pokhara.jpg";
import {IconMapPin} from "@tabler/icons-react";
import { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { Stepper, Group, TextInput, NumberInput, Select } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { IconCheck, IconCreditCard, IconShieldCheck } from "@tabler/icons-react";

export const LocationDetailDescription = () => {
    return <section className="bg-white rounded-lg shadow-md overflow-hidden mb-xl">
        <div className="grid md:grid-cols-2 gap-lg p-lg">
            <div>
                <div className="flex items-center gap-xs mb-xs">
                    <IconMapPin className="text-primary" size={16} />
                    <span className="text-gray-600">3 km away</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-md">About Phewa Lake</h2>
                <div className="space-y-md text-gray-700 leading-relaxed">
                    <p>
                        Phewa Lake is the centerpiece of Pokhara's natural beauty.
                        Surrounded by forest-covered hills and with the magnificent
                        Annapurna range reflecting on its surface on clear days, the lake
                        offers one of Nepal's most iconic views. The lake covers an area
                        of about 4.43 square kilometers and has an average depth of about
                        8.6 meters.
                    </p>
                    <p>
                        Visitors can enjoy boating, kayaking, and paddleboarding on the
                        lake. The eastern shore of the lake, known as Lakeside or Baidam,
                        is the tourist hub of Pokhara with numerous hotels, restaurants,
                        and shops. The western shore is less developed and offers more
                        tranquil surroundings with forest trails and small villages.
                    </p>
                    <p>
                        The lake also features the famous Tal Barahi Temple, a two-story
                        pagoda temple located on a small island about 500 meters from the
                        Lakeside. The temple is dedicated to the Hindu goddess Durga and
                        is an important religious site for locals and visitors alike.
                    </p>
                </div>
                {/* Book Flight Button */}
                <div className="mt-lg">
                    <BookFlightButton />
                </div>
            </div>
            <div>
                <img
                    src={PokharaImage}
                    alt="Another view of Phewa Lake"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
    </section>

}

function BookFlightButton() {
    const [opened, setOpened] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const flightPrice = 180;
    const form = useForm({
        initialValues: {
            departure: null,
            return: null,
            travelers: 1,
            class: 'Economy',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            cardName: '',
        },
        validate: {
            departure: (value) => (value ? null : 'Departure date required'),
            return: (value) => (value ? null : 'Return date required'),
            travelers: (value) => (value > 0 ? null : 'At least 1 traveler'),
            firstName: (value) => (activeStep > 0 && !value ? 'First name required' : null),
            lastName: (value) => (activeStep > 0 && !value ? 'Last name required' : null),
            email: (value) => (activeStep > 0 && !value ? 'Email required' : null),
            phone: (value) => (activeStep > 0 && !value ? 'Phone required' : null),
            cardNumber: (value) => (activeStep > 2 && !value ? 'Card number required' : null),
            expiryDate: (value) => (activeStep > 2 && !value ? 'Expiry date required' : null),
            cvv: (value) => (activeStep > 2 && !value ? 'CVV required' : null),
            cardName: (value) => (activeStep > 2 && !value ? 'Name on card required' : null),
        },
    });

    const handleNext = () => {
        if (activeStep === 0) {
            if (!form.validateField('departure') && !form.validateField('return')) {
                setActiveStep((s) => s + 1);
            } else {
                form.validate();
            }
        } else if (activeStep === 1) {
            if (!form.validateField('firstName') && !form.validateField('lastName') && !form.validateField('email') && !form.validateField('phone')) {
                setActiveStep((s) => s + 1);
            } else {
                form.validate();
            }
        } else if (activeStep === 2) {
            if (!form.validateField('cardNumber') && !form.validateField('expiryDate') && !form.validateField('cvv') && !form.validateField('cardName')) {
                setActiveStep((s) => s + 1);
                setShowConfirmation(true);
                setTimeout(() => {
                    setShowConfirmation(false);
                    setOpened(false);
                    setActiveStep(0);
                    form.reset();
                }, 2500);
            } else {
                form.validate();
            }
        }
    };
    const handleBack = () => setActiveStep((s) => (s > 0 ? s - 1 : 0));

    // Calculate total price
    const total = flightPrice * (form.values.travelers || 1);

    return (
        <>
            <Button size="md" onClick={() => setOpened(true)} className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-md">
                Book Flight
            </Button>
            <Modal opened={opened} onClose={() => setOpened(false)} title={null} size="xl" centered classNames={{ modal: 'rounded-2xl p-0 bg-white/95 shadow-xl' }}>
                {/* Summary Card (no image) */}
                <div className="bg-white rounded-2xl shadow-lg px-lg py-md flex flex-col md:flex-row gap-lg mb-lg items-center">
                    <div className="flex-1 flex flex-col gap-md justify-between">
                        <div>
                            <div className="text-primary font-semibold text-sm mb-xs">Pokhara → Kathmandu</div>
                            <div className="text-2xl font-bold text-gray-900 mb-xs">Flight Booking</div>
                            <div className="text-gray-600 text-base mb-md">Direct flight, flexible dates</div>
                        </div>
                        <div className="flex flex-wrap gap-md text-base text-gray-700 mb-md">
                            <div className="flex items-center gap-xs"><IconMapPin className="w-5 h-5 text-primary" />Pokhara</div>
                            <div className="flex items-center gap-xs"><IconMapPin className="w-5 h-5 text-primary" />Kathmandu</div>
                            <div className="flex items-center gap-xs"><IconCreditCard className="w-5 h-5 text-primary" />{form.values.class}</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-between min-w-[140px]">
                        <div className="text-right">
                            <div className="text-base text-gray-500 line-through">${flightPrice + 50}</div>
                            <div className="text-2xl font-bold text-primary">${flightPrice}</div>
                            <div className="text-sm text-gray-500">per traveler</div>
                        </div>
                        <div className="mt-xs text-lg font-bold text-primary">Total: <span className="text-primary-dark">${total}</span></div>
                    </div>
                </div>
                {/* Stepper */}
                <div className="px-lg pb-lg">
                    <Stepper active={activeStep} onStepClick={setActiveStep} breakpoint="sm" classNames={{ steps: 'mb-lg', step: 'rounded-full', separator: 'bg-primary-light' }}>
                        <Stepper.Step label={<span className="text-primary font-semibold text-base">Flight Details</span>}>
                            <div className="bg-white/80 rounded-xl shadow flex flex-col gap-md">
                                <Group grow mb="md" className="gap-md">
                                    <DateInput
                                        size="md"
                                        label={<span className="text-base font-semibold">Departure</span>}
                                        placeholder="Pick date"
                                        value={form.values.departure}
                                        onChange={(date) => form.setFieldValue('departure', date)}
                                        minDate={new Date()}
                                        required
                                        classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    />
                                    <DateInput
                                        size="md"
                                        label={<span className="text-base font-semibold">Return</span>}
                                        placeholder="Pick date"
                                        value={form.values.return}
                                        onChange={(date) => form.setFieldValue('return', date)}
                                        minDate={form.values.departure || new Date()}
                                        required
                                        classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    />
                                </Group>
                                <Group grow className="gap-md">
                                    <NumberInput
                                        size="md"
                                        label={<span className="text-base font-semibold">Travelers</span>}
                                        min={1}
                                        value={form.values.travelers}
                                        onChange={(val) => form.setFieldValue('travelers', val)}
                                        classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    />
                                    <Select
                                        size="md"
                                        label={<span className="text-base font-semibold">Class</span>}
                                        data={[{ value: 'Economy', label: 'Economy' }, { value: 'Business', label: 'Business' }, { value: 'First', label: 'First' }]}
                                        value={form.values.class}
                                        onChange={(val) => form.setFieldValue('class', val)}
                                        classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    />
                                </Group>
                            </div>
                        </Stepper.Step>
                        <Stepper.Step label={<span className="text-primary font-semibold text-base">Passenger Info</span>}>
                            <div className="bg-white/80 rounded-xl shadow flex flex-col gap-md">
                                <TextInput
                                    size="md"
                                    label={<span className="text-base font-semibold">First Name</span>}
                                    placeholder="Your first name"
                                    value={form.values.firstName}
                                    onChange={(e) => form.setFieldValue('firstName', e.currentTarget.value)}
                                    required
                                    classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    mb="sm"
                                />
                                <TextInput
                                    size="md"
                                    label={<span className="text-base font-semibold">Last Name</span>}
                                    placeholder="Your last name"
                                    value={form.values.lastName}
                                    onChange={(e) => form.setFieldValue('lastName', e.currentTarget.value)}
                                    required
                                    classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    mb="sm"
                                />
                                <TextInput
                                    size="md"
                                    label={<span className="text-base font-semibold">Email</span>}
                                    placeholder="you@email.com"
                                    value={form.values.email}
                                    onChange={(e) => form.setFieldValue('email', e.currentTarget.value)}
                                    required
                                    classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    mb="sm"
                                />
                                <TextInput
                                    size="md"
                                    label={<span className="text-base font-semibold">Phone</span>}
                                    placeholder="Phone number"
                                    value={form.values.phone}
                                    onChange={(e) => form.setFieldValue('phone', e.currentTarget.value)}
                                    required
                                    classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                />
                            </div>
                        </Stepper.Step>
                        <Stepper.Step label={<span className="text-primary font-semibold text-base">Payment</span>}>
                            <div className="bg-white/80 rounded-xl shadow flex flex-col gap-md">
                                <div className="flex items-center gap-xs mb-md">
                                    <IconShieldCheck className="w-5 h-5 text-primary" />
                                    <span className="text-primary font-semibold text-base">Secure Payment</span>
                                </div>
                                <TextInput
                                    size="md"
                                    label={<span className="text-base font-semibold">Card Number</span>}
                                    placeholder="1234 5678 9012 3456"
                                    value={form.values.cardNumber}
                                    onChange={(e) => form.setFieldValue('cardNumber', e.currentTarget.value)}
                                    required
                                    classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    mb="sm"
                                />
                                <Group grow className="gap-md">
                                    <TextInput
                                        size="md"
                                        label={<span className="text-base font-semibold">Expiry Date</span>}
                                        placeholder="MM/YY"
                                        value={form.values.expiryDate}
                                        onChange={(e) => form.setFieldValue('expiryDate', e.currentTarget.value)}
                                        required
                                        classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    />
                                    <TextInput
                                        size="md"
                                        label={<span className="text-base font-semibold">CVV</span>}
                                        placeholder="123"
                                        value={form.values.cvv}
                                        onChange={(e) => form.setFieldValue('cvv', e.currentTarget.value)}
                                        required
                                        classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    />
                                </Group>
                                <TextInput
                                    size="md"
                                    label={<span className="text-base font-semibold">Name on Card</span>}
                                    placeholder="Cardholder name"
                                    value={form.values.cardName}
                                    onChange={(e) => form.setFieldValue('cardName', e.currentTarget.value)}
                                    required
                                    classNames={{ input: 'text-base py-md px-md', label: 'mb-xs' }}
                                    mt="sm"
                                />
                            </div>
                        </Stepper.Step>
                        <Stepper.Completed>
                            {showConfirmation ? (
                                <div className="flex flex-col items-center justify-center p-lg">
                                    <IconCheck className="w-12 h-12 text-primary mb-4 animate-bounce" />
                                    <div className="text-2xl font-bold mb-2 text-primary">Flight Booked!</div>
                                    <div className="text-gray-600 mb-md">Thank you for booking your flight to <span className="font-semibold text-primary">Pokhara</span>.</div>
                                    <div className="bg-white/90 rounded-xl shadow p-md flex flex-col items-center gap-xs">
                                        <div className="text-lg font-bold text-primary">Pokhara → Kathmandu</div>
                                        <div className="text-gray-700 text-xs">{form.values.class} Class</div>
                                        <div className="text-primary font-bold text-xl">Paid: <span className="text-primary-dark">${total}</span></div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-lg">Processing your booking...</div>
                            )}
                        </Stepper.Completed>
                    </Stepper>
                    <Group position="apart" mt="xl">
                        {activeStep > 0 && activeStep < 3 && (
                            <Button variant="default" size='lg' onClick={handleBack} className="rounded-full px-lg py-xs">
                                Back
                            </Button>
                        )}
                        {activeStep < 3 && (
                            <Button onClick={handleNext} size='lg' className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-full px-lg py-xs font-semibold shadow">
                                {activeStep === 2 ? 'Confirm Booking' : 'Next'}
                            </Button>
                        )}
                    </Group>
                </div>
            </Modal>
        </>
    );
}
