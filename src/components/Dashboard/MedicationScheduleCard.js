'use client';

import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { isSameDay, startOfDay, format, parseISO } from 'date-fns';

import { removeMedicationFromSchedule } from '@/redux/slices/medication-schedule-slice';
import { setMedicationAsTaken } from '@/redux/slices/medication-schedule-slice';

import { Button } from 'primereact/button';
import { confirmDialog } from 'primereact/confirmdialog';
import { Checkbox } from 'primereact/checkbox';

const MedicationScheduleCard = ({ medicine, date }) => {
  const [checked, setChecked] = useState(false);
  const [checkTime, setCheckTime] = useState('');
  const dispatch = useDispatch();
  const today = new Date();

  useEffect(() => {
    const takenDates = medicine.takenAt.map((dateStr) => parseISO(dateStr));
    const takenDate = takenDates.find((takenDate) =>
      isSameDay(startOfDay(takenDate), startOfDay(date))
    );

    setChecked(takenDate !== undefined);
    setCheckTime(takenDate ? format(takenDate, 'HH:mm') : '');
  }, [date, medicine.takenAt]);

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

  const handleCheck = (e) => {
    setChecked(e.checked);
    if (e.checked) {
      setCheckTime(format(new Date(), 'HH:mm'));
      dispatch(setMedicationAsTaken({ id: medicine.id, checkTime: new Date() }));
    }
  };

  return (
    <>
      <div className="flex w-full h-auto max-h-6rem md:max-h-5rem px-3  justify-content-between align-items-center shadow-2 surface-200">
        <div className="flex align-items-center gap-3">
          <div className="flex flex-column">
            <Checkbox
              onChange={handleCheck}
              checked={checked}
              disabled={!isSameDay(startOfDay(date), startOfDay(today)) || checked}></Checkbox>
          </div>

          <div className="my-3">
            <p className=" font-bold text-sm md:text-base mb-1">{medicine.name}</p>
            <p className=" text-xs md:text-sm">{`${medicine.dosage}`}</p>
            {checked && <small className="text-xs text-primary">Taken at {checkTime}</small>}
          </div>
        </div>

        <div className="flex align-items-center p-3 gap-1">
          <Button
            icon="pi pi-trash"
            size="small"
            severity="danger"
            onClick={() => confirmDelete(medicine)}
          />
        </div>
      </div>
    </>
  );
};

export default MedicationScheduleCard;
