/**
 *
 * @param obj (leanCloud查询返回对象)
 * @returns formatObj
 */
function discountFormat(obj) {
    console.log(obj)
    var retObj = {};
    retObj.id = obj.id;
    retObj.background_url = obj.get('background_url');
    console.log(retObj);
    return retObj;
}

module.exports = {
    discountFormat: discountFormat
}