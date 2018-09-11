
import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { View } from 'react-native'



const QualificationsChartCredits = () => (
    <ProgressCircle
      style={{ height: 200 }}
      progress={0.24}
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
        strokeWidth={0.3}>24%</Text>
    </ProgressCircle>
)

export default QualificationsChartCredits