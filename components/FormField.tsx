import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'


interface FormFieldProps<T extends FieldValues> {
    control : Control<T>,
    label : string,
    placeholder ?: string,
    name : Path<T>,
    type ?: 'text' | 'password' | 'email' | 'file'
}



const FormFields = ({control,label,name,placeholder,type='text'} : FormFieldProps<T>) => {

          
  return (
    <Controller 
        name={name}
        control={control}
        render={()=>(
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                <FormItem>
                    <FormLabel className='label'>{label}</FormLabel>
                    <FormControl>
                    <Input 
                        className='input'
                        placeholder={placeholder}
                        type={type}
                        {...field} />
                    </FormControl>
                   
                    <FormMessage />
                </FormItem>
                )}
            />
        )}
    />
  )   
}

export default FormFields
