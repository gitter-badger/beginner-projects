(function(){
	var modal = {

		config: { // default values of the modal popup.
			effect: 'fadeToggle', // options: 'fadeToggle', 'slideToggle'
			speed: 300
		},

		container : $('#modal'), // modal id.

		init: function(config) { // initiate.
			$.extend(this.config, config); // merges modal.init({config values}) below with modal.config (above), effectively rewriting all used values.
			$('#show_toggle').on('click', this.show);
		},

		show: function() {
			var mod = modal,
			cont = modal.container,
			conf = modal.config;

			if (cont.is(':hidden')) {
				mod.close.call(cont);
				cont[conf.effect](conf.speed);
			}
		},

		close: function() {
			var $this = $(this); // refers to #modal

			if ( $this.find('span.close').length) return; // .length only exists if the span.close exists.
			$('.close').on('click', function(){
				$this[modal.config.effect](modal.config.speed);
			});
		}
	};

	modal.init({
		// effect:
		// speed: 
	});
})();