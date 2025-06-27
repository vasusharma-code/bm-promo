import React, { useState } from 'react';
import { Download, FileText, Video, BookOpen } from 'lucide-react';

const stats = [
	{ value: '500+', label: 'Study Materials' },
	{ value: '100K+', label: 'Downloads' },
	{ value: '50+', label: 'Topics Covered' },
	{ value: '24/7', label: 'Access' },
];

const categories = [
	{ id: 'all', label: 'All' },
	{ id: 'entrance', label: 'Entrance Exam' },
	{ id: 'navigation', label: 'Navigation' },
	{ id: 'safety', label: 'Safety' },
	{ id: 'regulation', label: 'Regulation' },
	{ id: 'communication', label: 'Communication' },
	{ id: 'interview', label: 'Interview' },
];

const materials = [
	{
		id: 1,
		title: 'IMU-CET Previous Year Papers',
		desc: 'All India IMU-CET solved papers with answer keys.',
		type: 'pdf',
		category: 'entrance',
		downloads: '12,000+',
		size: '8.2 MB',
		featured: true,
	},
	{
		id: 2,
		title: 'Merchant Navy Career Guide 2024',
		desc: 'Step-by-step guide for all streams and eligibility.',
		type: 'pdf',
		category: 'entrance',
		downloads: '9,800+',
		size: '5.1 MB',
	},
	{
		id: 3,
		title: 'STCW Basic Safety Training Manual',
		desc: 'Official BST manual for all seafarers.',
		type: 'pdf',
		category: 'safety',
		downloads: '7,200+',
		size: '6.5 MB',
	},
	{
		id: 4,
		title: 'Ship Construction & Stability Notes',
		desc: 'Detailed notes for deck and engine cadets.',
		type: 'pdf',
		category: 'navigation',
		downloads: '6,500+',
		size: '4.8 MB',
	},
	{
		id: 5,
		title: 'Navigation & Seamanship Handbook',
		desc: 'Complete navigation and seamanship reference.',
		type: 'pdf',
		category: 'navigation',
		downloads: '5,900+',
		size: '7.3 MB',
	},
	{
		id: 6,
		title: 'Maritime Laws & Regulations',
		desc: 'SOLAS, MARPOL, and Indian shipping rules.',
		type: 'pdf',
		category: 'regulation',
		downloads: '4,800+',
		size: '3.9 MB',
	},
	{
		id: 7,
		title: 'English Exam Preparation Video',
		desc: 'Video guide for maritime English exams.',
		type: 'video',
		category: 'communication',
		downloads: '3,200+',
		size: '120 MB',
	},
	{
		id: 8,
		title: 'Maritime English Communication',
		desc: 'PDF + Audio for spoken and written English.',
		type: 'pdf',
		category: 'communication',
		downloads: '2,900+',
		size: '2.5 MB',
	},
	{
		id: 9,
		title: 'Cargo Handling & Stowage Guide',
		desc: 'Best practices for safe cargo operations.',
		type: 'pdf',
		category: 'navigation',
		downloads: '2,100+',
		size: '3.2 MB',
	},
];

const getTypeIcon = (type: string) => {
	if (type === 'pdf') return <FileText className="w-4 h-4 mr-1" />;
	if (type === 'video') return <Video className="w-4 h-4 mr-1" />;
	return <BookOpen className="w-4 h-4 mr-1" />;
};

const FreeMaterials = () => {
	const [active, setActive] = useState('all');
	const [email, setEmail] = useState('');
	const [subscribed, setSubscribed] = useState(false);

	const filtered =
		active === 'all'
			? materials
			: materials.filter((m) => m.category === active);

	return (
		<div className="min-h-screen bg-black text-white flex flex-col">
			{/* Header */}
			<section className="pt-28 pb-6 text-center">
				<h1 className="text-3xl md:text-4xl font-extrabold mb-2">
					Free Study Materials
				</h1>
				<p className="text-white/80 text-base max-w-2xl mx-auto">
					Access our unique exhaustive collection of free study materials,
					guides, and resources.
				</p>
			</section>

			{/* Stats */}
			<section className="w-full bg-yellow-400 py-6 flex flex-wrap justify-center items-center gap-8 text-black font-bold text-center text-lg">
				{stats.map((stat) => (
					<div key={stat.label}>
						<div className="text-2xl">{stat.value}</div>
						<div className="text-xs font-semibold">{stat.label}</div>
					</div>
				))}
			</section>

			{/* Filters */}
			<section className="w-full bg-white flex flex-wrap justify-center gap-2 border-b border-gray-200 py-3">
				{categories.map((cat) => (
					<button
						key={cat.id}
						onClick={() => setActive(cat.id)}
						className={`px-4 py-2 rounded-full font-semibold text-sm transition ${
							active === cat.id
								? 'bg-yellow-400 text-black'
								: 'bg-gray-100 text-gray-700 hover:bg-yellow-400 hover:text-black'
						}`}
					>
						{cat.label}
					</button>
				))}
			</section>

			{/* Materials Grid */}
			<section className="max-w-6xl mx-auto w-full py-10 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filtered.map((mat, idx) => (
					<div
						key={mat.id}
						className={`bg-white rounded-xl shadow p-5 flex flex-col border border-gray-100 relative ${
							mat.featured ? 'ring-2 ring-yellow-400' : ''
						}`}
					>
						{mat.featured && (
							<span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full z-10">
								FEATURED
							</span>
						)}
						<div className="flex items-center mb-2">
							<span className="flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold mr-2">
								{getTypeIcon(mat.type)}
								{mat.type.toUpperCase()}
							</span>
							<span className="text-xs text-gray-400">{mat.size}</span>
						</div>
						<div className="font-bold text-base text-black mb-1">
							{mat.title}
						</div>
						<div className="text-gray-700 text-xs mb-3">{mat.desc}</div>
						<div className="flex items-center justify-between text-xs text-gray-500 mb-4">
							<span>{mat.downloads} downloads</span>
						</div>
						<button className="w-full bg-black text-yellow-400 py-2 rounded font-bold flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black transition">
							<Download className="w-4 h-4" />
							Download Free
						</button>
					</div>
				))}
			</section>

			{/* Newsletter */}
			<section className="w-full flex flex-col items-center justify-center py-10 bg-gradient-to-b from-[#18181b] to-black">
				<div className="bg-[#18181b] rounded-xl shadow-lg p-8 w-full max-w-xl flex flex-col items-center">
					<h2 className="text-xl font-bold mb-2 text-white">
						Get Notified of New Materials
					</h2>
					<p className="text-white/70 mb-4 text-center text-sm">
						Subscribe to receive updates when new study materials are added.
					</p>
					{subscribed ? (
						<div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-green-300 w-full text-center">
							Subscribed! You’ll get notified on new materials.
						</div>
					) : (
						<form
							className="flex w-full gap-2"
							onSubmit={(e) => {
								e.preventDefault();
								setSubscribed(true);
							}}
						>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
								className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
								required
							/>
							<button
								type="submit"
								className="bg-yellow-400 text-black px-6 py-2 rounded font-bold hover:bg-yellow-500 transition"
							>
								Subscribe
							</button>
						</form>
					)}
				</div>
			</section>

			{/* Guidance CTA */}
			<section className="w-full py-10 bg-white text-center">
				<div className="text-black font-bold text-lg mb-2">
					Need Personalized Guidance?
				</div>
				<div className="text-black/70 mb-4 text-sm">
					Our experts can help you choose the right material and guide your
					preparation.
				</div>
				<button className="bg-black text-yellow-400 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition">
					Get Free Consultation
				</button>
			</section>
		</div>
	);
};

export default FreeMaterials;