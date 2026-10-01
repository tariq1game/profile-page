/**
 * QR CODE STUDIO & CLIENT PROFILE MANAGEMENT ENGINE (v2.1)
 * Features: Compact Pure QR Modal, GitHub-style Side Drawer, Structured CRUD Sub-Page Modals, Clean Handle Badges.
 */

// Initial Default Academic & Personal Data
const DEFAULT_PROFILE_DATA = {
  personal: {
    name: "د. عبد الرحمن بن محمد العتيبي",
    title: "أستاذ مشارك والباحث الرئيس في الذكاء الاصطناعي وعلوم البيانات",
    institution: "جامعة الملك سعود / معهد الأبحاث والتكنولوجيا",
    location: "الرياض، المملكة العربية السعودية",
    email: "dr.alotaibi@academic-research.org",
    bio: "باحث وأكاديمي متخصص في تطبيقات الذكاء الاصطناعي وشبكات التعلم العميق ومعالجة اللغات الطبيعية. تمتلك أبحاثي أكثر من 3,850 استشهاداً مرجعياً في مجلات علمية عالمية مرموقة، ولي العديد من الكتب والدراسات العلمية المحكّمة.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  social: [
    { id: "s1", platform: "واتساب مباشر", handle: "+966 50 000 0000", icon: "fa-brands fa-whatsapp", url: "https://wa.me/966500000000", enableQR: true },
    { id: "s2", platform: "فيسبوك", handle: "@dr.alotaibi.research", icon: "fa-brands fa-facebook", url: "https://facebook.com/dr.alotaibi.research", enableQR: true },
    { id: "s3", platform: "لينكد إن", handle: "dr-alotaibi-ai", icon: "fa-brands fa-linkedin", url: "https://linkedin.com/in/dr-alotaibi-ai", enableQR: true },
    { id: "s4", platform: "Google Scholar", handle: "Dr. Alotaibi Citations", icon: "fa-solid fa-graduation-cap", url: "https://scholar.google.com", enableQR: true },
    { id: "s5", platform: "تويتر / X", handle: "@dr_alotaibi_ai", icon: "fa-brands fa-x-twitter", url: "https://x.com/dr_alotaibi_ai", enableQR: true }
  ],
  certificates: [
    {
      id: "c1",
      title: "الدكتوراه في الذكاء الاصطناعي وتنقيب البيانات الضخمة",
      institution: "جامعة ستانفورد - الولايات المتحدة",
      year: "2018",
      type: "شهادة دكتوراه",
      url: "https://stanford.edu",
      description: "رسالة دكتوراه بعنوان: تطوير خوارزميات التعلم العميق في تحليل البيانات النصية ضخمة الحجم ودعم اتخاذ القرار."
    },
    {
      id: "c2",
      title: "الجائزة العالمية للتميز في البحث العلمي والابتكار",
      institution: "المنظمة الدولية لعلوم التكنولوجيا",
      year: "2024",
      type: "جائزة التميز البحثي",
      url: "https://global-science-award.org",
      description: "تكريم رسمي عن البحث الصادر في مجلة Nature لابتكار نموذج لغوي عربي فائق الدقة."
    }
  ],
  research: [
    {
      id: "r1",
      title: "تطبيق شبكات التعلم العميق في معالجة اللغة العربية وتحليل النصوص الضخمة",
      journal: "Nature Machine Intelligence",
      citations: "520+ استشهاد",
      year: "2024",
      url: "https://nature.com/articles/s41586-024-deep-learning-arabic",
      description: "دراسة شاملة تقترح معمارية جديدة للنماذج اللغوية المتخصصة في تحليل البنية الصرفية والنحوية للغة العربية."
    },
    {
      id: "r2",
      title: "نمذجة البيانات الضخمة والأمان السيبراني في أنظمة الذكاء الاصطناعي الموزعة",
      journal: "IEEE Transactions on Big Data",
      citations: "340 استشهاد",
      year: "2023",
      url: "https://ieeexplore.ieee.org/document/9876543",
      description: "بحث يركز على حماية الشبكات العصبية الاصطناعية من هجمات التعديل الخبيث والحفاظ على خصوصية البيانات."
    }
  ],
  books: [
    {
      id: "b1",
      title: "موسوعة الذكاء الاصطناعي وتطبيقاته الحديثة",
      publisher: "دار النشر الأكاديمية | 2024",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
      url: "https://academic-books-store.org/ai-encyclopedia",
      description: "مرجع علمي شامل يناقش الأساسيات النظرية والتطبيقات العملية للذكاء الاصطناعي في القطاعات المختلفة."
    },
    {
      id: "b2",
      title: "دراسات متقدمة في علوم البيانات وتنقيب المعلومات",
      publisher: "مكتبة الأبحاث العلمية | الطبعة الثانية",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
      url: "https://academic-books-store.org/data-science-studies",
      description: "دليل تدريبي وأكاديمي لطلاب الماجستير والدكتوراه للتعامل مع الخوارزميات والتوقعات الإحصائية."
    }
  ]
};

// Data Store Interface
const ProfileStore = {
  get() {
    try {
      const data = localStorage.getItem('profileData');
      return data ? JSON.parse(data) : DEFAULT_PROFILE_DATA;
    } catch (e) {
      return DEFAULT_PROFILE_DATA;
    }
  },
  save(data) {
    localStorage.setItem('profileData', JSON.stringify(data));
  },
  reset() {
    localStorage.setItem('profileData', JSON.stringify(DEFAULT_PROFILE_DATA));
    return DEFAULT_PROFILE_DATA;
  }
};

// Global QR Generator Studio State
const studioState = {
  url: '',
  colorDark: '#090d16',
  colorLight: '#ffffff',
  size: 280
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  const page = detectCurrentPage();

  if (page === 'profile') {
    renderProfilePage();
  } else if (page === 'dashboard') {
    initDashboardPage();
  } else if (page === 'studio') {
    initStudioPage();
  }
});

function detectCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('profile.html')) return 'profile';
  if (path.includes('dashboard.html')) return 'dashboard';
  return 'studio';
}

/* ==========================================================================
   PUBLIC PROFILE RENDERER (profile.html)
   ========================================================================== */

function renderProfilePage() {
  const data = ProfileStore.get();
  const p = data.personal;

  // Personal Header
  const nameEl = document.getElementById('profile-name');
  const titleEl = document.getElementById('profile-title');
  const bioEl = document.getElementById('profile-bio');
  const avatarEl = document.getElementById('profile-avatar');
  const instEl = document.getElementById('meta-inst');
  const locEl = document.getElementById('meta-loc');
  const emailEl = document.getElementById('meta-email');

  if (nameEl) nameEl.textContent = p.name;
  if (titleEl) titleEl.textContent = p.title;
  if (bioEl) bioEl.textContent = p.bio;
  if (avatarEl) avatarEl.src = p.avatar;
  if (instEl) instEl.innerHTML = `<i class="fa-solid fa-building-columns"></i> ${p.institution}`;
  if (locEl) locEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${p.location}`;
  if (emailEl) emailEl.innerHTML = `<i class="fa-solid fa-envelope"></i> ${p.email}`;

  // Metrics Counters
  const countPapers = document.getElementById('count-papers');
  const countBooks = document.getElementById('count-books');
  const countCerts = document.getElementById('count-certs');

  if (countPapers) countPapers.textContent = `${data.research.length * 75}+`;
  if (countBooks) countBooks.textContent = data.books.length;
  if (countCerts) countCerts.textContent = data.certificates.length;

  // Render Clean Social Cards Grid
  renderSocialCardsGrid(data.social);

  // Render Certificates List
  renderCertificatesList(data.certificates);

  // Render Research List
  renderResearchList(data.research);

  // Render Books Grid
  renderBooksGrid(data.books);
}

function renderSocialCardsGrid(links) {
  const container = document.getElementById('social-cards-container');
  if (!container) return;

  container.innerHTML = '';
  links.forEach(s => {
    const card = document.createElement('div');
    card.className = 'social-card-item';
    card.onclick = (e) => {
      // Open pure compact QR popup
      openQRModal(s.url, `${s.platform} ${s.handle ? '- ' + s.handle : ''}`, s.icon);
    };

    card.innerHTML = `
      <div class="social-card-info">
        <div class="social-card-icon">
          <i class="${s.icon}"></i>
        </div>
        <div class="social-card-text">
          <div class="social-card-platform">${s.platform}</div>
          <div class="social-card-handle">${s.handle || s.url}</div>
        </div>
      </div>
      ${s.enableQR ? `<div class="btn-qr-chip"><i class="fa-solid fa-qrcode"></i> QR</div>` : ''}
    `;
    container.appendChild(card);
  });
}

function renderCertificatesList(certs) {
  const container = document.getElementById('certificates-container');
  if (!container) return;

  container.innerHTML = '';
  certs.forEach(c => {
    const card = document.createElement('div');
    card.className = 'glass-card academic-card';
    card.innerHTML = `
      <div>
        <span class="academic-type-tag type-cert">${c.type || 'شهادة أكاديمية'}</span>
        <h3 class="academic-card-title">${c.title}</h3>
        <div class="academic-card-meta">
          <span><i class="fa-solid fa-university"></i> ${c.institution}</span>
          <span><i class="fa-solid fa-calendar"></i> ${c.year}</span>
        </div>
        <p class="academic-card-desc">${c.description}</p>
      </div>
      <div class="card-actions-group">
        <a href="${c.url}" target="_blank" class="btn-card-link">
          <i class="fa-solid fa-award"></i> وثيقة الشهادة
        </a>
        <button class="btn-qr-chip" onclick="openQRModal('${c.url}', '${c.title}', 'fa-solid fa-award')">
          <i class="fa-solid fa-qrcode"></i> رمز QR
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderResearchList(research) {
  const container = document.getElementById('research-container');
  if (!container) return;

  container.innerHTML = '';
  research.forEach(r => {
    const card = document.createElement('div');
    card.className = 'glass-card academic-card';
    card.innerHTML = `
      <div>
        <span class="academic-type-tag type-paper">ورقة بحثية محكّمة</span>
        <h3 class="academic-card-title">${r.title}</h3>
        <div class="academic-card-meta">
          <span><i class="fa-solid fa-book-journal-whills"></i> ${r.journal}</span>
          <span><i class="fa-solid fa-quote-right"></i> ${r.citations}</span>
          <span><i class="fa-solid fa-calendar"></i> ${r.year}</span>
        </div>
        <p class="academic-card-desc">${r.description}</p>
      </div>
      <div class="card-actions-group">
        <a href="${r.url}" target="_blank" class="btn-card-link">
          <i class="fa-solid fa-file-pdf"></i> رابط الورقة
        </a>
        <button class="btn-qr-chip" onclick="openQRModal('${r.url}', '${r.title}', 'fa-solid fa-microscope')">
          <i class="fa-solid fa-qrcode"></i> رمز QR
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderBooksGrid(books) {
  const container = document.getElementById('books-container');
  if (!container) return;

  container.innerHTML = '';
  books.forEach(b => {
    const card = document.createElement('div');
    card.className = 'glass-card book-card';
    card.innerHTML = `
      <img src="${b.cover}" alt="${b.title}" class="book-cover">
      <h3 class="book-title">${b.title}</h3>
      <div class="book-meta">
        <span>${b.publisher}</span>
      </div>
      <p class="academic-card-desc" style="margin-bottom: 1.25rem;">${b.description}</p>
      <div style="display: flex; gap: 0.5rem; margin-top: auto;">
        <a href="${b.url}" target="_blank" class="btn-card-link" style="flex: 1; justify-content: center;">
          <i class="fa-solid fa-cart-shopping"></i> طلب/قراءة
        </a>
        <button class="btn-qr-chip" onclick="openQRModal('${b.url}', '${b.title}', 'fa-solid fa-book')">
          <i class="fa-solid fa-qrcode"></i> QR
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   PURE COMPACT QR CODE POPUP MODAL (Focuses ONLY on the QR Code)
   ========================================================================== */

function openQRModal(targetUrl, title, iconClass = 'fa-solid fa-qrcode') {
  let modalOverlay = document.getElementById('global-qr-modal');
  
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'global-qr-modal';
    modalOverlay.className = 'modal-overlay';
    modalOverlay.onclick = (e) => {
      if (e.target === modalOverlay) closeQRModal();
    };

    modalOverlay.innerHTML = `
      <div class="compact-qr-modal-content">
        <button class="modal-close-btn" onclick="closeQRModal()"><i class="fa-solid fa-xmark"></i></button>
        <div class="compact-qr-title">
          <i id="modal-title-icon" class="${iconClass}" style="color: var(--primary-cyan);"></i>
          <span id="modal-item-title">رمز الـ QR</span>
        </div>
        
        <div class="qr-wrapper" style="margin: 0 auto; padding: 0.85rem; border-radius: 16px;">
          <div id="modal-qr-container"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }

  const titleEl = document.getElementById('modal-item-title');
  const iconEl = document.getElementById('modal-title-icon');
  const qrContainer = document.getElementById('modal-qr-container');

  if (titleEl) titleEl.textContent = title;
  if (iconEl) iconEl.className = iconClass;

  // Render Canvas
  qrContainer.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvas.width = 220;
  canvas.height = 220;
  qrContainer.appendChild(canvas);

  if (window.QRCode && typeof window.QRCode.toCanvas === 'function') {
    window.QRCode.toCanvas(canvas, targetUrl, {
      width: 220,
      margin: 2,
      color: { dark: '#090d16', light: '#ffffff' }
    });
  } else {
    drawCanvasFallback(canvas, targetUrl, '#090d16', '#ffffff');
  }

  modalOverlay.classList.add('active');
}

function closeQRModal() {
  const modalOverlay = document.getElementById('global-qr-modal');
  if (modalOverlay) modalOverlay.classList.remove('active');
}

/* ==========================================================================
   GITHUB-STYLE SIDEBAR DRAWER TOGGLE ENGINE
   ========================================================================== */

function toggleGithubDrawer() {
  let drawerOverlay = document.getElementById('github-drawer-overlay');
  
  if (!drawerOverlay) {
    drawerOverlay = document.createElement('div');
    drawerOverlay.id = 'github-drawer-overlay';
    drawerOverlay.className = 'github-drawer-overlay';
    drawerOverlay.innerHTML = `
      <div class="github-drawer-content" onclick="event.stopPropagation()">
        <div class="drawer-header">
          <div class="drawer-title">
            <i class="fa-solid fa-sliders" style="color: var(--primary-cyan);"></i> الإعدادات والتحكم
          </div>
          <button class="modal-close-btn" style="position: static;" onclick="toggleGithubDrawer()"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="drawer-links-list">
          <a href="dashboard.html" class="drawer-item-link">
            <i class="fa-solid fa-pen-to-square" style="color: var(--primary-cyan);"></i> لوحة تحكم العميل (CRUD)
          </a>
          <a href="index.html" class="drawer-item-link">
            <i class="fa-solid fa-qrcode" style="color: var(--accent-gold);"></i> استوديو الـ QR العامة
          </a>
          <a href="profile.html" class="drawer-item-link">
            <i class="fa-solid fa-user-graduate" style="color: var(--accent-emerald);"></i> معاينة السيرة الذاتية
          </a>
        </div>

        <div style="margin-top: auto; padding-top: 1.5rem; border-top: 1px solid var(--border-light); font-size: 0.8rem; color: var(--text-secondary); text-align: center;">
          نظام التحكم الذكي للسيرة الذاتية ورموز QR v2.1
        </div>
      </div>
    `;
    drawerOverlay.addEventListener('click', () => toggleGithubDrawer());
    document.body.appendChild(drawerOverlay);
  }

  drawerOverlay.classList.toggle('active');
}

/* ==========================================================================
   CLIENT ADMIN DASHBOARD (dashboard.html)
   ========================================================================== */

function initDashboardPage() {
  const data = ProfileStore.get();

  // Populate Personal Form
  const form = document.getElementById('form-profile');
  if (form) {
    form.elements['name'].value = data.personal.name;
    form.elements['title'].value = data.personal.title;
    form.elements['institution'].value = data.personal.institution;
    form.elements['location'].value = data.personal.location;
    form.elements['email'].value = data.personal.email;
    form.elements['avatar'].value = data.personal.avatar;
    form.elements['bio'].value = data.personal.bio;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const current = ProfileStore.get();
      current.personal = {
        name: form.elements['name'].value.trim(),
        title: form.elements['title'].value.trim(),
        institution: form.elements['institution'].value.trim(),
        location: form.elements['location'].value.trim(),
        email: form.elements['email'].value.trim(),
        avatar: form.elements['avatar'].value.trim(),
        bio: form.elements['bio'].value.trim()
      };
      ProfileStore.save(current);
      showToast('✅ تم حفظ بيانات الملف الشخصي بنجاح!');
    });
  }

  // Render Dashboard Tables
  renderDashSocialTable();
  renderDashResearchTable();
  renderDashCertsTable();
  renderDashBooksTable();

  // Tab Switching Logic
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      const targetPane = document.getElementById(tab.dataset.tab);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Reset to Default Button
  const btnReset = document.getElementById('btn-reset-data');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('هل أنت تأكد من إعادة تعيين البيانات إلى النموذج الافتراضي؟')) {
        ProfileStore.reset();
        location.reload();
      }
    });
  }
}

/* CRUD Social Links Table & Form Modal */
function renderDashSocialTable() {
  const container = document.getElementById('table-social-body');
  if (!container) return;

  const data = ProfileStore.get();
  container.innerHTML = '';

  data.social.forEach((s, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><i class="${s.icon}"></i> <strong>${s.platform}</strong></td>
      <td style="direction: ltr; font-family: monospace;">${s.handle || s.url}</td>
      <td>${s.enableQR ? '✅ مفعل' : '❌ معطل'}</td>
      <td>
        <button class="btn-icon-action danger" onclick="deleteSocialItem(${index})"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    container.appendChild(tr);
  });
}

function openAddSocialModal() {
  openStructuredCrudModal('إضافة حساب تواصل جديد', `
    <div class="form-group">
      <label class="form-label">اسم المنصة (مثال: واتساب، فيسبوك، لينكد إن):</label>
      <input type="text" id="crud-social-platform" class="form-input" style="direction: rtl;" placeholder="واتساب مباشر" required>
    </div>
    <div class="form-group">
      <label class="form-label">رقم الحساب / اليوزر / المعرّف (Handle):</label>
      <input type="text" id="crud-social-handle" class="form-input" style="direction: ltr;" placeholder="+966 50 000 0000" required>
    </div>
    <div class="form-group">
      <label class="form-label">رابط التوجيه المباشر (Full URL):</label>
      <input type="url" id="crud-social-url" class="form-input" placeholder="https://wa.me/966500000000" required>
    </div>
  `, () => {
    const platform = document.getElementById('crud-social-platform').value.trim();
    const handle = document.getElementById('crud-social-handle').value.trim();
    const url = document.getElementById('crud-social-url').value.trim();

    if (!platform || !url) return;

    const data = ProfileStore.get();
    data.social.push({
      id: 's_' + Date.now(),
      platform,
      handle: handle || url,
      icon: platform.includes('واتساب') ? 'fa-brands fa-whatsapp' : platform.includes('فيسبوك') ? 'fa-brands fa-facebook' : 'fa-solid fa-link',
      url,
      enableQR: true
    });
    ProfileStore.save(data);
    renderDashSocialTable();
    closeStructuredCrudModal();
    showToast('✅ تم إضافة الحساب بنجاح!');
  });
}

function deleteSocialItem(index) {
  const data = ProfileStore.get();
  data.social.splice(index, 1);
  ProfileStore.save(data);
  renderDashSocialTable();
  showToast('🗑️ تم حذف الحساب');
}

/* CRUD Research Papers Table & Form Modal */
function renderDashResearchTable() {
  const container = document.getElementById('table-research-body');
  if (!container) return;

  const data = ProfileStore.get();
  container.innerHTML = '';

  data.research.forEach((r, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${r.title}</strong></td>
      <td>${r.journal} (${r.year})</td>
      <td>${r.citations}</td>
      <td>
        <button class="btn-icon-action danger" onclick="deleteResearchItem(${index})"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    container.appendChild(tr);
  });
}

function openAddResearchModal() {
  openStructuredCrudModal('إضافة ورقة بحثية جديدة', `
    <div class="form-group">
      <label class="form-label">عنوان البحث العلمي:</label>
      <input type="text" id="crud-research-title" class="form-input" style="direction: rtl;" placeholder="تطبيق الذكاء الاصطناعي في معالجة اللغات" required>
    </div>
    <div class="form-group">
      <label class="form-label">اسم المجلة / المؤتمر العلمي:</label>
      <input type="text" id="crud-research-journal" class="form-input" style="direction: rtl;" placeholder="Nature Machine Intelligence" required>
    </div>
    <div class="form-group">
      <label class="form-label">سنة النشر والإصدار:</label>
      <input type="text" id="crud-research-year" class="form-input" placeholder="2024" required>
    </div>
    <div class="form-group">
      <label class="form-label">عدد الاستشهادات المرجعية (Citations):</label>
      <input type="text" id="crud-research-citations" class="form-input" placeholder="150+ استشهاد">
    </div>
    <div class="form-group">
      <label class="form-label">رابط البحث الأصلي / ملف PDF:</label>
      <input type="url" id="crud-research-url" class="form-input" placeholder="https://example.com/paper.pdf" required>
    </div>
    <div class="form-group">
      <label class="form-label">ملخص ومقدمة البحث:</label>
      <textarea id="crud-research-desc" class="form-textarea" style="direction: rtl;" placeholder="دراسة شاملة تناقش..."></textarea>
    </div>
  `, () => {
    const title = document.getElementById('crud-research-title').value.trim();
    const journal = document.getElementById('crud-research-journal').value.trim();
    const year = document.getElementById('crud-research-year').value.trim();
    const citations = document.getElementById('crud-research-citations').value.trim();
    const url = document.getElementById('crud-research-url').value.trim();
    const desc = document.getElementById('crud-research-desc').value.trim();

    if (!title || !url) return;

    const data = ProfileStore.get();
    data.research.push({
      id: 'r_' + Date.now(),
      title,
      journal: journal || 'مجلة الأبحاث المحكّمة',
      citations: citations || 'جديد',
      year: year || '2024',
      url,
      description: desc || 'بحث أكاديمي محكّم يناقش نتائج وتطبيقات حديثة.'
    });
    ProfileStore.save(data);
    renderDashResearchTable();
    closeStructuredCrudModal();
    showToast('✅ تم إضافة البحث بنجاح!');
  });
}

function deleteResearchItem(index) {
  const data = ProfileStore.get();
  data.research.splice(index, 1);
  ProfileStore.save(data);
  renderDashResearchTable();
  showToast('🗑️ تم حذف البحث');
}

/* CRUD Certificates Table & Form Modal */
function renderDashCertsTable() {
  const container = document.getElementById('table-certs-body');
  if (!container) return;

  const data = ProfileStore.get();
  container.innerHTML = '';

  data.certificates.forEach((c, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${c.title}</strong></td>
      <td>${c.institution} (${c.year})</td>
      <td>
        <button class="btn-icon-action danger" onclick="deleteCertItem(${index})"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    container.appendChild(tr);
  });
}

function openAddCertModal() {
  openStructuredCrudModal('إضافة شهادة أو اعتماد جديد', `
    <div class="form-group">
      <label class="form-label">عنوان الشهادة أو الجائزة الأكاديمية:</label>
      <input type="text" id="crud-cert-title" class="form-input" style="direction: rtl;" placeholder="شهادة الدكتوراه في الذكاء الاصطناعي" required>
    </div>
    <div class="form-group">
      <label class="form-label">الجهة المانحة / الجامعة:</label>
      <input type="text" id="crud-cert-inst" class="form-input" style="direction: rtl;" placeholder="جامعة ستانفورد - الولايات المتحدة" required>
    </div>
    <div class="form-group">
      <label class="form-label">سنة الحصول عليها:</label>
      <input type="text" id="crud-cert-year" class="form-input" placeholder="2024" required>
    </div>
    <div class="form-group">
      <label class="form-label">رابط الوثيقة المعتمدة / PDF:</label>
      <input type="url" id="crud-cert-url" class="form-input" placeholder="https://example.com/certificate.pdf" required>
    </div>
  `, () => {
    const title = document.getElementById('crud-cert-title').value.trim();
    const inst = document.getElementById('crud-cert-inst').value.trim();
    const year = document.getElementById('crud-cert-year').value.trim();
    const url = document.getElementById('crud-cert-url').value.trim();

    if (!title || !url) return;

    const data = ProfileStore.get();
    data.certificates.push({
      id: 'c_' + Date.now(),
      title,
      institution: inst || 'جامعة رسمية',
      year: year || '2024',
      type: 'شهادة أكاديمية',
      url,
      description: 'شهادة واعتماد أكاديمي رسمية.'
    });
    ProfileStore.save(data);
    renderDashCertsTable();
    closeStructuredCrudModal();
    showToast('✅ تم إضافة الشهادة بنجاح!');
  });
}

function deleteCertItem(index) {
  const data = ProfileStore.get();
  data.certificates.splice(index, 1);
  ProfileStore.save(data);
  renderDashCertsTable();
  showToast('🗑️ تم حذف الشهادة');
}

/* CRUD Books Table & Form Modal */
function renderDashBooksTable() {
  const container = document.getElementById('table-books-body');
  if (!container) return;

  const data = ProfileStore.get();
  container.innerHTML = '';

  data.books.forEach((b, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${b.title}</strong></td>
      <td>${b.publisher}</td>
      <td>
        <button class="btn-icon-action danger" onclick="deleteBookItem(${index})"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    container.appendChild(tr);
  });
}

function openAddBookModal() {
  openStructuredCrudModal('إضافة كتاب أو مؤلف جديد', `
    <div class="form-group">
      <label class="form-label">عنوان الكتاب العلمي:</label>
      <input type="text" id="crud-book-title" class="form-input" style="direction: rtl;" placeholder="موسوعة الذكاء الاصطناعي" required>
    </div>
    <div class="form-group">
      <label class="form-label">دار النشر وسنة الإصدار:</label>
      <input type="text" id="crud-book-pub" class="form-input" style="direction: rtl;" placeholder="دار النشر الأكاديمية | 2024" required>
    </div>
    <div class="form-group">
      <label class="form-label">رابط صورة الغلاف (Cover Image URL):</label>
      <input type="url" id="crud-book-cover" class="form-input" placeholder="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c">
    </div>
    <div class="form-group">
      <label class="form-label">رابط الشراء أو التنزيل:</label>
      <input type="url" id="crud-book-url" class="form-input" placeholder="https://example.com/book" required>
    </div>
  `, () => {
    const title = document.getElementById('crud-book-title').value.trim();
    const pub = document.getElementById('crud-book-pub').value.trim();
    const cover = document.getElementById('crud-book-cover').value.trim();
    const url = document.getElementById('crud-book-url').value.trim();

    if (!title || !url) return;

    const data = ProfileStore.get();
    data.books.push({
      id: 'b_' + Date.now(),
      title,
      publisher: pub || 'دار النشر الأكاديمية | 2024',
      cover: cover || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80',
      url,
      description: 'كتاب ومؤلف علمي متخصص.'
    });
    ProfileStore.save(data);
    renderDashBooksTable();
    closeStructuredCrudModal();
    showToast('✅ تم إضافة الكتاب بنجاح!');
  });
}

function deleteBookItem(index) {
  const data = ProfileStore.get();
  data.books.splice(index, 1);
  ProfileStore.save(data);
  renderDashBooksTable();
  showToast('🗑️ تم حذف الكتاب');
}

/* Structured CRUD Sub-Page Form Modal Helper */
function openStructuredCrudModal(title, formHTML, onSaveCallback) {
  let modalOverlay = document.getElementById('structured-crud-modal');

  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'structured-crud-modal';
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
      <div class="modal-content glass-card">
        <button class="modal-close-btn" onclick="closeStructuredCrudModal()"><i class="fa-solid fa-xmark"></i></button>
        <h2 id="crud-modal-title" class="panel-title" style="margin-bottom: 1.5rem;">إضافة عنصر</h2>
        <div id="crud-modal-form-container"></div>
        <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem;">
          <button id="crud-modal-submit-btn" class="btn-action btn-primary-action" style="flex: 1;">
            <i class="fa-solid fa-plus"></i> حفظ وإضافة
          </button>
          <button class="btn-action btn-secondary-action" onclick="closeStructuredCrudModal()" style="width: auto;">
            إلغاء
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }

  document.getElementById('crud-modal-title').textContent = title;
  document.getElementById('crud-modal-form-container').innerHTML = formHTML;

  const submitBtn = document.getElementById('crud-modal-submit-btn');
  submitBtn.onclick = onSaveCallback;

  modalOverlay.classList.add('active');
}

function closeStructuredCrudModal() {
  const modalOverlay = document.getElementById('structured-crud-modal');
  if (modalOverlay) modalOverlay.classList.remove('active');
}

/* ==========================================================================
   STUDIO PAGE LOGIC (index.html)
   ========================================================================== */

function initStudioPage() {
  const defaultProfileUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + 'profile.html';
  
  const urlInput = document.getElementById('qr-url-input');
  if (urlInput) {
    urlInput.value = defaultProfileUrl;
    studioState.url = defaultProfileUrl;

    urlInput.addEventListener('input', (e) => {
      studioState.url = e.target.value.trim() || defaultProfileUrl;
      generateStudioQRCode();
    });
  } else {
    studioState.url = defaultProfileUrl;
  }

  const fgColorInput = document.getElementById('fg-color-input');
  const bgColorInput = document.getElementById('bg-color-input');

  if (fgColorInput) {
    fgColorInput.addEventListener('input', (e) => {
      studioState.colorDark = e.target.value;
      generateStudioQRCode();
    });
  }

  if (bgColorInput) {
    bgColorInput.addEventListener('input', (e) => {
      studioState.colorLight = e.target.value;
      generateStudioQRCode();
    });
  }

  // Presets
  const presetChips = document.querySelectorAll('.chip-btn');
  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      presetChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const type = chip.dataset.preset;
      const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);

      if (type === 'profile') studioState.url = baseUrl + 'profile.html';
      else if (type === 'research') studioState.url = baseUrl + 'profile.html#research';
      else if (type === 'books') studioState.url = baseUrl + 'profile.html#books';
      else if (type === 'whatsapp') studioState.url = 'https://wa.me/966500000000';

      if (urlInput) urlInput.value = studioState.url;
      generateStudioQRCode();
    });
  });

  const btnTestLink = document.getElementById('btn-test-link');
  if (btnTestLink) {
    btnTestLink.addEventListener('click', () => window.open(studioState.url, '_blank'));
  }

  const btnCopyLink = document.getElementById('btn-copy-link');
  if (btnCopyLink) {
    btnCopyLink.addEventListener('click', () => {
      navigator.clipboard.writeText(studioState.url).then(() => showToast('✅ تم نسخ الرابط بنجاح!'));
    });
  }

  const btnDownloadPng = document.getElementById('btn-download-png');
  if (btnDownloadPng) {
    btnDownloadPng.addEventListener('click', downloadStudioPNG);
  }

  const btnSimulateScan = document.getElementById('btn-simulate-scan');
  if (btnSimulateScan) {
    btnSimulateScan.addEventListener('click', simulateCameraScan);
  }

  generateStudioQRCode();
}

function generateStudioQRCode() {
  const container = document.getElementById('qrcode-canvas-container');
  const displayUrlElement = document.getElementById('display-target-url');

  if (displayUrlElement) displayUrlElement.textContent = studioState.url;
  if (!container) return;

  container.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvas.width = studioState.size;
  canvas.height = studioState.size;
  container.appendChild(canvas);

  if (window.QRCode && typeof window.QRCode.toCanvas === 'function') {
    window.QRCode.toCanvas(canvas, studioState.url, {
      width: studioState.size,
      margin: 2,
      color: { dark: studioState.colorDark, light: studioState.colorLight }
    });
  } else {
    drawCanvasFallback(canvas, studioState.url, studioState.colorDark, studioState.colorLight);
  }
}

function downloadStudioPNG() {
  const canvas = document.querySelector('#qrcode-canvas-container canvas');
  if (canvas) {
    const link = document.createElement('a');
    link.download = 'qrcode_studio.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('📥 جاري تحميل صورة QR بنجاح!');
  }
}

function simulateCameraScan() {
  const mockup = document.querySelector('.phone-mockup');
  if (!mockup) return;

  mockup.classList.add('scanning');
  showToast('🔍 جاري فحص رمز QR عبر الكاميرا...');

  setTimeout(() => {
    mockup.classList.remove('scanning');
    showToast('✨ تم التعرف على الرمز! التوجيه للموقع...');
    setTimeout(() => window.open(studioState.url, '_blank'), 800);
  }, 2200);
}

function drawCanvasFallback(canvas, text, fgColor, bgColor) {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const qrImg = new Image();
  qrImg.crossOrigin = 'Anonymous';
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${canvas.width}x${canvas.height}&data=${encodeURIComponent(text)}&color=${fgColor.replace('#','')}&bgcolor=${bgColor.replace('#','')}&margin=2`;

  qrImg.onload = () => ctx.drawImage(qrImg, 0, 0, canvas.width, canvas.height);
}

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary-cyan);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
