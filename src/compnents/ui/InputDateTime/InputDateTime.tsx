import convert from "@/utils/convert";
import { cn } from "@heroui/react";
import DatePicker from "react-datepicker";

interface TypeProps {
  field: {value: Date | null; onChange: (date: Date | null) => void}
  label: string;
  isInvalid: boolean;
  errorMessage: string;
  isDisabled: boolean;
  placeholder: string
}
const InputDateTime = (props: TypeProps) => {
    const {
      field,
      label,
      isInvalid,
      errorMessage,
      isDisabled,
      placeholder
    } = props;
    return (
        <div>
          <p className={cn("text-utama mb-1 text-sm", {"text-second2" : isDisabled})}>
            {label}
          </p>

          <div className={cn("w-fit p-1 rounded-lg border-2 border-gray-200", {"border-danger" : isInvalid})}>
            <DatePicker
              selected={field.value}
              onChange={(date: Date | null) => {
                field.onChange(date)
              }}
              showTimeSelect
              timeFormat="HH:mm:ss"
              timeIntervals={1}
              dateFormat="dd/MM/yyyy HH:mm:ss"
              placeholderText={placeholder}
              popperPlacement="bottom-end"
              disabled={isDisabled}
              className={isDisabled ? "text-second2" : "text-utama"}
            />
          </div>

          {isInvalid && (
            <p className="text-sm text-danger">
              {errorMessage}
            </p>
          )}
        </div>
    )
}

export default InputDateTime;