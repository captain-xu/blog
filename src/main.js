import Vue from 'vue'
import $ from 'jquery'

var nav = new Vue({
	el: '#nav',
	data: {
	    navList: [
	      { name: 'INTRO', isSelect: true},
	      { name: 'BLOG', isSelect: false},
	      { name: 'GALLERY', isSelect: false},
	      { name: 'VIDEO', isSelect: false},
	      { name: 'ABOUT', isSelect: false}
	    ]
	},
	methods: {
	    slide: function (nav, list) {
	    	for (var i = 0; i < list.length; i++) {
	    		list[i].isSelect = false;
	    	}
	        nav.isSelect = true;
	    }
    }
})

require('../src/css/main.less')
