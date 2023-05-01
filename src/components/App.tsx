import React, { useEffect } from "react";
import AppRoutes from "../routes/Routes";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { fetchUsers } from "../redux/operations";
import { selectUsers } from "../redux/selectors";

const App: React.FC = () => {
  const { users, filter } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (users.length !== 0) {
      return;
    }
    dispatch(fetchUsers({ page: 1, limit: 9, filter }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppRoutes />;
};

export default App;
