'use client';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addMedicationToKit } from '@/redux/slices/home-medication-kit-slice';

import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const AddMedicationToHomekitForm = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [expirationDate, setExpirationDate] = useState(null);
  const [openedOn, setOpenedOn] = useState(null);
  const [isError, setIsError] = useState(false);
  const toast = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || expirationDate === null || openedOn === null) {
      setIsError(true);
    } else {
      dispatch(
        addMedicationToKit({
          id: Math.floor(Math.random() * 900) + 100,
          name: name.trim(),
          expirationDate: expirationDate,
          openedOn: openedOn
        })
      );
      showSuccess();
      setIsError(false);
      setVisible(false);
    }
  };

  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Medicine submitted',
      life: 3000
    });
  };

  return (
    <>
      <Button label="Add" icon="pi pi-plus" className="w-full" onClick={() => setVisible(true)} />
      <Toast ref={toast} />
      <Dialog
        header="Add medicine"
        visible={visible}
        className="w-11 md:w-3"
        onHide={() => setVisible(false)}>
        <div className="flex flex-column gap-2 mb-4">
          <label htmlFor="name">Name</label>
          <InputText
            id="name"
            maxLength={20}
            className={isError && name.trim().length < 1 && 'p-invalid'}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {isError && name.trim().length < 1 && <small className="p-error">Name is required</small>}
        </div>
        <div className="flex flex-column gap-2 mb-4">
          <label htmlFor="expirationDate">Expiration Date</label>
          <Calendar
            id="expirationDate"
            value={expirationDate}
            className={isError && expirationDate === null && 'p-invalid'}
            onChange={(e) => setExpirationDate(e.value)}
            showIcon
          />
          {isError && expirationDate === null && (
            <small className="p-error">Expiration Date is required</small>
          )}
        </div>
        <div className="flex flex-column gap-2 mb-4">
          <label htmlFor="openingDate">Opened on</label>
          <Calendar
            id="openingDate"
            value={openedOn}
            className={isError && openedOn === null && 'p-invalid'}
            onChange={(e) => setOpenedOn(e.value)}
            showIcon
          />
          {isError && openedOn === null && (
            <small className="p-error">Opening Date is required</small>
          )}
        </div>
        <Button label="Submit" onClick={handleSubmit} />
      </Dialog>
    </>
  );
};

export default AddMedicationToHomekitForm;
