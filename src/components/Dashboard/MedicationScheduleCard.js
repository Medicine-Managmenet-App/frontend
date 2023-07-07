'use client';

import { useState } from 'react';
import { format } from 'date-fns';

import { Checkbox } from 'primereact/checkbox';

const MedicationScheduleCard = ({ medicine }) => {
  return (
    <>
      <div className="flex w-full max-h-3rem md:max-h-6rem px-3 justify-content-between align-items-center shadow-2 surface-200">
        <div className="my-3">
          <p className=" font-bold text-xs md:text-sm">{medicine.name}</p>
          <p className=" text-xs md:text-sm">{`${medicine.dosage}`}</p>
        </div>
      </div>
    </>
  );
};

export default MedicationScheduleCard;
