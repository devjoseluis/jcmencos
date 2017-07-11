<template>
<div class="uk-container uk-container-small uk-text-center uk-position-relative">
	<nav id="navigation" class="uk-navbar-container uk-navbar-transparent" uk-navbar>
        <div class="uk-navbar-left">
        	<a href="" class="uk-navbar-item uk-logo">
        		<img src="./jc-logo.png">
        	</a>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
            	<li>
                    <a href="#">Home</a>
                </li>
            	<li>
                    <a href="#">Gallery</a>
                    <div class="uk-navbar-dropdown" uk-dropdown="pos: top-left; offset: -25">
                        <ul class="uk-nav uk-navbar-dropdown-nav uk-text-left">
                            <li class="uk-active"><a href="#">Weedings</a></li>
                            <li><a href="#">Food</a></li>
                            <li><a href="#">Artwork</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                    <div class="uk-navbar-dropdown" uk-dropdown="pos: top-left; offset: -25">
                        <ul class="uk-nav uk-navbar-dropdown-nav uk-text-left">
                            <li class="uk-active"><a href="#">Fashion</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Architecture</a></li>
                            <li class="uk-nav-header">Events</li>
                            <li class="uk-nav-divider"></li>
                            <li><a href="#">Baptism</a></li>
                        	<li><a href="#">Fifteen</a></li>
                        	<li><a href="#">Graduations</a></li>
                        	<li><a href="#">Corporate</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
		</div>
	</nav>
 </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style lang="scss" scoped>
	#navigation{
		margin-bottom: 40px;
	    margin-top: 40px;
	}
</style>