import { BiEdit } from "react-icons/bi";
import Button from "../../../components/UI/Button";
import useContextData from "../../../hooks/useContextData";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const { auth } = useContextData();
  const navigation = useNavigate();
  const { user } = auth;
  const {
    firstName,
    lastName,
    gender,
    presentAddress,
    permanentAddress,
    martialStatus,
    dateOfBirth,
    passportNumber,
    passportExpiryDate,
    nationalID,
    emergencyContact,
    religion,
  } = user;

  return (
    <div id="info">
      <div className="flex justify-between mb-5 pb-2">
        <div>
          <h2 className="text-brand__font__size__lg font-brand__font__semibold text-primary mb-2">
            Profile
          </h2>
          <p className="text-brand__font__size__sm text-brand__detail__text">
            Basic info, for a faster booking experience
          </p>
        </div>

        <Button
          onClick={() => navigation("/profile/edit-info")}
          className="text-primary flex items-center gap-x-1 pr-4 font-brand__font__semibold"
        >
          <BiEdit size={22} />
          <span className="text-brand__font__size__md">Edit</span>
        </Button>
      </div>
      <div className="py-2 capitalize">
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Name</span>
          </div>
          <div className="flex-1 font-brand__font__semibold flex gap-x-1">
            <span>{firstName ? firstName : "N/A"}</span>
            <span>{lastName ? lastName : ""}</span>
          </div>
        </div>
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Gender</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{gender ? gender : "N/A"}</span>
          </div>
        </div>
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Present Address</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{presentAddress ? presentAddress : "N/A"}</span>
          </div>
        </div>
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Permanent Address</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{permanentAddress ? permanentAddress : "N/A"}</span>
          </div>
        </div>
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Marital Status</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{martialStatus ? martialStatus : "N/A"}</span>
          </div>
        </div>
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Date of Birth</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{dateOfBirth ? dateOfBirth : "N/A"}</span>
          </div>
        </div>
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Passport Number</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{passportNumber ? passportNumber : "N/A"}</span>
          </div>
        </div>
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Passport Expiry Date</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{passportExpiryDate ? passportExpiryDate : "N/A"}</span>
          </div>
        </div>
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>National ID</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{nationalID ? nationalID : "N/A"}</span>
          </div>
        </div>
        <div className="flex py-4 border-b">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Emergency Contact</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{emergencyContact ? emergencyContact : "N/A"}</span>
          </div>
        </div>
        <div className="flex py-4">
          <div className="max-w-[200px] w-full font-brand__font__light text-brand__detail__text">
            <span>Religion</span>
          </div>
          <div className="flex-1 font-brand__font__semibold">
            <span>{religion ? religion : "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
