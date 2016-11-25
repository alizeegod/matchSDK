var actions = {};

actions.alert = function(store, params) {
    store.dispatch('ALERT', params);
    setTimeout(function() {
        store.dispatch('HIDEALERT');
    }, 2500);
} 
actions.set = function(store, params) { 
    store.dispatch('SET', params);
}

module.exports = actions;
