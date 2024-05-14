import React from 'react';
import { AreaChart, Area, XAxis, YAxis,  CartesianGrid, Tooltip, Legend} from 'recharts';

const enquiry = [
  {
    name: 'Day 1',
    option1: 4000,
    option2: 2400,
  },
  {
    name: 'Day 6',
    option1: 3000,
    option2: 2210,
  },
  {
    name: 'Day 12',
    option1: 2000,
    option2: 2290,
  },
  {
    name: 'Day 18',
    option1: 2780,
    option2: 2000,
  },
  {
    name: 'Day 24',
    option1: 1890,
    option2: 2181,
  },
  {
    name: 'Day 30',
    option1: 2390,
    option2: 2500,
  },
];

const AreaChartComp = () => {
  return (
    <AreaChart width={500} height={345} data={enquiry}>
      <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip/>
        <Legend/>
      
      
      <Area
          
          dataKey="option1"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />

        <Area
          
          dataKey="option2"
          stroke="#1E3A8A"
          fill="#1E3A8A"
          stackId="1"
        />
        </AreaChart>
    
    


  )
}

export default AreaChartComp;
