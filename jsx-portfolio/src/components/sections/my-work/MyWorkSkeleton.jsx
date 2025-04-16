import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const variants = ['h1'];

function MyWorkSkeleton(props) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant,index) => (
        <Typography component="div" key={index} variant={variant}>
          {loading ? <Skeleton /> : ""}
        </Typography>
      ))}
    </div>
  );
}

MyWorkSkeleton.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonTypography(props) {
  return (
    <Skeleton variant="rectangular" width={props.width} height={props.height}  sx={props.sx} />
  );
}