
const Storage = {}

Storage.set = (key,val) => {

    return window.localStorage.setItem(key,val);

}

Storage.get = (key) => {

    return window.localStorage.getItem(key);
    
}

Storage.len = () => {

    return window.localStorage.legth();
    
}

Storage.remove = (key) => {

    return window.localStorage.removeItem(key);
    
}

Storage.clear = () => {

    return window.localStorage.clear();
    
}


export default Storage;