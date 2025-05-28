import Image from 'next/image';
import AppointmentForm from './AppointmentForm';

export default function AppointmentSection() {

  return (
    <section className="relative bg-white py-20 px-4 lg:px-20 overflow-hidden text-center">
      <div className="z-20 relative mb-10">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">Book an Appointment</h2>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et..</p>
      </div>

      <div className="relative flex justify-center">
        <Image
          src="/Rectangle 33.jpg"
          alt="Hospital"
          className="object-cover rounded-lg ml-[-300px]"
          width={891}
          height={505.44}
        />

        <AppointmentForm />
      </div>
    </section>
  );
}
