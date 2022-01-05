import { useState } from "react";
import { useEffect } from "react";
import {
  Flex,
  Box,
  Icon,
  Spinner,
  Select,
  Button,
  filter,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilteredData } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const searchProperties = (filterValues) => {};
  return (
    <Flex bg="gray.100" justifyContent="center" p="4" flexWrap="wrap">
      {filters.map((filter) => {
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>;
      })}
    </Flex>
  );
};
export default SearchFilters;
