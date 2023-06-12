'use client';

import { useState } from 'react';
import { format } from 'date-fns';

import { Divider } from 'primereact/divider';
import { Checkbox } from 'primereact/checkbox';

const MedicineScheduleCard = (props) => {
  const [checked, setChecked] = useState(false);
  const [takenAt, setTakenAt] = useState('');

  const handleChecked = (e) => {
    setChecked(e.checked);
    if (e.checked) {
      const time = format(new Date(), 'HH:mm');
      setTakenAt(time);
    } else {
      setTakenAt('');
    }
  };

  return (
    <div>
      <Divider align="left">
        <div className="inline-flex align-items-center">
          <b>{props.time}</b>
          {checked && <span className="p-tag ml-2">✓</span>}
        </div>
      </Divider>
      <div className="flex w-full max-h-3rem md:max-h-6rem px-3 justify-content-between align-items-center shadow-2 surface-200">
        <div className="my-3">
          <p className=" font-bold text-xs md:text-sm">{props.name}</p>
          <p className=" text-xs md:text-sm">{props.dosage}</p>
          {checked && (
            <p className="font-light text-xs md:text-sm text-primary mb-1">Taken at {takenAt}</p>
          )}
        </div>
        <div>
          <Checkbox
            onChange={handleChecked}
            checked={checked}
            disabled={checked ? true : false}></Checkbox>
        </div>
      </div>
    </div>
  );
};

export default MedicineScheduleCard;
