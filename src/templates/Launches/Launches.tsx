import React, { useEffect, useState, useCallback } from "react";
import { formatDateForAPI, addMonths } from "utils/date";
import MapChart from "organisms/MapChart";
import MapControl from "organisms/MapControl";
import { type FormFields } from "hooks/useFormValues";

export default function Launches() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [agency, setAgency] = useState<string>("");

  useEffect(() => {
    setStartDate(formatDateForAPI(new Date()));
    setEndDate(formatDateForAPI(addMonths(3)));
  }, []);

  const handleControlUpdate = useCallback(
    (values: FormFields) => {
      if (values.startDate && values.endDate) {
        const sDate = formatDateForAPI(new Date(values.startDate));
        const eDate = formatDateForAPI(new Date(values.endDate));

        setStartDate(sDate);
        setEndDate(eDate);
      } else {
        setStartDate(formatDateForAPI(new Date()));
        setEndDate(formatDateForAPI(addMonths(3)));
      }

      setAgency(values.searchAgency as string);
    },
    [setStartDate, setEndDate, setAgency]
  );

  return (
    <div className="flex justify-center	items-center h-full">
      <div className="flex flex-col w-full sm:w-9/10 2xl:w-9/10 h-full bg-backgroundSecondary rounded-md0 sm:ml-5 sm:mr-5 2xl:ml-10 2xl:mr-10">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:basis-1/4 md:h-full">
            <MapControl onControlsUpdate={handleControlUpdate} />
          </div>
          <div className="md:basis-3/4 h-full mt-2">
            <MapChart startDate={startDate} endDate={endDate} agency={agency} />
          </div>
        </div>
      </div>
    </div>
  );
}
