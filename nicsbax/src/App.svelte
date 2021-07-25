<script>
	export let name;
</script>

<header>
	<div class="header">
		<section class="top">
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 197.7 166" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-2">
				<path d="M197.9 55.9L169.9 127.4 64.5 127.4 27.6 29.8 0 29.8 0.2 16.7 36.5 16.7 73.4 114.3 160.9 114.3 183 55.9"></path>
				<circle cx="143.8" cy="153" r="13"></circle>
				<circle cx="90.8" cy="153" r="13"></circle>
				<text text-anchor="middle" x="116" y="35">0</text>
			</svg>
		</section>
		<section class="bottom">
			<span class="logo">
				<p class="name">NICSBAX.SHOP</p>
			</span>
		</section>
	</div>
</header>

<main>
	<img src="https://static.wixstatic.com/media/0784c1_1981496b54f940cda1b0d894ebfbb7a4~mv2.jpg/v1/fill/w_2543,h_966,al_c,q_90,usm_0.66_1.00_0.01/0784c1_1981496b54f940cda1b0d894ebfbb7a4~mv2.webp" alt="bag">
</main>

<style>
	.header{
		padding-left: 8rem;
		padding-right: 8rem;
		height: 150px;
		display: flex;
		flex-direction: column;
	}

	.top{
		height: 50%;
		flex-shrink: 0;
    	flex-grow: 1;
	}

	.bottom{
		height: 50%;
		border-top: 2px solid white;
		flex-shrink: 0;
    	flex-grow: 1;
	}

	.name{
		color: white;

	}

	svg{
		height: 30px;
		align-self: bottom;
	}
	
	svg > path{
		fill: white; 
	}
	svg > circle{
		fill: white; 
	}
	svg > text{
		height: 50px;
		color: green;
	}

	img{
		width: 100%;
	}

	main {
		text-align: center;
		/* padding: 1em; */
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>