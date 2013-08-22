/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
		'id':'1', 'name':'FansWorldUser', 'passwd':"demo", 'logon' : 0
  });
};