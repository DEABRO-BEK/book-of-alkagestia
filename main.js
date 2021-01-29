Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
				if(slot.id==ItemID.clearinv){
for(var i = 0; i < 40; i++){
				var sloot = Player.getInventorySlot(i);
				if(sloot.id==4){
					Player.setInventorySlot(i,0)
}}}}});