'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RessourcesPage() {
    const [email, setEmail] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const featuredArticles = [
        {
            id: 1,
            category: 'Industry Analysis',
            title: 'The Future of Digital Payments in Africa',
            excerpt: 'Explore fintech innovation and payment disruption that is changing the way they conduct...',
            date: '19 Feb 2024',
            image: '/images/digital-payments.jpg',
            gradient: 'from-red-900 to-red-600'
        },
        {
            id: 2,
            category: 'Business Growth',
            title: 'How to Secure Cross-Border Transactions',
            excerpt: 'A deep dive into fraud prevention and fraud detection strategies best for African SMEs.',
            date: '21 Feb 2024',
            image: '/images/cross-border.jpg',
            bgColor: 'bg-gray-100'
        }
    ];

    const recentPosts = [
        {
            id: 1,
            category: 'Fintech Trends',
            title: 'Mobile Money: The Unseen Revolution',
            excerpt: 'How mobile wallets are empowering millions and reshaping consumer spending behavior.',
            author: 'Mariam Diaw',
            date: '15 Feb 2024',
            image: '/images/mobile-money.jpg'
        },
        {
            id: 2,
            category: 'E-commerce',
            title: 'Optimizing Checkout for African Markets',
            excerpt: 'Conversion tactics and checkout best practices to build trust and win high-converting sales.',
            author: 'Aisha Marie',
            date: '12 Feb 2024',
            image: '/images/checkout.jpg'
        },
        {
            id: 3,
            category: 'Security',
            title: 'The Importance of PCI DSS Compliance',
            excerpt: 'A guide to building a payment infrastructure that meets global payment gateway.',
            author: 'Modeste K.',
            date: '8 Feb 2024',
            image: '/images/security.jpg'
        }
    ];

    const categories = [
        { name: 'Fintech Trends', color: 'bg-pink-100 text-pink-700' },
        { name: 'E-commerce', color: 'bg-red-100 text-red-700' },
        { name: 'Security', color: 'bg-orange-100 text-orange-700' },
        { name: 'Business Growth', color: 'bg-yellow-100 text-yellow-700' },
        { name: 'Regulations', color: 'bg-purple-100 text-purple-700' }
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribing email:', email);
        // Add subscription logic
        alert('Merci pour votre inscription !');
        setEmail('');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Ressources
                    </h1>
                    <p className="text-red-600 text-lg">Paynala Blog</p>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Featured Article 1 - With gradient background */}
                        <Link href={`/blog/${featuredArticles[0].id}`} className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className={`bg-gradient-to-br ${featuredArticles[0].gradient} h-64 flex items-center justify-center`}>
                                {/* Placeholder for image */}
                                <div className="text-white text-6xl opacity-20">📱</div>
                            </div>
                            <div className="p-6 bg-white">
                                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                    {featuredArticles[0].category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-red-600 transition-colors">
                                    {featuredArticles[0].title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {featuredArticles[0].excerpt}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {featuredArticles[0].date}
                                </p>
                            </div>
                        </Link>

                        {/* Featured Article 2 - With image */}
                        <Link href={`/blog/${featuredArticles[1].id}`} className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="h-64 bg-gray-200 overflow-hidden">
                                {/* Placeholder for actual image */}
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl">
                                    💳
                                </div>
                            </div>
                            <div className="p-6 bg-white">
                                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                    {featuredArticles[1].category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-red-600 transition-colors">
                                    {featuredArticles[1].title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {featuredArticles[1].excerpt}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {featuredArticles[1].date}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Recent Posts Section with Sidebar */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content - Recent Posts */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Posts</h2>
                            <div className="space-y-8">
                                {recentPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.id}`}
                                        className="group flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {/* Post Image */}
                                        <div className="sm:w-40 sm:h-32 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
                                                {post.id === 1 ? '📱' : post.id === 2 ? '🛒' : '🔒'}
                                            </div>
                                        </div>

                                        {/* Post Content */}
                                        <div className="flex-1">
                                            <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                                                {post.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-red-600 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center text-xs text-gray-500">
                                                <span>{post.author}</span>
                                                <span className="mx-2">•</span>
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-center space-x-2 mt-12">
                                <button className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                                    1
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors border border-gray-300">
                                    2
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors border border-gray-300">
                                    3
                                </button>
                                <span className="text-gray-400">...</span>
                                <button className="w-8 h-8 flex items-center justify-center bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors border border-gray-300">
                                    8
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Search */}
                            <div className="bg-white p-6 rounded-lg shadow mb-8">
                                <form onSubmit={handleSearch} className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search for articles..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                    <svg
                                        className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </form>
                            </div>

                            {/* Categories */}
                            <div className="bg-white p-6 rounded-lg shadow mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category, index) => (
                                        <Link
                                            key={index}
                                            href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                                            className={`px-4 py-2 rounded-full text-sm font-medium ${category.color} hover:opacity-80 transition-opacity`}
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    Subscribe to our Newsletter
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Get the latest insights from the Paynala team directly in your inbox.
                                </p>
                                <form onSubmit={handleSubscribe}>
                                    <input
                                        type="email"
                                        placeholder="your-email@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
