import { Stat, StatLabel, StatNumber } from '@chakra-ui/core';

const StatCard = ({ label, value }) => (
  <Stat border="1px solid" borderRadius={8} padding={4}>
    <StatLabel>{label}</StatLabel>
    <StatNumber>{value}</StatNumber>
  </Stat>
);

export default StatCard;
