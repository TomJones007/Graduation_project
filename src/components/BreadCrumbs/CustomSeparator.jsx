import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" component={RouterLink} to="/">
      <img className='hover:scale-130 transition ' src="/Icons/Header_Icons/Home.svg" alt="home_return_button" />
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      Доставка
    </Typography>
  ]

  return (
    <>
      <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    </>
  )
}

