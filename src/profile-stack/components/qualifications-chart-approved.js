import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'



const QualificationsChartApproved = () => (
    <ProgressCircle
      style={{ height: 200 }}
      progress={0.45}
      progressColor={'#3ABEFF'}
      startAngle={-Math.PI * 0.8}
      endAngle={Math.PI * 0.8}
      strokeWidth={10}
      backgroundColor={'#E1E1E1'}
    >
      <Text
        fill={'white'}
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={28}
        stroke={'white'}
        strokeWidth={0.3}>45%</Text>
    </ProgressCircle>
)

export default QualificationsChartApproved