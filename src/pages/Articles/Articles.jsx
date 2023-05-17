import {
  Container,
  Box,
  Card,
  CardMedia,
  CardHeader,
  Typography,
  Stack,
  CardContent,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import { dataArticle } from './dataArticle';
import img from '../../assets/main.png';

const Articles = () => {
  return (
    <Container maxWidth={'lg'}>
      <Box mt={'56px'}>
        <Card sx={{ cursor: 'pointer' }}>
          <Typography variant="h1" fontSize={48} fontWeight={'bold'}>
            Hot topics
          </Typography>
          <Stack direction={'row'} mt={'24px'}>
            <CardMedia
              sx={{ objectFit: 'contain' }}
              component={'img'}
              height={400}
              image={img}
              alt="main image"
            />
            <CardContent>
              <Typography>
                Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing.
                Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui,
                egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum
                imperdiet scelerisque... read more
              </Typography>
            </CardContent>
          </Stack>
        </Card>
      </Box>
      <Box mt={'56px'}>
        <Typography variant="h2" fontSize={'36px'}>
          Latest News
        </Typography>
        <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {dataArticle.map((article, index) => (
            <Grid2 key={index} xs={2} sm={4} md={3} mt={'24px'}>
              <Card sx={{ cursor: 'pointer' }}>
                <CardMedia component={'img'} height={176} image={article.img} />
                <CardHeader title={article.title} />
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
};

export default Articles;
