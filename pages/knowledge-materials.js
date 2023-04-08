import { useEffect, useState, useMemo, Fragment } from "react";
import { useQuery, QueryClient } from "react-query";
import { getAllMaterials, getMaterialCount } from "../hooks/api/KnowledgeMaterials";
import { Breadcrumb, Skeleton, Pagination, Empty } from "antd";
import Link from "next/link";
import PageHeader from "../components/Layout/PageHeader";
import Materials from "../components/KnowledgeMaterials/Materials";
import MaterialFilter from "../components/KnowledgeMaterials/MaterialFilter";

const KnowledgeMaterials = () => {
  const [selectedMaterials, setSelectedMaterials] = useState("1");
  const [sortingValue, setSortingValue] = useState("desc");
  const [myFiles, setMyFiles] = useState("false");
  const [pageNum, setPageNum] = useState(1);


  const queryClient = useMemo(() => {
    return new QueryClient();
  }, []);

  const {
    data: materialsData,
    isFetching: materialsFetching,
    refetch: materialsRefetching,
  } = useQuery(
    ["Material", selectedMaterials, sortingValue, myFiles, pageNum],
    () => getAllMaterials(selectedMaterials, sortingValue, myFiles, pageNum),
    {
      refetchOnWindowFocus: false,
      refetchInterval: 0,
    }
  );

  const {
    data: materialsCount,
    isFetching: materialsCountFetching,
  } = useQuery(
    ["MaterialCount"],
    () => getMaterialCount(),
    {
      refetchOnWindowFocus: false,
      refetchInterval: 0,
    }
  );

  const handleCategoryChange = (checkedValues) => {
    setPageNum(1)
    setSelectedMaterials(checkedValues.target.value);
  };

  const handleFilesChange = (value) => {
    setPageNum(1)
    setMyFiles(value.target.value)
  }

  const handleSortingChange = (value) => {
    setPageNum(1)
    setSortingValue(value);
  };

  const handlePageNum = (page) => {
    setPageNum(page)
  };


  const prefetchMaterial = (value) => {
    if (value) {
      materialsRefetching()
    }
  }

  useEffect(() => {
    materialsRefetching();
  }, [selectedMaterials, sortingValue, queryClient, myFiles, pageNum, materialsRefetching]);

  return (
    <Fragment>

      <PageHeader>
        <div className="">
          <h4 className="mb-3">المواد المعرفية</h4>

          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/">الرئيسية</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>المواد المعرفية</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="">
          <div className="">
            {materialsCount &&
              <ul className="list-unstyled d-flex m-0 p-0">
                <li className="text-white text-center px-4">
                  <h4 className="mb-1">{materialsCount.result.filesCount}</h4>
                  <span className="fw-light">مستند</span>
                </li>
                <li className="text-white text-center px-4">
                  <h4 className="mb-1">{materialsCount.result.videosURLCounts}</h4>
                  <span className="fw-light">فيديو</span>
                </li>
                <li className="text-white text-center px-4">
                  <h4 className="mb-1">{materialsCount.result.materialsCount}</h4>
                  <span className="fw-light">مادة معرفية</span>
                </li>
              </ul>
            }
          </div>
        </div>
      </PageHeader>

      <div className="row mt-5">
        <MaterialFilter
          materialOnChange={handleCategoryChange}
          sortingOnChange={handleSortingChange}
          filesOnChange={handleFilesChange}
        />

        <div className="col-md-9">

          {materialsFetching ? (
            <div>
              <div className="bg-white p-5 text-center mb-4">
                <Skeleton avatar paragraph={{ rows: 4 }} active />
              </div>
              <div className="bg-white p-5 text-center">
                <Skeleton avatar paragraph={{ rows: 4 }} active />
              </div>
            </div>
          ) : (
            <Fragment>
              {materialsData.result.result.totalCount == 0 &&
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={
                    <span>لا يوجد مواد معرفية حتي الان</span>
                  }
                />
              }
              <Materials materials={materialsData.result} handleMaterialPrefetch={prefetchMaterial} />

              {materialsData.result.result.totalCount > 10 &&

                <div className="my-4 d-flex justify-content-end">
                  <Pagination
                    defaultPageSize={materialsData.result.pageSize}
                    current={materialsData.result.currentPage}
                    total={materialsData.result.result.totalCount}
                    onChange={handlePageNum}
                  />
                </div>
              }
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default KnowledgeMaterials;
