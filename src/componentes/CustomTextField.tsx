import { TextField} from "@mui/material";

interface CustomTextFieldProps {
  label: string;
}

function CustomTextField({ label, ...props }: CustomTextFieldProps) {
  return (
    <TextField
      label={label}
      variant="standard"
      fullWidth
      sx={{
        '& .MuiInput-underline:before': { borderBottomColor: '#5E3827' },
        '& .MuiInput-underline:after': { borderBottomColor: '#5E3827' },
        '& .MuiInputBase-input': { color: '#5E3827' },
        '& .MuiInputLabel-root': { color: '#5E3827' },
        '& .MuiInputLabel-root.Mui-focused': { color: '#5E3827' }
      }}
      {...props}
    />
  );
}

export default CustomTextField;
