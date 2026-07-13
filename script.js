
   Mercedes-Benz Gaborone — Interactive Behaviour

document.addEventListener('DOMContentLoaded', function () {

 Car catalogue data 
   NOTE: image URLs are neutral placeholders (picsum.photos).
     Replace the `img` field with real, licensed photography
     of each model before deploying to production. */
  const CARS = [
    { id: 'a-class', name: 'A-Class', category: 'sedan', tag: 'Compact Sedan', price: 'From BWP 520,000', img: 'https://picsum.photos/seed/a-class/800/600',
      desc: 'The entry point to the three-pointed star — compact on the outside, generous with technology on the inside.',
      specs: { 'Body Style': 'Compact Sedan', 'Engine': '1.3L Turbo Petrol', '0–100 km/h': '8.0s', 'Seats': '5' } },
    { id: 'c-class', name: 'C-Class', category: 'sedan', tag: 'Executive Sedan', price: 'From BWP 780,000', img: 'https://picsum.photos/seed/c-class/800/600',
      desc: 'A benchmark executive sedan, balancing everyday comfort with driver-focused precision.',
      specs: { 'Body Style': 'Executive Sedan', 'Engine': '2.0L Turbo Petrol', '0–100 km/h': '7.3s', 'Seats': '5' } },
    { id: 'e-class', name: 'E-Class', category: 'sedan', tag: 'Business Sedan', price: 'From BWP 1,150,000', img: 'https://picsum.photos/seed/e-class/800/600',
      desc: 'The business-class sedan — spacious, quiet, and built for long distances across Botswana\'s highways.',
      specs: { 'Body Style': 'Business Sedan', 'Engine': '2.0L Turbo Petrol / Hybrid', '0–100 km/h': '6.4s', 'Seats': '5' } },
    { id: 's-class', name: 'S-Class', category: 'sedan', tag: 'Luxury Flagship', price: 'From BWP 2,450,000', img: 'https://picsum.photos/seed/s-class/800/600',
      desc: 'The flagship. First-in-class technology and rear-seat comfort that redefines chauffeur-driven travel.',
      specs: { 'Body Style': 'Luxury Sedan', 'Engine': '3.0L Turbo I6 / Hybrid', '0–100 km/h': '5.1s', 'Seats': '5' } },
    { id: 'cla', name: 'CLA Coupe', category: 'coupe', tag: 'Four-Door Coupe', price: 'From BWP 690,000', img: 'https://picsum.photos/seed/cla-coupe/800/600',
      desc: 'A sloping roofline and low stance bring coupe drama to a genuinely usable four-door.',
      specs: { 'Body Style': 'Coupe', 'Engine': '2.0L Turbo Petrol', '0–100 km/h': '6.9s', 'Seats': '4' } },
    { id: 'gla', name: 'GLA', category: 'suv', tag: 'Compact SUV', price: 'From BWP 720,000', img: 'https://picsum.photos/seed/gla-suv/800/600',
      desc: 'Raised ground clearance and a compact footprint make this the ideal city-and-gravel companion.',
      specs: { 'Body Style': 'Compact SUV', 'Engine': '2.0L Turbo Petrol', '0–100 km/h': '8.6s', 'Seats': '5' } },
    { id: 'glc', name: 'GLC', category: 'suv', tag: 'Mid-Size SUV', price: 'From BWP 980,000', img: 'https://picsum.photos/seed/glc-suv/800/600',
      desc: 'The best-selling SUV in the range, tuned for both tarmac commutes and weekend gravel roads.',
      specs: { 'Body Style': 'Mid-Size SUV', 'Engine': '2.0L Turbo Petrol / Hybrid', '0–100 km/h': '6.7s', 'Seats': '5' } },
    { id: 'gle', name: 'GLE', category: 'suv', tag: 'Full-Size SUV', price: 'From BWP 1,380,000', img: 'https://picsum.photos/seed/gle-suv/800/600',
      desc: 'A full-size SUV with three-row flexibility, equally at home on farm roads and school runs.',
      specs: { 'Body Style': 'Full-Size SUV', 'Engine': '3.0L Turbo I6', '0–100 km/h': '6.1s', 'Seats': '7' } },
    { id: 'gls', name: 'GLS', category: 'suv', tag: 'Flagship SUV', price: 'From BWP 1,950,000', img: 'https://picsum.photos/seed/gls-suv/800/600',
      desc: 'The S-Class of SUVs — three rows of full-size comfort with genuine long-range capability.',
      specs: { 'Body Style': 'Flagship SUV', 'Engine': '3.0L Turbo I6', '0–100 km/h': '5.8s', 'Seats': '7' } },
    { id: 'g-class', name: 'G-Class', category: 'suv', tag: 'Off-Road Icon', price: 'From BWP 2,150,000', img: 'https://picsum.photos/seed/g-class-suv/800/600',
      desc: 'Built on a ladder frame with three locking differentials — the Kalahari and Okavango were made for this.',
      specs: { 'Body Style': 'Off-Road SUV', 'Engine': '4.0L Twin-Turbo V8', '0–100 km/h': '5.4s', 'Seats': '5' } },
    { id: 'amg-gt', name: 'AMG GT', category: 'amg', tag: 'Performance Coupe', price: 'From BWP 2,650,000', img: 'https://picsum.photos/seed/amg-gt/800/600',
      desc: 'Hand-built AMG performance in a long-bonnet coupe silhouette, engineered for the open Botswana highway.',
      specs: { 'Body Style': 'Performance Coupe', 'Engine': '4.0L Twin-Turbo V8', '0–100 km/h': '3.2s', 'Seats': '4' } },
    { id: 'amg-c63', name: 'AMG C 63', category: 'amg', tag: 'Performance Sedan', price: 'From BWP 1,890,000', img: 'https://picsum.photos/seed/amg-c63/800/600',
      desc: 'The everyday sedan, sharpened — AMG-tuned suspension and a plug-in hybrid punch.',
      specs: { 'Body Style': 'Performance Sedan', 'Engine': '2.0L Turbo Hybrid', '0–100 km/h': '3.4s', 'Seats': '5' } },
    { id: 'eqs', name: 'EQS', category: 'electric', tag: 'Electric Flagship', price: 'From BWP 2,300,000', img: 'https://picsum.photos/seed/eqs-electric/800/600',
      desc: 'A fully electric flagship with S-Class comfort and a range built for Gaborone-to-Maun.',
      specs: { 'Body Style': 'Electric Sedan', 'Range': '~650 km', '0–100 km/h': '4.3s', 'Seats': '5' } },
    { id: 'eqb', name: 'EQB', category: 'electric', tag: 'Electric SUV', price: 'From BWP 1,050,000', img: 'https://picsum.photos/seed/eqb-electric/800/600',
      desc: 'A compact electric SUV with three-row seating and zero tailpipe emissions for city driving.',
      specs: { 'Body Style': 'Electric SUV', 'Range': '~420 km', '0–100 km/h': '8.0s', 'Seats': '7' } }
  ];

   Render car grid 
  const grid = document.getElementById('carGrid');
  const modelSelect = document.getElementById('modelSelect');

  function cardTemplate(car) {
    return `
      <div class="col-sm-6 col-lg-4 car-card-col" data-category="${car.category}">
        <div class="car-card">
          <div class="car-card-img-wrap">
            <img src="${car.img}" alt="Mercedes-Benz ${car.name}" loading="lazy">
            <span class="car-card-category">${car.tag}</span>
          </div>
          <div class="car-card-body">
            <h3>${car.name}</h3>
            <p class="car-card-tag">${car.desc.split(' ').slice(0,10).join(' ')}&hellip;</p>
            <div class="car-card-footer">
              <span class="car-price">${car.price}</span>
              <button class="btn-view" data-id="${car.id}" data-bs-toggle="modal" data-bs-target="#carModal">View Details</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  grid.innerHTML = CARS.map(cardTemplate).join('');

  // Populate the test-drive class dropdown from the same dataset
  modelSelect.innerHTML += CARS.map(c => `<option value="${c.name}">${c.name} (${c.tag})</option>`).join('');

  /* ---------- Filter buttons ---------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.car-card-col').forEach(col => {
        const match = filter === 'all' || col.dataset.category === filter;
        col.classList.toggle('d-none', !match);
      });
    });
  });

  /* ---------- Car detail modal ---------- */
  const carModalEl = document.getElementById('carModal');
  carModalEl.addEventListener('show.bs.modal', (event) => {
    const trigger = event.relatedTarget;
    const car = CARS.find(c => c.id === trigger.dataset.id);
    if (!car) return;
    document.getElementById('carModalLabel').textContent = `Mercedes-Benz ${car.name}`;
    document.getElementById('modalImg').src = car.img;
    document.getElementById('modalImg').alt = `Mercedes-Benz ${car.name}`;
    document.getElementById('modalCategory').textContent = car.tag;
    document.getElementById('modalDesc').textContent = car.desc;
    document.getElementById('modalSpecs').innerHTML = Object.entries(car.specs)
      .map(([k, v]) => `<li><span>${k}</span><span>${v}</span></li>`)
      .concat(`<li><span>Guide Price</span><span>${car.price}</span></li>`)
      .join('');
  });

  /* ---------- Navbar scroll state ---------- */
  const nav = document.getElementById('mainNav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 500);
  }
  document.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- Back to top ---------- */
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Animated stat counters (Intersection Observer) ---------- */
  const statEls = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  statEls.forEach(el => statObserver.observe(el));

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Testimonial carousel dots ---------- */
  const carouselEl = document.getElementById('testimonialCarousel');
  const dotsWrap = document.getElementById('carouselDots');
  const slideCount = carouselEl.querySelectorAll('.carousel-item').length;
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.style.cssText = 'width:8px;height:8px;border-radius:50%;border:none;background:rgba(201,205,211,.3);';
    dot.addEventListener('click', () => bootstrap.Carousel.getOrCreateInstance(carouselEl).to(i));
    dotsWrap.appendChild(dot);
  }
  carouselEl.addEventListener('slide.bs.carousel', (e) => {
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, idx) => {
      d.style.background = idx === e.to ? '#c9cdd3' : 'rgba(201,205,211,.3)';
    });
  });

  /* ---------- Test drive form validation (client-side only) ---------- */
  const form = document.getElementById('testDriveForm');
  const dateInput = document.getElementById('preferredDate');
  dateInput.min = new Date().toISOString().split('T')[0];

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    form.classList.add('was-validated');
    document.getElementById('formSuccess').classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
    setTimeout(() => document.getElementById('formSuccess').classList.add('d-none'), 6000);
  });

  /* ---------- Newsletter form (client-side only) ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    input.value = 'Thank you for subscribing!';
    setTimeout(() => { input.value = ''; }, 3000);
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
