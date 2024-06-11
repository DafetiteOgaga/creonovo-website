import React from 'react';
import styled from 'styled-components'

const Paragraph = styled.p`
  text-align: center;
  margin-top: 0;
`
const MonthandYear = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const now = new Date();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  return (
    <Paragraph
    className='paragraph'
    >All rights reserved • Creonovo • {month} {year}</Paragraph>
  );
};

export default MonthandYear;
