'use client';

import { Dropdown } from 'primereact/dropdown';

const FirstPage = ({ formData, setFormData }) => {
  const familyMembers = [
    { name: 'John Smith', code: 1 },
    { name: 'Ann Smith', code: 2 },
    { name: 'Mark Smith', code: 3 },
    { name: 'Emily Smith', code: 4 },
    { name: 'John Smith jr', code: 5 }
  ];
  const medicines = [
    { name: 'Apap', code: 1 },
    { name: 'Antibiotic', code: 2 },
    { name: 'Ibuprofen', code: 3 },
    { name: 'Nurofen', code: 4 },
    { name: 'Prosenazol', code: 5 }
  ];
  const dosageType = [
    { name: 'Pill(s)', code: 1 },
    { name: 'Milligrams', code: 2 },
    { name: 'Ihales', code: 3 },
    { name: 'Applications', code: 4 }
  ];

  return (
    <div className="flex flex-column justify-content-center my-4">
      <div className="w-11 md:w-8 mb-5">
        <label htmlFor="familyMember">Who will be taking this medicine?</label>
        <Dropdown
          inputId="familyMember"
          options={familyMembers}
          value={formData.familyMemberId}
          onChange={(event) => setFormData({ ...formData, familyMemberId: event.target.value })}
          optionLabel="name"
          filter
          placeholder="Select a family member"
          className="w-full mt-3"
        />
      </div>
      <div className="w-11 md:w-8">
        <label htmlFor="medicine">What medicine will they be taking?</label>
        <Dropdown
          inputId="medicine"
          options={medicines}
          value={formData.medicineName}
          onChange={(event) => setFormData({ ...formData, medicineName: event.target.value })}
          optionLabel="name"
          filter
          placeholder="Select a medicine"
          className="w-full mt-3"
        />
      </div>
    </div>
  );
};

export default FirstPage;
