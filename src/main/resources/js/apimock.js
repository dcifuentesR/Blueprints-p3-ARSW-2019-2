/**
 * 
 */

apimock = (function() {
	var mockdata = [];

	mockdata["Blueprint666"] = [ {
		"author" : "Satan",
		"points" : [ {
			"x" : 666,
			"y" : 666
		}, {
			"x" : 69,
			"y" : 420
		} ],
		"name" : "Blueprint666"
	} ];
	mockdata["SampleBPrint"] = [ {
		"author" : "SampleAuthor",
		"points" : [ {
			"x" : 140,
			"y" : 140
		}, {
			"x" : 115,
			"y" : 115
		} ],
		"name" : "SampleBPrint"
	} ]

	
	return{
		getBlueprintByName:function(name,callback){
			callback(null,mockdata[name]);
			
		}
	}
})();