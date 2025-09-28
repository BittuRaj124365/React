import { CiSearch } from "react-icons/ci";
import { BsPlusCircle } from "react-icons/bs";
export default function Searchbar({isOpen,filteredContacts}) {
  return (
    <>
      <div className="flex relative gap-2">
        <CiSearch 
        className="item-center absolute text-3xl text-black left-1 mt-1.5 " />
        <input
          onChange={filteredContacts}
          type="text"
          placeholder="search contact"
          className="flex-grow h-10 pl-9 border-white rounded-md "
        />
        <div className="flex">
          <BsPlusCircle onClick={isOpen}
          className="text-3xl item-center mt-1.5 text-white cursor-pointer" />
        </div>
      </div>
    </>
  );
}
