import { createStore } from 'vuex';
import type { Commit } from 'vuex';

type State = {
  todos: Item[];
  count: number;
};

type Item = {
  id: number;
  text: string;
  done: boolean;
  count: number;
};

const store = createStore({
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
});

const state = {
  todos: [],
};

const getters = {
  doneTodos: (state: State) => {
    return state.todos.filter((todo) => todo.done);
  },
};

const mutations = {
  increment: (state: State, payload: { amount: number }) => {
    // 变更状态
    state.count += payload.amount;
  },
};

const actions = {
  incrementAsync: ({ commit }: { commit: Commit }) => {
    setTimeout(() => {
      commit('increment');
    }, 1000);
  },
};