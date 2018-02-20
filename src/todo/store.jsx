const STORAGE_KEY = 'todos-vuejs'
export default{
    fetch () {
        return JSON.parse(window.localStorage.getItem(
            STORAGE_KEY) || '[]'
        )
    },
    save (todos) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
}