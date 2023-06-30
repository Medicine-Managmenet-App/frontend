'use client';

import { useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { format } from 'date-fns';

import AddMedicationToHomekitForm from '../Forms/AddMedicationToHomekit/AddMedicationForm';
import { removeMedicationFromKit } from '@/redux/slices/home-medication-kit-slice';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { confirmDialog } from 'primereact/confirmdialog';

const MedicationTable = () => {
  const medicationKit = useSelector((state) => state.medicationKit);
  const [data, setData] = useState(medicationKit);
  const [selectedMedications, setSelectedMedications] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(medicationKit);
  }, [medicationKit]);

  const handleDelete = () => {
    selectedMedications.forEach((medication) => {
      dispatch(removeMedicationFromKit(medication));
    });
    showSuccess();
    setSelectedMedications([]);
  };

  const confirmDelete = () => {
    confirmDialog({
      message: 'Do you want to delete this medication?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: handleDelete
    });
  };

  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Medicine removed from homekit',
      life: 2500
    });
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Manage Medications</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  return (
    <div className="mt-7 px-2">
      <Toast ref={toast} />
      <div className="flex gap-2 w-12 xl:w-2 mb-3">
        <AddMedicationToHomekitForm />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          className="w-full"
          disabled={selectedMedications.length < 1}
          onClick={confirmDelete}
        />
      </div>
      <DataTable
        header={header}
        dataKey="id"
        selection={selectedMedications}
        onSelectionChange={(e) => {
          setSelectedMedications(e.value);
        }}
        value={data}
        removableSort
        sortMode="multiple"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10]}
        globalFilter={globalFilter}>
        <Column selectionMode="multiple" exportable={false} className="w-1rem" />
        <Column field="name" header="Name" sortable />
        <Column
          field="expirationDate"
          header="Expiration date"
          sortable
          body={(rowData) => format(new Date(rowData.expirationDate), 'dd/MM/yyyy')}
        />
        <Column
          field="openedOn"
          header="Opened on"
          sortable
          body={(rowData) => format(new Date(rowData.openedOn), 'dd/MM/yyyy')}
        />
      </DataTable>
    </div>
  );
};

export default MedicationTable;
