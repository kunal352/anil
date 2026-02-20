import React, { useState, useEffect } from 'react';
import {
  Star,
  Clock,
  Info,
  Instagram,
  ArrowRight,
  User,
  MessageSquare,
  Quote,
  Send,
  Phone,
  ShieldCheck,
  X,
  Sparkles,
  CheckCircle2,
  Image as ImageIcon,
  Facebook,
  Languages
} from 'lucide-react';

// Translations
const translations = {
  en: {
    title: "Saikrupa Waterproofing Services",
    welcome: "Welcome back",
    loginTitle: "Saikrupa Waterproofing Services",
    loginSubtitle: "Please enter your details to continue.",
    fullName: "Full Name",
    mobileNumber: "Mobile Number",
    enterWebsite: "Enter Website",
    safeSecure: "Safe & Secure Access",
    heroTitle: "100% Leakage Proof",
    heroSubtitle: "Guarantee!",
    heroDesc: "Terrace, Bathroom, Water Tank, and External Walls waterproofing services. Protect your home today!",
    contactPerson: "Contact Anil Gadhe",
    callUs: "Call us for free site inspection & quotation!",
    ourServices: "Our Services & Gallery",
    viewImage: "View Image",
    testimonialsTitle: "Customer Testimonials",
    sendEnquiry: "Send Your Enquiry",
    enquiryPlaceholder: "Write your problem here (e.g. Terrace leakage, Bathroom)...",
    sendWhatsapp: "Send on WhatsApp",
    available247: "Available 24/7",
    freeInspection: "Free Inspection",
    bookVisit: "Book a Free Site Visit today.",
    premiumQuality: "Premium Quality",
    gallery: "Gallery",
    customer: "Customer"
  },
  mr: {
    title: "साईकृपा वॉटरप्रूफिंग सर्विसेस",
    welcome: "स्वागत आहे",
    loginTitle: "साईकृपा वॉटरप्रूफिंग सर्विसेस",
    loginSubtitle: "कृपया पुढे जाण्यासाठी आपली माहिती भरा.",
    fullName: "पूर्ण नाव",
    mobileNumber: "मोबाईल नंबर",
    enterWebsite: "वेबसाइट पहा",
    safeSecure: "सुरक्षित प्रवेश",
    heroTitle: "१००% गळती बंद",
    heroSubtitle: "गॅरंटी!",
    heroDesc: "टेरेस, बाथरूम, पाण्याची टाकी आणि बाहेरील भिंतींच्या वॉटरप्रूफिंग सेवा. आजच आपल्या घराचे रक्षण करा!",
    contactPerson: "संपर्क: अनिल गाढे",
    callUs: "मोफत तपासणी आणि कोटेशनसाठी फोन करा!",
    ourServices: "आमच्या सेवा आणि फोटो",
    viewImage: "फोटो पहा",
    testimonialsTitle: "ग्राहकांच्या प्रतिक्रिया",
    sendEnquiry: "तुमची चौकशी पाठवा",
    enquiryPlaceholder: "तुमची समस्या येथे लिहा (उदा. गच्ची गळती, बाथरूम)...",
    sendWhatsapp: "व्हॉट्सॲपवर पाठवा",
    available247: "२४/७ उपलब्ध",
    freeInspection: "मोफत तपासणी",
    bookVisit: "आजच मोफत व्हिजिट बुक करा.",
    premiumQuality: "उत्तम दर्जा",
    gallery: "गॅलरी",
    customer: "ग्राहक"
  }
};

// Data - Saikrupa Waterproofing Services
const servicesData = [
  {
    id: "service-01",
    title_en: "Terrace Waterproofing",
    title_mr: "टेरेस वॉटरप्रूफिंग",
    platform_en: "Terrace Solutions",
    platform_mr: "टेरेस सोल्यूशन्स",
    rating: 5,
    summary_en: "Complete terrace leakage solution using polymer coating and brick bat coba. 100% leak-proof guarantee for your roof.",
    summary_mr: "पॉलिमर कोटिंग आणि ब्रिक बॅट कोबा वापरून टेरेस गळतीवर पूर्ण उपाय. आपल्या छतासाठी १००% गळती थांबवण्याची गॅरंटी.",
    category_en: "Roof Protection",
    category_mr: "छत संरक्षण",
    thumbnailUrl: "https://waterproofingcontractors.co.in/images/services/terrace-waterproofing-services.jpg",
    duration_en: "Lifetime Guarantee",
    duration_mr: "आजीवन गॅरंटी",
    dateAdded: "2024-01-01T00:00:00Z"
  },
  {
    id: "service-02",
    title_en: "Bathroom & Tank Leakage",
    title_mr: "बाथरूम आणि टाकी गळती",
    platform_en: "Internal Leakage",
    platform_mr: "अंतर्गत गळती",
    rating: 5,
    summary_en: "Advanced chemical treatment for bathrooms and water tanks without breaking tiles. Fast and effective solution.",
    summary_mr: "टाईल्स न फोडता बाथरूम आणि पाण्याच्या टाकीसाठी प्रगत केमिकल ट्रीटमेंट. जलद आणि प्रभावी उपाय.",
    category_en: "Leakage Repair",
    category_mr: "गळती दुरुस्ती",
    thumbnailUrl: "https://images.bergerpaints.com/s3fs-public/2024-03/Waterproofing-the-roofs.png?VersionId=XQzx765DhmC8pGVPMkpWxbby5.F2DS.r&format=webp&width=3840&quality=75",
    duration_en: "No Breaking",
    duration_mr: "तोडफोड नाही",
    dateAdded: "2024-01-01T00:01:00Z"
  },
  {
    id: "service-03",
    title_en: "External Wall Coating",
    title_mr: "बाहेरील भिंत कोटिंग",
    platform_en: "Wall Protection",
    platform_mr: "भिंत संरक्षण",
    rating: 5,
    summary_en: "Protect your building's exterior from rain damage. High-quality crack filling and waterproof painting services.",
    summary_mr: "पावसाच्या नुकसानीपासून आपल्या इमारतीच्या बाहेरील भागाचे संरक्षण करा. उच्च दर्जाचे क्रॅक फिलिंग आणि वॉटरप्रूफ पेंटिंग सेवा.",
    category_en: "Wall Care",
    category_mr: "भिंत काळजी",
    thumbnailUrl: "https://www.mripl.net/wp-content/uploads/2024/05/Waterproofing-Contractors.jpg",
    duration_en: "10 Year Warranty",
    duration_mr: "१० वर्षे गॅरंटी",
    dateAdded: "2024-01-01T00:02:00Z"
  },
  {
    id: "service-04",
    title_en: "Crack Filling & Repairs",
    title_mr: "भेगा भरणे आणि दुरुस्ती",
    platform_en: "Maintenance",
    platform_mr: "देखभाल",
    rating: 5,
    summary_en: "Professional filling of structural cracks in walls and ceilings to prevent major damage.",
    summary_mr: "भिंती आणि छतामधील भेगा भरून मोठ्या नुकसानीपासून वाचण्यासाठी प्रोफेशनल सेवा.",
    category_en: "Repairs",
    category_mr: "दुरुस्ती",
    thumbnailUrl: "https://plus.unsplash.com/premium_photo-1664302152990-410e4c3c6f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80",
    duration_en: "Quick Service",
    duration_mr: "जलद सेवा",
    dateAdded: "2024-01-01T00:03:00Z"
  }
];

const testimonialsData = [
  {
    name: "अनिल गाढे",
    initials: "AG",
    text_en: "My terrace was leaking badly. Saikrupa Waterproofing did an excellent job. Now there is no leakage at all in the rainy season. Thank you very much!",
    text_mr: "माझ्या घराच्या टेरेसवरून खूप गळती होत होती. साईकृपा वॉटरप्रूफिंगने उत्तम काम केले. आता पावसाळ्यात अजिबात गळती होत नाही. खूप धन्यवाद!",
    time_en: "Satisfied Customer",
    time_mr: "समाधानी ग्राहक"
  },
  {
    name: "अनिल गाढे",
    initials: "AG",
    text_en: "They treated the bathroom leakage without breaking tiles. The work was done at a very low cost and the leakage stopped completely. Highly recommended.",
    text_mr: "बाथरूम लिकेजसाठी टाइल्स न फोडता यांनी ट्रीटमेंट केली. खूप कमी खर्चात काम झाले आणि गळती पूर्ण थांबली. नक्कीच शिफारस करेन.",
    time_en: "Satisfied Customer",
    time_mr: "समाधानी ग्राहक"
  },
  {
    name: "अनिल गाढे",
    initials: "AG",
    text_en: "Timely and professional work. The material used is very good. Gave a 10-year guarantee which increased trust.",
    text_mr: "वेळेवर आणि प्रोफेशनल काम. यांनी वापरलेले मटेरिअल खूप चांगले आहे. १० वर्षांची गॅरंटी दिली आहे ज्यामुळे विश्वास वाढला.",
    time_en: "Satisfied Customer",
    time_mr: "समाधानी ग्राहक"
  }
];

function App() {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState(servicesData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Language State: Default 'mr' (Marathi)
  const [lang, setLang] = useState('mr');

  useEffect(() => {
    const storedUser = localStorage.getItem("tm_school_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("tm_school_user");
      }
    }
  }, []);

  const t = translations[lang];

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      const newUser = { name, phone };
      setUser(newUser);
      localStorage.setItem("tm_school_user", JSON.stringify(newUser));
    }
  };

  const handleRating = (courseId, rating) => {
    setCourses(prev => prev.map(c => c.id === courseId ? { ...c, rating } : c));
  };

  const handleWhatsApp = () => {
    if (!feedback.trim()) return;
    const phone = "918007256435";
    const text = encodeURIComponent(`नमस्ते साईकृपा वॉटरप्रूफिंग सर्विसेस, मी ${user?.name}. माझी प्रतिक्रिया/चौकशी: ${feedback}`);
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const handleViewImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'mr' : 'en');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-inter">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>

        {/* Language Switcher Login Page */}
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={toggleLanguage}
            className="bg-white/80 backdrop-blur-md hover:bg-white text-slate-800 px-4 py-2 rounded-full font-bold shadow-md transition-all flex items-center gap-2 border border-slate-200"
          >
            <Languages size={18} className="text-blue-600" />
            {lang === 'en' ? 'मराठी' : 'English'}
          </button>
        </div>

        <div className="w-full max-w-xl relative">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-6 shadow-xl shadow-blue-200">
              S
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-3">{t.loginTitle}</h1>
            <p className="text-slate-500 font-medium">{t.loginSubtitle}</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 animate-in fade-in zoom-in-95 duration-500">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{t.fullName}</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'en' ? "Enter your name" : "तुमचे नाव टाका"}
                    className="w-full bg-white border border-slate-200 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{t.mobileNumber}</label>
                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit number"
                    className="w-full bg-white border border-slate-200 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-slate-900 hover:bg-blue-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 group">
                  {t.enterWebsite} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{t.safeSecure}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] relative font-inter">
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-0 bg-black/95 backdrop-blur-xl animate-in fade-in zoom-in duration-300" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[510] bg-white/10 p-2 rounded-full backdrop-blur-md" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <div className="w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Service Detail"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">S</div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">{t.title}</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Switcher Header */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-full font-bold text-xs transition-all items-center gap-1.5 border border-slate-200 mr-2"
            >
              <Languages size={14} className="text-blue-600" />
              {lang === 'en' ? 'मराठी' : 'EN'}
            </button>

            <div className="hidden sm:flex flex-col items-end mr-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.customer}</span>
              <span className="text-xs font-black text-slate-900">{user.name}</span>
            </div>

            <a href="tel:8007256435" className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Language Switcher (Visible only on small screens below header) */}
      <div className="md:hidden flex justify-end px-4 py-2 bg-slate-50 border-b border-slate-100">
        <button
          onClick={toggleLanguage}
          className="flex bg-white text-slate-800 px-3 py-1 rounded-full font-bold text-xs transition-all items-center gap-1.5 border border-slate-200 shadow-sm"
        >
          <Languages size={12} className="text-blue-600" />
          {lang === 'en' ? 'मराठी मध्ये बदला' : 'Switch to English'}
        </button>
      </div>

      <section className="bg-white pt-10 pb-16 px-4 border-b border-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-100">
            <User size={14} className="fill-blue-700" /> {t.welcome}, {user.name.split(" ")[0]}!
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            {t.heroTitle} <br />
            <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">{t.heroSubtitle}</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            {t.heroDesc}
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto w-full px-4 py-16 flex-grow">
        {/* Contact Card */}
        <div className="max-w-md mx-auto relative group mb-20 text-center">
          <div className="absolute -inset-[1px] bg-gradient-to-tr from-blue-400 via-cyan-400 to-indigo-500 rounded-[2.5rem] opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-xl">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 shadow-inner border border-slate-100">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <Phone size={32} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2 leading-tight">{t.contactPerson}</h3>
            <p className="text-slate-500 text-sm font-medium mb-6">
              {t.callUs}
            </p>
            <a href="tel:8007256435" className="w-full bg-slate-900 text-white py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg flex items-center justify-center gap-3 mb-4">
              <Phone size={18} /> 8007256435
            </a>

            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="https://www.instagram.com/kunalgandole5" target="_blank" className="p-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-xl text-white shadow-lg  hover:scale-110 transition-transform">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" className="p-3 bg-blue-600 rounded-xl text-white shadow-lg hover:scale-110 transition-transform">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-12 mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-slate-900">{t.ourServices}</h3>
            <div className="h-px bg-slate-100 flex-grow mx-6"></div>
          </div>
          {courses.map(course => {
            return (
              <div key={course.id} className="relative">
                <div className={`bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row gap-0 group transition-all hover:shadow-2xl hover:border-blue-200`}>
                  {/* Image Display Section */}
                  <div
                    className="md:w-2/5 relative overflow-hidden bg-slate-100 aspect-[4/3] md:aspect-auto cursor-pointer"
                    onClick={() => handleViewImage(course.thumbnailUrl)}
                  >
                    <img
                      src={course.thumbnailUrl}
                      alt={course[`title_${lang}`]}
                      className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110`}
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl">
                        <ImageIcon size={24} className="text-blue-600" />
                      </div>
                    </div>

                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full flex items-center gap-1.5 shadow-sm">
                        <Sparkles size={12} className="text-green-600" />
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{t.gallery}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-blue-600`}>
                          {course[`category_${lang}`]}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                          <CheckCircle2 size={12} /> {course[`duration_${lang}`]}
                        </div>
                      </div>

                      <h3 className={`text-2xl font-black leading-tight mb-2 transition-colors text-slate-900 group-hover:text-blue-600`}>
                        {course[`title_${lang}`]}
                      </h3>

                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button
                            key={star}
                            onClick={() => handleRating(course.id, star)}
                            className={`focus:outline-none transition-transform active:scale-90`}
                            aria-label={`Rate ${star} stars`}
                          >
                            <Star size={18} className={`transition-colors ${star <= course.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}`} />
                          </button>
                        ))}
                      </div>

                      <p className={`text-sm leading-relaxed font-medium line-clamp-3 text-slate-500`}>
                        {course[`summary_${lang}`]}
                      </p>
                    </div>

                    <div className="mt-6 md:mt-8">
                      <div className="mb-4 flex items-center gap-3 bg-amber-50 border border-amber-100 p-3 rounded-xl">
                        <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white flex-shrink-0 animate-pulse">
                          <Info size={14} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.1em] text-amber-900 mb-0.5">{t.freeInspection}</p>
                          <p className="text-xs font-bold text-amber-700">
                            {t.bookVisit}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <div className={`flex items-center gap-2 text-slate-500`}>
                          <Clock size={14} />
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            {t.available247}
                          </span>
                        </div>

                        <button
                          onClick={() => handleViewImage(course.thumbnailUrl)}
                          className={`px-6 py-3 rounded-xl flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 bg-slate-900 text-white hover:bg-blue-600 shadow-slate-200`}
                        >
                          {t.viewImage}
                          <ImageIcon size={14} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-100">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">{t.testimonialsTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonialsData.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-black text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm leading-none mb-1">{testimonial.name}</h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{testimonial[`time_${lang}`]}</span>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed italic">"{testimonial[`text_${lang}`]}"</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Quote size={120} />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h4 className="text-3xl font-black mb-4">{t.sendEnquiry}</h4>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder={t.enquiryPlaceholder}
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-6 text-white placeholder-slate-500 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all min-h-[120px] resize-none"
              />
              <button
                onClick={handleWhatsApp}
                disabled={!feedback.trim()}
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-slate-900 font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl transition-all active:scale-95"
              >
                {t.sendWhatsapp} <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
