/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import { Listbox } from "@headlessui/react";
import Button from "../../../../components/UI/Button";

import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Styles from "../../styles/Styles.module.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const MyContainer = ({ className, children }) => {
  return (
    <div className="absolute -top-4">
      <CalendarContainer className={className}>
        <div>{children}</div>
      </CalendarContainer>
    </div>
  );
};

const BookingCard = ({ packageDetail }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState(packageDetail?.prices[0]);
  const [travelers, setTravelers] = useState(1);
  const [totalPrice, setTotalPrice] = useState(selected?.price * travelers);
  const matchingDiscount = packageDetail?.discounts.find(
    (discount) => discount?.applicablePersons === travelers
  );
  // If no matching discount is found, use the last discount if the number of travelers is greater than or equal to its applicablePersons
  const lastDiscount =
    packageDetail?.discounts[packageDetail?.discounts.length - 1];

  const handleBooking = () => {
    const bookingData = {
      journeyDate: startDate.toDateString(),
      option: selected,
      totalPassenger: travelers,
      totalPrice: totalPrice,
      photo: packageDetail?.featuredPicture?.cloudinaryUrl,
      name: packageDetail?.name,
      area: packageDetail?.locationDetails?.area,
      country: packageDetail?.locationDetails?.country,
    };

    // Remove the existing booking cookie if it exists
    const existingBooking = Cookies.get("booking");
    if (existingBooking) {
      Cookies.remove("booking");
    }

    // Set the new booking cookie
    Cookies.set("booking", JSON.stringify(bookingData));

    // Navigate to the booking page
    return navigate("/booking");
  };

  useEffect(() => {
    if (matchingDiscount) {
      const discountedPricePerPerson =
        (selected?.price * (100 - matchingDiscount?.percentages)) / 100;
      const newTotalPrice = discountedPricePerPerson * travelers;
      setTotalPrice(newTotalPrice);
    } else if (lastDiscount && travelers >= lastDiscount?.applicablePersons) {
      const discountedPricePerPerson =
        (selected?.price * (100 - lastDiscount?.percentages)) / 100;
      const newTotalPrice = discountedPricePerPerson * travelers;
      setTotalPrice(newTotalPrice);
    } else {
      // If no matching discount or last discount applies, use the regular price
      setTotalPrice(selected?.price * travelers);
    }
  }, [
    travelers,
    selected?.price,
    matchingDiscount,
    packageDetail.discounts,
    lastDiscount,
  ]);

  const handleAddTraveler = () => {
    setTravelers((prev) => prev + 1);
  };

  const handleRemoveTraveler = () => {
    setTravelers((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="w-full md:max-w-[300px] md:ml-auto sticky top-[139px] bg-white p-3 rounded-md shadow-xl flex flex-col gap-y-3 border">
      {/* .........Journey date start......... */}
      <div className="w-full p-2 border rounded-md relative">
        <p className="text-brand__font__size__sm text-gray-600">Journey Date</p>
        <div className="text-secondary">
          <span className="text-brand__font__size__md font-brand__font__semibold">
            {new Date(startDate).toDateString()}
          </span>
        </div>
        <Button
          onClick={() => setStartDate(new Date())}
          className="absolute z-[1] top-2 right-2 hover:text-brand__dangerous"
        >
          <MdOutlineClear size={20} />
        </Button>
        <div className="absolute">
          <DatePicker
            minDate={startDate}
            onChange={(date) => setStartDate(date)}
            className={`${Styles.date__picker__input}`}
            calendarContainer={MyContainer}
          />
        </div>
      </div>
      {/* .........Journey date end......... */}

      {/* .........Select traveler start......... */}
      <div className="w-full outline-none p-2 rounded-md flex justify-between items-center text-secondary border">
        <div className="w-full">
          <h3>Total Traveler</h3>
          <span className="font-brand__font__semibold text-brand__font__size__md">
            {travelers} Person{travelers > 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex justify-end gap-x-3 w-full h-full text-white">
          <Button
            className="bg-brand__success rounded-full"
            onClick={handleAddTraveler}
          >
            <AiOutlinePlusCircle size={25} />
          </Button>
          <Button
            className="bg-brand__dangerous rounded-full"
            onClick={handleRemoveTraveler}
          >
            <AiOutlineMinusCircle size={25} />
          </Button>
        </div>
      </div>
      {/* .........Select traveler end......... */}

      {/* .........Options Start............... */}
      <div className="h-[70px]">
        <div className="font-brand__font__bold text-secondary px-2">
          <h3>Options</h3>
        </div>
        <div className="w-full relative">
          <div className="absolute top-0 w-full ">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1 capitalize ">
                <Listbox.Button className="w-full rounded-md py-2 pl-3  text-left border text-brand__font__size__sm text-gray-600 capitalize">
                  <span>{selected?.option}</span>
                  <span className="absolute top-0 bottom-0 right-0 flex items-center pr-2">
                    <BiChevronDown />
                  </span>
                </Listbox.Button>

                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg border text-brand__font__size__sm">
                  {packageDetail?.prices.map((option, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-pointer py-2.5 pl-10 pr-4 ${
                          active
                            ? "bg-brand__ash__light text-secondary"
                            : "text-gray-600"
                        }`
                      }
                      value={option}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {option.option}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-secondary">
                              <BiChevronDown />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
      {/* .........Options end............ */}

      <div className="text-center flex flex-col items-center gap-1 text-secondary">
        <p className="leading-tight">Start from</p>
        {matchingDiscount?.applicablePersons |
        (travelers >= lastDiscount?.applicablePersons) ? (
          <p className="line-through leading-tight text-brand__font__size__sm">
            BDT {(selected.price * travelers).toLocaleString("en-US")}
          </p>
        ) : (
          ""
        )}
        <p className="leading-tight font-brand__font__bold">
          BDT {totalPrice.toLocaleString("en-US")}
        </p>
      </div>

      <div>
        <Button
          onClick={handleBooking}
          className="w-full bg-brand__orange hover:shadow-lg  hover:bg-primary duration-300 text-center p-2 rounded-md text-white font-brand__font__semibold"
          // to={`/booking/${packageDetail.id}`}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
