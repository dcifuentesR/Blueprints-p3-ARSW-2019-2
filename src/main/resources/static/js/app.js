/**
 * 
 */

var app =(function(){
	
	var selectedAuthor;
	var selectedAuthorBlueprints;
	
	
	
	return {
		
		selectAuthor:function(author){
			apimock.getBlueprintsByAuthor(author,function(error,blueprints){
				if(error){
					return console.log("hubo un error");
				}else{
					selectedAuthor = blueprints.author;
					selectedAuthorBlueprints = blueprints;
				}
			})
		},
		
		updateBlueprintList:function(author){
			var bprintTable =$("#bprintBody");
			console.log(author);
			bprintTable.empty();
			this.selectAuthor(author);
			//-------------------MAP TO OBJECT--------------------
			reducedBPrintList=selectedAuthorBlueprints.map(function(currentBPrint){
				var bprints={};
				bprints["name"]=currentBPrint.name;
				bprints["points"]=currentBPrint.points.length;
				return bprints;
				
			});
			//-------------------MAP TO TABLE----------------------
			reducedBPrintList.forEach(function(currentBPrint){
				bprintTable.append("<tr>" +
						"<td>"+currentBPrint.name+"</td>" +
						"<td>"+currentBPrint.points+"</td>" +
						"</tr>");
			});
			
			bprintTable.append();
		}
	}
})();