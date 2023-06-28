import MedicationSchedule from '@/components/Dashboard/MedicationSchedule';

export const metadata = {
  title: 'Dashboard | Medicine Management App'
};

export default function Home() {
  return (
    <>
      <section className="mt-7 lg:mt-8">
        <MedicationSchedule />
      </section>
    </>
  );
}
