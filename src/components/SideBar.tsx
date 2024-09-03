interface Props {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const SideBar = ({ selectedCategory, onSelectCategory }: Props) => {
  return (
    <ul
      className="menu menu-md lg:menu-lg mt-36"
      onClick={(event) =>
        onSelectCategory((event.target as HTMLLinkElement).textContent || "")
      }
    >
      <li>
        <a className={`${selectedCategory === "All" && "active"}`}>All</a>
      </li>
      <li>
        <a className={`${selectedCategory === "Groceries" && "active"}`}>
          Groceries
        </a>
      </li>
      <li>
        <a className={`${selectedCategory === "College" && "active"}`}>
          College
        </a>
      </li>
      <li>
        <a className={`${selectedCategory === "Payments" && "active"}`}>
          Payments
        </a>
      </li>
    </ul>
  );
};

export default SideBar;
