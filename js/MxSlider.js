;( function( $ ){

	$.defaultConfig = {
		
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

			CreateSlider = {

			CreateItemSlider: function(){
				root.children().addClass( 'mx-slide' );
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

			// Contr Initialise
			init: function(){
				// add class children item
				this.CreateItemSlider();
				// get count slides
				this.GetCountSlide();
				// set z-index for slide
				this.SetZIndex();
			}
		};

		/* Initialise */ 
		CreateSlider.init();

		/* -------------------------------------------------
		*                Functions slider
		--------------------------------------------------*/
		var MotionSlide = {

			NextSlide: function(){
				$( '.mx-next' ).on( 'click', function(){

					$( '.mx-slide' ).each( function(){
						getZi = $( this ).css( 'z-index' );
						$( this ).css( 'z-index', parseInt( getZi ) + 1 );
					} );

					$( '.mx-slide' ).each( function(){
						if( $( this ).css( 'z-index' ) == countSlide + 1 ){
							$( this ).css( 'z-index', '1' );
						}
					} );

				} );
			},

			PrevSlide: function(){
				$( '.mx-prev' ).on( 'click', function(){

					$( '.mx-slide' ).each( function(){
						getZi = $( this ).css( 'z-index' );
						$( this ).css( 'z-index', parseInt( getZi ) - 1 );
					} );

					$( '.mx-slide' ).each( function(){
						if( $( this ).css( 'z-index' ) == 0 ){
							$( this ).css( 'z-index', countSlide );
						}
					} );

				});
			},

			// Contr Motion
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
