import { TextField } from "@mui/material";
import type { ChangeEvent } from "react";

interface CustomTextFieldProps {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function CustomTextField({ label, value, onChange, ...props }: CustomTextFieldProps) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="standard"
      fullWidth
      sx={{
        '& .MuiInput-underline:before': { 
          borderBottomColor: '#5E3827',
          borderBottomWidth: '3px'  
        },
        '& .MuiInput-underline:after': { 
          borderBottomColor: '#5E3827',
          borderBottomWidth: '3px'  
        },
        '& .MuiInputBase-input': { color: '#5E3827' },
        '& .MuiInputLabel-root': { color: '#5E3827' },
        '& .MuiInputLabel-root.Mui-focused': { color: '#5E3827' }
      }}
      {...props}
    />
  );
}

export default CustomTextField;
