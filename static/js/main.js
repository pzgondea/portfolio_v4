/**
 * Paul Zgondea — Personal Executive Profile & Architecture Portfolio
 * Interactive Experience Engine (Glitch-Free Profile Tabs, Spotlight, Intake Modal & Clipboard)
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initMouseSpotlight();
  initProfileTabs();
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
  const cards = document.querySelectorAll('.spotlight-card');

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
   3. Glitch-Free Profile View Switcher (Executive Bio vs Technical Stack)
   ========================================================================== */
function initProfileTabs() {
  const tabBtns = document.querySelectorAll('.profile-tab-btn');
  const tabPanels = document.querySelectorAll('.profile-tab-panel');
  if (!tabBtns.length || !tabPanels.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. Architecture Intake & Scheduling Modal Flow
   ========================================================================== */
function initIntakeModal() {
  const modal = document.getElementById('architecture-modal');
  const openButtons = document.querySelectorAll('.open-intake-modal');
  const closeButtons = document.querySelectorAll('.close-intake-modal');
  if (!modal) return;

  let currentStep = 1;
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

    document.querySelectorAll('.step-dot').forEach((dot, index) => {
      if (index + 1 === step) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    const tagEl = document.getElementById('modal-step-tag');
    if (tagEl) tagEl.textContent = `STEP 0${step} / 04 : ${stepTitles[step - 1].toUpperCase()}`;

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

  document.querySelectorAll('[data-environment-choice]').forEach(btn => {
    btn.addEventListener('click', () => {
      intakeData.environment = btn.getAttribute('data-environment-choice');
      document.querySelectorAll('[data-environment-choice]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      setTimeout(() => showStep(2), 200);
    });
  });

  document.querySelectorAll('[data-objective-choice]').forEach(btn => {
    btn.addEventListener('click', () => {
      intakeData.objective = btn.getAttribute('data-objective-choice');
      document.querySelectorAll('[data-objective-choice]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      setTimeout(() => showStep(3), 200);
    });
  });

  const toStep4Btn = document.getElementById('modal-to-step-4');
  if (toStep4Btn) {
    toStep4Btn.addEventListener('click', () => {
      const notesEl = document.getElementById('modal-briefing-notes');
      if (notesEl) intakeData.notes = notesEl.value;
      showStep(4);
    });
  }

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
        height="500" 
        frameborder="0" 
        style="border-radius: 1rem; background: transparent; border: 1px solid rgba(255, 255, 255, 0.1);" 
        title="Schedule Architecture Consultation with Paul Zgondea">
      </iframe>
      <div style="text-align: center; margin-top: 0.75rem;">
        <a href="https://cal.com/paul-zgondea-ykew6o/30min" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); font-size: 0.82rem; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem;">
          <span>Having trouble loading the calendar? Open Cal.com directly</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </a>
      </div>
    `;
    container.setAttribute('data-loaded', 'true');
  }
}

/* ==========================================================================
   5. Copy to Clipboard Utility & Toast System
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
   6. Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    const isOpen = drawer.style.display === 'flex';
    drawer.style.display = isOpen ? 'none' : 'flex';
  });

  document.querySelectorAll('.mobile-drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.style.display = 'none';
    });
  });
}

/* ==========================================================================
   7. Smooth Scroll for Anchor Links
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
