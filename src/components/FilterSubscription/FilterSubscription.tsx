import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { filterUsersByStatusSubscription } from "../../redux/slice";
import { Filter } from "../../utils/types/types";
import { selectFilterUsers } from "../../redux/selectors";
import {
  StyledDropdownButton,
  StyledDropdownItem,
} from "./FilterSubscription.styled";

const FilterSubscription: React.FC = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector(selectFilterUsers);

  const handleFilterChange = (filterValue: Filter) => {
    dispatch(filterUsersByStatusSubscription(filterValue));
  };

  return (
    <StyledDropdownButton id="dropdown-basic-button" title={filter}>
      <StyledDropdownItem onClick={() => handleFilterChange("all")}>
        All
      </StyledDropdownItem>
      <StyledDropdownItem onClick={() => handleFilterChange("follow")}>
        Follow
      </StyledDropdownItem>
      <StyledDropdownItem onClick={() => handleFilterChange("following")}>
        Following
      </StyledDropdownItem>
    </StyledDropdownButton>
  );
};

export default FilterSubscription;
