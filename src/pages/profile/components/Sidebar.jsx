import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import Image from "../../../components/UI/Image";
import { HashLink } from "react-router-hash-link";
import useContextData from "../../../hooks/useContextData";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { BsFillBookmarkFill, BsFillPersonFill } from "react-icons/bs";
import profile__image from "../../../assets/images/profile/profile.png";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useError from "../../../hooks/useError";

const Sidebar = () => {
  const { auth, setAuth } = useContextData();
  const scrollWithOffset = useScrollWithOffset();
  const axiosPrivate = useAxiosPrivate();
  const handleError = useError();
  const [image, setImage] = useState(auth?.user?.photo?.cloudinaryUrl);

  const onLoadImage = (callBack, reader) => {
    reader.onload = () => {
      callBack(reader.result);
    };
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const form = new FormData();

    if (file) {
      reader.readAsDataURL(file);
      onLoadImage(setImage, reader);
    }

    form.append("image", e.target.files[0]);

    try {
      const { data } = await axiosPrivate.post(
        "/user/profile-image/update",
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      setAuth({ ...auth, user: data.data });
    } catch ({ response }) {
      const {
        data: { errorMessages },
      } = response;
      handleError(response.status, errorMessages[0].message);
    }
  };

  return (
    <aside className="lg:max-w-[255px] w-full h-fit flex-1 bg-white shadow-md rounded-md p-5 lg:sticky lg:top-[116px]">
      <div className="flex items-center justify-between py-3">
        <Image
          src={image ? image : profile__image}
          className="w-[97px] h-[97px] rounded-full object-cover border"
        />
        <div className="text-primary font-brand__font__semibold">
          <input
            type="file"
            className="hidden"
            id="photo"
            onChange={handleImage}
          />
          <label
            htmlFor="photo"
            className="cursor-pointer flex items-center gap-x-1"
          >
            <BiEdit size={22} />
            <span className="text-brand__font__size__md">Edit</span>
          </label>
        </div>
      </div>

      <div className="py-3 flex flex-col gap-y-5 text-brand__detail__text font-brand__font__semibold">
        <HashLink
          className="flex items-center gap-x-2 hover:text-primary duration-200 w-fit"
          to="/profile/personal-info#info"
          scroll={(el) => scrollWithOffset(el, 135)}
        >
          <BsFillPersonFill size={22} />
          <span>Personal Info</span>
        </HashLink>
        <HashLink
          className="flex items-center gap-x-2 hover:text-primary duration-200 w-fit"
          to="/profile/my-bookings#bookings"
        >
          <BsFillBookmarkFill size={22} />
          <span>My Bookings</span>
        </HashLink>
        <HashLink
          className="flex items-center gap-x-2 hover:text-primary duration-200 w-fit"
          to="/profile/review"
        >
          <MdRateReview size={22} />
          <span>Review</span>
        </HashLink>
        <HashLink
          className="flex items-center gap-x-2 hover:text-primary duration-200 w-fit"
          to="/profile/settings#settings"
        >
          <AiFillSetting size={22} />
          <span>Settings</span>
        </HashLink>
      </div>
    </aside>
  );
};

export default Sidebar;
