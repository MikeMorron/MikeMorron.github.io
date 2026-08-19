const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const navBackdrop = document.querySelector("[data-nav-backdrop]");
const heroPanel = document.querySelector(".hero-panel");
const themeToggles = [...document.querySelectorAll("[data-theme-toggle]")];
const languageToggle = document.querySelector("[data-lang-toggle]");
const languageCode = document.querySelector("[data-lang-code]");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
const revealTargets = [
    ...document.querySelectorAll(
        ".section-heading, .profile-summary, .quick-facts div, .timeline-item, .skill-group, .language-card, .credential-grid article, .aspirations-grid article, .contact-card"
    ),
];
const progressBars = [...document.querySelectorAll(".progress-bar")];
const downloadButtons = [...document.querySelectorAll("[data-download-cv]")];
const downloadModal = document.querySelector("[data-download-modal]");
const downloadForm = document.querySelector("[data-download-form]");
const versionPicker = document.querySelector("[data-version-picker]");
const passwordInput = document.querySelector("[data-download-password]");
const passwordToggle = document.querySelector("[data-password-toggle]");
const downloadStatus = document.querySelector("[data-download-status]");
const downloadSubmit = document.querySelector("[data-download-submit]");
const closeDownloadButtons = [...document.querySelectorAll("[data-download-close]")];

const downloads = {
    es: {
        encryptedFile: "CV_Michael_Morron_Soporte_TI_L2.pdf.enc",
        fileName: "CV_Michael_Morron_Soporte_TI_L2.pdf",
        salt: "Wg5W0T6KL3L/pAO0Gq2KJQ==",
        iv: "R8BsKXP4z7Y3h7aA",
        iterations: 260000,
    },
    en: {
        encryptedFile: "CV_Michael_Morron_IT_Support_L2_eng.pdf.enc",
        fileName: "CV_Michael_Morron_IT_Support_L2_eng.pdf",
        salt: "JorXfFIhiLS9kPvs2lA4XQ==",
        iv: "rxBiadLiUMfLVLpu",
        iterations: 260000,
    },
};

const translations = {
    es: {
        pageTitle: "Michael Morrón | Hoja de Vida Profesional",
        pageDescription: "Hoja de vida profesional de Michael Jeremy Morrón Mazzilli, Analista de Soporte TI L2 bilingüe especializado en ITIL, redes, ERP/SAP, automatización y soporte técnico avanzado.",
        skipLink: "Saltar al contenido",
        homeAria: "Inicio",
        profilePhotoAlt: "Foto de Michael Morrón",
        mainNavAria: "Navegación principal",
        preferencesAria: "Preferencias",
        heroActionsAria: "Acciones principales",
        githubAria: "GitHub de Michael Morrón",
        summaryAria: "Resumen profesional",
        professionalPortraitAlt: "Retrato profesional de Michael Morrón",
        factsAria: "Datos destacados",
        languagesAria: "Idiomas",
        brandRole: "Soporte TI L2",
        navProfile: "Perfil",
        navExperience: "Experiencia",
        navSkills: "Habilidades",
        navEducation: "Formación",
        navGoals: "Aspiraciones",
        navContact: "Contacto",
        darkMode: "Modo oscuro",
        lightMode: "Modo claro",
        languageToggle: "Español",
        languageAria: "Cambiar idioma a inglés",
        menuOpen: "Abrir menú",
        menuClose: "Cerrar menú",
        heroEyebrow: "Ingeniero de Sistemas | ITIL V4 | CCNA | ERP/SAP",
        heroCopy: "Analista de Soporte TI L2 bilingüe, enfocado en operación estable, redes corporativas, ERP/SAP, automatización y atención técnica con cumplimiento de SLA.",
        contactCta: "Contactar",
        downloadCv: "Descargar CV",
        baseLabel: "Base",
        profileTitle: "Soporte técnico avanzado con mentalidad operativa.",
        profileP1: "Especialista en administración de identidades y gestión de accesos en entornos ERP/SAP, diagnóstico de redes corporativas y optimización de servicios bajo el marco ITIL.",
        profileP2: "Experiencia resolviendo incidentes críticos, manteniendo estándares SOP y cuidando el cumplimiento estricto de SLA en plataformas internas y ambientes empresariales.",
        factYearsValue: "5 años",
        factYearsLabel: "experiencia en soporte TI",
        factL2Label: "gestión de incidentes complejos",
        factEnglishLabel: "inglés certificado EF SET",
        factQaValue: "10 meses",
        factQaLabel: "participación en QA interno",
        experienceTitle: "Experiencia profesional",
        job1Date: "Jul 2023 - Jun 2026",
        job1Title: "Analista de Soporte TI L2",
        job1Item1: "Diseño, despliegue y optimización de infraestructura tecnológica y redes corporativas.",
        job1Item2: "Automatización de flujos operativos mediante Bash, PowerShell y Batch para reducir tiempos de ejecución.",
        job1Item3: "Administración de racks, direccionamiento IP y cableado estructurado con foco en alta disponibilidad.",
        job1Item4: "Liderazgo de soporte L2 para plataformas internas, cumplimiento de SLA y estándares SOP.",
        job1Item5: "Participación activa en QA para aseguramiento de calidad de software interno durante 10 meses.",
        job2Title: "Servicio técnico independiente",
        job2Item1: "Diagnóstico avanzado de hardware y mantenimiento preventivo/correctivo.",
        job2Item2: "Administración de sistemas Windows/Linux, instalación limpia de sistemas operativos y recuperación de accesos.",
        job2Item3: "Resolución de incidentes críticos de software y gestión de sistemas de archivos.",
        skillsTitle: "Habilidades técnicas y operativas",
        skillSystemsTitle: "Sistemas",
        skillSystemsCopy: "Active Directory, Linux, Windows, Office 365, administración de accesos y soporte de sistemas operativos.",
        skillNetworkTitle: "Redes y seguridad",
        skillNetworkCopy: "CCNA, VLAN, DMZ, firewall, direccionamiento IP, diagnóstico de redes corporativas y cableado estructurado.",
        skillToolsTitle: "Gestión y herramientas",
        skillToolsCopy: "JIRA, SAP, SQL básico, gestión de incidentes, documentación SOP y seguimiento de SLA.",
        skillAutomationTitle: "Automatización y datos",
        skillAutomationCopy: "ITIL V4, N8N, Bash, PowerShell, Batch, flujos operativos y mejora continua de procesos.",
        spanishName: "Español",
        nativeLevel: "Nativo",
        englishName: "Inglés",
        b2Level: "B2 Intermedio",
        japaneseName: "Japonés",
        n5Level: "N5 Básico",
        italianName: "Italiano",
        a2Level: "A2 Básico",
        educationTitle: "Formación académica y certificaciones",
        degree: "Ingeniería de Sistemas",
        degreeArea: "Informática y telecomunicaciones",
        englishCertTitle: "Certificación de inglés",
        ciscoTitle: "Certificaciones Cisco Academy",
        ciscoCopy: "CCNA, seguridad de terminales, soporte de sistemas operativos y hardware, bases de ciberseguridad y defensa en la red.",
        supportTrainingTitle: "Soporte y atención IT",
        supportTrainingCopy: "Soporte de sistemas operativos, mejora de equipos, inglés para IT y atención al usuario.",
        goalsTitle: "Aspiraciones profesionales",
        sysadminGoalTitle: "Especialización y SysAdmin",
        sysadminGoalCopy: "Mi objetivo profesional es especializarme en la administración y gestión de sistemas, orientándome al rol de Administrador de Sistemas (SysAdmin). Me interesa trabajar activamente en áreas de configuración, ensamblaje y mantenimiento de servidores e infraestructura crítica de TI.",
        salaryTitle: "Expectativa Salarial",
        salaryBefore: "Aspiro a una compensación salarial en el rango de",
        salaryBetween: "a",
        salaryAfter: "mensuales, dependiendo de las responsabilidades del cargo, modalidad laboral y beneficios corporativos.",
        contactTitle: "Disponible para roles de soporte TI, operaciones y redes.",
        contactCopy: "Puedo aportar en mesas de ayuda L2, administración de accesos, infraestructura, automatización operativa, QA funcional y soporte bilingüe.",
        emailLabel: "Email: michaelmorron132@gmail.com",
        downloadResume: "Descargar hoja de vida",
        closeAria: "Cerrar",
        downloadTitle: "Descarga protegida",
        downloadDescription: "Elige la versión que quieres descargar y luego ingresa la contraseña autorizada.",
        versionLegend: "Versión de la hoja de vida",
        versionSpanish: "Español",
        versionEnglish: "Inglés",
        passwordLabel: "Contraseña",
        showPasswordAria: "Mostrar contraseña",
        hidePasswordAria: "Ocultar contraseña",
        unlockDownload: "Desbloquear y descargar",
        statusMissingPassword: "Ingresa la contraseña para continuar.",
        statusVerifying: "Verificando contraseña...",
        statusAuthorized: "Descarga autorizada.",
        statusCryptoUnavailable: "Tu navegador no permite descifrar la hoja de vida.",
        statusFileUnavailable: "No se pudo cargar el archivo protegido.",
        statusWrongPassword: "Contraseña incorrecta.",
    },
    en: {
        pageTitle: "Michael Morrón | Professional Resume",
        pageDescription: "Professional resume of Michael Jeremy Morrón Mazzilli, bilingual IT Support Analyst L2 specialized in ITIL, networks, ERP/SAP, automation, and advanced technical support.",
        skipLink: "Skip to content",
        homeAria: "Home",
        profilePhotoAlt: "Photo of Michael Morrón",
        mainNavAria: "Main navigation",
        preferencesAria: "Preferences",
        heroActionsAria: "Primary actions",
        githubAria: "Michael Morrón on GitHub",
        summaryAria: "Professional summary",
        professionalPortraitAlt: "Professional portrait of Michael Morrón",
        factsAria: "Key facts",
        languagesAria: "Languages",
        brandRole: "IT Support L2",
        navProfile: "Profile",
        navExperience: "Experience",
        navSkills: "Skills",
        navEducation: "Education",
        navGoals: "Goals",
        navContact: "Contact",
        darkMode: "Dark mode",
        lightMode: "Light mode",
        languageToggle: "English",
        languageAria: "Switch language to Spanish",
        menuOpen: "Open menu",
        menuClose: "Close menu",
        heroEyebrow: "Systems Engineer | ITIL V4 | CCNA | ERP/SAP",
        heroCopy: "Bilingual IT Support Analyst L2 focused on stable operations, corporate networks, ERP/SAP, automation, and technical support aligned with SLA compliance.",
        contactCta: "Contact",
        downloadCv: "Download CV",
        baseLabel: "Base",
        profileTitle: "Advanced technical support with an operations mindset.",
        profileP1: "Specialist in identity administration and access management for ERP/SAP environments, corporate network diagnostics, and ITIL-based service optimization.",
        profileP2: "Experienced in resolving critical incidents, maintaining SOP standards, and protecting strict SLA compliance across internal platforms and business environments.",
        factYearsValue: "5 years",
        factYearsLabel: "experience in IT support",
        factL2Label: "complex incident management",
        factEnglishLabel: "EF SET certified English",
        factQaValue: "10 months",
        factQaLabel: "internal QA participation",
        experienceTitle: "Professional experience",
        job1Date: "Jul 2023 - Jun 2026",
        job1Title: "IT Support Analyst L2",
        job1Item1: "Designed, deployed, and optimized technology infrastructure and corporate networks.",
        job1Item2: "Automated operational workflows with Bash, PowerShell, and Batch to reduce execution times.",
        job1Item3: "Managed racks, IP addressing, and structured cabling with a focus on high availability.",
        job1Item4: "Led L2 support for internal platforms, SLA compliance, and SOP standards.",
        job1Item5: "Actively participated in internal software quality assurance for 10 months.",
        job2Title: "Independent technical support",
        job2Item1: "Advanced hardware diagnostics and preventive/corrective maintenance.",
        job2Item2: "Windows/Linux system administration, clean operating system installations, and access recovery.",
        job2Item3: "Resolved critical software incidents and managed file systems.",
        skillsTitle: "Technical and operational skills",
        skillSystemsTitle: "Systems",
        skillSystemsCopy: "Active Directory, Linux, Windows, Office 365, access administration, and operating system support.",
        skillNetworkTitle: "Networks and security",
        skillNetworkCopy: "CCNA, VLAN, DMZ, firewall, IP addressing, corporate network diagnostics, and structured cabling.",
        skillToolsTitle: "Management and tools",
        skillToolsCopy: "JIRA, SAP, basic SQL, incident management, SOP documentation, and SLA tracking.",
        skillAutomationTitle: "Automation and data",
        skillAutomationCopy: "ITIL V4, N8N, Bash, PowerShell, Batch, operational workflows, and continuous process improvement.",
        spanishName: "Spanish",
        nativeLevel: "Native",
        englishName: "English",
        b2Level: "B2 Intermediate",
        japaneseName: "Japanese",
        n5Level: "N5 Basic",
        italianName: "Italian",
        a2Level: "A2 Basic",
        educationTitle: "Education and certifications",
        degree: "Systems Engineering",
        degreeArea: "Computer science and telecommunications",
        englishCertTitle: "English certification",
        ciscoTitle: "Cisco Academy certifications",
        ciscoCopy: "CCNA, endpoint security, operating system and hardware support, cybersecurity fundamentals, and network defense.",
        supportTrainingTitle: "IT support and service",
        supportTrainingCopy: "Operating system support, computer upgrades, English for IT, and user service.",
        goalsTitle: "Professional goals",
        sysadminGoalTitle: "Specialization and SysAdmin",
        sysadminGoalCopy: "My professional goal is to specialize in systems administration and management, moving toward a System Administrator role. I am interested in hands-on work with configuration, assembly, and maintenance of servers and critical IT infrastructure.",
        salaryTitle: "Salary expectation",
        salaryBefore: "I am seeking monthly compensation in the range of",
        salaryBetween: "to",
        salaryAfter: "depending on role responsibilities, work modality, and corporate benefits.",
        contactTitle: "Available for IT support, operations, and networking roles.",
        contactCopy: "I can contribute to L2 service desks, access administration, infrastructure, operational automation, functional QA, and bilingual support.",
        emailLabel: "Email: michaelmorron132@gmail.com",
        downloadResume: "Download resume",
        closeAria: "Close",
        downloadTitle: "Protected download",
        downloadDescription: "Choose the resume version you want to download, then enter the authorized password.",
        versionLegend: "Resume version",
        versionSpanish: "Spanish",
        versionEnglish: "English",
        passwordLabel: "Password",
        showPasswordAria: "Show password",
        hidePasswordAria: "Hide password",
        unlockDownload: "Unlock and download",
        statusMissingPassword: "Enter the password to continue.",
        statusVerifying: "Verifying password...",
        statusAuthorized: "Download authorized.",
        statusCryptoUnavailable: "Your browser cannot decrypt the resume.",
        statusFileUnavailable: "The protected file could not be loaded.",
        statusWrongPassword: "Incorrect password.",
    },
};

let currentLanguage = "es";
let lastFocusedElement = null;

document.documentElement.classList.add("has-scroll-reveal");

const t = (key) => translations[currentLanguage][key] || translations.es[key] || "";

const syncHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 20);
};

const getStoredValue = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
};

const storeValue = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        return;
    }
};

const syncThemeControls = () => {
    const isDark = document.documentElement.dataset.theme === "dark";

    themeToggles.forEach((button) => {
        button.setAttribute("aria-pressed", String(isDark));
        button.setAttribute("aria-label", isDark ? t("lightMode") : t("darkMode"));

        const icon = button.querySelector(".theme-toggle-thumb i");
        if (icon) {
            icon.className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
        }

        const label = button.querySelector(".theme-toggle-label");
        if (label) {
            label.textContent = isDark ? t("lightMode") : t("darkMode");
        }
    });
};

const syncLanguageControl = () => {
    if (!languageToggle) return;

    const isEnglish = currentLanguage === "en";
    languageToggle.setAttribute("aria-pressed", String(isEnglish));
    languageToggle.setAttribute("aria-label", t("languageAria"));

    const label = languageToggle.querySelector(".language-toggle-label");
    if (label) {
        label.textContent = t("languageToggle");
    }

    if (languageCode) {
        languageCode.textContent = isEnglish ? "🇺🇸" : "🇪🇸";
    }
};

const applyLanguage = (language) => {
    currentLanguage = language === "en" ? "en" : "es";
    document.documentElement.lang = currentLanguage;
    document.title = t("pageTitle");

    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.setAttribute("content", t("pageDescription"));
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        element.setAttribute("alt", t(element.dataset.i18nAlt));
    });

    syncThemeControls();
    syncLanguageControl();
    storeValue("portfolio-language", currentLanguage);
};

const setTheme = (theme) => {
    if (theme === "dark") {
        document.documentElement.dataset.theme = "dark";
    } else {
        delete document.documentElement.dataset.theme;
    }

    storeValue("portfolio-theme", theme);
    syncThemeControls();
};

const setMenuIcon = (isOpen) => {
    if (!toggle) return;

    const icon = toggle.querySelector("i");
    if (icon) {
        icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }

    toggle.setAttribute("aria-label", isOpen ? t("menuClose") : t("menuOpen"));
};

const openMenu = () => {
    if (!nav || !toggle) return;

    navBackdrop.hidden = false;
    document.body.classList.add("menu-open");
    header?.classList.add("menu-active");
    toggle.setAttribute("aria-expanded", "true");
    setMenuIcon(true);

    requestAnimationFrame(() => {
        nav.classList.add("is-open");
        navBackdrop?.classList.add("is-open");
    });
};

const closeMenu = () => {
    document.body.classList.remove("menu-open");
    header?.classList.remove("menu-active");
    nav?.classList.remove("is-open");
    navBackdrop?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    setMenuIcon(false);

    window.setTimeout(() => {
        if (!document.body.classList.contains("menu-open") && navBackdrop) {
            navBackdrop.hidden = true;
        }
    }, 220);
};

const base64ToBytes = (value) => {
    const binary = window.atob(value);
    const bytes = new Uint8Array(binary.length);

    for (let index = 0; index < binary.length; index += 1) {
        bytes[index] = binary.charCodeAt(index);
    }

    return bytes;
};

const getSelectedDownload = () => {
    const selectedVersion = downloadForm?.querySelector('input[name="resume-version"]:checked')?.value || currentLanguage;
    return downloads[selectedVersion] || downloads.es;
};

const setDownloadStatus = (message, tone = "muted") => {
    if (!downloadStatus) return;
    downloadStatus.textContent = message;
    downloadStatus.dataset.tone = tone;
};

const setDownloadBusy = (isBusy) => {
    if (!downloadSubmit) return;
    downloadSubmit.disabled = isBusy;
    downloadSubmit.classList.toggle("is-loading", isBusy);
};

const openDownloadModal = () => {
    if (!downloadModal || !passwordInput) return;

    lastFocusedElement = document.activeElement;
    downloadModal.hidden = false;
    document.body.classList.add("modal-open");
    setDownloadStatus("");
    downloadForm?.reset();

    const defaultVersion = downloadForm?.querySelector(`input[name="resume-version"][value="${currentLanguage}"]`);
    if (defaultVersion) {
        defaultVersion.checked = true;
    }

    passwordInput.type = "password";
    passwordToggle?.setAttribute("aria-pressed", "false");
    passwordToggle?.setAttribute("aria-label", t("showPasswordAria"));

    requestAnimationFrame(() => {
        downloadModal.classList.add("is-open");
        versionPicker?.querySelector("input:checked")?.focus();
    });
};

const closeDownloadModal = () => {
    if (!downloadModal) return;

    downloadModal.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    window.setTimeout(() => {
        downloadModal.hidden = true;
        setDownloadBusy(false);

        if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus();
        }
    }, 180);
};

const decryptCv = async (password, download) => {
    if (!window.crypto?.subtle) {
        throw new Error("crypto-unavailable");
    }

    const response = await fetch(download.encryptedFile, {
        cache: "no-store",
        credentials: "same-origin",
    });

    if (!response.ok) {
        throw new Error("file-unavailable");
    }

    const encryptedBytes = await response.arrayBuffer();
    const passwordBytes = new TextEncoder().encode(password);
    const baseKey = await window.crypto.subtle.importKey(
        "raw",
        passwordBytes,
        "PBKDF2",
        false,
        ["deriveKey"]
    );
    const key = await window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: base64ToBytes(download.salt),
            iterations: download.iterations,
            hash: "SHA-256",
        },
        baseKey,
        { name: "AES-GCM", length: 256 },
        false,
        ["decrypt"]
    );

    return window.crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: base64ToBytes(download.iv),
        },
        key,
        encryptedBytes
    );
};

const saveCv = (decryptedPdf, download) => {
    const url = URL.createObjectURL(new Blob([decryptedPdf], { type: "application/pdf" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = download.fileName;
    link.rel = "noopener noreferrer";
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const handleDownloadSubmit = async (event) => {
    event.preventDefault();

    const password = passwordInput?.value || "";
    if (!password) {
        setDownloadStatus(t("statusMissingPassword"), "error");
        passwordInput?.focus();
        return;
    }

    const download = getSelectedDownload();
    setDownloadBusy(true);
    setDownloadStatus(t("statusVerifying"), "muted");

    try {
        const pdf = await decryptCv(password, download);
        saveCv(pdf, download);
        setDownloadStatus(t("statusAuthorized"), "success");
        window.setTimeout(closeDownloadModal, 650);
    } catch (error) {
        const message = error.message === "crypto-unavailable"
            ? t("statusCryptoUnavailable")
            : error.message === "file-unavailable"
                ? t("statusFileUnavailable")
                : t("statusWrongPassword");

        setDownloadStatus(message, "error");
        passwordInput?.select();
    } finally {
        setDownloadBusy(false);
    }
};

if (toggle) {
    toggle.addEventListener("click", () => {
        if (document.body.classList.contains("menu-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

navBackdrop?.addEventListener("click", closeMenu);

nav?.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    closeMenu();
});

themeToggles.forEach((button) => {
    button.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
    });
});

languageToggle?.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "es" : "en");
});

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((link) => {
                    link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            });
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0.01,
        }
    );

    sections.forEach((section) => sectionObserver.observe(section));
}

progressBars.forEach((bar) => {
    bar.dataset.targetWidth = bar.style.width || "0%";
    bar.style.width = "0%";
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                entry.target.querySelectorAll(".progress-bar").forEach((bar) => {
                    bar.style.width = bar.dataset.targetWidth;
                });

                revealObserver.unobserve(entry.target);
            });
        },
        {
            rootMargin: "0px 0px -12% 0px",
            threshold: 0.14,
        }
    );

    revealTargets.forEach((target, index) => {
        target.classList.add("reveal");
        target.style.setProperty("--reveal-delay", `${Math.min(index * 28, 144)}ms`);
        revealObserver.observe(target);
    });
} else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    progressBars.forEach((bar) => {
        bar.style.width = bar.dataset.targetWidth;
    });
}

if (heroPanel && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroPanel.addEventListener("pointermove", (event) => {
        const rect = heroPanel.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        heroPanel.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
        heroPanel.style.setProperty("--tilt-y", `${(x * 4).toFixed(2)}deg`);
    });

    heroPanel.addEventListener("pointerleave", () => {
        heroPanel.style.setProperty("--tilt-x", "0deg");
        heroPanel.style.setProperty("--tilt-y", "0deg");
    });
}

downloadButtons.forEach((button) => {
    button.addEventListener("click", openDownloadModal);
});

closeDownloadButtons.forEach((button) => {
    button.addEventListener("click", closeDownloadModal);
});

downloadForm?.addEventListener("submit", handleDownloadSubmit);
downloadForm?.addEventListener("change", () => setDownloadStatus(""));

passwordToggle?.addEventListener("click", () => {
    if (!passwordInput) return;

    const isVisible = passwordInput.type === "text";
    passwordInput.type = isVisible ? "password" : "text";
    passwordToggle.setAttribute("aria-pressed", String(!isVisible));
    passwordToggle.setAttribute("aria-label", isVisible ? t("showPasswordAria") : t("hidePasswordAria"));

    const icon = passwordToggle.querySelector("i");
    if (icon) {
        icon.className = isVisible ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (downloadModal?.classList.contains("is-open")) {
            closeDownloadModal();
            return;
        }

        if (document.body.classList.contains("menu-open")) {
            closeMenu();
        }
    }
});

const storedTheme = getStoredValue("portfolio-theme");
if (storedTheme === "dark") {
    document.documentElement.dataset.theme = "dark";
} else if (storedTheme === "light") {
    delete document.documentElement.dataset.theme;
}

const storedLanguage = getStoredValue("portfolio-language");
applyLanguage(storedLanguage === "en" ? "en" : "es");
setMenuIcon(false);
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
