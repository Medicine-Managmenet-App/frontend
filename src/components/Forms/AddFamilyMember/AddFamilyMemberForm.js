'use client';

import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';
import { differenceInYears } from 'date-fns';

import { addFamilyMember } from '@/redux/slices/family-slice';

import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';

const AddFamilyMemberForm = () => {
  const [visible, setVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [isChild, setIsChild] = useState(false);
  const [isMale, setIsMale] = useState(false);
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [weight, setWeight] = useState(null);
  const toast = useRef(null);
  const dispatch = useDispatch();

  const today = new Date();
  const isMaleOptions = ['Male', 'Female'];

  const resetFormValues = () => {
    setIsError(false);
    setName('');
    setIsChild(false);
    setIsMale(false);
    setGender('');
    setDateOfBirth(null);
    setWeight(null);
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
          id: nanoid(10),
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
      detail: 'Member added to family',
      life: 2500
    });
  };

  return (
    <>
      <Button
        label="Add family member"
        icon="pi pi-plus"
        className="mb-3"
        onClick={() => setVisible(true)}
      />
      <Toast ref={toast} />
      <Dialog
        header="Add family member"
        visible={visible}
        className="w-11 md:w-3 fadein animation-duration-300"
        onHide={() => {
          setVisible(false);
          resetFormValues();
        }}>
        <div className="flex flex-column gap-2 mb-4">
          <label htmlFor="name">Name</label>
          <InputText
            id="name"
            maxLength={30}
            className={isError && name.trim().length < 1 && 'p-invalid'}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {isError && name.trim().length < 1 && <small className="p-error">Name is required</small>}
        </div>
        <div className="flex flex-column gap-2 mb-4">
          <label htmlFor="isMale">Gender</label>
          <Dropdown
            id="isMale"
            className={isError && gender.length === 0 && 'p-invalid'}
            value={gender}
            options={isMaleOptions}
            onChange={(e) => {
              setGender(e.value);
              setIsMale(e.value === 'Male' ? true : false);
            }}
          />
          {isError && gender.length === 0 && <small className="p-error">Gender is required</small>}
        </div>
        <div className="flex flex-column gap-2 mb-4">
          <label htmlFor="age">Date of birth</label>
          <Calendar
            id="age"
            showIcon
            className={isError && dateOfBirth === null && 'p-invalid'}
            value={dateOfBirth}
            maxDate={today}
            onChange={(e) => {
              setDateOfBirth(e.value);
              if (differenceInYears(today, e.value) < 18) {
                setIsChild(true);
              } else {
                setIsChild(false);
              }
            }}
          />
          {isError && dateOfBirth === null && (
            <small className="p-error">Date of birth is required</small>
          )}
        </div>
        <div>
          {isChild && (
            <div className="flex flex-column gap-2 mb-4">
              <p className="font-bold text-xs mb-2">
                Looks like this member is underage, please provide weight
              </p>
              <label htmlFor="weight">Weight</label>
              <InputNumber
                id="weight"
                maxFractionDigits={2}
                min={1}
                max={150}
                className={isError && isChild && weight === null && 'p-invalid'}
                value={weight}
                onValueChange={(e) => {
                  setWeight(e.target.value);
                }}
              />
              {isError && isChild && weight === null && (
                <small className="p-error">{`For children, attribute "weight" is required`}</small>
              )}
            </div>
          )}
        </div>
        <Button label="Submit" onClick={handleSubmit} />
      </Dialog>
    </>
  );
};

export default AddFamilyMemberForm;
