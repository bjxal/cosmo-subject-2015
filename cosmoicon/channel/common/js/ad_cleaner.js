/**
 * 当指定广告不存在时则清理
 *
 * 调用示例:
 * 		AdCleaner.clear('123,456');
 * 		AdCleaner.clearAll();
 */
var AdCleaner = {
	/**
	 * 清理换行和空格
	 * @param string ids 刊例ID(多组以逗号分隔)
	 */
	trim: function(str){
		str = str.replace(/\s+/g, "");		
		str = str.replace(/[\r\n]/g, "");
		return str;
	},

	/**
	 * 指定刊例无广告则将其隐藏
	 * @param string ids 刊例ID(多组以逗号分隔)
	 */
	clear: function(ids){
		var aIdList = ids.split(',');
		for (i=0;i<aIdList.length;i++){
			var AdPlaceId = 'TR_SYS_' + aIdList[i];
			var objDoc    = document.getElementById(AdPlaceId);
			if(objDoc != null){
				var sAdContent = objDoc.innerHTML;
				sAdContent = this.trim(sAdContent);
				if (sAdContent == "") {
					objDoc.style.display='none';
				}
			}
		}
	},

	/**
	 * 遍历全部DIV刊例，无广告则隐藏
	 * @param string ids 刊例ID(多组以逗号分隔)
	 */
	clearAll: function(){
		var i;
		var reg = /^TR_SYS_(\d){1,}(_){0,}(\d){1,}$/;
		var aAllDiv=document.getElementsByTagName("div");
		for(i=0;i<aAllDiv.length;i++){
			var sObjId = aAllDiv[i].id;
			if(sObjId.match(reg)){
				var sAdContent = aAllDiv[i].innerHTML;
				sAdContent = this.trim(sAdContent);
				if(!sAdContent || sAdContent==''){
					aAllDiv[i].style.display='none';
				}
			}
		}
	}
};