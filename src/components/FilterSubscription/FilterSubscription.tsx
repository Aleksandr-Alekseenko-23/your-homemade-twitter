import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { filterUsersByStatusSubscription } from "../../redux/slice";
import { Filter } from "../../utils/types/types";
import { selectFilterUsers } from "../../redux/selectors";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const FilterSubscription: React.FC = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector(selectFilterUsers);

  const handleFilterChange = (filterValue: Filter) => {
    dispatch(filterUsersByStatusSubscription(filterValue));
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={filter}
      bsPrefix="custom-class"
    >
      <Dropdown.Item onClick={() => handleFilterChange("all")}>
        All
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleFilterChange("follow")}>
        Follow
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleFilterChange("following")}>
        Following
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default FilterSubscription;
