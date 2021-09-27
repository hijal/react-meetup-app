import { useState, useEffect } from 'react';

import MeetUpList from '../components/meetups/MeetUpList';

function AllMeetUpPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://meetup-app-75125-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <MeetUpList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetUpPage;
