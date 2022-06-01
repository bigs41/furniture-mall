export const state = () => ({
  // list: []
  // example
  list : [
    {
        // url:"/home",
        text:"Deal",
    },
    {
        // url:"/manage",
        text:"การจัดการผู้ใช้"
    },
    {
        // url:"/dashboard",
        text:"Dashboard"
    },
  ]
})

export const mutations = {
  setList(state, list) {
    state.list = list
  },
}