'use client';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addMedicationToSchedule } from '@/redux/slices/medication-schedule-slice';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const AddMedicationToScheduleForm = () => {
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    owner: {},
    medication: {},
    medForm: '',
    dosage: null,
    dosageHour: null,
    scheduleType: '',
    isEveryday: false,
    isDayIntervals: false,
    dayIntervals: null,
    isSpecificDays: false,
    specificDays: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false
    },
    additionDate: null,
    id: null
  });
  const toast = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addMedicationToSchedule(formData));
    console.log(formData);
    setVisible(false);
    resetFormValues();
    showSuccess();
  };

  const resetFormValues = () => {
    setFormData({
      owner: {},
      medication: {},
      medForm: '',
      dosage: null,
      isEveryday: false,
      isDayIntervals: false,
      dayIntervals: null,
      isSpecificDays: false,
      specificDays: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false
      },
      additionDate: null
    });
    setTimeout(() => {
      setPage(0);
    }, '500');
  };

  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Medication added to schedule',
      life: 2500
    });
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <FirstPage
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
          handleSubmit={handleSubmit}
        />
      );
    } else if (page === 1) {
      return (
        <SecondPage
          formData={formData}
          setFormData={setFormData}
          setPage={setPage}
          handleSubmit={handleSubmit}
        />
      );
    }
  };

  return (
    <>
      <Button
        label="Add medication to schedule"
        icon="pi pi-plus"
        onClick={() => setVisible(true)}
      />
      <Toast ref={toast} />
      <Dialog
        header="Add medication to schedule"
        visible={visible}
        className="w-11 md:w-3 fadein animation-duration-300"
        onHide={() => {
          setVisible(false);
          resetFormValues();
        }}>
        <div>{PageDisplay()}</div>
      </Dialog>
    </>
  );
};

export default AddMedicationToScheduleForm;
