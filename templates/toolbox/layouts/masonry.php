<!--
Description: A basic masonry layout example. Child elements should be resuable components and not attached to this. Its purpose is layout.
Tags: layout, masonry
Preview: true
-->

<div class="masonry">
	<div class="masonry__items">
		<?php for($i=0; $i<20; $i++): ?>
			
		<div class="masonry__item">

			<div class="masonry__item__inner" data-animate="animated bounceIn">

				<div class="component">
					<img class="component__image" src="http://fakeimg.pl/650x<?php echo rand(100, 600);?>/eeeeee/666/?text=img" alt="fake img"/>
					<p class="component__text">This is a component within the masonry layout. This way this component can be reused. So it should respond to its parent structure.</p>
				</div><!-- an example of component within a layout, this should be reusable and be saved in /assets/css/scss/components -->
				
			</div>
		</div><!-- end of masonry item -->

		<?php endfor; ?> 

	</div><!-- end of masonry row -->
</div><!-- end of masonry section--> 