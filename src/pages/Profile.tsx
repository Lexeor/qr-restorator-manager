import { useAppSelector } from '../app/store';
import LogoutButton from '../components/LogoutButton';

function Profile() {
  const userName = useAppSelector((state) => state.auth.token);

  return (
    <div>
      Profile of user {userName}
      <br />
      <LogoutButton />
    </div>
  );
}

export default Profile;
