
import { AsyncStorage } from 'react-native';
export const StateService = {
    set: (value) => {
        return AsyncStorage.setItem('SelectedState', JSON.stringify(value));
    },
    get: () => {
        return AsyncStorage.getItem('SelectedState').then(t => t != null ? JSON.parse(t) : null)
    },
    remove: () => {
        return AsyncStorage.removeItem('SelectedState')
    }
}