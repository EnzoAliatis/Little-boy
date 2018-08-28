export const defineColor = formation => {
  let color
  switch (formation) {
    case 'basica':
      return color = '#E8D246'

    case 'profesional':
      return color = '#9CBA5F'

    case 'optativa':
      return color = '#BE5150'

    case 'humana':
      return color = '#B4C6DB'

    case 'curricular':
      return color = '#F5964F'

    default:
      return color = '#9CBA5F'
  }
}