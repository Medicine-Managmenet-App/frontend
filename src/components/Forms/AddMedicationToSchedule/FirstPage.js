import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const FirstPage = ({ formData, setFormData, setPage }) => {
  const [selectedScheduleType, setSelectedScheduleType] = useState('');
  const [infoVisible, setInfoVisible] = useState(false);
  const family = useSelector((state) => state.family);
  const medicationKit = useSelector((state) => state.medicationKit);

  const medForms = [
    'Pill(s)',
    'Injection(s)',
    'Drop(s)',
    'Inhale(s)',
    'Milligram(s)',
    'Milliliter(s)'
  ];

  const scheduleTypes = ['Everyday', 'Every X days', 'Specific days of the week'];

  return (
    <>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="name">Who will be taking this medication?</label>
        <Dropdown
          id="owner"
          value={formData.owner}
          options={family}
          optionLabel="name"
          onChange={(event) => setFormData({ ...formData, owner: event.value })}
        />
      </div>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="medication">Select medication from homekit</label>
        <Dropdown
          id="medication"
          value={formData.medication}
          options={medicationKit}
          optionLabel="name"
          onChange={(event) => setFormData({ ...formData, medication: event.value })}
        />
      </div>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="medForm">What form is the medication</label>
        <Dropdown
          id="medForm"
          value={formData.medForm}
          options={medForms}
          onChange={(event) => setFormData({ ...formData, medForm: event.value })}
        />
      </div>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="dosage">
          {formData.medForm
            ? `Amount of ${formData.medForm.toLowerCase()} in single dosage`
            : 'Dosage amount'}
        </label>
        <InputNumber
          id="dosage"
          maxFractionDigits={2}
          min={1}
          max={1000}
          value={formData.dosage}
          onChange={(event) => setFormData({ ...formData, dosage: event.value })}
        />
      </div>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="scheduleType">How often do you take it?</label>
        <Dropdown
          id="scheduleType"
          value={selectedScheduleType}
          options={scheduleTypes}
          onChange={(event) => {
            setSelectedScheduleType(event.value);
            if (event.value === 'Everyday') {
              setFormData({
                ...formData,
                isEveryday: true,
                isDayIntervals: false,
                isSpecificDays: false
              });
            } else if (event.value === 'Every X days') {
              setFormData({
                ...formData,
                isEveryday: false,
                isDayIntervals: true,
                isSpecificDays: false
              });
            } else if (event.value === 'Specific days of the week') {
              setFormData({
                ...formData,
                isEveryday: false,
                isDayIntervals: false,
                isSpecificDays: true
              });
            }
          }}
        />
      </div>
      <div className="w-full flex justify-content-between">
        <Button
          className="pi pi-angle-left"
          disabled
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        />
        <Button
          className="pi pi-angle-right"
          style={{ justifySelf: 'end' }}
          disabled={
            formData.owner.name?.trim().length === 0 ||
            formData.medication === '' ||
            formData.medForm === '' ||
            formData.dosage === null ||
            selectedScheduleType === ''
          }
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        />
      </div>
    </>
  );
};

export default FirstPage;
