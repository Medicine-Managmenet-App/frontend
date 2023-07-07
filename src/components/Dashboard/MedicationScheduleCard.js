import { useDispatch } from 'react-redux';

import { removeMedicationFromSchedule } from '@/redux/slices/medication-schedule-slice';

import { Button } from 'primereact/button';
import { confirmDialog } from 'primereact/confirmdialog';

const MedicationScheduleCard = ({ medicine }) => {
  const dispatch = useDispatch();
  const handleDelete = (medicine) => {
    dispatch(removeMedicationFromSchedule(medicine.id));
  };

  const confirmDelete = (medicine) => {
    confirmDialog({
      message: 'Do you want to delete this medication from the schedule?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => handleDelete(medicine)
    });
  };

  return (
    <>
      <div className="flex w-full max-h-3rem md:max-h-6rem px-3 justify-content-between align-items-center shadow-2 surface-200">
        <div className="my-3">
          <p className=" font-bold text-xs md:text-sm">{medicine.name}</p>
          <p className=" text-xs md:text-sm">{`${medicine.dosage}`}</p>
        </div>
        <div className="flex align-items-center p-3 gap-1">
          <Button icon="pi pi-trash" severity="danger" onClick={() => confirmDelete(medicine)} />
        </div>
      </div>
    </>
  );
};

export default MedicationScheduleCard;
