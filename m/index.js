var panel;
var bar;
var home;
var p_feeds;
var ffv;
var edit;
var about;
var edittbar;
function ready() {
	// home panel
	home = new Ext.Component({
			title: 'Home',
			iconCls: 'home',
			cls: 'panel-home',
			html: '<div>placeholder</div>'
	});
	// feed list, fullfeedview panel
	p_feeds = new Ext.Component({
			title: 'Feeds',
			iconCls: 'more',
			cls: 'panel-feeds'
	});
	// edit feeds panel
	edit = new Ext.Component({
			title: 'Edit',
			iconCls: 'settings',
			cls: 'panel-edit',
			listeners: {
				show: function(){
					panel.dockedItems.items[0].items.items[0].hide();
					panel.dockedItems.items[0].items.items[2].show();
				},
				hide: function(){if(typeof panel !== 'undefined'){
						panel.dockedItems.items[0].items.items[0].show();
						panel.dockedItems.items[0].items.items[2].hide();
					}
				}
			}
	});
	// about panel
	about = new Ext.Component({
			title: 'About',
			iconCls: 'info',
			cls: 'panel-about'
	});
	// main panel
	panel = new Ext.TabPanel({
			fullscreen: true,
			items: [home,p_feeds,edit,about],
			tabBar: {
				dock: 'bottom',
				layout: {pack: 'center'}
			},
			dockedItems: [{
					dock: 'top',
					xtype: 'toolbar',
					title: 'TWReader',
					items: [
						{text: 'Update',id: 'btnUpdate'},
						{xtype: 'spacer'},
						{text: 'Add',id: 'btnAdd',hidden:true}
					]
			}],
			cardSwitchAnimation: false
	});
}

Ext.setup({
		icon: '../apple-touch-icon.png',
		glossOnIcon: false,
		onReady: ready
});