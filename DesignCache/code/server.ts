import { LRUCache } from "./src/LRUCache";

const lruCache = new LRUCache<string,string>(3)

lruCache.put("101", "Harshit")
lruCache.put("201", "Rutik")
lruCache.put("301", "Jinay")



let value = lruCache.get("201")
console.log(value);

lruCache.put("401", "Sanjeet")


value = lruCache.get("401")
console.log(value);


lruCache.put("501", "aman")