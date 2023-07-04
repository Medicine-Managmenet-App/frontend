import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const FirstPage = ({ formData, setFormData }) => {
  const [isError, setIsError] = useState(false);
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
          className={isError && formData.owner === null && 'p-invalid'}
          value={formData.owner}
          options={family}
          optionLabel="name"
          onChange={(event) => setFormData({ ...formData, owner: event.value })}
        />
        {isError && formData.owner === null && (
          <small className="p-error">This field is required</small>
        )}
      </div>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="medication">Select medication from homekit</label>
        <Dropdown
          id="medication"
          className={isError && formData.medication === null && 'p-invalid'}
          value={formData.medication}
          options={medicationKit}
          optionLabel="name"
          onChange={(event) => setFormData({ ...formData, medication: event.value })}
        />
        {isError && formData.medication === null && (
          <small className="p-error">Medication is required</small>
        )}
      </div>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="medForm">What form is the medication</label>
        <Dropdown
          id="medForm"
          className={isError && formData.medForm === null && 'p-invalid'}
          value={formData.medForm}
          options={medForms}
          onChange={(event) => setFormData({ ...formData, medForm: event.value })}
        />
        {isError && formData.medForm === null && (
          <small className="p-error">Medication form is required</small>
        )}
      </div>
      <div className="flex flex-column gap-2 mb-4">
        <div className="flex align-items-center">
          <label htmlFor="dosage">Dosage</label>
          <Button
            icon="pi pi-info-circle"
            className="ml-2"
            rounded
            text
            onClick={() => setInfoVisible(true)}
          />
        </div>
        <Dialog header="Dosage tip" visible={infoVisible} onHide={() => setInfoVisible(false)}>
          <p>
            Enter dosage amount of selected medication form.
            <br />
            For example, if you have chosen pills, enter how many pills one dosage should consist
            of.
          </p>
        </Dialog>
        <InputNumber
          id="dosage"
          maxFractionDigits={2}
          min={1}
          max={1000}
          className={isError && formData.dosage && weight === null && 'p-invalid'}
          value={formData.dosage}
          onChange={(event) => setFormData({ ...formData, dosage: event.value })}
        />
        {isError && formData.dosage && weight === null && (
          <small className="p-error">Dosage is required</small>
        )}
      </div>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="scheduleType">How often do you take it?</label>
        <Dropdown
          id="scheduleType"
          className={isError && formData.scheduleType === null && 'p-invalid'}
          value={formData.scheduleType}
          options={scheduleTypes}
          onChange={(event) => setFormData({ ...formData, scheduleType: event.value })}
        />
        {isError && formData.medForm === null && (
          <small className="p-error">Schedule type is required</small>
        )}
      </div>
    </>
  );
};

export default FirstPage;
