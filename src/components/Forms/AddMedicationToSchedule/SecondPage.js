import { useState } from 'react';

import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';

const SecondPage = ({ formData, setFormData, setPage, handleSubmit }) => {
  const [selectedDays, setSelectedDays] = useState(null);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const secondPageDisplay = () => {
    if (formData.isDayIntervals) {
      return (
        <div className="flex flex-column gap-2 mb-4">
          <label htmlFor="dayIntervals">Set day intervals</label>
          <InputNumber
            inputId="dayIntervals"
            min={1}
            max={7}
            value={formData.dayIntervals ? formData.dayIntervals : 1}
            onChange={(event) => setFormData({ ...formData, dayIntervals: event.value })}
            showButtons
            buttonLayout="horizontal"
            step={1}
            decrementButtonClassName="p-button-danger"
            incrementButtonClassName="p-button-success"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
      );
    } else if (formData.isSpecificDays) {
      return (
        <div className="flex flex-column gap-2 mb-4">
          <label htmlFor="specificDays">Select days of the week</label>
          <MultiSelect
            inputId="specificDays"
            value={selectedDays}
            options={days}
            maxSelectedLabels={3}
            onChange={(event) => {
              setSelectedDays(event.value);
              const newSpecificDays = {
                Monday: false,
                Tuesday: false,
                Wednesday: false,
                Thursday: false,
                Friday: false,
                Saturday: false,
                Sunday: false
              };

              event.value.forEach((day) => {
                newSpecificDays[day] = true;
              });

              setFormData({
                ...formData,
                specificDays: newSpecificDays
              });
            }}
          />
        </div>
      );
    }
  };

  return (
    <>
      <div>{secondPageDisplay()}</div>
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
          disabled={formData.isSpecificDays && selectedDays === null}
          onClick={() => {
            handleSubmit();
          }}
        />
      </div>
    </>
  );
};

export default SecondPage;
