import React, { useState } from 'react';
import Calendar from 'react-calendar';

function EvenentCalender() {

    const allMonthValues = [
        "يناير",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];


    const [date, setDate] = useState(new Date());

    const dateValue = [new Date(2023, 0, 1), new Date(2022, 7, 1)]
    return (
        <div>
            {/* <h2 className="calender-details">{date.toDateString()}</h2> */}
            <Calendar onChange={setDate} value={date} selectRange={false} />

            {date.length > 0 ? (
                <p className='text-center'>
                    <span className='bold'>Start:</span>{' '}
                    {date[0].toDateString()}
                    &nbsp;|&nbsp;
                    <span className='bold'>End:</span> {date[1].toDateString()}
                </p>
            ) : (
                <p className='text-center'>
                    <span className='bold'>Default selected date:</span>{' '}
                    {date.toDateString()}
                </p>
            )}
        </div>


    );
}

export default EvenentCalender;