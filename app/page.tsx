'use client';

import Navigation from '@/components/Navigation';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import ResourceCard from '@/components/ResourceCard';
import DailyReminder from '@/components/DailyReminder';
import Footer from '@/components/Footer';
import {
  BookOpen,
  Scroll,
  Hand,
  Clock,
  Compass,
  BookMarked,
  Headphones,
  Baby,
  Droplet,
  Smartphone,
  ChevronRight,
  Star,
  Users,
  Globe,
  Play,
  Sparkles,
} from 'lucide-react';

const categories = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Quran',
    resourceCount: 114,
    description: 'Complete Quran with translations, tafsirs, and recitations',
    color: 'emerald' as const,
  },
  {
    icon: <Scroll className="w-6 h-6" />,
    title: 'Hadith',
    resourceCount: 42,
    description: 'Authentic Hadith collections and Islamic traditions',
    color: 'blue' as const,
  },
  {
    icon: <Hand className="w-6 h-6" />,
    title: 'Duas & Azkar',
    resourceCount: 320,
    description: 'Daily supplications and remembrance of Allah',
    color: 'amber' as const,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Prayer Times',
    resourceCount: 200,
    description: 'Accurate prayer times for your location',
    color: 'rose' as const,
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Qibla Direction',
    resourceCount: 1,
    description: 'Find the direction to Makkah from anywhere',
    color: 'purple' as const,
  },
  {
    icon: <BookMarked className="w-6 h-6" />,
    title: 'Islamic Books',
    resourceCount: 85,
    description: 'Curated Islamic literature and scholarly works',
    color: 'cyan' as const,
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: 'Islamic Lectures',
    resourceCount: 156,
    description: 'Educational talks from renowned scholars',
    color: 'lime' as const,
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: 'Kids Corner',
    resourceCount: 64,
    description: 'Islamic education for children and families',
    color: 'pink' as const,
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: 'Ramadan Resources',
    resourceCount: 98,
    description: 'Ramadan guides, duas, and special content',
    color: 'indigo' as const,
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Islamic Apps',
    resourceCount: 45,
    description: 'Curated list of best Islamic mobile apps',
    color: 'orange' as const,
  },
];

const featuredResources = [
  {
    title: 'Surah Al-Fatiha - The Opening',
    description: 'The most important chapter of the Quran with complete translation and tafsir',
    author: 'Sheikh Muhammad',
    category: 'Quran',
    views: 125400,
    rating: 4.9,
    isNew: true,
  },
  {
    title: 'Hadith on Kindness and Mercy',
    description: 'Collection of authentic hadith emphasizing compassion in Islam',
    author: 'Islamic Scholars',
    category: 'Hadith',
    views: 87300,
    rating: 4.8,
    isNew: false,
  },
  {
    title: 'Evening Dua Collection',
    description: 'Essential duas to recite in the evening for protection and peace',
    author: 'Dr. Fatima',
    category: 'Duas',
    views: 156200,
    rating: 4.9,
    isNew: true,
  },
  {
    title: 'Understanding Islamic Law',
    description: 'Comprehensive guide to Islamic jurisprudence and its principles',
    author: 'Prof. Ahmed',
    category: 'Islamic Books',
    views: 45600,
    rating: 4.7,
    isNew: false,
  },
  {
    title: 'Kids Learn Islam - Pillars',
    description: 'Fun and interactive way for children to learn the 5 pillars',
    author: 'Education Team',
    category: 'Kids',
    views: 32100,
    rating: 4.8,
    isNew: true,
  },
  {
    title: 'Ramadan 2024 Guide',
    description: 'Complete Ramadan fasting guide with daily tips and recipes',
    author: 'Wellness Hub',
    category: 'Ramadan',
    views: 203400,
    rating: 4.9,
    isNew: false,
  },
];

const stats = [
  { icon: <BookOpen className="w-8 h-8" />, number: '114', label: 'Quranic Chapters' },
  { icon: <Scroll className="w-8 h-8" />, number: '6,236', label: 'Quranic Verses' },
  { icon: <Users className="w-8 h-8" />, number: '50K+', label: 'Active Learners' },
  { icon: <Globe className="w-8 h-8" />, number: '24/7', label: 'Available Globally' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pb-20 md:pb-8">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-0 md:pt-8">
        {/* Hero Section */}
        <section className="section-large container-max mt-12 md:mt-0 relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-100/60 to-cyan-100/60 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-100/60 to-emerald-100/60 dark:from-amber-900/20 dark:to-emerald-900/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-8 animate-slideInLeft text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-full mx-auto lg:mx-0">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">✨ Your Islamic Journey Starts Here</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 dark:text-white leading-tight">
                  Discover the Beauty of
                  <span className="text-gradient block mt-2">Islamic Knowledge</span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Your premium Islamic resource hub with complete Quran, authentic Hadith, 
                  prayer times, and daily reminders. Beautiful, modern platform for seekers of all ages.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn btn-primary text-lg px-8 py-4 shadow-xl shadow-emerald-200 dark:shadow-emerald-900/30">
                  Explore Now
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="btn btn-outline text-lg px-8 py-4">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <div className="text-emerald-600 dark:text-emerald-400">
                        {stat.icon}
                      </div>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-neutral-950 dark:text-white">
                      {stat.number}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative w-full max-w-lg aspect-square animate-float">
                {/* Gradient Orbs */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-200 to-cyan-200 dark:from-emerald-800/30 dark:to-cyan-800/30 rounded-[3rem] blur-2xl animate-pulse-glow" />
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tr from-amber-200 to-emerald-200 dark:from-amber-800/30 dark:to-emerald-800/30 rounded-[2.5rem] blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                
                {/* Content Cards */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="card p-8 shadow-soft-lg backdrop-blur-xl text-center space-y-6 bg-white/80 dark:bg-neutral-900/80 border border-white/50 dark:border-neutral-800/50 w-full max-w-sm">
                    <div className="text-7xl mb-4">🕌</div>
                    <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      Islamic Companion Hub
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Everything you need in one beautiful place
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/20 p-4 rounded-2xl">
                      <div className="text-2xl mb-2">📖</div>
                      <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Quran</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-4 rounded-2xl">
                      <div className="text-2xl mb-2">📜</div>
                      <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Hadith</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-10 -left-10 bg-white dark:bg-neutral-900 p-4 rounded-2xl shadow-soft-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">4.9</span>
                  </div>
                </div>

                <div className="absolute bottom-10 -right-10 bg-white dark:bg-neutral-900 p-4 rounded-2xl shadow-soft-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-bold text-neutral-900 dark:text-white">50K+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="section container-max -mt-4 md:-mt-12 relative z-10">
          <SearchBar />
        </section>

        {/* Daily Reminder Section */}
        <section className="section container-max">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white mb-2">
              Daily Reminder
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Start your day with inspiration and Islamic wisdom
            </p>
          </div>
          <DailyReminder />
        </section>

        {/* Featured Categories Section */}
        <section className="section container-max">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-12 gap-4 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white mb-2">
                Featured Categories
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Explore our most popular Islamic resources and knowledge areas
              </p>
            </div>
            <button className="btn btn-ghost mt-4 md:mt-0 flex items-center gap-2">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="animate-slideUp"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="section container-max">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-12 gap-4 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white mb-2">
                Featured Resources
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Handpicked Islamic resources and learning materials
              </p>
            </div>
            <button className="btn btn-ghost mt-4 md:mt-0 flex items-center gap-2">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {featuredResources.map((resource, idx) => (
              <div
                key={idx}
                className="animate-slideUp"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <ResourceCard {...resource} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <button className="btn btn-primary text-lg px-12 py-4 shadow-xl shadow-emerald-200 dark:shadow-emerald-900/30">
              View All Resources
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section container-max">
          <div className="card bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 dark:from-emerald-600 dark:via-emerald-700 dark:to-emerald-800 text-white p-8 md:p-12 lg:p-16 rounded-[2rem] overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2" />
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Join Our Growing Community
              </h2>
              <p className="text-lg md:text-xl text-emerald-50">
                Get daily Islamic reminders, exclusive resources, and connect with millions of Muslims worldwide on your journey to knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn bg-white text-emerald-600 hover:bg-emerald-50 font-bold text-lg px-10 py-4 shadow-xl">
                  Sign Up Free
                </button>
                <button className="btn text-white border-2 border-white hover:bg-white/10 font-bold text-lg px-10 py-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
