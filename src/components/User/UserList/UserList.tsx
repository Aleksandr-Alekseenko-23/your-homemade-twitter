import React, { useMemo } from "react";
import UserItems from "./UserItems/UserItems";
import { StyledWrapper, Wrapper } from "./UserList.styled";
import { User } from "../../../utils/types/types";
import ButtonGoBack from "../../Common/ButtonGoBack/ButtonGoBack";
import FilterSubscription from "../../FilterSubscription/FilterSubscription";

const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  const memoizedUsers = useMemo(() => users, [users]);
  return (
    <>
      {memoizedUsers && (
        <>
          <Wrapper>
            <ButtonGoBack />
            <FilterSubscription />
          </Wrapper>
          <StyledWrapper>
            {memoizedUsers.map(({ ...user }) => (
              <UserItems key={user.id} {...user} />
            ))}
          </StyledWrapper>
        </>
      )}
    </>
  );
};

export default React.memo(UserList);
