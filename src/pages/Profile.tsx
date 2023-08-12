import { useAppSelector } from '../app/store';

function Profile() {
  const userName = useAppSelector((state) => state.auth.token);

  return (
    <div>
      Profile of user {userName}
      <br />
    </div>
  );
}

export default Profile;
