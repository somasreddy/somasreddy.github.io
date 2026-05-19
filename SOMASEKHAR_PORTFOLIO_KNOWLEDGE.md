# Somasekhar V Career Portfolio Knowledge File

Last updated: 2026-05-18

## Purpose

This file captures the working conversation history and decisions used to refresh Somasekhar V's resume, cover letter, and digital portfolio. It is intended as a reusable knowledge base for future resume, portfolio, LinkedIn, GitHub profile, and job-application updates.

## Core Positioning

Primary market positioning:

- Senior QA Automation Engineer
- SDET
- QA Automation Lead
- Quality Engineering Lead
- Test Automation Architect
- API Automation Engineer
- AI QA Automation Specialist
- Product QA / AI Tools Engineer

Recommended headline:

Senior QA Automation Engineer | SDET | AI-Orchestrated Product Builder

Executive summary direction:

Somasekhar has 9+ years of experience across QA automation, Java, Selenium WebDriver, QMetry/QAF, Rest Assured, TestNG, Cucumber BDD, Postman/Newman, API validation, DMS workflows, desktop automation, CI/CD, Agile delivery, and enterprise low-code platform testing. He has also recently built and orchestrated AI-assisted products, using AI tools to plan, generate, refine, and validate working applications while applying senior QA judgment to correctness, usability, maintainability, and release readiness.

## Source Files Mentioned

Original resume and cover letter inputs:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\My Docs\HRA\Mine\Resumes\Somasekhar_TAE_9YOE.pdf`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\My Docs\HRA\Mine\Resumes\Somasekhar_TAE_8YOE.docx`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\My Docs\HRA\Mine\Resumes\CoverLetter_TAE_8YOE.docx`

Project folders reviewed or referenced:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\My Docs\hablenDocs`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\My Docs\MyApps`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\NewManScripts`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\code-generation-studio`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\somasPortfolio\somasreddy.github.io`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\ecapqa`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\ecapqa_apitest`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\ecaprestapi`

Generated resume outputs:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\code-generation-studio\output\resume\Somasekhar_V_Final_100_Resume.docx`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\code-generation-studio\output\resume\Somasekhar_V_Final_100_Cover_Letter.docx`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\code-generation-studio\output\resume\Somasekhar_V_Executive_Print_Resume.docx`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\code-generation-studio\output\resume\Somasekhar_V_Executive_Print_Cover_Letter.docx`

Digital portfolio files updated:

- `index.html`
- `style.css`
- `script.js`
- `resume.html`

Portfolio backup created before overwrite:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\somasPortfolio\somasreddy.github.io\backup-20260518-214206`

## Resume and Portfolio Content Decisions

Use company names when they add credibility and the work is clearly tied to professional experience. For public-facing AI/product portfolio projects, describe the work as "orchestrated", "built", "directed", or "developed" without overstating employment context unless the company/client ownership is confirmed.

Avoid unsupported metrics unless independently confirmed in source material. Removed or softened older claims such as:

- `$200K saved/year`
- `25+ engineers mentored`
- `99.5% uptime`
- placeholder contact form endpoint
- generic "Available Now" badge

Do not expose credentials, tokens, endpoints, or internal sensitive implementation details from automation scripts. In earlier Newman script review, hardcoded credential risk was observed; credentials must not be surfaced in resume or portfolio content.

## Projects To Mention

### ECAP QMetry Automation Framework

Source folder:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\ecapqa`

Evidence observed:

- Maven Java automation project
- QMetry/QAF dependencies in `pom.xml`
- Selenium Java
- Cucumber Java
- TestNG/QAF reporting configuration
- Maven Surefire execution
- Jenkinsfile
- JSON-driven test data under `src/test/java/com/escribaAg/data`
- Step definitions under `src/test/java/com/escribaAg/steps`
- Coverage areas include business rules, design-time workflows, dashboards, DMS/eFiling, folder permissions, document tags, translation workbench, reports, access management, and customer/internal issue regression.

Resume wording:

Built a QMetry/QAF Selenium automation framework from scratch with Maven, Cucumber/TestNG suites, JSON-driven test data, reusable step definitions, screenshot/reporting setup, and Jenkins-ready execution for ECAP enterprise low-code platform validation.

### Rest Assured TestNG Framework

Source folders:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\ecapqa_apitest`
- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\ecaprestapi`

Evidence observed in `ecapqa_apitest`:

- Rest Assured
- TestNG
- Maven
- ExtentReports
- JaCoCo
- Base classes: `RestAssureBase`, `BaseTest`
- Utilities: `ApiResponseVerifier`, `ConfigurationManager`, `DataInputProvider`, `DataProviderClass`, `HTMLReporter`
- Endpoint utilities: `URLUtility`, `URLBuilder`
- Test cases for login, file upload, folders, permissions, document types, document tags, users, teams, objects, company info, DMS comments.
- Test resources include JSON payloads, property files, upload documents, and report configuration.

Evidence observed in `ecaprestapi`:

- Java 21
- Rest Assured 5.4.0
- TestNG 7.10.2
- Allure TestNG and Allure Rest Assured
- ExtentReports
- JaCoCo
- SonarQube properties
- Jenkinsfile
- unified dashboard
- schema validation resources
- retry/listener utilities
- environment config files
- README references latest run summary: 602 tests, 562 passed, 15 failed, 25 skipped.

Resume wording:

Built Rest Assured + TestNG API automation frameworks for ECAP and DMS services with reusable base classes, response verifiers, URL utilities, data providers, externalized JSON payloads, schema validation, Allure/Extent/HTML reporting, JaCoCo, SonarQube integration, retry/listener utilities, and Jenkins CI/CD dashboards.

### Newman DMS Automation

Source folder:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\NewManScripts`

Positioning:

Postman/Newman automation for DMS upload and validation workflows. Mention API workflow acceleration, document upload validation, and repeatable command-line execution. Avoid credential or internal URL details.

### Code Generation Studio

Source folder:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\code-generation-studio`

Positioning:

AI-assisted platform for generating API test assets, scripts, and workflow outputs. Good bridge between QA automation, developer productivity, and AI-assisted product delivery.

### Hablen CRM

Positioning:

AI-orchestrated CRM product focused on lead, account, and operational workflows.

### hablen-newsite

Positioning:

Modern business website refresh with responsive layout, clearer messaging, and improved presentation.

### Job Intelligence Platform

Positioning:

Career-tech product concept for job-fit analysis, role discovery, and application tracking using AI-assisted workflows.

### TestFileGen PRO

Positioning:

AI-developed, client-side QA utility for generating and validating test files across image, document, data, and web formats. It is especially relevant to QA, DMS, upload validation, API testing, and security-edge-case testing.

Source folder:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\My Docs\MyApps\file-generator`

Evidence observed:

- Single-page browser app: `FileGenerator.html`
- Vercel-ready deployment via `vercel.json`
- Live demo referenced in README: `https://file-generator-pro.vercel.app`
- Multi-format generation: PNG, JPEG, GIF, BMP, TIFF, WebP, SVG, ICO, PDF, DOCX, XLSX, PPTX, TXT, RTF, CSV, JSON, XML, HTML, CSS, JS
- Batch generation and ZIP download
- File size boundary generation from KB up to 2GB
- Dynamic filename variables such as `{ext}`, `{size}`, `{date}`, `{time}`, `{rand}`
- Unicode, RTL, emoji-heavy, numeric, encoding, and line-ending controls
- Corrupted structures: truncated files, broken magic bytes, zero-filled bodies, random bytes
- Security edge cases: XSS, SQLi, path traversal strings embedded in generated files
- MIME mismatch and format tricks such as JPEG content saved with `.pdf` extension
- Encrypted ZIP archive support
- CSV/JSON schema builder
- File validation tab using magic-byte validation, file size analysis, offsets, EOF marker checks, and mismatched format detection

Resume wording:

TestFileGen PRO is an AI-developed client-side QA utility for generating and validating test files across images, documents, data, and web formats. It supports file-size boundary testing up to 2GB, corrupted payloads, MIME mismatches, security strings, encrypted ZIPs, CSV/JSON schema scaffolding, and magic-byte validation for upload, DMS, API, and edge-case testing workflows.

### Expense Tracker

Positioning:

Personal finance workflow product focused on expense entry, categorization, summaries, and visibility.

### Interactive Counter

Positioning:

Small interactive frontend application demonstrating state changes, UI feedback, and component behavior.

## Digital Portfolio Design Direction

Design direction applied:

- Clean executive design
- White background
- Deep navy header/accent
- Restrained teal highlights
- Recruiter-scan sections
- First viewport should immediately communicate name, target role, seniority, QA automation, and AI product orchestration
- Avoid purple gradients, decorative blobs, nested card-heavy marketing style, and unsupported vanity metrics

Current portfolio messaging:

- Hero: quality engineering leader building automation systems and AI-enabled products
- Capability strip: Automation Architecture, API & DMS Validation, AI Product Orchestration, Modern Web Delivery
- Sections: Profile, Skills, Projects, Experience Signal, Contact

## Resume Role Targeting

Best next roles to target:

- Senior QA Automation Engineer
- SDET
- QA Automation Lead
- Quality Engineering Lead
- API Automation Engineer
- Test Automation Architect
- AI QA Automation Specialist
- Product QA / AI Tools Engineer

Role narrative:

Somasekhar should be marketed as a senior QA automation specialist with enough framework ownership and AI product orchestration experience to target senior IC, lead, architect, and AI-enabled quality engineering roles.

## Verification Notes

Earlier DOCX visual rendering through LibreOffice/`soffice` was not available in the environment. Structural DOCX checks passed, but do not claim full visual render verification unless render images are produced and reviewed.

For portfolio HTML, static validation confirmed requested project names were present. Browser automation was unavailable at that time, so manual visual review by opening `index.html` locally is recommended after each major design change.

## Git Notes

Portfolio repository:

- `C:\Users\somasekharv\OneDrive - ESCRIBA AG\Desktop\EscribaGit\somasPortfolio\somasreddy.github.io`

Before pushing, verify:

- No sensitive files or backup folders are committed unintentionally.
- `index.html`, `style.css`, `script.js`, `resume.html`, and this knowledge file are intended.
- Backup folders should usually remain local and untracked unless explicitly requested.
