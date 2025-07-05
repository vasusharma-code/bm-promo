import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, User, Clock, Tag } from 'lucide-react';
import hero from '../../assets/Main.png';
import top10 from '../../assets/top 10.png';
import money from '../../assets/money.png';
import confused from '../../assets/confused.png';
import dept from '../../assets/BM Thumbnail (63).png';

const blogPosts = [
	{
		id: 1,
		title: 'How to Join the Merchant Navy the RIGHT Way',
		excerpt: 'Confused about how to join the Merchant Navy? This vlog explains the right process, answers common questions, and covers all essential details to start your career at sea. A must-read guide for every Merchant Navy aspirant!',
		author: 'BM Editorial',
		date: '2024-01-15',
		readTime: '8 min read',
		image: hero, // Placeholder for featured
		featured: true,
	},
	{
		id: 2,
		title: '🎖 Merchant Navy Salary 2025 💰 | Full Breakdown from Cadet to Captain!',
		excerpt: 'Ever wondered how much you can actually earn in the Merchant Navy? 🚢 In this video, we break down the full salary structure – from starting as a cadet 👨‍🎓 to becoming a captain 👨‍✈. Whether youre just starting out or planning your future at sea, this vlog gives you the real numbers 💸 and expectations. Dont miss it! 📊⚓',
		author: 'BM Team',
		date: '2024-01-10',
		readTime: '5 min read',
		image: money,
	},
	{
		id: 3,
		title: '🎓 Best Merchant Navy Colleges in India (With Fees, Placement, Sponsorship) ',
		excerpt: 'Looking to join the Merchant Navy but confused about colleges? 🧭 This vlog covers the top institutes in India 🏫 with complete details on fees, placements, and sponsorships ⚓—everything you need to choose the right college in 2025!',
		author: 'BM Team',
		date: '2024-01-08',
		readTime: '6 min read',
		image: top10,
	},
	{
		id: 4,
		title: '🚢 Top 10 Shipping Companies in Merchant Navy – Salary, Sponsorship & Perks! ',
		excerpt: 'Confused about which shipping company is the best? 🌍 In this vlog, we break down the top 10 shipping giants with details on salary packages 💰, sponsorship options 🎓, perks 🧳, and more! A must-read for every future seafarer in 2025! ⚓',
		author: 'BM Editorial',
		date: '2024-01-05',
		readTime: '7 min read',
		image: confused,
	},
	{
		id: 5,
		title: 'Departments in Merchant Navy Explained – Deck, Engine & More! ',
		excerpt: '📌 Confused about the different departments in Merchant Navy? In this vlog, we break down all major departments like Deck, Engine, and Saloon — what they do, how to join, career growth, and which suits you best! 🚢👨‍✈ Let’s clear all your doubts in one go!',
		author: 'BM Team',
		date: '2024-01-03',
		readTime: '4 min read',
		image: dept,
	}
	// {
	// 	id: 6,
	// 	title: ' 🌊 Life at Sea – The Real Experience! ',
	// 	excerpt: '⚓ Ever wondered what life is really like on a ship? From daily routines to breathtaking sunsets, food, work, and fun onboard – this vlog gives you a full glimpse into the real-life experience of seafarers 🌅🚢. Don’t miss the highs and challenges of life at sea!',
	// 	author: 'BM Editorial',
	// 	date: '2024-01-01',
	// 	readTime: '5 min read',
	// 	image: '',
	// 	tags: ['education', 'admission'],
	// },
];

const Blog = () => {
	const featuredPost = blogPosts.find((post) => post.featured);

	return (
		<div className="min-h-screen bg-black text-white flex flex-col">
			<Helmet>
				<title>Maritime Blog & Insights | Latest Merchant Navy News | Budding Mariners</title>
				<meta name="description" content="Read the latest blog articles, guides, and news on maritime education, Merchant Navy careers, sponsorships, and industry trends. Stay updated with Budding Mariners." />
				<meta name="keywords" content="Maritime Blog, Merchant Navy News, Marine Education, Shipping Industry, Marine Careers, Budding Mariners Blog" />
				<meta property="og:title" content="Maritime Blog & Insights | Latest Merchant Navy News | Budding Mariners" />
				<meta property="og:description" content="Stay updated with the latest maritime trends, guides, and insights from Budding Mariners." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://buddingmariners.com/blog" />
				<meta property="og:image" content="/assets/yellow on orange logomark.png" />
			</Helmet>

			{/* Header */}
			<section className="pt-28 pb-2 text-center">
				<h1 className="text-3xl md:text-4xl font-extrabold mb-1">Maritime Insights</h1>
				<p className="text-yellow-400 text-sm mb-2">
					Stay updated with the latest maritime trends, guides, and insights from the maritime industry
				</p>
			</section>

			{/* Featured Article */}
			{featuredPost && (
				<section className="max-w-3xl mx-auto w-full mb-12">
					<div className="bg-white rounded-xl flex flex-col md:flex-row overflow-hidden shadow-lg">
						{/* Show image if present, else fallback */}
						<div className="flex-1 bg-gray-300 flex items-center justify-center min-h-[220px] md:min-h-[260px]">
							{featuredPost.image ? (
								<img
									src={featuredPost.image}
									alt={featuredPost.title}
									className="object-cover w-full h-full"
								/>
							) : (
								<span className="text-gray-500 text-lg font-semibold">Featured Article</span>
							)}
						</div>
						<div className="flex-1 p-6 flex flex-col justify-center">
							<div className="flex items-center gap-2 mb-2">
								<span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">Featured</span>
								<span className="text-gray-400 text-xs">{new Date(featuredPost.date).toLocaleDateString()}</span>
							</div>
							<h2 className="text-lg md:text-xl font-bold text-black mb-2 capitalize">
								{featuredPost.title.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}
							</h2>
							<div className="text-gray-700 text-sm mb-3">{featuredPost.excerpt}</div>
							<div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
								<span className="flex items-center gap-1"><User className="w-3 h-3" />{featuredPost.author}</span>
								<span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featuredPost.readTime}</span>
							</div>
							{/* <button className="bg-black text-yellow-400 px-3 py-1 rounded font-semibold text-xs w-max mt-auto">Read More</button> */}
						</div>
					</div>
				</section>
			)}

			{/* Blog Grid */}
			<section className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-16">
				{blogPosts
					.filter((post) => !post.featured)
					.map((post) => (
						<div key={post.id} className="bg-white rounded-xl shadow flex flex-col overflow-hidden">
							<div className="bg-gray-300 flex items-center justify-center min-h-[120px] w-full">
								{post.image ? (
									<img
										src={post.image}
										alt={post.title}
										className="object-cover w-full h-full"
									/>
								) : (
									<span className="text-gray-500 text-xs">Blog Image</span>
								)}
							</div>
							<div className="p-4 flex flex-col flex-1">
								<div className="flex items-center gap-2 mb-2">
									<span className="text-gray-400 text-xs">{new Date(post.date).toLocaleDateString()}</span>
								</div>
								<h3 className="text-base font-bold text-black mb-1 capitalize">
									{post.title.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}
								</h3>
								<div className="text-gray-700 text-xs mb-2 flex-1">{post.excerpt}</div>
								<div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
									<span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
									<span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
								</div>
								{/* <button className="bg-black text-yellow-400 px-3 py-1 rounded font-semibold text-xs w-max mt-auto">Read More</button> */}
							</div>
						</div>
					))}
			</section>

			{/* Newsletter Signup */}
			<section className="w-full bg-yellow-400 py-8 mt-auto">
				<div className="max-w-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 px-4">
					<span className="font-semibold text-black text-center md:text-left text-base">Stay Updated</span>
					<input
						type="email"
						placeholder="Enter your email"
						className="flex-1 px-4 py-2 rounded bg-white border-none text-black text-sm"
					/>
					<button className="bg-black text-yellow-400 px-6 py-2 rounded font-semibold text-sm">Subscribe</button>
				</div>
			</section>
		</div>
	);
};

export default Blog;