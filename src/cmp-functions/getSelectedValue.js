import { ref } from '@vue/composition-api';

export const getSelectedValue = (val1, val2) => {
    const state = ref({
        color1: "",
        arr: []
    });

    const getColorVal = () => {
        state.color1 = val1

        if (val2) {
            state.arr = [val1, val2];
        }
    }

    return {state, getColorVal}
}