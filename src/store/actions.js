var actions = {};

actions.alert = function(store, params) {
    store.dispatch('ALERT', params);
    setTimeout(function() {
        store.dispatch('HIDEALERT');
    }, 2500);
}
actions.save = function(store, params) {
    store.dispatch('SAVE', params);
}
actions.get = function(store, params) {
    store.dispatch('GET', params);
}
actions.setusercon = function(store, params) {
    store.dispatch('SETUSERCON', params);
}
// actions.modalTable = function(store, params) {
//     store.dispatch('MODALTABLE', params);
// }

// actions.hideModalTable = function(store) {
//     store.dispatch('HIDEMODALTABLE');
// }

// actions.setCurrentPageDefaultData = function(store, data) {
//     store.dispatch('SETCURRENTPAGEDEFAULTDATA', data);
// }

// actions.confirm = function(store, params) {
// 	store.dispatch('CONFIRM', params);
// }

// actions.exportConfirm = function(store, params) {
// 	store.dispatch('EXPORTCONFIRM', params);
// }

// actions.tabCheckbox = function(store, params) {
// 	store.dispatch('TABCHECKBOX', params);
// }

module.exports = actions;
