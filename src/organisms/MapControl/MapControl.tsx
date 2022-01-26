import { useCallback, useEffect, useRef } from "react";
import _ from "lodash";

import DateInput from "atoms/DateInput";
import TextInput from "atoms/TextInput";
import useFormValues, { type FormFields } from "hooks/useFormValues";

const formFields: FormFields = {
  searchAgency: "",
  startDate: "",
  endDate: "",
};

type Props = {
  onControlsUpdate: (values: FormFields) => void;
};

export default function MapControl(props: Props) {
  const { onControlsUpdate } = props;
  const [formValues, updateFieldValue] = useFormValues(formFields);

  useEffect(() => {
    onControlsUpdate(formValues);
  }, [formValues, onControlsUpdate]);

  return (
    <div className="flex flex-row flex-wrap md:flex-col md:flex-nowrap pl-1 pr-1">
      <div className="p-2 basis-full sm:basis-1/3">
        <TextInput
          showLabel={false}
          placeholder="Search agency"
          name="searchAgency"
          value={formValues["searchAgency"] as string}
          onChange={updateFieldValue}
        />
      </div>
      <div className="p-2 basis-1/2">
        <DateInput
          label="Start date"
          name="startDate"
          value={formValues["startDate"] as string}
          onChange={updateFieldValue}
        />
      </div>
      <div className="p-2 basis-1/2">
        <DateInput
          label="End date"
          name="endDate"
          value={formValues["endDate"] as string}
          onChange={updateFieldValue}
        />
      </div>
    </div>
  );
}
