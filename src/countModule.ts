import { mergeRight } from 'ramda';
import { CountModuleState, AddCounterAction, SubCounterAction, Action} from './countTypes';

const initialState: CountModuleState = {
  counter: 0
};

const ADD_COUNTER_ACTION = 'ADD_COUNTER_ACTION';
const SUB_COUNTER_ACTION = 'SUB_COUNTER_ACTION';

const countModule: (CountModuleState, Action) => CountModuleState = (state: CountModuleState = initialState, action: Action) => {
  switch(action.type) {
    case ADD_COUNTER_ACTION: return mergeRight(state, { counter: state.counter + 1 });
    case SUB_COUNTER_ACTION: return mergeRight(state, { counter: state.counter - 1 });
    default: return state;
  }
};

export const addCounterAction: () => AddCounterAction = () => ({
  type: ADD_COUNTER_ACTION
});

export const subCounterAction: () => SubCounterAction = () => ({
  type: SUB_COUNTER_ACTION
});

export default countModule;
