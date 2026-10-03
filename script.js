document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. THEME SWITCHER (DARK / LIGHT)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check local storage or system preferences
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Initialize Theme
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-moon';
    }
    
    // Toggle Theme Click Event
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (currentTheme === 'light') {
            newTheme = 'dark';
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });


    // ==========================================
    // 2. MOBILE MENU NAVIGATION
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinksList = document.querySelectorAll('.nav-item');
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close menu when link is clicked
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
        });
    });


    // ==========================================
    // 3. TAGLINE TYPING ANIMATION
    // ==========================================
    const typingSpan = document.getElementById('typing-text');
    const taglines = [
        "First-Year Computer Science Engineering Student",
        "Aspiring Software Developer",
        "AI & Data Science Enthusiast"
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeDelay = 100;
    let deleteDelay = 50;
    let pauseDelay = 2000;
    
    function typeEffect() {
        const currentText = taglines[lineIndex];
        
        if (isDeleting) {
            // Delete characters
            typingSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            // Loop typing
            if (charIndex === 0) {
                isDeleting = false;
                lineIndex = (lineIndex + 1) % taglines.length;
                setTimeout(typeEffect, 500); // Small pause before typing next word
                return;
            }
            setTimeout(typeEffect, deleteDelay);
        } else {
            // Type characters
            typingSpan.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, pauseDelay); // Hold the typed tagline
                return;
            }
            setTimeout(typeEffect, typeDelay);
        }
    }
    
    // Start Typing
    if (typingSpan) {
        setTimeout(typeEffect, 1000);
    }


    // ==========================================
    // 4. PORTFOLIO SCROLL TRACKING (ACTIVE LINKS)
    // ==========================================
    const sections = document.querySelectorAll('section');
    
    function trackActiveSection() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // Offset for sticky navbar
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-links a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-links a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', trackActiveSection);


    // ==========================================
    // 5. BACK TO TOP BUTTON
    // ==========================================
    const backToTopBtn = document.getElementById('back-to-top-btn');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // ==========================================
    // 6. PROJECTS CATEGORY FILTER
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active classes
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Add fade effect transition
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (category === 'all' || cardCategory === category) {
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.classList.add('hidden');
                    }
                }, 300);
            });
        });
    });


    // ==========================================
    // 7. SCROLL-REVEAL FOR TIMELINE & CARDS
    // ==========================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
        revealObserver.observe(item);
    });


    // ==========================================
    // 8. SKILL BAR PROGRESS ANIMATION
    // ==========================================
    const skillProgresses = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillProgresses.forEach(progress => {
                    const targetWidth = progress.getAttribute('data-level');
                    progress.style.width = targetWidth;
                });
                observer.unobserve(entry.target); // Trigger once
            }
        });
    };
    
    const skillsObserver = new IntersectionObserver(animateSkills, {
        root: null,
        threshold: 0.2
    });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }


    // ==========================================
    // 9. CONTACT FORM VALIDATION & HANDLING
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status-msg');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showStatus('Please fill in all the fields.', 'error');
                return;
            }
            
            // Email Regex check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showStatus('Please enter a valid email address.', 'error');
                return;
            }
            
            // Success Scenario Simulation
            showStatus('Sending your message... Please wait.', 'info');
            
            setTimeout(() => {
                showStatus(`Thank you, ${name}! Your message has been sent successfully.`, 'success');
                contactForm.reset();
            }, 1500);
        });
    }
    
    function showStatus(msg, type) {
        formStatus.textContent = msg;
        formStatus.className = 'form-status'; // Reset classes
        
        if (type === 'success') {
            formStatus.classList.add('success');
        } else if (type === 'error') {
            formStatus.classList.add('error');
        } else {
            // Loading state/info
            formStatus.style.display = 'block';
            formStatus.style.background = 'rgba(139, 92, 246, 0.08)';
            formStatus.style.color = 'var(--color-primary)';
            formStatus.style.border = '1px solid rgba(139, 92, 246, 0.15)';
        }
    }
});
