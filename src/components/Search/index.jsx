/* eslint-disable react/prop-types */
import { GrSearch } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Button from "../UI/Button";
import Autosuggest from "react-autosuggest";
import { useState } from "react";
import axios from "../../api/axios";

const theme = {
  input: {
    width: "100%",
    border: "0",
    outline: "0",
    padding: "0 6px",
    fontSize: "16px",
    backgroundColor: "white",
  },
  suggestionsContainerOpen: {
    position: "absolute",
    top: "48px",
    left: "0",
    right: "0",
    maxHeight: "450px",
    overflowY: "auto",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "25px 0",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px 20px",
    fontSize: "15px",
  },
  suggestionHighlighted: {
    backgroundColor: "#EEEEEE",
  },
};

const Search = ({
  firstDivStyles,
  secondDivStyles,
  setLocation,
  handleNavigate,
}) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [y, setY] = useState(false);

  const getSuggestionValue = (suggestion) => {
    setLocation(suggestion);
    return suggestion.title;
  };

  const renderSuggestion = (suggestion) => {
    return (
      <div>
        <div className="flex items-center gap-x-2">
          <div className="border flex justify-center items-center w-8 h-8 rounded-full shadow-sm">
            <GrLocation size={16} />
          </div>
          <div className="pl-1">
            <p className="capitalize">{suggestion.title}</p>
          </div>
        </div>
      </div>
    );
  };

  const onSuggestionsFetchRequested = async ({ value }) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `/search/auto-suggestion?searchTerm=${value}`
      );
      setSuggestions(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
    setY(false);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onFocusGetSuggestions = async () => {
    setLoading(true);
    setY(true);
    try {
      const { data } = await axios.get("/search/auto-suggestion");
      setSuggestions(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const inputProps = {
    placeholder: "Places to go...",
    value,
    onChange: onChange,
    onFocus: onFocusGetSuggestions,
    onBlur: () => {
      setY(false);
    },
  };

  return (
    <div className={`${firstDivStyles} m-auto w-full relative`}>
      <div
        className={`${secondDivStyles} relative rounded-xl w-full border border-primary bg-white flex items-center justify-center`}
      >
        <div className="p-3 border-r">
          {loading ? (
            <AiOutlineLoading3Quarters
              size={22}
              className="animate-spin text-primary"
            />
          ) : (
            <GrSearch size={22} className="text-primary" />
          )}
        </div>
        <div className="w-full">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            alwaysRenderSuggestions={y}
            inputProps={inputProps}
            theme={theme}
          />
        </div>
        <div>
          <Button
            disabled={value.length === 0}
            onClick={handleNavigate}
            className="bg-primary hover:bg-secondary duration-300 rounded-xl py-2.5 px-5 mr-0.5 text-brand__white"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
