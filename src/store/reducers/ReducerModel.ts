import { TypeKeys } from 'src/store/enums';

export interface ReducerModel<key, T> extends Action<TypeKeys> {
    payload: T;
}

export interface Action<T extends TypeKeys = TypeKeys.OTHER_ACTION> {
    readonly type: T;
}
