export const setLocalStorage =<T>(key: string, data: T) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    }
    catch (err) {
        console.log(`Error setting local storage ${err}`)
    }
}

export const getLocalStorage = (key: string) => {
    try {
        return JSON.parse(localStorage.getItem(key)!)
    } catch (err) {
        console.log(`Error getting local storage ${err}`)
    }
}