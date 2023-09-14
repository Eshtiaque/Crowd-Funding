import SingleNotification from "./SingleNotification";
import useNotification from "../../../hooks/useNotification";


const Notifications = () => {
  // const [notification, setNotification] = useState([])

  const [notification] = useNotification();

  return (
    <div className="mt-32 text-white">
      <div>
        {
          notification.map((item, index) => <SingleNotification
            key={item._id}
            item={item}
            index={index}
          ></SingleNotification>)
        }
      </div>
    </div>
  );
};

export default Notifications;