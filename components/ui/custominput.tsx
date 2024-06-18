import { Input } from "./input"
import React from 'react'
import { FormField, FormControl, FormMessage, FormLabel } from './form'

const Custominput = ({form, name, label, placeholder}) => {
  return (
    <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
        <div className="form-item">
            <FormLabel className='form-label'>
                {label}
            </FormLabel>
            <div className='flex w-full flex-col'>
                <FormControl>
                    <Input placeholder={placeholder} className='input-class' {...field} />
                </FormControl>
                <FormMessage className='form-message mt-2' />
            </div>
        </div>
    )}
  )
}

export default Custominput