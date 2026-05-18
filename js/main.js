    const menuButton = document.querySelector('#menuButton');
    const navLinks = document.querySelector('#navLinks');
    const year = document.querySelector('#year');
    const faqItems = document.querySelectorAll('.faq-item');
    const mediaGrid = document.querySelector('#mediaGrid');
    const mediaEmpty = document.querySelector('#mediaEmpty');
    const filterButtons = document.querySelectorAll('.filter-button');

    const jackrabbitLinks = {
      registration: '#',
      trial: '#',
      schedule: '#',
      portal: '#'
    };



    year.textContent = new Date().getFullYear();

    document.querySelectorAll('.packet-list .faq-item').forEach((item) => {
      item.classList.add('active');
    });

    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navLinks.querySelectorAll('details[open]').forEach((details) => {
          details.removeAttribute('open');
        });
      });
    });

    document.querySelectorAll('[data-jackrabbit-link]').forEach((link) => {
      const linkType = link.dataset.jackrabbitLink;
      const destination = jackrabbitLinks[linkType];

      link.href = destination || '#';

      if (destination && destination !== '#') {
        link.target = '_blank';
        link.rel = 'noopener';
        return;
      }

      link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Online registration is coming soon. Please contact Bloom Cheer & Tumbling for help booking a class.');
      });
    });

    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question');

      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    function mediaMatchesFilter(post, filter) {
      return filter === 'all' || post.category === filter || post.type === filter;
    }

    function createMediaCard(post) {
      const article = document.createElement('article');
      article.className = `media-card ${post.layout === 'tall' ? 'tall' : ''}`;

      const media =
        post.type === 'video'
          ? `<video controls preload="metadata" src="${post.src}"></video>`
          : `<img src="${post.src}" alt="${post.alt || post.title}" loading="lazy" />`;

      article.innerHTML = `
        ${media}
        <div class="media-content">
          <div class="media-meta">
            <span class="media-tag">${post.category}</span>
            <span>${post.date}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.caption}</p>
        </div>
      `;

      return article;
    }

    function renderMedia(filter = 'all') {
      if (!mediaGrid || !mediaEmpty) {
        return;
      }

      const visiblePosts = (window.mediaPosts || []).filter((post) => mediaMatchesFilter(post, filter));
      mediaGrid.innerHTML = '';
      visiblePosts.forEach((post) => mediaGrid.appendChild(createMediaCard(post)));
      mediaEmpty.style.display = visiblePosts.length ? 'none' : 'block';
    }

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
        renderMedia(button.dataset.filter);
      });
    });

    renderMedia();
