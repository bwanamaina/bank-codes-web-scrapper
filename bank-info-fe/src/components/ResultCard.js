export function ResultCard({ bank, branch }) {
  const startingTimeWeekdays = "8:00am";
  const endingTimeWeekdays = "5:00pm";

  const startingTimeWeekends = "8:00am";
  const endingTimeWeekends = "1:00pm";

  return (
    <div className="mt-4 mb-4">
      <div className="rounded-lg shadow-lg bg-gray-50 p-6 shadow-[#695958]-500/40 ">
        <div className="flex items-center mb-4">
          <img
            src={bank?.icon}
            alt="Bank Logo"
            className="h-16 w-17 rounded-lg"
          />
          <div className="ml-4 flex-grow">
            <h2 className="font-bold text-xl text-[#695958]">
              {branch?.branch_name}
            </h2>
            <div className="flex items-center text-gray-600">
              <span className="text-lg italic">
                Branch Code: {branch?.branch_code}
              </span>
              <span className="mx-2">•</span>
              <span className="text-green-600 font-bold">Open</span>
            </div>
          </div>
          <div className="flex text-right">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.14 2 5 5.14 5 9c0 4.69 7 13 7 13s7-8.31 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            <span className="ml-1 text-gray-500">Ruiru, Kenya</span>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="font-semibold text-[#695958]">{bank.bank_name}</p>
              <span className="text-gray-600">Bank Code: {bank.bank_code}</span>
            </div>
            <div className="text-right">
              <p className="font-semibold text-[#695958]">Working Hours</p>
              <span className="text-gray-600">{startingTimeWeekdays} - {endingTimeWeekdays} - Weekdays</span>
              <p>
                <span className="text-gray-600">
                  {startingTimeWeekends} - {endingTimeWeekends} - Weekends
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 mt-4">
            <div>
            <p className="font-semibold text-[#695958]">Contact Info</p>
            <span className="text-gray-600">07898990899 | 0709008004</span>
            </div>

            <div>
              <span className="text-red-600 text-base">
                Closed - Weekends and Public Holidays
              </span>
                </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}