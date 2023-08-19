import { useCallback, useState } from 'react';
import {
  debounce,
  Autocomplete,
  TextField,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import constants from '@constants/index';
import SearchOptionTemplate from '@components/SearchOptionTemplate';

const SearchAutocomplete = ({
  getResults,
  placeholder,
  onChange,
  ...restProps
}) => {
  //   const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  const debouncedSearch = useCallback(
    debounce(async (value) => {
      setIsLoading(true);
      try {
        const results = await getResults(value);
        setResults(results);
      } catch (_err) {
        /** _err */
      }
      setIsLoading(false);
    }, constants.INPUT_DEBOUNCE_DELAY),
    [],
  );

  return (
    <Autocomplete
      options={results}
      componentsProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ],
        },
      }}
      ListboxProps={{
        style: { padding: 0 },
      }}
      renderTags={() => null}
      popupIcon={''}
      forcePopupIcon={false}
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            sx: (theme) => ({
              bgcolor: theme.palette.common.white,
              minWidth: 250,
              borderRadius: '20px',
            }),
            placeholder: placeholder,
            ...params.InputProps,
            ...(isLoading && {
              endAdornment: (
                <CircularProgress thickness={5} size={18} color="secondary" />
              ),
            }),
          }}
        />
      )}
      renderOption={(props, option) => (
        <MenuItem
          onClick={(e) => e.preventDefault()}
          autoFocus={false}
          value={option.value}
          {...props}
          key={option.value}
          sx={(theme) => ({
            fontSize: 14,
            padding: theme.spacing(8, 16),
          })}
        >
          <SearchOptionTemplate
            imgSrc={option.extraData.avatarUrl}
            text={option.label}
            subText={option.extraData.location}
          />
        </MenuItem>
      )}
      onInputChange={(_e, value, reason) => {
        if (reason === 'input') {
          debouncedSearch(value);
        }
      }}
      onChange={(e, value) => {
        onChange && onChange(e, value);
      }}
      {...restProps}
    />
  );
};

export default SearchAutocomplete;
