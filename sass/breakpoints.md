```sass
// Example breakpoints
@mixin breakpoints($value){
	@if( $value == 'desktop'){
		@media (max-width: 1200px){ @content;}
	}
	@else if( $value == 'tablet' ){
		@media (min-width: 600px){@content;}
	}
	@else if( $value == 'mobile' ){
		@media (min-width: 320px){@content;}
	}
}

// Implemented
.sidebar{
	width: 300px;
	@mixin breakpoints('tablet'){width: 200px;}
	@mixin breakpoints('mobile'){width: 100px;}
}

// Result
.sidebar {
  width: 300px;
}

@media (min-width: 600px) {
  .sidebar {
    width: 200px;
  }
}

@media (min-width: 320px) {
  .sidebar {
    width: 100px;
  }
}
