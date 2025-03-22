import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Path } from "react-hook-form";

import { FieldValues } from "react-hook-form";

export interface CustomInputProps<T extends FieldValues = FieldValues>
  extends React.ComponentPropsWithoutRef<"input"> {
  name: Path<T>;
  control: Control<T>;
  label: string;
}

function CustomInput<T extends FieldValues>({
  name,
  control,
  label,
  ...props
}: CustomInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...props} {...field} className="input" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomInput;
