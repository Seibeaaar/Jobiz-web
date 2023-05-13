import i18n from "src/localization";
import { FieldError, FieldErrors } from "react-hook-form";
export const displayErrorMessage = (error: FieldError | undefined) => {
  const { t } = i18n;
  return error ? t(error.message as string) : "";
};

export const checkSubmitDisabled = (
  errors: FieldErrors,
  dirtyFields: object,
  fields: string[]
) => {
  return (
    Object.keys(dirtyFields).every((df) => fields.includes(df)) &&
    !!Object.keys(errors).length
  );
};
