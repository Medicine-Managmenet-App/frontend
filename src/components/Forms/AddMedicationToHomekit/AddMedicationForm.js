'use client';

import { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

const AddMedicationToHomekitForm = () => {
  const [name, setName] = useState('');
  const [expirationDate, setExpirationDate] = useState(null);
  const [openedOn, setOpenedOn] = useState(null);

  return (
    <div>
      <div className="flex flex-column gap-2">
        <label htmlFor="name">Name</label>
        <InputText
          id="name"
          maxLength={20}
          value={name}
          onChange={(e) => {
            setName(e.target.value.trim());
          }}
        />
      </div>
    </div>
  );
};

export default AddMedicationToHomekitForm;
