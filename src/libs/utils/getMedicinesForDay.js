export const getMedicinesForDay = (scheduledMedicines, date, member) => {
  const dayOfWeek = date.getDay();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[dayOfWeek];

  let medicinesByTime = [];

  scheduledMedicines
    .filter((item) => item.owner.name === member.name)
    .filter((item) => {
      if (item.isEveryday) {
        return true;
      } else if (item.isDayIntervals) {
        const startDate = new Date(item.additionDate);
        startDate.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);
        const daysDiff = Math.floor((date - startDate) / (1000 * 60 * 60 * 24));
        return daysDiff % item.dayIntervals === 0;
      } else if (item.isSpecificDays) {
        return item.specificDays[dayName];
      } else {
        return false;
      }
    })
    .forEach((item) => {
      const time = new Date(item.dosageHour).toLocaleTimeString();
      const medicine = {
        ...item,
        time,
        name: item.medication.name,
        dosage: `${item.dosage} ${item.medForm}`
      };

      medicinesByTime.push(medicine);
    });
  return medicinesByTime;
};
