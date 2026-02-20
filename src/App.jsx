import React, { useState, useEffect } from 'react';
import {
  Lock,
  Unlock,
  Play,
  Star,
  Clock,
  Info,
  CalendarDays,
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
  AlertCircle,
  CheckCircle2,
  Video
} from 'lucide-react';

// Data
const coursesData = [
  {
    id: "day-01",
    title: "Day 01 | Create Facebook Page That Can Generate 50+ High Quality Leads Everyday",
    platform: "Facebook Marketing",
    instructor: "TechManager",
    rating: 5,
    summary: "Master the foundational structure of a professional Facebook page designed specifically for high-volume lead generation and brand authority.",
    category: "Lead Generation",
    thumbnailUrl: "https://firebasestorage.googleapis.com/v0/b/techmanagerotpverification.firebasestorage.app/o/uploads%2Fimages%2F1764873879673_Gemini_Generated_Image_yrsva0yrsva0yrsv.png?alt=media&token=26586abf-22df-4983-8bb2-d37e1b7d1f2d",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/techmanagerotpverification.firebasestorage.app/o/03%20Days%20Class%20Videos%2FLec-01.mp4?alt=media&token=ed299289-2cdb-42c0-8fb8-e3491814b12d",
    duration: "1 Hour",
    dateAdded: "2024-01-01T00:00:00Z"
  },
  {
    id: "day-02",
    title: "Day 02 | Practical Meta Ads Setup (Step-by-Step)",
    platform: "Meta Ads Manager",
    instructor: "TechManager",
    rating: 4,
    summary: "A deep dive into the technical setup of Meta Ads. Learn precise audience targeting to reach your ideal customers and maximize ROI.",
    category: "Ads Mastery",
    thumbnailUrl: "https://firebasestorage.googleapis.com/v0/b/techmanagerotpverification.firebasestorage.app/o/uploads%2Fimages%2F1764873982707_Gemini_Generated_Image_fdr5pofdr5pofdr5.png?alt=media&token=b2bb0e14-116c-4cf8-bf66-c8463db15a1b",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/techmanagerotpverification.firebasestorage.app/o/03%20Days%20Class%20Videos%2FLec-02.mp4?alt=media&token=41a20e44-99f0-4536-9455-dcc935903443",
    duration: "1 Hour",
    dateAdded: "2024-01-01T00:01:00Z"
  },
  {
    id: "day-03",
    title: "Day 03 | Meta Business Suite + ChatGPT Smart Integration",
    platform: "AI Automation",
    instructor: "TechManager",
    rating: 5,
    summary: "Leverage ChatGPT and Meta Business Suite to automate your content creation workflow and generate high-converting ad copies in seconds.",
    category: "AI Marketing",
    thumbnailUrl: "https://firebasestorage.googleapis.com/v0/b/techmanagerotpverification.firebasestorage.app/o/uploads%2Fimages%2F1764874007366_Gemini_Generated_Image_xmataxxmataxxmat.png?alt=media&token=86edb7a0-a38b-4d90-b33d-d80bb3aef1d7",
    videoUrl: "https://firebasestorage.googleapis.com/v0/b/techmanagerotpverification.firebasestorage.app/o/03%20Days%20Class%20Videos%2FMeta%20Business%20Suite%20%2B%20ChatGpt%20.mp4?alt=media&token=e4aba1c0-780a-43fb-92e1-cffc8b81003c",
    duration: "1 Hour",
    dateAdded: "2024-01-01T00:02:00Z"
  }
];

const testimonialsData = [
  {
    name: "अमोल पाटील",
    initials: "AP",
    text: "चैतन्य सरांची शिकवण्याची पद्धत एकदम भारी आहे. आधी मला फेसबुक ॲड्समध्ये खूप लॉस होत होता, पण त्यांच्या स्ट्रॅटेजीमुळे आता रोजचे ५०+ लीड्स येत आहेत. थँक्स सर!",
    time: "मागील बॅच मधील प्रतिक्रिया"
  },
  {
    name: "स्नेहल माने",
    initials: "SM",
    text: "मार्केटमध्ये हजारो कोर्सेस आहेत पण इतकं प्रॅक्टिकल आणि मराठीत कोणीच शिकवत नाही. रिअल इस्टेटच्या माझ्या व्यवसायासाठी हे वरदान ठरलं आहे. नक्की ट्राय करा!",
    time: "मागील बॅच मधील प्रतिक्रिया"
  },
  {
    name: "राहुल साळुंखे",
    initials: "RS",
    text: "सुरुवातीला मला वाटलं होतं हे पण इतर कोर्सेससारखं असेल, पण मास्टरक्लास पाहिल्यावर डोळे उघडले. फेसबुक पेज सेट-अप आणि चॅटजीपीटी चा वापर करून ॲड कॉपी लिहणं खूप सोपं झालं.",
    time: "मागील बॅच मधील प्रतिक्रिया"
  }
];

function App() {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState(coursesData);
  const [lockedInfo, setLockedInfo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      const newUser = { name, phone };
      setUser(newUser);
      localStorage.setItem("tm_school_user", JSON.stringify(newUser));
    }
  };

  const checkLockStatus = (courseId) => {
    const now = new Date();
    if (courseId === "day-01") return { isLocked: false, label: "Available Now" };

    // Logic for Day 2 and Day 3
    const dayOffset = courseId === "day-02" ? 2 : 3; // 2=Tuesday, 3=Wednesday
    const targetDayName = courseId === "day-02" ? "Tuesday" : "Wednesday";

    // Calculate target date relative to current week
    const targetDate = new Date(now);
    const currentDay = targetDate.getDay(); // 0-6
    const diff = currentDay - dayOffset;

    // Set to the target day of the current week
    targetDate.setDate(targetDate.getDate() - diff);
    targetDate.setHours(21, 30, 0, 0); // 9:30 PM

    // If today is Monday (1) and target is Tuesday (2), diff is -1. targetDate becomes tomorrow.
    // If today is Wednesday (3) and target is Tuesday (2), diff is 1. targetDate becomes yesterday.

    // Special handling if current day is BEFORE the target day in the week?
    // The original logic was: Q.setDate(Q.getDate() - Gl), where Gl = Q.getDay() - gl.
    // That aligns Q to the target day of the SAME week.
    // Then checks if now < Q.

    // If today is Monday: Q becomes Tuesday (tomorrow). now < Q. Locked.
    // If today is Tuesday: Q becomes Tuesday (today).
    //   If time < 9:30PM: now < Q. Locked.
    //   If time > 9:30PM: now > Q. Unlocked.
    // If today is Wednesday: Q becomes Tuesday (yesterday). now > Q. Unlocked.

    return {
      isLocked: now < targetDate,
      label: `Available ${targetDayName} 9:30 PM`,
      targetDate: targetDate.toLocaleDateString("en-IN", { day: "numeric", month: "long" }),
      targetDayName: targetDayName
    };
  };

  const handleRating = (courseId, rating) => {
    setCourses(prev => prev.map(c => c.id === courseId ? { ...c, rating } : c));
  };

  const handleWhatsApp = () => {
    if (!feedback.trim()) return;
    const phone = "9684006926";
    const text = encodeURIComponent(`नमस्ते चैतन्य सर, मी ${user?.name}. माझी प्रतिक्रिया: ${feedback}`);
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const handlePlay = (courseId, videoUrl) => {
    const status = checkLockStatus(courseId);
    if (status.isLocked) {
      setLockedInfo({
        isOpen: true,
        day: status.targetDayName || "Tuesday",
        date: status.targetDate || ""
      });
    } else {
      setSelectedVideo(videoUrl);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-inter">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>

        <div className="w-full max-w-xl relative">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-6 shadow-xl shadow-slate-200">
              T
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">TechManager School</h1>
            <p className="text-slate-500 font-medium">Please enter your details to access the Masterclass.</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 animate-in fade-in zoom-in-95 duration-500">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-slate-200 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Mobile Number</label>
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
                  Join Masterclass <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Safe & Secure Access</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] relative font-inter">
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl animate-in fade-in zoom-in duration-300" onClick={() => setSelectedVideo(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[510] bg-white/10 p-2 rounded-full backdrop-blur-md" onClick={() => setSelectedVideo(null)}>
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative border border-white/10" onClick={(e) => e.stopPropagation()}>
            <video
              src={selectedVideo}
              className="w-full h-full"
              controls
              autoPlay
              playsInline
              controlsList="nodownload"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Locked Modal */}
      {lockedInfo && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-900/70 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="w-full max-w-lg bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden text-center border border-white/20">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-red-50 text-red-500 rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-inner">
                <AlertCircle size={44} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-6">Recording Locked!</h3>
              <div className="space-y-4 bg-slate-50 rounded-[2rem] p-8 border border-slate-100 mb-8">
                <p className="text-slate-600 font-bold leading-relaxed text-lg">You are not allowed to watch this recording. This is locked.</p>
                <p className="text-blue-600 font-black leading-relaxed">You need to join the live class @ {lockedInfo.day} {lockedInfo.date} @ 8:00 PM Live.</p>
                <div className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-amber-600 bg-amber-50 py-3 rounded-xl border border-amber-100">
                  <Clock size={14} /> Available after 9:30 PM (Post-Session)
                </div>
              </div>
              <button onClick={() => setLockedInfo(null)} className="w-full bg-slate-900 hover:bg-blue-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95">
                Understood, Go Back
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-lg">T</div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">TechManager School</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end mr-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Student</span>
              <span className="text-xs font-black text-slate-900">{user.name}</span>
            </div>
            <a href="https://www.instagram.com/kunalgandole5" target="_blank" className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </header>

      <section className="bg-white pt-20 pb-16 px-4 border-b border-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-100">
            <User size={14} className="fill-blue-700" /> Welcome back, {user.name.split(" ")[0]}!
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            Scale Your Business <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">with Meta Ads!</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Learn the secrets of professional Facebook marketing from TechManager and start generating 50+ high-quality leads daily.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto w-full px-4 py-16 flex-grow">
        <div className="max-w-md mx-auto relative group mb-20">
          <div className="absolute -inset-[1px] bg-gradient-to-tr from-[#FFD600] via-[#FF0069] to-[#7638FA] rounded-[2.5rem] opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-white rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]/10 rounded-3xl flex items-center justify-center mb-6 shadow-inner border border-slate-100">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <Instagram size={40} className="text-[#bc1888]" />
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4 leading-tight">Stay Connected</h3>
            <p className="text-slate-500 text-sm font-medium mb-8">
              Join <span className="text-slate-900 font-black">10,000+ students</span> for daily Meta Ads updates!
            </p>
            <a href="https://www.instagram.com/kunalgandole5" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg flex items-center justify-center gap-3">
              Follow @kunalgandole5 <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-12 mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-slate-900">Course Modules</h3>
            <div className="h-px bg-slate-100 flex-grow mx-6"></div>
          </div>
          {courses.map(course => {
            const status = checkLockStatus(course.id);
            const isLocked = status.isLocked;

            return (
              <div key={course.id} className="relative">
                <div className={`bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row gap-0 group transition-all ${isLocked ? "opacity-80" : "hover:shadow-2xl hover:border-blue-200"}`}>
                  <div
                    className="md:w-2/5 relative overflow-hidden bg-slate-900 aspect-video md:aspect-auto cursor-pointer"
                    onClick={() => !isLocked && course.videoUrl && handlePlay(course.id, course.videoUrl)}
                  >
                    {course.thumbnailUrl ? (
                      <img src={course.thumbnailUrl} alt={course.title} className={`w-full h-full object-cover transition-all duration-700 ${isLocked ? "grayscale opacity-50" : "opacity-90 group-hover:opacity-100 group-hover:scale-105"}`} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-700">
                        <Video size={48} />
                      </div>
                    )}

                    {isLocked && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-[2px]">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl mb-3">
                          <Lock size={24} className="text-white" />
                        </div>
                        <span className="text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-slate-900/60 rounded-full border border-white/10">Content Locked</span>
                      </div>
                    )}

                    {!isLocked && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-20 h-20 bg-blue-600/90 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                          <Play size={28} className="text-white fill-white ml-1" />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full flex items-center gap-1.5 shadow-sm">
                        <Sparkles size={12} className={isLocked ? "text-slate-400" : "text-green-600"} />
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Premium Content</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isLocked ? "text-slate-400" : "text-blue-600"}`}>
                          {course.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                          <Clock size={12} /> {course.duration || "1 Hour"}
                        </div>
                      </div>

                      <h3 className={`text-2xl font-black leading-tight mb-2 transition-colors ${isLocked ? "text-slate-400" : "text-slate-900 group-hover:text-blue-600"}`}>
                        {course.title}
                      </h3>

                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button
                            key={star}
                            onClick={() => !isLocked && handleRating(course.id, star)}
                            className={`focus:outline-none transition-transform ${isLocked ? "cursor-default" : "active:scale-90"}`}
                            aria-label={`Rate ${star} stars`}
                          >
                            <Star size={18} className={`transition-colors ${star <= course.rating ? (isLocked ? "fill-slate-300 text-slate-300" : "fill-yellow-400 text-yellow-400") : "text-slate-200"}`} />
                          </button>
                        ))}
                      </div>

                      <p className={`text-sm leading-relaxed font-medium line-clamp-3 ${isLocked ? "text-slate-300" : "text-slate-500"}`}>
                        {course.summary}
                      </p>
                    </div>

                    <div className="mt-8">
                      {!isLocked && (
                        <div className="mb-6 flex items-center gap-3 bg-amber-50 border border-amber-100 p-4 rounded-2xl">
                          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white animate-pulse">
                            <Info size={16} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.1em] text-amber-900 mb-0.5">Important Access Note</p>
                            <p className="text-xs font-bold text-amber-700">
                              This recording is available for <span className="underline decoration-amber-300 underline-offset-2">30 days only</span> from today.
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <div className={`flex items-center gap-2 ${isLocked ? "text-slate-300" : "text-slate-500"}`}>
                          <CalendarDays size={14} />
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            {isLocked ? status.label || "Upcoming" : "30 Days Access"}
                          </span>
                        </div>

                        {course.videoUrl && (
                          <button
                            onClick={() => handlePlay(course.id, course.videoUrl)}
                            className={`px-8 py-4 rounded-2xl flex items-center gap-3 text-xs font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 ${isLocked ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none" : "bg-slate-900 text-white hover:bg-blue-600 shadow-slate-200"}`}
                          >
                            {isLocked ? "Locked" : "Watch Now"}
                            {!isLocked && <Play size={14} className="fill-white" />}
                            {isLocked && <Lock size={14} />}
                          </button>
                        )}
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
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">विद्यार्थ्यांच्या प्रतिक्रिया</h3>
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
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{testimonial.time}</span>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Quote size={120} />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h4 className="text-3xl font-black mb-4">तुमची प्रतिक्रिया द्या</h4>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="तुमचा अनुभव येथे लिहा..."
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-6 text-white placeholder-slate-500 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all min-h-[120px] resize-none"
              />
              <button
                onClick={handleWhatsApp}
                disabled={!feedback.trim()}
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-slate-900 font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl transition-all active:scale-95"
              >
                व्हॉट्सॲपवर पाठवा <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
