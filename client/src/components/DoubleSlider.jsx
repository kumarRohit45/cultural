import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const Separator = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`,
);

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '10K',
  },
  {
    value: 40,
    label: '20K',
  },
  {
    value: 60,
    label: '30k',
  },
  {
    value: 80,
    label: '40k',
  },
  {
    value: 100,
    label: "50K",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DoubleSlider() {
  return (
    <Box sx={{ width: 190 }}>

      <Typography id="track-inverted-range-slider" gutterBottom>
       Choose Your Price Range
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        defaultValue={[20, 60]}
        marks={marks}
      />
    </Box>
  );
}