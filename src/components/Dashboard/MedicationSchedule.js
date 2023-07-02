'use client';

import { useState } from 'react';

import { useSelector } from 'react-redux';

import MedicationScheduleCard from './MedicationScheduleCard';
import AddMedicationForm from '../Forms/AddMedicationToSchedule/AddMedicationForm';

import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const MedicationSchedule = () => {
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(false);
  const family = useSelector((state) => state.family);
  const [selectedMember, setSelectedMember] = useState(family[0]);

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
          options={family}
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
          <Button label="Add" icon="pi pi-plus" className="w-4" onClick={() => setVisible(true)} />
          <Dialog
            header="Add medicine"
            visible={visible}
            className="w-11 md:w-6"
            onHide={() => setVisible(false)}>
            <AddMedicationForm />
          </Dialog>
        </div>
      </div>
      <div className={`overflow-auto border-round-md p-3 border-solid border-gray-400 container`}>
        {medicines.map((medicine, index) => (
          <MedicationScheduleCard
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

export default MedicationSchedule;
