/**
 * ═══════════════════════════════════════════
 *  MEDILINK AI — Core Vanilla JS
 *  Navbar | Hero | Particles | Three.js DNA
 * ═══════════════════════════════════════════
 */

(function () {
  "use strict";

  // ── Safe DOM queries ──
  const $ = (sel) => document.querySelector(sel);
  const navbar = $("#navbar");
  const navHamburger = $("#nav-hamburger");
  const mobileDrawer = $("#mobile-drawer");
  const navCta = $("#nav-cta");
  const mobileCta = $("#mobile-cta");
  const loadingOverlay = $("#loading-overlay");
  const particleCanvas = $("#particle-canvas");
  const dnaContainer = $("#dna-container");
  const dnaTooltip = $("#dna-tooltip");
  const tooltipDot = $("#tooltip-dot");
  const tooltipLabel = $("#tooltip-label");
  const typewriterEl = $("#typewriter-text");

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // ═══════════════════════════════════════════
  //  1. NAVBAR SCROLL MORPHING
  // ═══════════════════════════════════════════
  if (navbar) {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      navbar.classList.toggle("scrolled", currentScroll > 50);
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  // ═══════════════════════════════════════════
  //  2. MOBILE HAMBURGER MENU
  // ═══════════════════════════════════════════
  if (navHamburger && mobileDrawer) {
    navHamburger.addEventListener("click", () => {
      const isActive = mobileDrawer.classList.toggle("active");
      navHamburger.classList.toggle("active", isActive);
      document.body.style.overflow = isActive ? "hidden" : "";
    });

    document.querySelectorAll(".mobile-link").forEach((link) => {
      link.addEventListener("click", () => {
        navHamburger.classList.remove("active");
        mobileDrawer.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // ═══════════════════════════════════════════
  //  3. REGISTER LOADING OVERLAY
  // ═══════════════════════════════════════════
  function triggerRegister() {
    if (!loadingOverlay) return;
    loadingOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      window.location.href = "reg.html";
    }, 2600);
  }

  if (navCta) navCta.addEventListener("click", triggerRegister);
  if (mobileCta) mobileCta.addEventListener("click", triggerRegister);

  // About Us link-এর জন্য লোডিং ওভারলে সহ নেভিগেশন
  const aboutLink = document.querySelector('a.nav-link[href="about.html"]');
  if (aboutLink) {
    aboutLink.addEventListener("click", function (e) {
      e.preventDefault(); // ডিফল্ট লিঙ্ক জাম্প বন্ধ
      if (!loadingOverlay) return;
      loadingOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        window.location.href = "about.html";
      }, 2600);
    });
  }

  // Dr. Medilink button → ai.html
  const aiBtn = document.querySelector('a.hero-btn--primary[href="ai.html"]');
  if (aiBtn) {
    aiBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (!loadingOverlay) return;
      loadingOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        window.location.href = "ai.html";
      }, 2600);
    });
  }

  // Subscription button → price.html
  const priceBtn = document.querySelector(
    'a.hero-btn--outline[href="price.html"]',
  );
  if (priceBtn) {
    priceBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (!loadingOverlay) return;
      loadingOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        window.location.href = "price.html";
      }, 2600);
    });
  }

  // জেনেরিক নেভিগেশন ফাংশন (লোডিং স্ক্রীন সহ)
  function navigateWithLoading(url) {
    if (!loadingOverlay) return;
    loadingOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      window.location.href = url;
    }, 2600);
  }

  // Specialist → find.html
  const specialistLink = document.querySelector('a.nav-link[href="find.html"]');
  if (specialistLink) {
    specialistLink.addEventListener("click", function (e) {
      e.preventDefault();
      navigateWithLoading("find.html");
    });
  }

  // Emergency → eme.html
  const emergencyLink = document.querySelector(
    'a.nav-link--emergency[href="eme.html"]',
  );
  if (emergencyLink) {
    emergencyLink.addEventListener("click", function (e) {
      e.preventDefault();
      navigateWithLoading("eme.html");
    });
  }

  // Pharmacy → phy.html
  const pharmacyLink = document.querySelector('a.nav-link[href="phy.html"]');
  if (pharmacyLink) {
    pharmacyLink.addEventListener("click", function (e) {
      e.preventDefault();
      navigateWithLoading("phy.html");
    });
  }

  // জেনেরিক নেভিগেশন ফাংশন (লোডিং স্ক্রীন সহ)
  function navigateWithLoading(url) {
    if (!loadingOverlay) return;
    loadingOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      window.location.href = url;
    }, 2600);
  }

  // ফুটারের সব লিংকে লোডিং স্ক্রীন যোগ করা (এংকর লিংক বাদে)
  document.querySelectorAll(".footer-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        navigateWithLoading(href);
      });
    }
  });
  // ═══════════════════════════════════════════
  //  4. PARTICLE BACKGROUND ENGINE
  // ═══════════════════════════════════════════
  if (particleCanvas) {
    const ctx = particleCanvas.getContext("2d");
    let particles = [];
    let mouseX = -1000,
      mouseY = -1000;
    let animFrameId;
    const PARTICLE_COUNT = isMobile ? 35 : 70;
    const CONNECTION_DIST = isMobile ? 90 : 120;
    const MOUSE_RADIUS = 160;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      particleCanvas.width = w * dpr;
      particleCanvas.height = h * dpr;
      particleCanvas.style.width = w + "px";
      particleCanvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
        this.baseRadius = this.radius;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;

        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          this.radius = this.baseRadius + force * 3;
        } else {
          this.radius += (this.baseRadius - this.radius) * 0.1;
        }
      }
      draw() {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isHovered = dist < MOUSE_RADIUS;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? "var(--particle-hover, #14B8A6)"
          : "var(--particle-node, #2563EB)";
        ctx.fill();

        if (isHovered) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius + 6, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(20, 184, 166, 0.12)";
          ctx.fill();
        }
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.65;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();
      animFrameId = requestAnimationFrame(animateParticles);
    }

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        initParticles();
      }, 150);
    });

    resizeCanvas();
    initParticles();
    animateParticles();
  }

  // ═══════════════════════════════════════════
  //  5. TYPEWRITER EFFECT
  // ═══════════════════════════════════════════
  if (typewriterEl) {
    const typewriterWords = [
      "Doctors",
      "Medicines",
      "AI Advice",
      "Health Solutions",
    ];
    let wordIndex = 0,
      charIndex = 0,
      isDeleting = false,
      typewriterDelay = 100;

    function typeWriter() {
      const currentWord = typewriterWords[wordIndex];
      if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typewriterDelay = 50;
      } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typewriterDelay = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typewriterDelay = 1800;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typewriterWords.length;
        typewriterDelay = 400;
      }
      setTimeout(typeWriter, typewriterDelay);
    }

    const startTypewriter = () => {
      if (typewriterEl.offsetParent !== null) {
        setTimeout(typeWriter, 1400);
      } else {
        requestAnimationFrame(startTypewriter);
      }
    };
    startTypewriter();
  }

  // ═══════════════════════════════════════════
  //  6. THREE.JS DNA DOUBLE HELIX (Desktop)
  // ═══════════════════════════════════════════
  if (!isMobile && dnaContainer && typeof THREE !== "undefined") {
    function whenContainerReady(cb) {
      if (dnaContainer.offsetWidth > 0 && dnaContainer.offsetHeight > 0) {
        cb();
      } else {
        requestAnimationFrame(() => whenContainerReady(cb));
      }
    }

    whenContainerReady(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        dnaContainer.offsetWidth / dnaContainer.offsetHeight,
        0.1,
        100,
      );
      camera.position.set(2, 0, 18);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(dnaContainer.offsetWidth, dnaContainer.offsetHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      dnaContainer.appendChild(renderer.domElement);

      const BASE_PAIRS = 70;
      const HELIX_RADIUS = 3.2;
      const HELIX_HEIGHT = 38;
      const VERTICAL_SPACING = HELIX_HEIGHT / BASE_PAIRS;
      const TWIST = Math.PI * 3.8;

      const dnaGroup = new THREE.Group();
      scene.add(dnaGroup);

      const strandAMat = new THREE.MeshPhongMaterial({
        color: 0x2563eb,
        transparent: true,
        opacity: 0.75,
        shininess: 60,
      });
      const strandBMat = new THREE.MeshPhongMaterial({
        color: 0x14b8a6,
        transparent: true,
        opacity: 0.75,
        shininess: 60,
      });
      const backboneMat = new THREE.MeshPhongMaterial({
        color: 0x1e3a6e,
        transparent: true,
        opacity: 0.85,
        shininess: 40,
      });
      const rungMat = new THREE.MeshPhongMaterial({
        color: 0x94a3b8,
        transparent: true,
        opacity: 0.35,
        shininess: 30,
      });

      scene.add(new THREE.AmbientLight(0xffffff, 0.6));
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight.position.set(5, 5, 8);
      scene.add(dirLight);
      const pointLight = new THREE.PointLight(0x14b8a6, 0.5, 20);
      pointLight.position.set(-3, 2, 5);
      scene.add(pointLight);

      const basePairNames = ["Adenine", "Thymine", "Cytosine", "Guanine"];
      const basePairColors = ["#2563EB", "#14B8A6", "#7C3AED", "#DC2626"];
      const basePairMeshes = [];

      for (let i = 0; i < BASE_PAIRS; i++) {
        const t = i / BASE_PAIRS;
        const angle = t * TWIST;
        const y = (t - 0.5) * HELIX_HEIGHT;
        const ax = Math.cos(angle) * HELIX_RADIUS;
        const az = Math.sin(angle) * HELIX_RADIUS;
        const bx = Math.cos(angle + Math.PI) * HELIX_RADIUS;
        const bz = Math.sin(angle + Math.PI) * HELIX_RADIUS;

        const nucleoGeo = new THREE.SphereGeometry(0.38, 16, 16);
        const nucleoA = new THREE.Mesh(nucleoGeo, strandAMat.clone());
        nucleoA.position.set(ax, y, az);
        dnaGroup.add(nucleoA);
        const nucleoB = new THREE.Mesh(nucleoGeo, strandBMat.clone());
        nucleoB.position.set(bx, y, bz);
        dnaGroup.add(nucleoB);

        if (i > 0) {
          const prevT = (i - 1) / BASE_PAIRS;
          const prevAngle = prevT * TWIST;
          const prevY = (prevT - 0.5) * HELIX_HEIGHT;
          const prevAx = Math.cos(prevAngle) * HELIX_RADIUS;
          const prevAz = Math.sin(prevAngle) * HELIX_RADIUS;
          const prevBx = Math.cos(prevAngle + Math.PI) * HELIX_RADIUS;
          const prevBz = Math.sin(prevAngle + Math.PI) * HELIX_RADIUS;

          const pathA = new THREE.LineCurve3(
            new THREE.Vector3(prevAx, prevY, prevAz),
            new THREE.Vector3(ax, y, az),
          );
          dnaGroup.add(
            new THREE.Mesh(
              new THREE.TubeGeometry(pathA, 4, 0.1, 8, false),
              backboneMat,
            ),
          );
          const pathB = new THREE.LineCurve3(
            new THREE.Vector3(prevBx, prevY, prevBz),
            new THREE.Vector3(prevBx, prevY, prevBz),
          );
          dnaGroup.add(
            new THREE.Mesh(
              new THREE.TubeGeometry(pathB, 4, 0.1, 8, false),
              backboneMat,
            ),
          );
        }

        const rungPath = new THREE.LineCurve3(
          new THREE.Vector3(ax, y, az),
          new THREE.Vector3(bx, y, bz),
        );
        dnaGroup.add(
          new THREE.Mesh(
            new THREE.TubeGeometry(rungPath, 2, 0.06, 6, false),
            rungMat,
          ),
        );

        basePairMeshes.push({
          meshA: nucleoA,
          meshB: nucleoB,
          midX: (ax + bx) / 2,
          midY: y,
          midZ: (az + bz) / 2,
          name: basePairNames[i % 4],
          color: basePairColors[i % 4],
        });
      }

      const glowGeo = new THREE.SphereGeometry(8.5, 32, 32);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0x14b8a6,
        transparent: true,
        opacity: 0.04,
        side: THREE.BackSide,
      });
      const glowSphere = new THREE.Mesh(glowGeo, glowMat);
      dnaGroup.add(glowSphere);

      const ringGeo = new THREE.RingGeometry(4.8, 5.2, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x0d9488,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      });
      const hoverRing = new THREE.Mesh(ringGeo, ringMat);
      hoverRing.rotation.x = Math.PI / 2;
      dnaGroup.add(hoverRing);

      let targetRotationSpeed = 0.01;
      let currentRotationSpeed = 0.01;
      let isHoveringDNA = false;
      let hoveredPairIndex = -1;
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      let dnaAnimId;

      const updateTooltipPosition = () => {
        if (hoveredPairIndex === -1) {
          dnaTooltip?.classList.remove("visible");
          return;
        }
        const pair = basePairMeshes[hoveredPairIndex];
        const vector = new THREE.Vector3(pair.midX, pair.midY, pair.midZ);
        vector.applyMatrix4(dnaGroup.matrixWorld);
        vector.project(camera);

        const rect = dnaContainer.getBoundingClientRect();
        const x = (vector.x * 0.5 + 0.5) * rect.width + rect.left;
        const y = (-(vector.y * 0.5) + 0.5) * rect.height + rect.top;

        if (dnaTooltip) {
          dnaTooltip.style.left = `${x + 20}px`;
          dnaTooltip.style.top = `${y - 20}px`;
          tooltipLabel.textContent = pair.name;
          tooltipDot.style.background = pair.color;
          dnaTooltip.classList.add("visible");
        }
      };

      window.addEventListener("scroll", updateTooltipPosition, {
        passive: true,
      });
      window.addEventListener("resize", updateTooltipPosition);

      renderer.domElement.addEventListener("mousemove", (e) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      });

      renderer.domElement.addEventListener("mouseenter", () => {
        isHoveringDNA = true;
        targetRotationSpeed = 0.001;
      });
      renderer.domElement.addEventListener("mouseleave", () => {
        isHoveringDNA = false;
        targetRotationSpeed = 0.01;
        hoveredPairIndex = -1;
        hoverRing.material.opacity = 0;
        dnaTooltip?.classList.remove("visible");
      });

      function animateDNA() {
        dnaAnimId = requestAnimationFrame(animateDNA);

        currentRotationSpeed +=
          (targetRotationSpeed - currentRotationSpeed) * 0.05;
        dnaGroup.rotation.y += currentRotationSpeed;
        dnaGroup.position.y = -8.5 + Math.sin(Date.now() * 0.001) * 0.3;

        if (isHoveringDNA) {
          raycaster.setFromCamera(mouse, camera);
          let found = false;
          for (let i = 0; i < basePairMeshes.length; i++) {
            const pair = basePairMeshes[i];
            const hits = raycaster.intersectObjects([pair.meshA, pair.meshB]);
            if (hits.length > 0) {
              hoveredPairIndex = i;
              found = true;
              hoverRing.position.set(0, pair.midY, 0);
              hoverRing.material.opacity = Math.min(
                0.2,
                hoverRing.material.opacity + 0.05,
              );
              break;
            }
          }
          if (!found) {
            hoveredPairIndex = -1;
            hoverRing.material.opacity = Math.max(
              0,
              hoverRing.material.opacity - 0.02,
            );
          }
        } else {
          hoveredPairIndex = -1;
          hoverRing.material.opacity = Math.max(
            0,
            hoverRing.material.opacity - 0.02,
          );
        }

        updateTooltipPosition();
        renderer.render(scene, camera);
      }

      animateDNA();

      window.addEventListener("resize", () => {
        if (dnaContainer.offsetWidth > 0 && dnaContainer.offsetHeight > 0) {
          camera.aspect = dnaContainer.offsetWidth / dnaContainer.offsetHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(dnaContainer.offsetWidth, dnaContainer.offsetHeight);
        }
      });

      window.__dnaAnimId = dnaAnimId;
    });
  }

  // ═══════════════════════════════════════════
  //  7. CLEANUP ON PAGE HIDE (both engines)
  // ═══════════════════════════════════════════
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (window.animFrameId) {
        cancelAnimationFrame(window.animFrameId);
        window.animFrameId = null;
      }
      if (window.__dnaAnimId) {
        cancelAnimationFrame(window.__dnaAnimId);
        window.__dnaAnimId = null;
      }
    } else {
      if (particleCanvas && typeof animateParticles === "function") {
        animateParticles();
      }
      if (dnaContainer && typeof animateDNA === "function") {
        animateDNA();
      }
    }
  });
})();

/* ═══════════════════════════════════════════════
       A. 3D Mouse Tilt (ALL cards)
       ═══════════════════════════════════════════════ */
const tiltCards = document.querySelectorAll("[data-tilt]");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.transition = "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    card.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
  });
});

/* ═══════════════════════════════════════════════
       B. Scroll-Triggered Entrance
       ═══════════════════════════════════════════════ */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
  },
);

revealElements.forEach((el) => revealObserver.observe(el));

/* ═══════════════════════════════════════════════
       C. Particle Animation — ONLY Card 1
       ═══════════════════════════════════════════════ */
(function initParticleCanvas() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const card1 = document.querySelector(".card-1");

  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 35;
  const CONNECTION_DIST = 130;
  let mouseX = -1000,
    mouseY = -1000;
  let isHovering = false;
  let animId;

  function resize() {
    const rect = card1.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2.2 + 1.2,
        baseRadius: Math.random() * 2.2 + 1.2,
        opacity: Math.random() * 0.4 + 0.3,
      });
    }
  }

  function updateParticles() {
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) {
        p.x = 0;
        p.vx *= -1;
      }
      if (p.x > width) {
        p.x = width;
        p.vx *= -1;
      }
      if (p.y < 0) {
        p.y = 0;
        p.vy *= -1;
      }
      if (p.y > height) {
        p.y = height;
        p.vy *= -1;
      }

      if (isHovering) {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100;
          p.vx += (dx / dist) * force * 0.15;
          p.vy += (dy / dist) * force * 0.15;
          p.radius = p.baseRadius + force * 3;
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.08;
        }
        p.vx *= 0.99;
        p.vy *= 0.99;
      } else {
        p.radius += (p.baseRadius - p.radius) * 0.08;
      }
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

      if (isHovering) {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.fillStyle = `rgba(20, 184, 166, ${p.opacity + 0.3})`;
        } else {
          ctx.fillStyle = `rgba(13, 148, 136, ${p.opacity})`;
        }
      } else {
        ctx.fillStyle = `rgba(13, 148, 136, ${p.opacity})`;
      }

      ctx.fill();
    });
  }

  let lastTime = 0;
  function animate(timestamp) {
    if (timestamp - lastTime >= 16) {
      updateParticles();
      draw();
      lastTime = timestamp;
    }
    animId = requestAnimationFrame(animate);
  }

  card1.addEventListener("mousemove", (e) => {
    const rect = card1.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    isHovering = true;
  });

  card1.addEventListener("mouseleave", () => {
    isHovering = false;
    mouseX = -1000;
    mouseY = -1000;
  });

  resize();
  createParticles();
  animate(0);

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });
})();

/* ====== আপনার existing code ====== */
// ... আগের সব code ...

/* ====== Medilink Stats & Testimonials JS (paste here) ====== */
(function () {
  "use strict";
  const ML = { counted: false, initDone: false };

  function $(s) {
    return document.querySelector(s);
  }
  function $$(s) {
    return document.querySelectorAll(s);
  }

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateCountUp(el, target, duration) {
    var start = performance.now();
    var suffix = el.dataset.suffix || "";
    function step(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutQuart(progress);
      var current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(step);
  }

  function getInitials(name) {
    return name
      .split(" ")
      .map(function (w) {
        return w[0];
      })
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }
  function buildStarRow(count) {
    var html = "";
    for (var i = 0; i < count; i++) html += "<span>★</span>";
    return html;
  }
  function buildCard(t) {
    return (
      '<div class="testimonial-card">' +
      '<div class="t-card-header">' +
      '<div class="t-avatar">' +
      getInitials(t.name) +
      "</div>" +
      '<div class="t-meta"><div class="t-name">' +
      t.name +
      '</div><div class="t-city">' +
      t.city +
      "</div></div>" +
      '<div class="t-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Verified Patient</div>' +
      "</div>" +
      '<div class="t-stars">' +
      buildStarRow(t.stars) +
      "</div>" +
      '<div class="t-quote">"' +
      t.quote +
      '"</div>' +
      "</div>"
    );
  }

  function initMedilinkSections() {
    if (ML.initDone) return;
    ML.initDone = true;

    // A. Scroll Reveal
    var revealEls = $$(".reveal, .reveal-stagger");
    if (revealEls.length > 0) {
      ML.revealObs = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
      );
      revealEls.forEach(function (el) {
        ML.revealObs.observe(el);
      });
    }

    // B. Stats Count-Up
    var statNumbers = $$(".stat-number");
    var statsSection = $("#stats");
    if (statsSection && statNumbers.length > 0) {
      ML.statsObs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && !ML.counted) {
              ML.counted = true;
              statNumbers.forEach(function (el, index) {
                var target = parseInt(el.dataset.target, 10);
                if (!isNaN(target)) {
                  setTimeout(function () {
                    animateCountUp(el, target, 1800);
                  }, index * 120);
                }
              });
            }
          });
        },
        { threshold: 0.2 },
      );
      ML.statsObs.observe(statsSection);
    }

    // C. Testimonial Marquee Builder
    var row1 = $("#marqueeRow1");
    var row2 = $("#marqueeRow2");
    if (row1 || row2) {
      var testimonials = [
        {
          name: "Rashed Karim",
          city: "Dhaka",
          stars: 5,
          quote:
            "Dr. Medilink AI identified my condition before I even saw a specialist. Truly remarkable.",
        },
        {
          name: "Nusrat Jahan",
          city: "Chittagong",
          stars: 5,
          quote:
            "The WhatsApp pharmacy saved me hours of waiting. My medicines arrived in under 2 hours.",
        },
        {
          name: "Tariq Hossain",
          city: "Sylhet",
          stars: 5,
          quote:
            "The health dashboard is incredibly intuitive. I check my vitals every single morning now.",
        },
        {
          name: "Fatema Akter",
          city: "Rajshahi",
          stars: 5,
          quote:
            "Found a verified cardiologist in under a minute. Medilink AI is genuinely a lifesaver.",
        },
        {
          name: "Imran Hasan",
          city: "Khulna",
          stars: 5,
          quote:
            "Best healthcare platform in Bangladesh. The AI health advice is accurate and reassuring.",
        },
        {
          name: "Sabrina Islam",
          city: "Barishal",
          stars: 5,
          quote:
            "Booked an appointment, received a prescription, and ordered medicine — all in one place.",
        },
        {
          name: "Mahmudul Alam",
          city: "Mymensingh",
          stars: 5,
          quote:
            "I was skeptical about AI health tools. Medilink AI completely changed my perspective.",
        },
        {
          name: "Sumaiya Begum",
          city: "Comilla",
          stars: 5,
          quote:
            "The verified doctor badge builds real trust. A genuinely premium healthcare experience.",
        },
      ];
      var allCards = testimonials.map(buildCard).join("");
      var doubledCards = allCards + allCards;
      if (row1) row1.innerHTML = doubledCards;
      if (row2) row2.innerHTML = doubledCards;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMedilinkSections);
  } else {
    initMedilinkSections();
  }
})();
/* ====== End Medilink JS ====== */

/* ==================== FAQ ACCORDION LOGIC ====================
       - Only one item open at a time
       - Uses max-height CSS transition (never display:none)
       - Non-active items fade to 0.4 opacity
    ============================================================ */
const faqItems = document.querySelectorAll(".faq-item");
const faqList = document.querySelector(".faq-list");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all items and remove focus state
    faqItems.forEach((i) => i.classList.remove("active"));
    faqList.classList.remove("has-active");

    // Open clicked item if it was not already active
    if (!isActive) {
      item.classList.add("active");
      faqList.classList.add("has-active");
    }
  });
});

/* ==================== SCROLL ENTRANCE ANIMATIONS ====================
       - IntersectionObserver with threshold 0.15
       - Fires once per element then unobserve
    ===================================================================== */
const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-animate").forEach((el) => {
  observer.observe(el);
});

(function () {
  "use strict";

  // Configuration: threshold 0.05 — fires very early as user nears footer
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
  };

  // Callback: add .is-visible class when element enters viewport
  const revealCallback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Fire once only — no repeat on scroll-up
        observer.unobserve(entry.target);
      }
    });
  };

  // Initialize observer
  const revealObserver = new IntersectionObserver(
    revealCallback,
    observerOptions,
  );

  // Observe all elements with .reveal class (Layer 1 columns)
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // Observe copyright bar (Layer 2)
  const copyrightBar = document.querySelector(".reveal-copyright");
  if (copyrightBar) {
    revealObserver.observe(copyrightBar);
  }

  // Observe giant text (Layer 3)
  const giantText = document.querySelector(".reveal-giant");
  if (giantText) {
    revealObserver.observe(giantText);
  }
})();
