/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";

const FilterBox = ({ value, handleSlider, length, setTags }) => {
  const [items, setItems] = useState([
    { id: 1, title: "Sightseeing", checked: false },
    { id: 2, title: "Day Tour", checked: false },
    { id: 3, title: "Marine Drive", checked: false },
    { id: 4, title: "Kid Friendly", checked: false },
    { id: 5, title: "Private Day Trips", checked: false },
    { id: 6, title: "Entertainment Packages", checked: false },
    { id: 7, title: "Half Day Tours", checked: false },
    { id: 8, title: "Attraction Tickets", checked: false },
    { id: 9, title: "Outdoor Activities", checked: false },
    { id: 10, title: "Long Drive", checked: false },
    { id: 11, title: "Temple", checked: false },
    { id: 12, title: "Theme Parks", checked: false },
    { id: 13, title: "Nightlife", checked: false },
    { id: 14, title: "Fishing Tours", checked: false },
    { id: 15, title: "Water Parks", checked: false },
    { id: 16, title: "Family friendly", checked: false },
    { id: 17, title: "Eco Tours", checked: false },
    { id: 18, title: "Road Trip", checked: false },
    { id: 19, title: "Hiking & Camping", checked: false },
    { id: 20, title: "New Years", checked: false },
    { id: 21, title: "Boat Rental", checked: false },
  ]);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  useEffect(() => {
    const checkedItemTitles = items
      .filter((item) => item.checked)
      .map((item) => item.title)
      .join(",");
    if (checkedItemTitles !== "") {
      setTags(`&tags.title=${checkedItemTitles}`);
    } else {
      setTags("");
    }
  }, [items, setTags]);

  return (
    <div className="text-secondary">
      <div className="text-brand__font__size__base font-brand__font__semibold p-4">
        Destination:{" "}
        <span className="text-brand__detail__text">{length} places found</span>
      </div>

      <div className="text-brand__font__size__md  font-brand__font__semibold py-2 border-b p-4">
        <h6>Filter By</h6>
      </div>

      <div>
        <div className="p-4">
          <h6 className="font-brand__font__semibold">Price Range</h6>
          <div className="mt-2">
            <RangeSlider
              min={5000}
              max={100000}
              step={10}
              defaultValue={value}
              onInput={handleSlider}
              className="h-1 range-slider-ab"
            />
          </div>
          <div className="w-full flex justify-between pt-2 text-brand__font__size__sm">
            <span className="text-brand__detail__text">BDT {value[0]}</span>
            <span className="text-brand__detail__text">BDT {value[1]}</span>
          </div>
        </div>

        <div className="py-5 px-4 border-t">
          <h2 className="font-brand__font__bold">Tags</h2>
          <div className="overflow-y-auto">
            {items.map((item) => (
              <div key={item?.id}>
                <label className="text-brand__font__size__sm text-brand__detail__text my-1.5 block">
                  <input
                    type="checkbox"
                    checked={item?.checked}
                    onChange={() => handleCheckboxChange(item?.id)}
                    className="peer relative h-3 w-3 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-checkbox__filter__bg after:bg-[length:26px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-secondary focus:outline-none"
                  />{" "}
                  {item?.title}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
