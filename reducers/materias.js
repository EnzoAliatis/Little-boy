



const initialState = [
  {
    id: '123',
    name: 'Métodos Numéricos',
    formation: 'basica',
    classroom: '301',
    parallel: '6º A',
    teacher: 'Ing. Enzo Aliatis',
    email: 'enzo.aliatis@live.uleam.edu.ec',
    scoreParcials: ['10.00', '9.79'],
    faults: '0',
    days: [0, 2, 4],
    hour: ['9:00', '11:00'],

  },
  {
    id: '456',
    name: 'Sitemas Expertos II',
    formation: 'profesional',
    classroom: '302',
    parallel: '6º B',
    teacher: 'Ing. Lebron James',
    email: 'lebron.james@live.uleam.edu.ec',
    scoreParcials: ['8.90', '9.23'],
    faults: '5',
    days: [0, 2, 4],
    hour: ['11:00', '13:00'],

  },
  {
    id: '789',
    name: 'Cultura Física',
    formation: 'humana',
    classroom: 'Cancha',
    parallel: '6º A',
    teacher: 'Ing. Arnold Shaseneguer',
    email: 'el-arnold@live.uleam.edu.ec',
    scoreParcials: ['8.99', '2.90'],
    faults: '10',
    days: [1, 3],
    hour: ['9:00', '11:00'],

  },
  {
    id: '1011',
    name: 'Valores y Ética Profesional',
    formation: 'curricular',
    classroom: '302',
    parallel: '7º A',
    teacher: 'Ing. Rafael Correa',
    email: 'mashi@live.uleam.edu.ec',
    scoreParcials: ['5.00', '4.79'],
    faults: '4',
    days: [1, 3],
    hour: ['11:00', '13:00'],

  },
  {
    id: '1223',
    name: 'Optativa I Certificacion',
    formation: 'optativa',
    classroom: '201',
    parallel: '7º A',
    teacher: 'Ing. Mark Zukember',
    email: 'lebron.james@live.uleam.edu.ec',
    scoreParcials: ['9.40', '9.89'],
    faults: '2',
    days: [2, 4],
    hour: ['15:00', '17:00'],

  },
  {
    id: '2345',
    name: 'Redes de Computadora I',
    formation: 'profesional',
    classroom: '304',
    parallel: '6º A',
    teacher: 'Ing. Julian Assange',
    email: 'wikili@live.uleam.edu.ec',
    scoreParcials: ['8.99', '-'],
    faults: '0',
    days: [0, 4],
    hour: ['17:00', '19:00'],

  },
]


const materias = (state = initialState, action) => {
  return state
}


export const getMateria = (state, idMateria) => {
  let filtered = state.materias.filter(item => item.id == idMateria)
  return filtered[0]
}

export const getMateriaByDay = (materias, day) => {
  let filtered = materias.filter(item => item.days.includes(day))
  return filtered
}

export default materias