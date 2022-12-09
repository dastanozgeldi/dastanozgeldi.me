const Table = () => {
  return (
    <div className="max-w-max mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Projects
            </th>
            <th scope="col" className="py-3 px-6">
              Rate
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Jazbahana
            </th>
            <td className="py-4 px-6">Good</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Jarys
            </th>
            <td className="py-4 px-6">Good</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Qysqa
            </th>
            <td className="py-4 px-6">Good</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Qupiya
            </th>
            <td className="py-4 px-6">Great</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
