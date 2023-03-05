import { ICategory } from "@/Interface/Category.interface";
import Link from "next/link";
import { useRouter } from "next/router";

interface IPropType {
  categories: {
    items: ICategory[];
  };
}

const Tab = ({ categories }: IPropType) => {
  const router = useRouter();

  function isActiveLink(category: ICategory) {
    return category.attributes.slug === router.query.category;
  }

  function handleOnSearch(query: string) {
    console.log("Handle on Search");
  }

  return (
    <div className="my-8 flex items-center justify-between border-b-2 border-gray-100">
      <ul className="flex items-center">
        <li
          className={
            "mr-6 pb-4 border-b-4 rounded-sm " +
            `${
              router.pathname === "/"
                ? "border-emerald-600 text-emerald-600"
                : "border-white text-gray-400"
            }`
          }
        >
          <Link href="#">Recent</Link>
        </li>
        {categories.items.map((category: any) => (
          <li
            className={
              "mr-6 pb-4 border-b-4 rounded-sm " +
              `${
                isActiveLink(category)
                  ? "border-emerald-600 text-emerald-600"
                  : "border-white text-gray-400"
              }`
            }
            key={category.attributes.id}
          >
            <Link href={`/category/${category.attributes.slug}`}>
              {category.attributes.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* SEARCH BOX */}
      <div className="flex pl-3 pr-3 items-center rounded-3xl bg-gray-200">
        <svg
          className="h-4 fill-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
        <input
          onChange={(e) => handleOnSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="outline-none px-2 py-1 ml-1 bg-gray-200"
        />
      </div>
    </div>
  );
};

export default Tab;
