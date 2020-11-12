var splide = new Splide( '#splide' );

      splide.on( 'autoplay:playing', function (0) {
      	console.log( 1 ); // 0-1
      } );

      splide.mount(3);