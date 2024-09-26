import { createStore } from 'vuex'

const store = createStore({
  state: {
    groups: [
      {
        id: 1,
        name: 'Grupo 1',
        creationDate: '2024-07-21',
        participants: {
          Juan: { amount: 50, date: '2024-09-21', pendingPayment: 500 },
          Ana: { amount: 100, date: '2024-09-22', pendingPayment: 100 },
          Adriana: { amount: 100, date: '2024-09-22', pendingPayment: 100 },
          Carlos: { amount: 100, date: '2024-09-22', pendingPayment: 100 },
          David: { amount: 100, date: '2024-09-22', pendingPayment: 100 },
          Elena: { amount: 100, date: '2024-09-22', pendingPayment: 100 }
        }
      },
      {
        id: 2,
        name: 'Grupo 2',
        creationDate: '2024-06-30',
        participants: {
          Pedro: { amount: 150, date: '2024-08-11', pendingPayment: 800 },
          Raul: { amount: 300, date: '2024-08-15', pendingPayment: 500 },
          Sofia: { amount: 400, date: '2024-08-20', pendingPayment: 400 },
          Teresa: { amount: 500, date: '2024-08-25', pendingPayment: 300 },
          Ubaldo: { amount: 600, date: '2024-08-30', pendingPayment: 200 },
          Victor: { amount: 700, date: '2024-09-01', pendingPayment: 100 }
        }
      },
      {
        id: 3,
        name: 'Grupo 3',
        creationDate: '2024-03-13',
        participants: {
          Maria: { amount: 200, date: '2024-07-01', pendingPayment: 700 },
          Luis: { amount: 250, date: '2024-07-05', pendingPayment: 300 },
          Aldo: { amount: 300, date: '2024-07-10', pendingPayment: 200 },
          Brenda: { amount: 350, date: '2024-07-15', pendingPayment: 100 },
          Cesar: { amount: 400, date: '2024-07-20', pendingPayment: 50 },
          Dalia: { amount: 450, date: '2024-07-25', pendingPayment: 25 },
          Edgar: { amount: 500, date: '2024-07-30', pendingPayment: 10 }
        }
      }
    ]
  },
  getters: {
    getGroups: (state) => state.groups,
    getGroupById: (state) => (id) => state.groups.find((group) => group.id === id)
  }
})

export default store
