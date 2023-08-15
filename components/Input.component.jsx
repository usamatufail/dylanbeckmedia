import { Field, FieldProps } from "formik";

export const Input = ({
  type = "type",
  name = "name",
  placeholder = "placeholder",
  isLarge = false,
}) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        const isError = meta.touched && meta.error;
        const className = isError
          ? "border border-solid border-[#ff0000] rounded-[20px] md:rounded-[50px] bg-[#F8F9FA]"
          : " border border-solid border-[rgba(255,255,255,0.50)] rounded-[50px] bg-[rgba(0,0,0,0.20)]";
        return (
          <div
            className={`flex flex-col gap-[1rem] ${
              isLarge ? "md:col-span-2" : ""
            }`}
          >
            {type === "textarea" ? (
              <textarea
                {...field}
                id={name}
                name={name}
                placeholder={placeholder}
                className={`${className} text-[14px] p-[20px] opacity-100`}
                rows={7}
                value={field.value}
              />
            ) : (
              <input
                {...field}
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                className={`${className} text-[14px] p-[20px] opacity-100 text-[#808080] bg-[rgba(0,0,0,0.20)]`}
                value={field.value}
              />
            )}
            <p className="mt-[0rem] text-[1.2rem] text-red-500">
              {meta.touched && meta.error ? meta.error : <>&nbsp;</>}
            </p>
          </div>
        );
      }}
    </Field>
  );
};
