import React from "react";
import UserItems from "./UserItems/UserItems";
import { StyledWrapper } from "./UserList.styled";
import { User } from "../../../utils/types/types";

const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <>
      {users && (
        <StyledWrapper>
          {users.map(({ ...user }) => (
            <UserItems key={user.id} {...user} />
          ))}
        </StyledWrapper>
      )}
    </>
  );
};

export default React.memo(UserList);
