/* vue */
import { useState } from 'react';

function useLoading() {
    const [loading, setLoading] = useState(false);

    const showLoading = () => {
        setLoading(true)
    }

    const hideLoading = () => {
        setLoading(false)
    }

    const clearLoading = () => {
        setLoading(false)
    }

    return {
        loading,
        setLoading,
        clearLoading,
        showLoading,
        hideLoading
    }
}

export {
    useLoading
}
