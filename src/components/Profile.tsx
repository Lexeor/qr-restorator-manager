import React from 'react';
import { useAppSelector } from '../app/store';

type Props = {};

function Profile({}: Props) {
  const userName = useAppSelector((state) => state.auth.name);

  return <div>Profile of user {userName}</div>;
}

export default Profile;
