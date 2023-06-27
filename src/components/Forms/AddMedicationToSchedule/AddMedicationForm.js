'use client';

import { useState } from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import { Button } from 'primereact/button';

const AddMedicationForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    medicineName: '',
    hours: [],
    dosage: '',
    familyMemberId: null
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstPage formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SecondPage formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      <div>{PageDisplay()}</div>
      <div className="w-full flex justify-content-between">
        <Button
          className="pi pi-angle-left"
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        />
        <Button
          className={page === 0 && 'pi pi-angle-right'}
          label={page === 1 && 'Submit'}
          style={{ justifySelf: 'end' }}
          onClick={() => {
            if (page === 1) {
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default AddMedicationForm;
