/**
 * 
 */
var apiclient = (function(){
	
	
	return {
		
		getBlueprintsByAuthor : function(author, callback) {
			$.get("http://localhost:8080/blueprints/"+author).then(function(data){
				callback(null,data);
			})

		},
		getBlueprintByNameAndAuthor:function(author,bprintName,callback){
			var blueprint = $.get("http://localhost:8080/blueprints/"+author+"/"+bprintName,function(data){
				return data;
			})
			return callback(null,blueprint);
		}
	}
})();