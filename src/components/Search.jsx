import { BsSearch } from 'react-icons/bs'

const Search = () => {
   return (
      <div className="search flex justify-between items-center ml-5 mr-4">
      <h1>Все смартфоны</h1>

      <div className="pt-2 relative  text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Поиск..."
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <BsSearch />
        </button>
      </div>
    </div>
   );
};

export default Search;