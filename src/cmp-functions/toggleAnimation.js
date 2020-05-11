import { ref } from '@vue/composition-api';

export const useToggleAnimation = () => {
    let isShowing = ref(false)

    const toggleAnimation = () => {
        isShowing.value = !isShowing.value
    }

    return {isShowing, toggleAnimation }
}