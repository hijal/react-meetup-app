import MeetUpItems from './MeetUpItems';
import classes from './MeetUpItems.module.css';

function MeetUpList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetUpItems
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          description={meetup.description}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetUpList;
