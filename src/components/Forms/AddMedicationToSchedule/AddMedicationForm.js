'use client';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

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
    medication: '',
    medForm: '',
    dosage: null,
    scheduleType: '',
    dayIntervals: null
  });
  const toast = useRef(null);
  const dispatch = useDispatch();

  const today = new Date();

  const resetFormValues = () => {
    setFormData({ owner: {}, medication: '', medForm: '', dosage: null, scheduleType: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      gender.length === 0 ||
      dateOfBirth === null ||
      (isChild && weight === null)
    ) {
      setIsError(true);
    } else {
      dispatch(
        addFamilyMember({
          id: Math.floor(Math.random() * 900) + 100,
          name: name.trim(),
          isChild: isChild,
          dateOfBirth: dateOfBirth,
          weight: weight,
          isMale: isMale
        })
      );
      showSuccess();
      resetFormValues();
      setVisible(false);
    }
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
      return <FirstPage formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <SecondPage formData={formData} setFormData={setFormData} page={page} setPage={setPage} />
      );
    } else if (page === 3) {
      return;
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
        <div className="w-full flex justify-content-between">
          <Button
            className="pi pi-angle-left"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          />
          <Button
            className={page < 3   && 'pi pi-angle-right'}
            label={page === 3 && 'Submit'}
            style={{ justifySelf: 'end' }}
            disabled={
              (page === 0 && formData.owner.name?.trim().length === 0 ||
              formData.medication === '' ||
              formData.medForm === '' ||
              formData.dosage === null ||
              formData.scheduleType === '')
            }
            onClick={() => {
              if (page === 3) {
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          />
        </div>
      </Dialog>
    </>
  );
};

export default AddMedicationToScheduleForm;
