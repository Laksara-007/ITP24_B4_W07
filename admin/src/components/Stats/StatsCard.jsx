import { Card, CardContent, Typography } from '@mui/material';

const StatCard = ({ title, value }) => {
    return (
      <Card variant="outlined" style={{ minWidth: '200px' ,  borderWidth: '5px'  }}>
        <CardContent>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="h4">
            {value}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default StatCard;