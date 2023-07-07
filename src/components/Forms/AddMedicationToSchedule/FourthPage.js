import { useEffect } from 'react';

import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const FourthPage = ({ formData, setFormData }) => {
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      dosageHours: Array(formData.dosagePerDay).fill(new Date())
    }));
  }, [formData.dosagePerDay, setFormData]);

  return (
    <>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="dosageHours" className="mb-4">
          Select time of each dosage
        </label>
        {formData.dosageHours.map((time, index) => (
          <div key={index} className="flex flex-column mb-3">
            <label className="mb-2 text-sm">{`Dosage ${index + 1}`}</label>
            <Calendar
              key={index}
              value={time}
              inputId="dosagePerDay"
              onChange={(e) => {
                let newDosageHours = [...formData.dosageHours];
                newDosageHours[index] = e.value;
                setFormData({ ...formData, dosageHours: newDosageHours });
              }}
              timeOnly
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FourthPage;
