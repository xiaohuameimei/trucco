/*
* @Author: Marte
* @Date:   2017-07-06 16:53:21
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-11 10:39:41
*/

$(function(){
        $(".menu_xs").on("click",function(){
            $(".menu_xs").removeClass("active");
            $(this).addClass("active");
        });
    });
var array = [0,1,2,3];
var array1 = [4,5,6,7];
var array2 = [8,9,10,11];
var array3 = [12,13,14,15];
var array4 = [16,17,18,19];
var array5 = [20,21,22,23];
var array6 = [24,25,26,27];
var array7 = [28,28,30,31];
var array8 = [32,33,34,35];
var array9 = [36,37,38,39];
var app = new Vue({
	el: "#app",
	data(){
		return {
			array: array,
			array1: array1,
			array2: array2,
			array3: array3,
			array4: array4,
			array5: array5,
			array6: array6,
			array7: array7,
			array8: array8,
			array9: array9,
		};
	},
	methods: {
		deleteOrder(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array.indexOf(item);
				self.array.splice(index,1)
			}
		},
		deleteOrder1(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array1.indexOf(item);
				self.array1.splice(index,1)
			}
		},
		deleteOrder2(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array2.indexOf(item);
				self.array2.splice(index,1)
			}
		},
		deleteOrder3(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array3.indexOf(item);
				self.array3.splice(index,1)
			}
		},
		deleteOrder4(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array4.indexOf(item);
				self.array4.splice(index,1)
			}
		},
		deleteOrder5(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array5.indexOf(item);
				self.array5.splice(index,1)
			}
		},
		deleteOrder6(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array6.indexOf(item);
				self.array6.splice(index,1)
			}
		},
		deleteOrder7(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array7.indexOf(item);
				self.array7.splice(index,1)
			}
		},
		deleteOrder8(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array8.indexOf(item);
				self.array8.splice(index,1)
			}
		},
		deleteOrder9(item){
			var self = this;
			var flag = confirm("确认是否删除?");
			if(flag){
				var index = self.array9.indexOf(item);
				self.array9.splice(index,1)
			}
		},
	},
	computed:{
		total1(){
			var total = 0;
			var self = this;
			return (self.array5.length * 150) + ".00";
		},
		total2(){
			var total = 0;
			var self = this;
			return self.array6.length * 150 + ".00";
		},
		total3(){
			var total = 0;
			var self = this;
			return self.array7.length * 150 + ".00";
		},
		total4(){
			var total = 0;
			var self = this;
			return self.array8.length * 150 + ".00";
		},
		total5(){
			var total = 0;
			var self = this;
			return self.array9.length * 150 + ".00";
		},
	}
});
    function returnBack(){
        window.history.go(-1);
    }