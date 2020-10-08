import { Effect, Reducer } from 'umi';

import { CardListItemDataType } from './data.d';
import { queryFakeList } from './service';

export interface StateType {
  list: CardListItemDataType[];
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    fetch: Effect;
  };
  reducers: {
    queryList: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'listCardList',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      const res = response.data.data
      yield put({
        type: 'queryList',
        payload: Array.isArray(res) ? res : [],
      });
    },
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};

export default Model;
