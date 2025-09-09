import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const StatisticsPage = ({ shortenedUrls }) => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" gutterBottom style={{ margin: '1rem' }}>
        Statistics
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Original URL</TableCell>
            <TableCell>Shortened URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shortenedUrls.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.longUrl}</TableCell>
              <TableCell>{row.shortUrl}</TableCell>
              <TableCell>{row.clicks}</TableCell>
              <TableCell>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatisticsPage;