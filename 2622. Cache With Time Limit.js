/**
 * TimeLimitedCache class that provides a cache with time-limited entries.
 */
class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }
     
    /**
     * Sets a key-value pair in the cache with a specified duration.
     *
     * @param {string} key - The key of the cache entry.
     * @param {*} value - The value of the cache entry.
     * @param {number} duration - The duration in milliseconds for which the entry should stay in the cache.
     * @returns {boolean} - Returns true if the key already existed, otherwise false.
     */
    set(key, value, duration) {
        const alreadyExist = this.cache.get(key);
        
        if (alreadyExist) {
            clearTimeout(alreadyExist.timeoutId);
        }
        
        const timeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        
        this.cache.set(key, { value, timeoutId });
        return Boolean(alreadyExist);
    }
    
    /**
     * Gets the value associated with the key from the cache.
     *
     * @param {string} key - The key of the cache entry.
     * @returns {*} - The value of the cache entry, or -1 if the key does not exist.
     */
    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }
    
    /**
     * Returns the number of active cache entries.
     *
     * @returns {number} - The number of active cache entries.
     */
    count() {
        return this.cache.size;
    }
}

// Example usage
const cache = new TimeLimitedCache();
console.log(cache.set("a", 1, 3000)); // false (new entry)
console.log(cache.get("a")); // 1
console.log(cache.count()); // 1
setTimeout(() => {
    console.log(cache.get("a")); // -1 (expired)
    console.log(cache.count()); // 0
}, 4000);
