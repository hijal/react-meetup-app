import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetUpPage() {
  const history = useHistory();

  function addMeetUpHandler(data) {
    // console.log(data);
    fetch('https://meetup-app-75125-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => history.replace('/'));
  }
  return (
    <div>
      <NewMeetupForm onAddMeetupData={addMeetUpHandler} />
    </div>
  );
}

export default NewMeetUpPage;
