'use client';

import { useState } from 'react';

import MedicineScheduleCard from './MedicineScheduleCard';

import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import classes from './MedicineSchedule.module.css';

const MedicineSchedule = () => {
  const [date, setDate] = useState(new Date());
  const [selectedMember, setSelectedMember] = useState({ name: 'John Smith', code: 1 });
  const familyMembers = [
    { name: 'John Smith', code: 1 },
    { name: 'Ann Smith', code: 2 },
    { name: 'Mark Smith', code: 3 },
    { name: 'Emily Smith', code: 4 },
    { name: 'John Smith jr', code: 5 }
  ];
  const medicines = [
    { name: 'Antibiotic', time: '08:00', dosage: '2 mg' },
    { name: 'Apap', time: '10:30', dosage: '1 pill' },
    { name: 'Nurofen', time: '12:00', dosage: '2 pills' },
    { name: 'Posenazol', time: '15:00', dosage: '5 mg' },
    { name: 'Samostol', time: '18:00', dosage: '5 mg' }
  ];

  return (
    <Card className="md:mx-3">
      <h2 className="font-medium font-bold mb-4">
        Scheduled medications for <span className="text-primary">{selectedMember.name}</span>
      </h2>
      <div className="flex flex-column md:flex-row gap-2 mb-3">
        <Dropdown
          options={familyMembers}
          optionLabel="name"
          className="w-full md:w-3 lg:w-2"
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.value)}
        />
        <div className="flex justify-content-between">
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            dateFormat="dd/MM/yy"
            className="w-7 lg:w-8 lg:mr-2"
          />
          <Button label="Add" icon="pi pi-plus" className="w-4" />
        </div>
      </div>
      <div
        className={`overflow-auto border-round-md p-3 border-solid border-gray-400 ${classes.container}`}>
        {medicines.map((medicine, index) => (
          <MedicineScheduleCard
            key={index}
            name={medicine.name}
            time={medicine.time}
            dosage={medicine.dosage}
          />
        ))}
      </div>
    </Card>
  );
};

export default MedicineSchedule;
