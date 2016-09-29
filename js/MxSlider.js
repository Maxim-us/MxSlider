;( function( $ ){

	$.defaultConfig = {
		nav: true, // create forward and backward buttons. If set to "false", the navigation will not be
		timeSlide: 1000 // the length of time
	};

	$.fn.MxSlider = function( params ){
		var settings = $.extend( {}, $.defaultConfig, params );
		SliderPerform( this, settings );
	};

	function SliderPerform( root, settings ){

		/* ---------------------------------------------
		*                Create slider
		----------------------------------------------*/
		var countSlide,
			heightSlide,

			CreateSlider = {

			CreateClass: function(){
				root.addClass( 'mx-slider_wrap' );
			},

			CreateWrap: function(){
				root.wrap( '<div class="MxSlider"></div>' );
			},

			CreateNavigation: function(){
				if( settings.nav == true ){
					$( '<div class="mx-navigation"><div class="mx-prev">Предыдущий</div><div class="mx-next">Следующий</div></div>' ).appendTo( '.MxSlider' );
				}				
			},

			CreateItemSlider: function(){
				root.children().addClass( 'mx-slide' );
			},

			GetHeightItem: function(){
				heightSlide = root.children().eq(0).height();
				setTimeout( function(){ root.css( 'height', heightSlide ); }, 500 );
			},

			GetCountSlide: function(){
				countSlide = root.children( '.mx-slide' ).length;			
			},

			SetZIndex: function(){
				var i = countSlide;
				$( '.mx-slide' ).each( function(){
					$(this).css( 'z-index', i-- );
				} );				
			},

			// Init function
			init: function(){
				// add class
				this.CreateClass();
				// create wrapper
				this.CreateWrap();
				// add class children item
				this.CreateItemSlider();
				// get count slides
				this.GetCountSlide();
				// set z-index for slide
				this.SetZIndex();
				// set height
				this.GetHeightItem();
				// create navigation
				this.CreateNavigation();
			}
		};

		/* Initialise */ 
		CreateSlider.init();

		/* -------------------------------------------------
		*                Functions slider
		--------------------------------------------------*/
		var 
			keyMotion = true,

			MotionSlide = {

			NextSlide: function(){

				$( '.mx-next' ).on( 'click', function(){

					if( keyMotion == true ){

						keyMotion = false;
						$( '.mx-slide' ).each( function(){
							if( $( this ).css( 'z-index' ) == countSlide ){
								$( this ).animate( { 'left': '100%' }, settings.timeSlide );
							}
						});

						setTimeout( function(){
							$( '.mx-slide' ).each( function(){
								getZi = $( this ).css( 'z-index' );
								$( this ).css( 'z-index', parseInt( getZi ) + 1 );
							} );

							$( '.mx-slide' ).each( function(){
								if( $( this ).css( 'z-index' ) == countSlide + 1 ){
									$( this ).css( 'z-index', '1' );
									$( this ).css( 'left', '0%' );
								}								
							} );
							keyMotion = true;
						}, settings.timeSlide + 100 );

					}									

				} );

			},

			PrevSlide: function(){

				$( '.mx-prev' ).on( 'click', function(){

					if( keyMotion == true ){

						keyMotion = false;

						$( '.mx-slide' ).each( function(){
							if( $( this ).css( 'z-index' ) == 1 ){
								$( this ).css( 'left', '100%' );
							}
						});

						setTimeout( function(){
							$( '.mx-slide' ).each( function(){
								getZi = $( this ).css( 'z-index' );
								$( this ).css( 'z-index', parseInt( getZi ) - 1 );
							} );

							$( '.mx-slide' ).each( function(){
								if( $( this ).css( 'z-index' ) == 0 ){
									$( this ).css( 'z-index', countSlide );
									$( this ).animate(  { 'left': '0%' }, settings.timeSlide  );
								}
							} );							
						},100 );

						setTimeout( function(){ keyMotion = true; }, settings.timeSlide + 200 );	
					}									

				});

			},

			// Motion function
			ContrMotion: function(){
				// next slider
				this.NextSlide();
				// prev slider
				this.PrevSlide();
			}
			
		};

		/* Controller */
		MotionSlide.ContrMotion();		
		
	}

} )( jQuery );
