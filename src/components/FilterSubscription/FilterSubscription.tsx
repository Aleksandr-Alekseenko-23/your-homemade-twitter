import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { filterUsersByStatusSubscription, resetUsers } from "../../redux/slice";
import { Filter, FilterProps } from "../../utils/types/types";
import { selectUsers } from "../../redux/selectors";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const FilterSubscription: React.FC<FilterProps> = ({ getValueFilter }) => {
  const dispatch = useAppDispatch();

  const { filter } = useAppSelector(selectUsers);

  const handleFilterChange = (filterValue: Filter) => {
    if (filter !== filterValue) {
      getValueFilter();
      dispatch(resetUsers());
      dispatch(filterUsersByStatusSubscription(filterValue));
    }
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={filter}
      bsPrefix="custom-class"
    >
      <Dropdown.Item onClick={() => handleFilterChange("All")}>
        All
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleFilterChange("Follow")}>
        Follow
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleFilterChange("Followings")}>
        Followings
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default FilterSubscription;
