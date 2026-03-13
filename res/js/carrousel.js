class Carousel {
    constructor(container) {
        this.container = container;
        this.slider = container.querySelector('.slider');
        this.slides = container.querySelectorAll('.slide');
        this.prevBtn = container.querySelector('.prev');
        this.nextBtn = container.querySelector('.next');
        this.dotsContainer = container.parentElement.querySelector('.dots-container');
        this.currentIndex = 0;

        // Si no hay slides o solo hay uno, ocultar controles
        if (this.slides.length <= 1) {
            if (this.prevBtn) this.prevBtn.style.display = 'none';
            if (this.nextBtn) this.nextBtn.style.display = 'none';
            if (this.dotsContainer) this.dotsContainer.style.display = 'none';
            return;
        }

        // Limpiar y crear nuevos dots basados en el número actual de slides
        this.dotsContainer.innerHTML = '';
        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            this.dotsContainer.appendChild(dot);
        }

        this.dots = this.dotsContainer.querySelectorAll('.dot');
        this.updateDots();
        this.addEventListeners();
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    showSlides(index) {
        if (index >= this.slides.length) {
            this.currentIndex = 0;
        } else if (index < 0) {
            this.currentIndex = this.slides.length - 1;
        } else {
            this.currentIndex = index;
        }
        
        this.slider.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.updateDots();
    }

    nextSlide() {
        this.showSlides(this.currentIndex + 1);
    }

    prevSlide() {
        this.showSlides(this.currentIndex - 1);
    }

    addEventListeners() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSlides(index);
            });
        });

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
    }
}