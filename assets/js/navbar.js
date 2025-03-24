const nav = document.querySelector(".navbar");

nav.innerHTML = `
	<div class="container-fluid py-0">
		<a class="navbar-brand d-flex flex-row" href="https://aapchambers.com">
			<span><img src="./assets/img/logo1.png"></span>
            <p class="m-auto">Adedayo Adesanya<br>Peters Chambers</p>
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ms-0 ms-auto">
				<li class="nav-item my-auto">
					<a class="nav-link" href="./index.html">Home</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nav-link" href="areas-of-practice.html">Areas of Practice</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nav-link" href="legal-matters.html">Legal Matters</a>
				</li>
                <li class="nav-item my-auto">
					<a class="nav-link" href="about-us.html">About Us</a>
				</li>
				<li class="nav-item ct my-auto">
					<a class="nav-link ct btn" href="./contact-us.html">Contact Us</a>
				</li>
			</ul>
		</div>
	</div>
    `;


   
   
   
   
   
