import { useState } from 'react';

import { InputNumber } from 'primereact/inputnumber';

const SecondPage = ({ formData, setFormData, page, setPage }) => {

  const [isError, setIsError] = useState(false);


  const secondPageDisplay = () => {
    if (formData.scheduleType === 'Everyday') {
      setPage(2);
    } else if (formData.scheduleType === 'Every X days') {
      return (
        <div className="flex flex-column gap-2 mb-4">
          <label htmlFor="dayIntervals">Set day intervals</label>
          <InputNumber 
            inputId="horizontal-buttons" 
            min={1}
            max={7}
            value={formData.dayIntervals}
            onChange={(event) => setFormData({ ...formData, dayIntervals: event.value })}
            showButtons buttonLayout="horizontal" 
            step={1}
            decrementButtonClassName="p-button-danger" 
            incrementButtonClassName="p-button-success" 
            incrementButtonIcon="pi pi-plus" 
            decrementButtonIcon="pi pi-minus"
             />
          {isError && formData.dayIntervals === null && (
            <small className="p-error">This field is required</small>
          )}
        </div>
      );
    } else if (formData.scheduleType === 'Specific days of the week') {
    }
  };

  return <>{secondPageDisplay()}</>;
};

export default SecondPage;


