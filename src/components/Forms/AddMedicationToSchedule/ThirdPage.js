import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

const ThirdPage = ({ formData, setFormData, setPage }) => {
  return (
    <>
      <div className="flex flex-column gap-2 mb-4">
        <label htmlFor="dosagePerDay">How many dosages per day?</label>
        <InputNumber
          inputId="dosagePerDay"
          min={1}
          max={5}
          value={formData.dosagePerDay ? formData.dosagePerDay : 1}
          onChange={(event) => setFormData({ ...formData, dosagePerDay: event.value })}
          showButtons
          buttonLayout="horizontal"
          step={1}
          decrementButtonClassName="p-button-danger"
          incrementButtonClassName="p-button-success"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
        />
      </div>
      <div className="w-full flex justify-content-between">
        <Button
          className="pi pi-angle-left"
          onClick={() => {
            if (formData.isEveryday) {
              setPage((currPage) => currPage - 2);
            } else {
              setPage((currPage) => currPage - 1);
            }
          }}
        />
        <Button
          className="pi pi-angle-right"
          style={{ justifySelf: 'end' }}
          disabled={formData.dosagePerDay < 1}
          onClick={() => {
            setFormData({ ...formData, additionDate: new Date() });
            setPage((currPage) => currPage + 1);
          }}
        />
      </div>
    </>
  );
};

export default ThirdPage;
