import React, { useEffect, useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import UserList from "../../components/User/UserList/UserList";
import Section from "../../components/Common/Section/Section";
import Container from "../../components/Common/Container/Container";
import Loader from "../../components/Common/Loader/Loader";
import Button from "../../components/Common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { selectUsers } from "../../redux/selectors";
import { fetchUsers } from "../../redux/operations";
import { Wrapper, StyledWrapper } from "./TweetsPage.styled";
import { incrementPage } from "../../redux/slice";
import FilterSubscription from "../../components/FilterSubscription/FilterSubscription";
import { Filter } from "../../utils/types/types";
import ButtonGoBack from "../../components/Common/ButtonGoBack/ButtonGoBack";

const TweetsPage: React.FC = () => {
  const { users, isLoading, error, filter, page, hasMore } =
    useAppSelector(selectUsers);

  const [currentPage, setCurrentPage] = useState<number>(page);
  const [currentValueFilter, setCurrentValueFilter] = useState<Filter>(filter);

  const dispatch = useAppDispatch();

  const handleLoadMore = (): void => {
    dispatch(incrementPage());
    setCurrentPage((PrevCurrentPage) => PrevCurrentPage + currentPage);
  };

  const getValueFilter = (): void => {
    setCurrentValueFilter((PrevValue) => PrevValue);
  };

  useEffect(() => {
    if (currentValueFilter !== filter || page !== currentPage) {
      dispatch(fetchUsers({ page, limit: 9, filter }));
    }
  }, [currentPage, filter, dispatch, currentValueFilter, page]);

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
            <>
              <StyledWrapper>
                <ButtonGoBack />
                <FilterSubscription getValueFilter={getValueFilter} />
              </StyledWrapper>
              {users.length > 0 && <UserList users={users} />}
            </>
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
