// src/components/CustomDatePicker.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarDaysIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getMonth, getYear } from 'date-fns';

// Import the required CSS files
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';  

const CustomDatePicker = ({ selectedDate, setSelectedDate }) => {
  const [tempDate, setTempDate] = useState(selectedDate);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setTempDate(selectedDate || new Date());
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleOK = () => {
    setSelectedDate(tempDate);
    setIsOpen(false);
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref} className="flex items-center bg-transparent focus:outline-none w-full text-gray-700">
      <CalendarDaysIcon className="h-5 w-5 text-gray-500 mr-2" />
      {value || 'Select Date'}
    </button>
  ));
  
  const CustomHeader = ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => {
    const years = Array.from({ length: getYear(new Date()) + 10 - 1990 }, (_, i) => 1990 + i);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
      <div className="calendar-header">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        
        <div>
          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    );
  };

  return (
    <DatePicker
      selected={tempDate}
      onChange={(date) => setTempDate(date)}
      onCalendarOpen={handleOpen}
      onCalendarClose={() => setIsOpen(false)}
      open={isOpen}
      customInput={<CustomInput onClick={handleOpen} value={selectedDate ? selectedDate.toLocaleDateString() : ''} />}
      renderCustomHeader={CustomHeader}
      formatShortWeekday={(name) => name.substring(0, 1)}
    >
      <div className="calendar-footer">
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button className="ok-btn" onClick={handleOK}>OK</button>
      </div>
    </DatePicker>
  );
};

export default CustomDatePicker;
