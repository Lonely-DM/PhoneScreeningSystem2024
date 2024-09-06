import React from 'react';
import { AreaChart, Area, XAxis, YAxis,  CartesianGrid, Tooltip, Legend} from 'recharts';

const enquiry = [
  {
    year: '2014',
    Psychological: 314,
    Financial: 289,
    Physical: 75,
    Social: 39,
    Neglect: 6,
    
  },
  {
    year: '2015',
    Psychological: 652,
    Financial: 662,
    Physical: 162,
    Social: 130,
    Neglect: 197,
    
  },
  {
    year: '2016',
    Psychological: 788,
    Financial: 821,
    Physical: 296,
    Social: 229,
    Neglect: 263,
    
  },
  {
    year: '2017',
    Psychological: 1127,
    Financial: 1392,
    Physical: 331,
    Social: 165,
    Neglect: 99,
    
  },
  {
    year: '2018',
    Psychological: 1037,
    Financial: 1463,
    Physical: 271,
    Social: 175,
    Neglect: 0,
    
  },
  {
    year: '2019',
    Psychological: 567,
    Financial: 1030,
    Physical: 131,
    Social: 141,
    Neglect: 0,
    
  },
  {
    year: '2020',
    Psychological: 784,
    Financial: 703,
    Physical: 184,
    Social: 170,
    Neglect: 0,
   
  },
  {
    year: '2021',
    Psychological: 952,
    Financial: 980,
    Physical: 210,
    Social: 315,
    Neglect: 105,
    
  },

];

const AreaChartComp = () => {
  return (
    <AreaChart width={550} height={350} data={enquiry} margin={{ top: 22, bottom: -25 }}>
      <YAxis />
      <XAxis dataKey="year" ticks={['2016', '2018', '2020']}  />
      
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip 
        contentStyle={{ fontSize: '12px', padding: '1px', borderRadius: '5px', lineHeight: '15px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }} 
        itemStyle={{ fontSize: '10px', padding: '3px', margin: '0px' }} 
        labelStyle={{ fontSize: '12px', marginBottom: '5px', textAlign:'center'}} 
      />
        <Legend/>
      
      
      <Area type="monotone" dataKey="Psychological" stroke="#2563eb" fill="#2563eb" stackId="1" />
      <Area type="monotone" dataKey="Financial" stroke="#96d9c0" fill="#96d9c0" stackId="1" />
      <Area type="monotone" dataKey="Physical" stroke="#e11d48" fill="#e11d48" stackId="1" />
      <Area type="monotone" dataKey="Social" stroke="#FF5700"  fill="#FF5700" stackId="1" />
      <Area type="monotone" dataKey="Neglect" stroke="#6b7280" fill="#6b7280" stackId="1" />
      
        </AreaChart>
    
  )
}

export default AreaChartComp;
