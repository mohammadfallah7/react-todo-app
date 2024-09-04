import useCategoryStore from "../stores/CategoryStore";

const SideBar = () => {
  const { category, changeCategory } = useCategoryStore();

  return (
    <ul
      className="menu menu-md lg:menu-lg mt-36"
      onClick={(event) =>
        changeCategory((event.target as HTMLLinkElement).textContent || "")
      }
    >
      <li>
        <a className={`${category === "All" && "active"}`}>All</a>
      </li>
      <li>
        <a className={`${category === "Groceries" && "active"}`}>Groceries</a>
      </li>
      <li>
        <a className={`${category === "College" && "active"}`}>College</a>
      </li>
      <li>
        <a className={`${category === "Payments" && "active"}`}>Payments</a>
      </li>
    </ul>
  );
};

export default SideBar;
