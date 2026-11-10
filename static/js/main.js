/**
 * Paul Zgondea — Executive Architecture Portfolio
 * Interactive Experience Engine
 * Matches & elevates keystonecloud.org interactive behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initMouseSpotlight();
  initFounderFlipCard();
  initDynamicCounters();
  initIntakeModal();
  initClipboardUtils();
  initMobileNav();
  initSmoothScroll();
});

/* ==========================================================================
   1. Scroll Reveal Animations (Intersection Observer)
   ========================================================================== */
function initScrollReveal() {
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  if (!scrollElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  scrollElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. Interactive Mouse Spotlight Effect
   ========================================================================== */
function initMouseSpotlight() {
  const cards = document.querySelectorAll('.spotlight-card, .group-spotlight');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   3. 3D Flip Card (Paul Zgondea / Keystone Cloud Practice)
   ========================================================================== */
function initFounderFlipCard() {
  const card = document.getElementById('founder-flip-card');
  const toggleBtn = document.getElementById('toggle-flip-btn');
  const toggleBackBtn = document.getElementById('toggle-flip-back-btn');
  if (!card) return;

  let isFlipped = false;
  let autoFlipTimer = null;
  let isHovered = false;

  const flip = (state) => {
    isFlipped = typeof state === 'boolean' ? state : !isFlipped;
    if (isFlipped) {
      card.classList.add('founder-flipped');
    } else {
      card.classList.remove('founder-flipped');
    }
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      flip(true);
    });
  }

  if (toggleBackBtn) {
    toggleBackBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      flip(false);
    });
  }

  card.addEventListener('click', () => {
    flip();
  });

  card.addEventListener('mouseenter', () => {
    isHovered = true;
    clearInterval(autoFlipTimer);
  });

  card.addEventListener('mouseleave', () => {
    isHovered = false;
    startAutoFlip();
  });

  function startAutoFlip() {
    clearInterval(autoFlipTimer);
    autoFlipTimer = setInterval(() => {
      if (!isHovered) {
        flip();
      }
    }, 9000);
  }

  startAutoFlip();
}

/* ==========================================================================
   4. Dynamic Interactive Number Counters & Color Shifting
   ========================================================================== */
function initDynamicCounters() {
  // Efficiency card counter
  document.querySelectorAll('.counter-interactive').forEach(card => {
    const valueEl = card.querySelector('.counter-value');
    if (!valueEl) return;
    const targetVal = parseInt(valueEl.getAttribute('data-target') || '100', 10);
    let intervalId = null;

    const runCount = () => {
      let current = 0;
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        current += 4;
        if (current >= targetVal) {
          current = targetVal;
          clearInterval(intervalId);
        }
        valueEl.textContent = current;
        const progress = current / targetVal;
        // Dynamic RGB shift: cyan to white to emerald
        valueEl.style.color = `rgb(${Math.round(255 - 203 * progress)}, ${Math.round(255 - 44 * progress)}, ${Math.round(255 - 102 * progress)})`;
      }, 25);
    };

    card.addEventListener('mouseenter', runCount);
    card.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
      valueEl.textContent = targetVal;
      valueEl.style.color = '';
    });
  });

  // Velocity card counter
  document.querySelectorAll('.velocity-interactive').forEach(card => {
    const valueEl = card.querySelector('.velocity-value');
    if (!valueEl) return;
    const targetVal = parseInt(valueEl.getAttribute('data-target') || '100', 10);
    let intervalId = null;

    card.addEventListener('mouseenter', () => {
      let current = 1;
      clearInterval(intervalId);
      valueEl.textContent = current;
      valueEl.style.color = 'rgb(34, 211, 238)';

      intervalId = setInterval(() => {
        current += 5;
        if (current >= targetVal) {
          current = targetVal;
          clearInterval(intervalId);
        }
        valueEl.textContent = current;
        const ratio = current / targetVal;
        valueEl.style.color = `rgb(${Math.round(34 + 18 * ratio)}, ${Math.round(211 + 0 * ratio)}, ${Math.round(238 - 85 * ratio)})`;
      }, 35);
    });

    card.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
      valueEl.textContent = targetVal;
      valueEl.style.color = '';
    });
  });
}

/* ==========================================================================
   5. Architecture Intake & Scheduling Modal Flow
   ========================================================================== */
function initIntakeModal() {
  const modal = document.getElementById('architecture-modal');
  const openButtons = document.querySelectorAll('.open-intake-modal');
  const closeButtons = document.querySelectorAll('.close-intake-modal');
  if (!modal) return;

  let currentStep = 1;
  const totalSteps = 4;
  const stepTitles = ["Environment", "Objective", "Context", "Scheduling"];

  const intakeData = {
    environment: "",
    objective: "",
    notes: ""
  };

  const showStep = (step) => {
    currentStep = step;
    document.querySelectorAll('.modal-step').forEach(s => s.classList.remove('active'));
    
    const activeStepEl = document.getElementById(`modal-step-${step}`);
    if (activeStepEl) activeStepEl.classList.add('active');

    // Update Dots
    document.querySelectorAll('.step-dot').forEach((dot, index) => {
      if (index + 1 === step) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update Step Tag
    const tagEl = document.getElementById('modal-step-tag');
    if (tagEl) tagEl.textContent = `STEP 0${step} / 04 : ${stepTitles[step - 1].toUpperCase()}`;

    // Auto-load Cal.com iframe on step 4 if not loaded
    if (step === 4) {
      loadCalendarEmbed();
    }
  };

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    showStep(1);
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Step 1: Environment Selection
  document.querySelectorAll('[data-environment-choice]').forEach(btn => {
    btn.addEventListener('click', () => {
      intakeData.environment = btn.getAttribute('data-environment-choice');
      document.querySelectorAll('[data-environment-choice]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      setTimeout(() => showStep(2), 220);
    });
  });

  // Step 2: Objective Selection
  document.querySelectorAll('[data-objective-choice]').forEach(btn => {
    btn.addEventListener('click', () => {
      intakeData.objective = btn.getAttribute('data-objective-choice');
      document.querySelectorAll('[data-objective-choice]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      setTimeout(() => showStep(3), 220);
    });
  });

  // Step 3: Next to Calendar Sync
  const toStep4Btn = document.getElementById('modal-to-step-4');
  if (toStep4Btn) {
    toStep4Btn.addEventListener('click', () => {
      const notesEl = document.getElementById('modal-briefing-notes');
      if (notesEl) intakeData.notes = notesEl.value;
      showStep(4);
    });
  }

  // Back Navigation
  document.querySelectorAll('.modal-prev-step').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) showStep(currentStep - 1);
    });
  });

  function loadCalendarEmbed() {
    const container = document.getElementById('cal-embed-wrapper');
    if (!container || container.getAttribute('data-loaded') === 'true') return;

    container.innerHTML = `
      <iframe 
        src="https://cal.com/paul-zgondea-ykew6o/30min?embed=true&theme=dark" 
        width="100%" 
        height="520" 
        frameborder="0" 
        style="border-radius: 1rem; background: transparent; border: 1px solid rgba(255, 255, 255, 0.1);" 
        title="Schedule Architecture Consultation with Paul Zgondea">
      </iframe>
    `;
    container.setAttribute('data-loaded', 'true');
  }
}

/* ==========================================================================
   6. Copy to Clipboard Utility & Toast System
   ========================================================================== */
function initClipboardUtils() {
  const copyButtons = document.querySelectorAll('[data-copy-text]');
  const toast = document.getElementById('global-toast');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy-text');
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        showToast(`Copied to clipboard: ${text}`);
      } catch (err) {
        showToast(`Selected: ${text}`);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    const msgEl = toast.querySelector('.toast-message') || toast;
    msgEl.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* ==========================================================================
   7. Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
    } else {
      drawer.classList.add('open');
    }
  });

  document.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/* ==========================================================================
   8. Smooth Scroll for Anchor Links
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
