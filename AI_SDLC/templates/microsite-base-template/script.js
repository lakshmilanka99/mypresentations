/* ===================================
   Main JavaScript for AI-SDLC Microsite
   =================================== */

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Theme Toggle (Dark/Light Mode)
// ===================================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-mode', currentTheme === 'dark');
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===================================
// Scroll Animation Observer
// ===================================
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with .animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// ===================================
// Animated Counter for Stats
// ===================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Trigger counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-target]');
            counters.forEach(counter => {
                if (!counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    animateCounter(counter);
                }
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats sections
document.querySelectorAll('.hero-stats, .kpi-grid').forEach(section => {
    counterObserver.observe(section);
});

// ===================================
// Chart.js Configuration & Rendering
// ===================================

// Common chart colors matching brand
const chartColors = {
    primary: '#004B87',
    secondary: '#0078D2',
    accent: '#C80A28',
    success: '#28A745',
    warning: '#FF8C00',
    danger: '#DC3545',
    gray: '#A7AAAD'
};

// Default chart options
const defaultChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                font: {
                    family: "'Poppins', sans-serif",
                    size: 12
                },
                padding: 15
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleFont: {
                size: 14,
                family: "'Poppins', sans-serif"
            },
            bodyFont: {
                size: 12
            },
            borderColor: chartColors.primary,
            borderWidth: 1
        }
    }
};

// === Cycle Time Chart ===
const cycleTimeCtx = document.getElementById('cycleTimeChart');
if (cycleTimeCtx) {
    new Chart(cycleTimeCtx, {
        type: 'bar',
        data: {
            labels: ['Before AI', 'After AI'],
            datasets: [{
                label: 'Development Cycle Time (Days)',
                data: [18, 3],
                backgroundColor: [chartColors.accent, chartColors.success],
                borderColor: [chartColors.accent, chartColors.success],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            ...defaultChartOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Days',
                        font: { size: 14, weight: 'bold' }
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                },
                x: {
                    grid: { display: false }
                }
            },
            plugins: {
                ...defaultChartOptions.plugins,
                tooltip: {
                    ...defaultChartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y} days`;
                        },
                        afterLabel: function(context) {
                            if (context.dataIndex === 1) {
                                return '78% reduction';
                            }
                        }
                    }
                }
            }
        }
    });
}

// === Deployment Frequency Chart ===
const deploymentCtx = document.getElementById('deploymentChart');
if (deploymentCtx) {
    new Chart(deploymentCtx, {
        type: 'line',
        data: {
            labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
            datasets: [{
                label: 'Deployments per Week',
                data: [2, 3, 5, 8, 15, 24],
                borderColor: chartColors.primary,
                backgroundColor: 'rgba(0, 75, 135, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBackgroundColor: chartColors.primary,
                borderWidth: 3
            }]
        },
        options: {
            ...defaultChartOptions,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Deployments/Week',
                        font: { size: 14, weight: 'bold' }
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
}

// === Test Coverage Chart (Donut) ===
const testCoverageCtx = document.getElementById('testCoverageChart');
if (testCoverageCtx) {
    new Chart(testCoverageCtx, {
        type: 'doughnut',
        data: {
            labels: ['Automated Tests', 'Manual Tests'],
            datasets: [{
                label: 'Test Coverage',
                data: [86, 14],
                backgroundColor: [chartColors.success, chartColors.warning],
                borderColor: ['#fff', '#fff'],
                borderWidth: 3
            }]
        },
        options: {
            ...defaultChartOptions,
            plugins: {
                ...defaultChartOptions.plugins,
                legend: {
                    display: true,
                    position: 'bottom'
                },
                tooltip: {
                    ...defaultChartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
}

// ===================================
// Mobile Menu Toggle (if needed)
// ===================================
// Uncomment and implement if you add mobile menu functionality
/*
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}
*/

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Lazy Load Images (if using external images)
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Print Functionality
// ===================================
function printPresentation() {
    window.print();
}

// ===================================
// Copy to Clipboard Utility
// ===================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success message
        showNotification('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ===================================
// Notification Toast
// ===================================
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'notification-toast';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #28A745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

// ===================================
// Initialize on Page Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('AI-SDLC Microsite Loaded Successfully');
    
    // Add any initialization code here
    // For example, fetching data, setting up additional event listeners, etc.
});

// ===================================
// Export functions for external use
// ===================================
window.micrositeUtils = {
    printPresentation,
    copyToClipboard,
    showNotification
};
