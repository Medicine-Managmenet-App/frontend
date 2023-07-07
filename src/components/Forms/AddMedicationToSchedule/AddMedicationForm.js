'use client';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addMedicationToSchedule } from '@/redux/slices/medication-schedule-slice';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';

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
    dosagePerDay: null,
    dosageHours: [],
    takenAt: null,
    additionDate: null
  });
  const toast = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addMedicationToSchedule(formData));
    setVisible(false);
    console.log(formData);
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
      dosagePerDay: null,
      dosageHours: [],
      takenAt: null,
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
      return <FirstPage formData={formData} setFormData={setFormData} setPage={setPage} />;
    } else if (page === 1) {
      return <SecondPage formData={formData} setFormData={setFormData} setPage={setPage} />;
    } else if (page === 2) {
      return <ThirdPage formData={formData} setFormData={setFormData} setPage={setPage} />;
    } else if (page === 3) {
      return (
        <>
          <FourthPage formData={formData} setFormData={setFormData} setPage={setPage} />
          <div className="w-full flex justify-content-between">
            <Button
              className="pi pi-angle-left"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            />
            <Button
              label="Submit"
              style={{ justifySelf: 'end' }}
              disabled={formData.dosageHours.length < formData.dosagePerDay}
              onClick={handleSubmit}
            />
          </div>
        </>
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
