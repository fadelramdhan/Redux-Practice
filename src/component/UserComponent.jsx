import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/slices/userSlice';

function UserComponent() {
  const userData = useSelector((state) => state.user.data);
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      {userData.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserComponent;
