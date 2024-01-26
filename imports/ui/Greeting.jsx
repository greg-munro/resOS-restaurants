import React from 'react';

const Greeting = () => {
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const timeOfDayGreeting = getTimeOfDay();


  return (
    <>
      <h2 className='greeting'>{timeOfDayGreeting} 😊</h2>
    </>
  );
};

export default Greeting;

