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

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pb-20 md:pb-8">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-0 md:pt-8">
        {/* Hero Section */}
        <section className="section-large container-max mt-12 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slideInLeft">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 dark:text-white leading-tight">
                  Welcome to{' '}
                  <span className="text-gradient">Islamic Companion Hub</span>
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Your premium Islamic resource hub. Discover Quran, Hadith, prayer times, and Islamic knowledge in one beautiful, modern platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary text-lg px-8">
                  Explore Now
                </button>
                <button className="btn btn-outline text-lg px-8">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <div>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    1200+
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Resources
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    50K+
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Active Users
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    24/7
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Available
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Gradient Orbs */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 rounded-3xl blur-3xl animate-pulse-glow" />
                
                {/* Content Card */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="card p-8 shadow-soft-lg backdrop-blur-sm text-center space-y-4">
                    <div className="text-6xl">🕌</div>
                    <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      Islamic Knowledge
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Comprehensive Islamic resources in one place
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="section container-max -mt-8 relative z-10">
          <SearchBar />
        </section>

        {/* Daily Reminder Section */}
        <section className="section container-max">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-neutral-950 dark:text-white mb-2">
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-950 dark:text-white mb-2">
              Featured Categories
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Explore our most popular Islamic resources and knowledge areas
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-neutral-950 dark:text-white mb-2">
              Featured Resources
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Handpicked Islamic resources and learning materials
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <button className="btn btn-secondary text-lg px-12">
              View All Resources
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section container-max">
          <div className="card bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white p-8 md:p-12 rounded-3xl overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold">
                Join Our Community
              </h2>
              <p className="text-lg text-emerald-50">
                Get daily Islamic reminders, exclusive resources, and connect with millions of Muslims worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn bg-white text-emerald-600 hover:bg-emerald-50 font-bold text-lg px-8">
                  Sign Up Free
                </button>
                <button className="btn text-white border-2 border-white hover:bg-white/10 font-bold text-lg px-8">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="section container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '114', label: 'Quranic Chapters' },
              { number: '6236', label: 'Quran Verses' },
              { number: '42', label: 'Hadith Collections' },
              { number: '50K+', label: 'Active Learners' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="card p-6 text-center hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors"
              >
                <p className="text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
