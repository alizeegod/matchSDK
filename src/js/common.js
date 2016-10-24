
var $ = require('jquery');
var obj = $("#app");
console.log(obj)
function AjaxHelper() {
    this.ajax = function(url, type, dataType, data, callback) {
        $.ajax({
            url: url,
            type: type,
            dataType: dataType,
            data: data,
            success: callback,
            error: function(xhr, errorType, error) {
                alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
            }
        })
    }
}
AjaxHelper.prototype.get = function(url, data, callback) {
    this.ajax(url, 'GET', 'json', data, callback)
}
AjaxHelper.prototype.post = function(url, data, callback) {
    this.ajax(url, 'POST', 'json', data, callback)
}

AjaxHelper.prototype.put = function(url, data, callback) {
    this.ajax(url, 'PUT', 'json', data, callback)
}

AjaxHelper.prototype.delete = function(url, data, callback) {
    this.ajax(url, 'DELETE', 'json', data, callback)
}

AjaxHelper.prototype.jsonp = function(url, data, callback) {
    this.ajax(url, 'GET', 'jsonp', data, callback)
}

AjaxHelper.prototype.constructor = AjaxHelper;
// module.exports = AjaxHelper;
// module.exports = {
// 	data : "aaa",
// 	url : {
// 		listUrl : "http://10.0.14.71/cs/vue/src/json/sum.json",
// 		arcUrl : "http://10.0.14.71/cs/vue/src/json/cupdata.json",
// 		vUrl : "http://10.0.14.71/cs/vue/src/json/updata.json"
// 	},
// 	methods: {
//         getCustomers: function() {
//             obj.$http.get(url.listUrl)
//                 .then((response) => {
//                     // this.$set('gridData', response.data)
//                     console.log(response.data)
//                 })
//                 .catch(function(response) {
//                     console.log(response)
//                 })
//         }
//     }
// }
