import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="user-card" onClick={() => navigate(`/post/${user.id}`)}>
      <img className="avatar" src="src\components\car3.jpg" alt="user" />
      <div className="info">
        <h3>{user.name}</h3>
        <p>HorsePower: {user.email}</p>
        <p>Drive-Train: {user.username}</p>
        <p>Mpg: {user.phone}</p>
      </div>
    </div>
  );
};
export default UserCard;
