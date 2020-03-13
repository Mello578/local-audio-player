import { ALL_DATA } from '../../constants/allData';

export function addAllDataAction(data) {
    return {
        type: ALL_DATA,
        data
    };
}
