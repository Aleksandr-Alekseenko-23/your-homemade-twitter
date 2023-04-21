import React, { useEffect } from "react";
import { Alert, AlertTitle } from "@mui/material";
import UserList from "../../components/User/UserList/UserList";
import Section from "../../components/Common/Section/Section";
import Container from "../../components/Common/Container/Container";
import Loader from "../../components/Common/Loader/Loader";
import Button from "../../components/Common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  selectFilteredUsers,
  selectIsLoading,
  selectError,
  selectPage,
  selectHasMore,
} from "../../redux/selectors";
import { fetchUsers } from "../../redux/operations";
import { Wrapper } from "./TweetsPage.styled";
import { incrementPage } from "../../redux/slice";

const TweetsPage: React.FC = () => {
  const users = useAppSelector(selectFilteredUsers);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const currentPage = useAppSelector(selectPage);
  const hasMore = useAppSelector(selectHasMore);

  const dispatch = useAppDispatch();

  const handleLoadMore = (): void => {
    dispatch(incrementPage());
  };

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, limit: 9 }));
  }, [currentPage, dispatch]);

  return (
    <>
      <Section>
        <Container>
          <>
            {isLoading && <Loader />}
            {error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            )}
            {!error && !isLoading && users.length === 0 && (
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Users not found
              </Alert>
            )}
            {users.length > 0 && <UserList users={users} />}
            {hasMore && (
              <Wrapper>
                <Button
                  onClick={handleLoadMore}
                  children="Load More"
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                />
              </Wrapper>
            )}
          </>
        </Container>
      </Section>
    </>
  );
};

export default TweetsPage;
