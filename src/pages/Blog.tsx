import React, { useState } from 'react';
import { Calendar, User, Clock, Tag } from 'lucide-react';

const blogTags = [
	{ id: 'all', label: 'All' },
	{ id: 'education', label: 'Education' },
	{ id: 'admission', label: 'Admission' },
	{ id: 'career', label: 'Career' },
	{ id: 'sponsorship', label: 'Sponsorship' },
	{ id: 'training', label: 'Training' },
];

const blogPosts = [
	{
		id: 1,
		title: 'Complete Guide to Merchant Navy Entrance Exams 2024',
		excerpt: 'Everything you need to know about the latest entrance exams, eligibility, and preparation tips.',
		author: 'BM Editorial',
		date: '2024-01-15',
		readTime: '8 min read',
		image: '', // Placeholder for featured
		tags: ['admission', 'education'],
		featured: true,
	},
	{
		id: 2,
		title: 'Top 10 Maritime Companies for Deck Cadets',
		excerpt: 'A curated list of the best companies for aspiring deck cadets in India.',
		author: 'BM Team',
		date: '2024-01-10',
		readTime: '5 min read',
		image: '',
		tags: ['career', 'sponsorship'],
	},
	{
		id: 3,
		title: 'Life Afloat: What to Expect in Your First Year',
		excerpt: 'Insights and tips for freshers starting their journey at sea.',
		author: 'BM Team',
		date: '2024-01-08',
		readTime: '6 min read',
		image: '',
		tags: ['career', 'training'],
	},
	{
		id: 4,
		title: 'STCW Certification: Everything You Need to Know',
		excerpt: 'A breakdown of the STCW certification process and its importance.',
		author: 'BM Editorial',
		date: '2024-01-05',
		readTime: '7 min read',
		image: '',
		tags: ['training', 'education'],
	},
	{
		id: 5,
		title: 'Safety Trends in Indian Shipping 2024',
		excerpt: 'Latest safety protocols and trends in the Indian maritime sector.',
		author: 'BM Team',
		date: '2024-01-03',
		readTime: '4 min read',
		image: '',
		tags: ['training'],
	},
	{
		id: 6,
		title: 'How to Choose the Right Marine Course',
		excerpt: 'Factors to consider when selecting a marine course for your career.',
		author: 'BM Editorial',
		date: '2024-01-01',
		readTime: '5 min read',
		image: '',
		tags: ['education', 'admission'],
	},
];

const Blog = () => {
	const [activeFilter, setActiveFilter] = useState('all');

	const filteredPosts =
		activeFilter === 'all'
			? blogPosts
			: blogPosts.filter((post) => post.tags.includes(activeFilter));

	const featuredPost = blogPosts.find((post) => post.featured);

	return (
		<div className="min-h-screen bg-black text-white flex flex-col">
			{/* Header */}
			<section className="pt-28 pb-2 text-center">
				<h1 className="text-3xl md:text-4xl font-extrabold mb-1">Maritime Insights</h1>
				<p className="text-yellow-400 text-sm mb-2">
					Stay updated with the latest maritime trends, guides, and insights from the maritime industry
				</p>
			</section>

			{/* Blog Filters */}
			<section className="flex justify-center gap-2 mb-8">
				{blogTags.map((tag) => (
					<button
						key={tag.id}
						onClick={() => setActiveFilter(tag.id)}
						className={`px-4 py-2 rounded-full font-semibold text-xs md:text-sm transition ${
							activeFilter === tag.id
								? 'bg-yellow-400 text-black'
								: 'bg-white/10 text-white hover:bg-yellow-400 hover:text-black'
						}`}
					>
						{tag.label}
					</button>
				))}
			</section>

			{/* Featured Article */}
			{featuredPost && (
				<section className="max-w-3xl mx-auto w-full mb-12">
					<div className="bg-white rounded-xl flex flex-col md:flex-row overflow-hidden shadow-lg">
						<div className="flex-1 bg-gray-300 flex items-center justify-center min-h-[220px] md:min-h-[260px]">
							<span className="text-gray-500 text-lg font-semibold">Featured Article</span>
						</div>
						<div className="flex-1 p-6 flex flex-col justify-center">
							<div className="flex items-center gap-2 mb-2">
								<span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">Featured</span>
								<span className="text-gray-400 text-xs">{new Date(featuredPost.date).toLocaleDateString()}</span>
							</div>
							<h2 className="text-lg md:text-xl font-bold text-black mb-2">{featuredPost.title}</h2>
							<div className="text-gray-700 text-sm mb-3">{featuredPost.excerpt}</div>
							<div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
								<span className="flex items-center gap-1"><User className="w-3 h-3" />{featuredPost.author}</span>
								<span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featuredPost.readTime}</span>
							</div>
							<button className="bg-black text-yellow-400 px-4 py-2 rounded font-semibold text-xs w-max">Read More</button>
						</div>
					</div>
				</section>
			)}

			{/* Blog Grid */}
			<section className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-16">
				{filteredPosts
					.filter((post) => !post.featured)
					.map((post) => (
						<div key={post.id} className="bg-white rounded-xl shadow flex flex-col overflow-hidden">
							<div className="bg-gray-300 flex items-center justify-center min-h-[120px]">
								<span className="text-gray-500 text-xs">Blog Image</span>
							</div>
							<div className="p-4 flex flex-col flex-1">
								<div className="flex items-center gap-2 mb-2">
									<span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
										{post.tags[0]?.charAt(0).toUpperCase() + post.tags[0]?.slice(1)}
									</span>
									<span className="text-gray-400 text-xs">{new Date(post.date).toLocaleDateString()}</span>
								</div>
								<h3 className="text-base font-bold text-black mb-1">{post.title}</h3>
								<div className="text-gray-700 text-xs mb-2 flex-1">{post.excerpt}</div>
								<div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
									<span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
									<span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
								</div>
								<button className="bg-black text-yellow-400 px-3 py-1 rounded font-semibold text-xs w-max mt-auto">Read More</button>
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