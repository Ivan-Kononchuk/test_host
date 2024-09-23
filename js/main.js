// burger handler
(function(){
	const burgerItem= document.querySelector('.burger');
	const menu= document.querySelector('.header__nav');
	const menuLinks= document.querySelectorAll('.header__link');
	const menuCloseItem= document.querySelector('.header__nav-close');

	burgerItem.addEventListener('click', ()=> {
		menu.classList.add('header__nav_active');
	});

	menuCloseItem.addEventListener('click', ()=> {
		menu.classList.remove('header__nav_active');
	});

	if (window.innerWidth <= 920) {
		for (let i= 0; i < menuLinks.length; i++){
			menuLinks[i].addEventListener('click', ()=> {
				menu.classList.remove('header__nav_active');
			});
		}
	};
}());



// slow scroll
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                if (currentTarget.startsWith('#')) {
                    event.preventDefault();
                }
                smoothScroll(currentTarget, 500);
            });
        });
    };
    scrollTo();
    history.replaceState(null, null, window.location.pathname);  // delete #top from the url
}());
