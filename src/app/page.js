import MedicineSchedule from '@/components/Dashboard/MedicineSchedule';

export const metadata = {
  title: 'Dashboard | Medicine Management App'
};

export default function Home() {
  return (
    <>
      <section className="mt-7 lg:mt-8">
        <MedicineSchedule />
      </section>
    </>
  );
}
