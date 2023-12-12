import { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/common/Loader";
import Body from "./components/Body/index";
import Layout from "../../components/common/Layout";
import axios from "../../api/axios";
const Head = lazy(() => import("./components/Head"));

const PackageDetailScreen = () => {
  const { id } = useParams();
  const [packageDetail, setPackageDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/package/${id}`);
        setLoading(false);
        setPackageDetail(data?.data);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <section>
        <div className="max-w-screen-xl mx-auto p-content__padding">
          <Suspense>
            <Head packageDetail={packageDetail} />
          </Suspense>

          <Body packageDetail={packageDetail} />
        </div>
      </section>
    </Layout>
  );
};

export default PackageDetailScreen;
