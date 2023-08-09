import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useManager } from '@/app/context/Manager';

const AutoComplete = () => {
  const { autoCompleteProdutos, searchValue } = useManager();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  return (
    <Autocomplete
      id='buscar'
      sx={{ width: 300 }}
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      options={searchValue}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Asynchronous'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
};

export default AutoComplete;
