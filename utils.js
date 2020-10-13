

export function findById(someArray, someId) {
    for (const booger of someArray) {
        if (booger.id === someId) {
            return booger;
        }
    }
}
