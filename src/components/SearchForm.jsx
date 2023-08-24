import React, { useEffect, useState } from "react";

// For Search Form
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "../UI/Input";

const SearchForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [categories, setCategories] = useState([]);
  // setup all the inputs.
  const { inputHandler: idInputHandler, input: idInput } = Input({
    label: "ID",
    validator: () => {
      return { isValid: true, helperText: "Error" };
    },
  });

  const { inputHandler: codeInputHandler, input: codeInput } = Input({
    label: "Code",
    validator: () => {
      return { isValid: true, helperText: "Error" };
    },
  });

  const { inputHandler: nameInputHandler, input: nameInput } = Input({
    label: "Name",
    validator: () => {
      return { isValid: true, helperText: "Error" };
    },
  });

  const { inputHandler: categoryInputHandler, input: categoryInput } = Input({
    type: "select",
    options: categories,
    label: "Categories",
    validator: () => {
      return { isValid: true, helperText: "Error" };
    },
  });

  // fetch all the categories.
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/categories");
      const responseData = await response.json();

      setCategories(responseData.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <form className="row">
          <div className="col-2">{idInput}</div>
          <div className="col-2">{codeInput}</div>
          <div className="col-3">{nameInput}</div>
          <div className="col-3">{categoryInput}</div>
          <div className="col-2">
            <button
              className="btn btn-primary"
              style={{
                height: "3.5rem",
                width: "7.5rem",
              }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
