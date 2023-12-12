import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "react-range-slider-input/dist/style.css";
import Loader from "../../components/common/Loader";
import Search from "../../components/Search";
import FilterBox from "./components/FilterBox";
import Button from "../../components/UI/Button";
import { FaFilter } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import PG2Card from "../../components/PG2Card";
import Layout from "../../components/common/Layout";
import axios from "../../api/axios";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import useContextData from "../../hooks/useContextData";

const PackagesListScreen = () => {
  const { selected } = useContextData();
  const [value, setValue] = useState([5000, 100000]);
  const [packages, setPackages] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { search } = useLocation();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [tags, setTags] = useState("");
  const navigate = useNavigate();
  const [location, setLocation] = useState({});

  const handleNavigate = () => {
    navigate(`/tour-list?location=${location.id}`);
  };

  const onChange = (page) => {
    setPage(page);
  };

  const toggleResponsiveFilterBox = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSlider = (value) => {
    setValue(value);
  };

  useEffect(() => {
    let url = `/package?page=${page}&limit=${limit}&regularPrice=${value[0]},${value[1]}`;

    if (search) {
      url += `&${search.split("?")[1]}`;
    }

    if (tags) {
      url += tags;
    }

    if (selected?.category === "foreigner") {
      url += `&category=${selected?.category}`;
    }

    (async () => {
      try {
        const { data } = await axios.get(url);
        setPackages(data?.data);
        setMeta(data?.meta);
        setLoading(false);
      } catch ({ response }) {
        setLoading(false);
      }
    })();
  }, [limit, page, search, selected?.category, tags, value]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout title="Packages">
      <section className="py-10">
        <div className="max-w-screen-xl w-full m-auto p-content__padding">
          <div className="flex justify-between gap-5">
            <div className="hidden lg:block max-w-[255px] w-full h-fit bg-white shadow-lg rounded-md sticky top-[120px]">
              <FilterBox
                tags={tags}
                setTags={setTags}
                value={value}
                length={packages?.length}
                handleSlider={handleSlider}
              />
            </div>

            <div className="flex-1">
              <Search
                setLocation={setLocation}
                handleNavigate={handleNavigate}
                firstDivStyles="w-full mb-4"
                secondDivStyles="rounded-full"
              />

              <div>
                {packages?.length <= 0 ? (
                  <div className="h-[40vh] flex flex-col justify-center items-center text-center text-brand__detail__text">
                    <div>
                      <p className="font-brand__font__semibold text-brand__font__size__lg">
                        Ooops !!!
                      </p>
                      <div>
                        <small className="block">
                          There are no available Tours based on your query.
                        </small>
                        <small className="block">
                          Please try clearing some filters or try searching
                          again.
                        </small>
                      </div>
                    </div>
                  </div>
                ) : (
                  packages.map((item) => <PG2Card key={item.id} data={item} />)
                )}
              </div>
              {packages.length > 0 && (
                <>
                  <Pagination
                    onChange={onChange}
                    current={page}
                    total={meta?.total}
                    pageSize={limit}
                    showTotal={(total) => `Total ${total} places`}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="h-full">
        <Button
          onClick={() => toggleResponsiveFilterBox(!isFilterOpen)}
          className="flex w-fit lg:hidden items-center gap-x-3 fixed z-[2] bottom-5 left-0 right-5 ms-auto justify-center rounded-md bg-brand__orange text-white py-2 px-4"
        >
          <FaFilter size={16} />
          <span className="font-brand__font__semibold">Filter</span>
        </Button>
        <Drawer
          open={isFilterOpen}
          onClose={toggleResponsiveFilterBox}
          direction="bottom"
          duration={300}
          overlayOpacity={0.5}
          lockBackgroundScroll
          size={350}
          className="block lg:hidden rounded-tl-xl rounded-tr-xl overflow-y-auto"
        >
          <FilterBox
            tags={tags}
            setTags={setTags}
            value={value}
            length={packages?.length}
            handleSlider={handleSlider}
          />
        </Drawer>
      </div>
    </Layout>
  );
};

export default PackagesListScreen;
