import { TDirection } from "@/types/types/direction.type";
import QueryString from "qs";
import { useRouter } from "next/router";

interface IPropType {
  page: number;
  pageCount: number;
  redirectURL?: string; // by putting ? it will assign as optional props (if someone is not sending then also it will work)
}

const Pagination = ({ page, pageCount, redirectURL = "/" }: IPropType) => {
  const router = useRouter();
  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const handlePaginate = (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) return;
    if (direction === -1 && isPrevDisabled()) return;

    const queryString = QueryString.stringify({
      // ...router.query,
      page: page + direction,
    });

    router.push(`${redirectURL}?${queryString}`);
  };

  const active_btn =
    "bg-gray-400 hover:bg-indigo-700 ml-4 py-2 px-4 text-white w-24 rounded";

  return (
    <div className="flex justify-center mt-20">
      <button
        onClick={() => handlePaginate(-1)}
        className={`${active_btn} ${isPrevDisabled() ? "disabled" : ""}`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`${active_btn} ${isNextDisabled() ? "disabled" : ""}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
