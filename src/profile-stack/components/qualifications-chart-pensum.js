import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'


const data = [
  {
    key: 1,
    amount: 33,
    svg: { fill: '#38E86F' },
    name: 'Aprovadas'
  },
  {
    key: 2,
    amount: 39,
    svg: { fill: '#F9644D' },
    name: 'No tomadas'
  },
  {
    key: 3,
    amount: 7,
    svg: { fill: '#3ABEFF' },
    name: 'Actual'
  },
]
const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice;
    return (
      <Text
        key={index}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill={'white'}
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={24}
        stroke={'green'}
        strokeWidth={0.2}
      >
        {data.amount}
      </Text>
    )
  })
}


const QualificationsChartPensum = () => (
  <PieChart
    style={{ height: 200 }}
    valueAccessor={({ item }) => item.amount}
    data={data}
    spacing={0}
    outerRadius={'95%'}
  >
  
    <Labels />
  </PieChart>
)

export default QualificationsChartPensum