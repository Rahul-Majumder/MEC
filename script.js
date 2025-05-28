// Banner Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.banner-dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause on hover
const heroBanner = document.querySelector('.hero-banner');
heroBanner.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

heroBanner.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Click on dots to navigate
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Update window resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        nav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Language Translation System
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.schedule": "Schedule",
        "nav.services": "Services",
        "nav.doctors": "Doctors",
        "nav.contact": "Contact",
        "nav.book": "Book Now",
        "banner.title1": "Advanced Eye Care Solutions",
        "banner.text1": "Comprehensive eye care services with state-of-the-art technology and experienced specialists.",
        "banner.title2": "Expert Ophthalmologists",
        "banner.text2": "Our team of highly qualified doctors provide personalized care for all your eye health needs.",
        "banner.title3": "Vision Correction Services",
        "banner.text3": "From LASIK to cataract surgery, we offer the latest vision correction procedures.",
        "about.title": "Welcome to Mathabhanga Eye Care Centre",
        "about.text1": "At Mathabhanga Eye Care, we are committed to providing exceptional eye care services to our patients. With over 15 years of experience, our team of board-certified ophthalmologists and optometrists deliver personalized care using the latest technology.",
        "about.text2": "Our centre specializes in comprehensive eye exams, cataract surgery, glaucoma treatment, LASIK vision correction, pediatric ophthalmology, and treatment of retinal diseases. We believe in a patient-centered approach to ensure the best possible outcomes.",
        "about.text3": "We accept most insurance plans and offer flexible payment options to make quality eye care accessible to everyone.",
        "notice.title": "Announcements",
        "notice.item1.title": "New Weekend Hours",
        "notice.item1.text": "We are now open on Saturdays from 9:00 AM to 2:00 PM to better serve our patients.",
        "notice.item1.date": "Posted: June 15, 2023",
        "notice.item2.title": "Advanced Cataract Surgery Now Available",
        "notice.item2.text": "We're proud to introduce the latest femtosecond laser-assisted cataract surgery technology.",
        "notice.item2.date": "Posted: May 28, 2023",
        "notice.item3.title": "COVID-19 Safety Measures",
        "notice.item3.text": "Masks are optional but recommended for patients with respiratory symptoms.",
        "notice.item3.date": "Posted: April 10, 2023",
        "schedule.title": "Doctor's Schedule",
        "schedule.doctor": "Doctor",
        "schedule.specialization": "Specialization",
        "schedule.weekdays": "Monday - Friday",
        "schedule.saturday": "Saturday",
        "schedule.status": "Status",
        "schedule.spec1": "Ophthalmologist",
        "schedule.spec2": "Retina Specialist",
        "schedule.spec3": "Pediatric Ophthalmologist",
        "schedule.available": "Available",
        "schedule.notAvailable": "Not Available",
        "schedule.unavailable": "On Leave",
        "cta.title": "Ready for Better Vision?",
        "cta.text": "Schedule your appointment today and experience the Mathabhanga Eye Care difference. Our friendly staff is ready to assist you with all your eye care needs.",
        "contact.title": "Contact Us",
        "contact.address": "Address",
        "contact.addressText": "Station Road, Near Mathabhanga Railway Station<br>Mathabhanga, Cooch Behar, West Bengal 736146",
        "contact.phone": "Phone",
        "contact.email": "Email",
        "contact.hours": "Working Hours",
        "contact.hoursText": "Monday - Friday: 9:00 AM - 7:00 PM<br>Saturday: 9:00 AM - 2:00 PM<br>Sunday: Closed",
        "footer.about": "Providing exceptional eye care services with compassion and cutting-edge technology since 2008.",
        "footer.links": "Quick Links",
        "footer.services": "Services",
        "footer.newsletter": "Newsletter",
        "footer.newsletterText": "Subscribe to our newsletter for health tips and updates.",
        "footer.emailPlaceholder": "Your Email",
        "footer.subscribe": "Subscribe",
        "footer.rights": "All Rights Reserved.",
        "services.item1": "Comprehensive Eye Exams",
        "services.item2": "Cataract Surgery",
        "services.item3": "LASIK Vision Correction",
        "services.item4": "Glaucoma Treatment",
        "services.item5": "Pediatric Ophthalmology"
    },
    hi: {
        "nav.home": "होम",
        "nav.about": "हमारे बारे में",
        "nav.schedule": "समय सारणी",
        "nav.services": "सेवाएं",
        "nav.doctors": "डॉक्टर",
        "nav.contact": "संपर्क करें",
        "nav.book": "अभी बुक करें",
        "banner.title1": "उन्नत आई केयर समाधान",
        "banner.text1": "अत्याधुनिक तकनीक और अनुभवी विशेषज्ञों के साथ व्यापक आंखों की देखभाल सेवाएं।",
        "banner.title2": "विशेषज्ञ नेत्र रोग विशेषज्ञ",
        "banner.text2": "हमारी अत्यधिक योग्य डॉक्टरों की टीम आपकी सभी आंखों की स्वास्थ्य आवश्यकताओं के लिए व्यक्तिगत देखभाल प्रदान करती है।",
        "banner.title3": "दृष्टि सुधार सेवाएं",
        "banner.text3": "LASIK से मोतियाबिंद सर्जरी तक, हम नवीनतम दृष्टि सुधार प्रक्रियाएं प्रदान करते हैं।",
        "about.title": "माठभांगा आई केयर सेंटर में आपका स्वागत है",
        "about.text1": "माठभांगा आई केयर में, हम अपने मरीजों को उत्कृष्ट आंखों की देखभाल सेवाएं प्रदान करने के लिए प्रतिबद्ध हैं। 15 वर्षों से अधिक के अनुभव के साथ, हमारी बोर्ड-प्रमाणित नेत्र रोग विशेषज्ञों और ऑप्टोमेट्रिस्ट की टीम नवीनतम तकनीक का उपयोग करके व्यक्तिगत देखभाल प्रदान करती है।",
        "about.text2": "हमारा केंद्र व्यापक आंखों की जांच, मोतियाबिंद सर्जरी, ग्लूकोमा उपचार, LASIK दृष्टि सुधार, बाल नेत्र विज्ञान और रेटिनल रोगों के उपचार में विशेषज्ञता रखता है। हम सर्वोत्तम संभव परिणाम सुनिश्चित करने के लिए रोगी-केंद्रित दृष्टिकोण में विश्वास करते हैं।",
        "about.text3": "हम अधिकांश बीमा योजनाओं को स्वीकार करते हैं और गुणवत्तापूर्ण आंखों की देखभाल को सभी के लिए सुलभ बनाने के लिए लचीले भुगतान विकल्प प्रदान करते हैं।",
        "notice.title": "घोषणाएं",
        "notice.item1.title": "नए सप्ताहांत के घंटे",
        "notice.item1.text": "हम अब शनिवार को सुबह 9:00 बजे से दोपहर 2:00 बजे तक खुले हैं ताकि हम अपने मरीजों को बेहतर सेवा प्रदान कर सकें।",
        "notice.item1.date": "पोस्टेड: 15 जून, 2023",
        "notice.item2.title": "उन्नत मोतियाबिंद सर्जरी अब उपलब्ध",
        "notice.item2.text": "हमें नवीनतम फेमटोसेकेंड लेजर-सहायता प्राप्त मोतियाबिंद सर्जरी तकनीक पेश करने पर गर्व है।",
        "notice.item2.date": "पोस्टेड: 28 मई, 2023",
        "notice.item3.title": "COVID-19 सुरक्षा उपाय",
        "notice.item3.text": "मास्क वैकल्पिक हैं लेकिन श्वसन लक्षणों वाले रोगियों के लिए अनुशंसित हैं।",
        "notice.item3.date": "पोस्टेड: 10 अप्रैल, 2023",
        "schedule.title": "डॉक्टर का समय सारणी",
        "schedule.doctor": "डॉक्टर",
        "schedule.specialization": "विशेषज्ञता",
        "schedule.weekdays": "सोमवार - शुक्रवार",
        "schedule.saturday": "शनिवार",
        "schedule.status": "स्थिति",
        "schedule.spec1": "नेत्र रोग विशेषज्ञ",
        "schedule.spec2": "रेटिना विशेषज्ञ",
        "schedule.spec3": "बाल नेत्र विशेषज्ञ",
        "schedule.available": "उपलब्ध",
        "schedule.notAvailable": "उपलब्ध नहीं",
        "schedule.unavailable": "अवकाश पर",
        "cta.title": "बेहतर दृष्टि के लिए तैयार?",
        "cta.text": "आज ही अपॉइंटमेंट शेड्यूल करें और माठभांगा आई केयर का अंतर अनुभव करें। हमारा मित्रवत स्टाफ आपकी सभी आंखों की देखभाल आवश्यकताओं में सहायता के लिए तैयार है।",
        "contact.title": "हमसे संपर्क करें",
        "contact.address": "पता",
        "contact.addressText": "स्टेशन रोड, माठभांगा रेलवे स्टेशन के पास<br>माठभांगा, कोच बिहार, पश्चिम बंगाल 736146",
        "contact.phone": "फोन",
        "contact.email": "ईमेल",
        "contact.hours": "कार्य समय",
        "contact.hoursText": "सोमवार - शुक्रवार: सुबह 9:00 बजे - शाम 7:00 बजे<br>शनिवार: सुबह 9:00 बजे - दोपहर 2:00 बजे<br>रविवार: बंद",
        "footer.about": "2008 से करुणा और अत्याधुनिक तकनीक के साथ उत्कृष्ट आंखों की देखभाल सेवाएं प्रदान करना।",
        "footer.links": "त्वरित लिंक",
        "footer.services": "सेवाएं",
        "footer.newsletter": "न्यूज़लेटर",
        "footer.newsletterText": "स्वास्थ्य युक्तियों और अपडेट के लिए हमारे न्यूज़लेटर की सदस्यता लें।",
        "footer.emailPlaceholder": "आपका ईमेल",
        "footer.subscribe": "सदस्यता लें",
        "footer.rights": "सर्वाधिकार सुरक्षित।",
        "services.item1": "व्यापक आंखों की जांच",
        "services.item2": "मोतियाबिंद सर्जरी",
        "services.item3": "LASIK दृष्टि सुधार",
        "services.item4": "ग्लूकोमा उपचार",
        "services.item5": "बाल नेत्र विज्ञान"
    },
    bn: {
        "nav.home": "হোম",
        "nav.about": "আমাদের সম্পর্কে",
        "nav.schedule": "সময়সূচী",
        "nav.services": "সেবা",
        "nav.doctors": "ডাক্তার",
        "nav.contact": "যোগাযোগ",
        "nav.book": "এখনই বুক করুন",
        "banner.title1": "উন্নত চোখের যত্ন সমাধান",
        "banner.text1": "আধুনিক প্রযুক্তি এবং অভিজ্ঞ বিশেষজ্ঞদের সাথে সম্পূর্ণ চোখের যত্ন সেবা।",
        "banner.title2": "বিশেষজ্ঞ চক্ষু বিশেষজ্ঞ",
        "banner.text2": "আমাদের অত্যন্ত যোগ্য ডাক্তারদের দল আপনার সমস্ত চোখের স্বাস্থ্য প্রয়োজনীয়তার জন্য ব্যক্তিগত যত্ন প্রদান করে।",
        "banner.title3": "দৃষ্টি সংশোধন সেবা",
        "banner.text3": "LASIK থেকে ছানি অপারেশন পর্যন্ত, আমরা সর্বশেষ দৃষ্টি সংশোধন পদ্ধতি প্রদান করি।",
        "about.title": "মাঠাভাঙ্গা আই কেয়ার সেন্টারে স্বাগতম",
        "about.text1": "মাঠাভাঙ্গা আই কেয়ারে, আমরা আমাদের রোগীদের জন্য অসাধারণ চোখের যত্ন সেবা প্রদানের জন্য প্রতিশ্রুতিবদ্ধ। ১৫ বছরেরও বেশি অভিজ্ঞতা সহ, আমাদের বোর্ড-প্রত্যয়িত চক্ষু বিশেষজ্ঞ এবং অপ্টোমেট্রিস্টদের দল সর্বশেষ প্রযুক্তি ব্যবহার করে ব্যক্তিগত যত্ন প্রদান করে।",
        "about.text2": "আমাদের কেন্দ্রে সম্পূর্ণ চোখের পরীক্ষা, ছানি অপারেশন, গ্লুকোমা চিকিৎসা, LASIK দৃষ্টি সংশোধন, শিশু চক্ষুবিদ্যা এবং রেটিনাল রোগের চিকিৎসায় বিশেষজ্ঞতা রয়েছে। আমরা সেরা সম্ভাব্য ফলাফল নিশ্চিত করতে রোগী-কেন্দ্রিক পদ্ধতিতে বিশ্বাস করি।",
        "about.text3": "আমরা অধিকাংশ বীমা পরিকল্পনা গ্রহণ করি এবং মানসম্পন্ন চোখের যত্ন সবার জন্য সহজলভ্য করতে নমনীয় পেমেন্ট বিকল্প প্রদান করি।",
        "notice.title": "ঘোষণা",
        "notice.item1.title": "নতুন সাপ্তাহিক ছুটির সময়",
        "notice.item1.text": "আমরা এখন শনিবার সকাল ৯টা থেকে দুপুর ২টা পর্যন্ত খোলা থাকি যাতে আমরা আমাদের রোগীদের আরও ভালো সেবা দিতে পারি।",
        "notice.item1.date": "পোস্ট করা হয়েছে: ১৫ জুন, ২০২৩",
        "notice.item2.title": "উন্নত ছানি অপারেশন এখন উপলব্ধ",
        "notice.item2.text": "আমরা সর্বশেষ ফেমটোসেকেন্ড লেজার-সহায়তায় ছানি অপারেশন প্রযুক্তি চালু করতে গর্বিত।",
        "notice.item2.date": "পোস্ট করা হয়েছে: ২৮ মে, ২০২৩",
        "notice.item3.title": "COVID-19 সুরক্ষা ব্যবস্থা",
        "notice.item3.text": "মাস্ক ঐচ্ছিক তবে শ্বাসযন্ত্রের লক্ষণযুক্ত রোগীদের জন্য সুপারিশ করা হয়।",
        "notice.item3.date": "পোস্ট করা হয়েছে: ১০ এপ্রিল, ২০২৩",
        "schedule.title": "ডাক্তারের সময়সূচী",
        "schedule.doctor": "ডাক্তার",
        "schedule.specialization": "বিশেষজ্ঞতা",
        "schedule.weekdays": "সোমবার - শুক্রবার",
        "schedule.saturday": "শনিবার",
        "schedule.status": "স্থিতি",
        "schedule.spec1": "চক্ষু বিশেষজ্ঞ",
        "schedule.spec2": "রেটিনা বিশেষজ্ঞ",
        "schedule.spec3": "শিশু চক্ষু বিশেষজ্ঞ",
        "schedule.available": "উপলব্ধ",
        "schedule.notAvailable": "উপলব্ধ নয়",
        "schedule.unavailable": "ছুটিতে",
        "cta.title": "ভালো দৃষ্টির জন্য প্রস্তুত?",
        "cta.text": "আজই অ্যাপয়েন্টমেন্ট শিডিউল করুন এবং মাঠাভাঙ্গা আই কেয়ারের পার্থক্য অনুভব করুন। আমাদের বন্ধুত্বপূর্ণ স্টাফ আপনার সমস্ত চোখের যত্ন প্রয়োজনীয়তায় সহায়তা করতে প্রস্তুত।",
        "contact.title": "যোগাযোগ করুন",
        "contact.address": "ঠিকানা",
        "contact.addressText": "স্টেশন রোড, মাঠাভাঙ্গা রেলওয়ে স্টেশনের নিকটে<br>মাঠাভাঙ্গা, কোচবিহার, পশ্চিমবঙ্গ ৭৩৬১৪৬",
        "contact.phone": "ফোন",
        "contact.email": "ইমেইল",
        "contact.hours": "কাজের সময়",
        "contact.hoursText": "সোমবার - শুক্রবার: সকাল ৯টা - সন্ধ্যা ৭টা<br>শনিবার: সকাল ৯টা - দুপুর ২টা<br>রবিবার: বন্ধ",
        "footer.about": "২০০৮ সাল থেকে সহানুভূতি এবং আধুনিক প্রযুক্তির সাথে অসাধারণ চোখের যত্ন সেবা প্রদান করা হচ্ছে।",
        "footer.links": "দ্রুত লিংক",
        "footer.services": "সেবা",
        "footer.newsletter": "নিউজলেটার",
        "footer.newsletterText": "স্বাস্থ্য টিপস এবং আপডেটের জন্য আমাদের নিউজলেটার সাবস্ক্রাইব করুন।",
        "footer.emailPlaceholder": "আপনার ইমেইল",
        "footer.subscribe": "সাবস্ক্রাইব করুন",
        "footer.rights": "সমস্ত অধিকার সংরক্ষিত।",
        "services.item1": "সম্পূর্ণ চোখের পরীক্ষা",
        "services.item2": "ছানি অপারেশন",
        "services.item3": "LASIK দৃষ্টি সংশোধন",
        "services.item4": "গ্লুকোমা চিকিৎসা",
        "services.item5": "শিশু চক্ষুবিদ্যা"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Store selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// Language button click handlers
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Check for saved language preference
const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
changeLanguage(savedLanguage);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const newsletterForm = document.querySelector('footer form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            // Here you would typically send the email to your server
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        }
    });
}

// Initialize the first slide
showSlide(0);
