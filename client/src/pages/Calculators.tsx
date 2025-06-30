import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Calculator, DollarSign, CreditCard, BarChart2 } from 'lucide-react';

const calculators = [
	// {
	// 	id: 'eligibility',
	// 	title: 'Eligibility Calculator',
	// 	description: 'Check if your percentage meets the company cutoff requirements.',
	// 	icon: <BarChart2 className="w-6 h-6 text-yellow-400" />,
	// },
	{
		id: 'imu-rank',
		title: 'IMU CET Rank Calculator',
		description: 'Estimate your IMU CET rank based on marks and category.',
		icon: <Calculator className="w-6 h-6 text-yellow-400" />,
	},
	{
		id: 'college-predictor',
		title: 'College Predictor',
		description: 'Predict colleges you may get based on your IMU CET rank and category.',
		icon: <DollarSign className="w-6 h-6 text-yellow-400" />,
	},
	{
		id: 'course-eligibility',
		title: 'Course Eligibility Checker',
		description: 'Check your eligibility for B.Tech/BSc Marine Engineering.',
		icon: <CreditCard className="w-6 h-6 text-yellow-400" />,
	},
];

const imuRankRanges = [
	{ min: 180, max: 200, range: [1, 500] },
	{ min: 160, max: 179, range: [501, 1000] },
	{ min: 140, max: 159, range: [1001, 2000] },
	{ min: 120, max: 139, range: [2001, 3500] },
	{ min: 100, max: 119, range: [3501, 7000] },
	{ min: 80, max: 99, range: [7001, 10000] },
	{ min: 60, max: 79, range: [10001, 15000] },
	{ min: 50, max: 59, range: [15001, 19000] },
];

const collegeDb = [
	{ name: 'IMU KOLKATA BTECH', category: 'GENERAL', closing: 1935 },
	{ name: 'IMU KOLKATA BTECH', category: 'EWS', closing: 7200 },
	{ name: 'IMU KOLKATA BTECH', category: 'OBC', closing: 3000 },
	{ name: 'IMU KOLKATA BTECH', category: 'OBC NCL', closing: 6018 },
	{ name: 'IMU KOLKATA BTECH', category: 'SC', closing: 12798 },
	{ name: 'IMU KOLKATA BTECH', category: 'ST', closing: 13632 },
	{ name: 'IMU MUMBAI PORT BTECH', category: 'GENERAL', closing: 2082 },
	{ name: 'IMU MUMBAI PORT BTECH', category: 'EWS', closing: 4975 },
	{ name: 'IMU MUMBAI PORT BTECH', category: 'OBC', closing: 3000 },
	{ name: 'IMU MUMBAI PORT BTECH', category: 'OBC NCL', closing: 6030 },
	{ name: 'IMU MUMBAI PORT BTECH', category: 'SC', closing: 12258 },
	{ name: 'IMU MUMBAI PORT BTECH', category: 'ST', closing: 14758 },
	{ name: 'IMU CHENNAI BTECH', category: 'GENERAL', closing: 2375 },
	{ name: 'IMU CHENNAI BTECH', category: 'EWS', closing: 9592 },
	{ name: 'IMU CHENNAI BTECH', category: 'OBC', closing: 3000 },
	{ name: 'IMU CHENNAI BTECH', category: 'OBC NCL', closing: 6091 },
	{ name: 'IMU CHENNAI BTECH', category: 'SC', closing: 8353 },
	{ name: 'IMU CHENNAI BTECH', category: 'ST', closing: 14302 },
	{ name: 'IMU NAVI MUMBAI BSC', category: 'GENERAL', closing: 1245 },
	{ name: 'IMU NAVI MUMBAI BSC', category: 'EWS', closing: 3839 },
	{ name: 'IMU NAVI MUMBAI BSC', category: 'OBC', closing: 3000 },
	{ name: 'IMU NAVI MUMBAI BSC', category: 'OBC NCL', closing: 4175 },
	{ name: 'IMU NAVI MUMBAI BSC', category: 'SC', closing: 5587 },
	{ name: 'IMU NAVI MUMBAI BSC', category: 'ST', closing: 6492 },
	{ name: 'IMU CHENNAI BSC', category: 'GENERAL', closing: 2118 },
	{ name: 'IMU CHENNAI BSC', category: 'EWS', closing: 7181 },
	{ name: 'IMU CHENNAI BSC', category: 'OBC', closing: 3000 },
	{ name: 'IMU CHENNAI BSC', category: 'OBC NCL', closing: 4637 },
	{ name: 'IMU CHENNAI BSC', category: 'SC', closing: 7068 },
	{ name: 'IMU CHENNAI BSC', category: 'ST', closing: 7738 },
	{ name: 'IMU KOCHI BSC', category: 'GENERAL', closing: 2462 },
	{ name: 'IMU KOCHI BSC', category: 'EWS', closing: 9815 },
	{ name: 'IMU KOCHI BSC', category: 'OBC', closing: 3000 },
	{ name: 'IMU KOCHI BSC', category: 'OBC NCL', closing: 5234 },
	{ name: 'IMU KOCHI BSC', category: 'SC', closing: 8701 },
	{ name: 'IMU KOCHI BSC', category: 'ST', closing: 8084 },
];

const categoryOptions = [
	{ value: 'GENERAL', label: 'General' },
	{ value: 'EWS', label: 'EWS' },
	{ value: 'OBC', label: 'OBC' },
	{ value: 'OBC NCL', label: 'OBC NCL' },
	{ value: 'SC', label: 'SC' },
	{ value: 'ST', label: 'ST' },
];

// Add a utility to POST user info to a backend API or save to a file (real storage, not simulated)
// For demonstration, this will POST to /api/store-user-info (you must implement this API in your backend)
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://bm-promo.onrender.com';

const storeUserInfo = async (name: string, phone: string) => {
	try {
		await fetch(`${API_BASE}/api/store-user-info`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, phone }),
		});
	} catch (err) {
		// Optionally handle error
	}
};

const Calculators = () => {
	const [selected, setSelected] = useState('eligibility');
	const [percentage, setPercentage] = useState('');
	const [cutoff, setCutoff] = useState('');
	const [result, setResult] = useState<string | null>(null);

	// IMU CET Rank Calculator
	const [imuMarks, setImuMarks] = useState('');
	const [imuCategory, setImuCategory] = useState('GENERAL');
	const [imuRankResult, setImuRankResult] = useState<{ general: string, category: string } | null>(null);

	// College Predictor
	const [predictorRank, setPredictorRank] = useState('');
	const [predictorCategory, setPredictorCategory] = useState('GENERAL');
	const [predictorResult, setPredictorResult] = useState<string[]>([]);

	// Course Eligibility Checker
	const [eligibilityForm, setEligibilityForm] = useState({
		fullName: '',
		tenthOverall: '',
		twelfthPCM: '',
		twelfthEnglish: '',
		tenthEnglish: '',
		age: '',
		graduation: 'NO',
		graduationCourse: '',
		graduationLastYear: '',
		graduationEnglish: '',
	});
	const [courseEligibility, setCourseEligibility] = useState<string | null>(null);

	// User info modal state
	const [showUserModal, setShowUserModal] = useState(false);
	const [pendingCalculator, setPendingCalculator] = useState<string | null>(null);
	const [userName, setUserName] = useState('');
	const [userPhone, setUserPhone] = useState('');
	const [userError, setUserError] = useState('');

	const [usedCalculators, setUsedCalculators] = useState<{ [key: string]: boolean }>({});
	const [scrollOnSelect, setScrollOnSelect] = useState(false);

	// Scroll to calculator form only when user clicks "Use Calculator"
	useEffect(() => {
		if (scrollOnSelect && selected) {
			const formSection = document.getElementById('calculator-form-section');
			if (formSection) {
				setTimeout(() => {
					formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}, 100);
			}
			setScrollOnSelect(false);
		}
	// eslint-disable-next-line
	}, [selected, scrollOnSelect]);

	// Wrap calculator handlers to require user info first and limit use to once per calculator
	const requireUserInfo = (calcId: string, handler: (e: React.FormEvent) => void) => {
		return (e: React.FormEvent) => {
			e.preventDefault();
			if (usedCalculators[calcId]) return;
			if (!userName || !userPhone) {
				setPendingCalculator(calcId);
				setShowUserModal(true);
				return;
			}
			handler(e);
			setUsedCalculators(prev => ({ ...prev, [calcId]: true }));
		};
	};

	const handleUserModalSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const phoneValid = /^\d{10}$/.test(userPhone);
		if (!userName.trim()) {
			setUserError('Name is required.');
			return;
		}
		if (!phoneValid) {
			setUserError('Phone number must be exactly 10 digits.');
			return;
		}
		setUserError('');
		await storeUserInfo(userName.trim(), userPhone);
		setShowUserModal(false);
		const calcId = pendingCalculator;
		setPendingCalculator(null);
		// Trigger the pending calculator's submit after collecting user info
		if (calcId === 'imu-rank') handleImuRank({ preventDefault: () => {} } as any);
		if (calcId === 'college-predictor') handleCollegePredictor({ preventDefault: () => {} } as any);
		if (calcId === 'course-eligibility') handleCourseEligibility({ preventDefault: () => {} } as any);
	};

	const handleEligibility = (e: React.FormEvent) => {
		e.preventDefault();
		if (!percentage || !cutoff) {
			setResult('Please enter both fields.');
			return;
		}
		const perc = parseFloat(percentage);
		const cut = parseFloat(cutoff);
		if (isNaN(perc) || isNaN(cut)) {
			setResult('Invalid input.');
			return;
		}
		setResult(perc >= cut ? 'Eligible' : 'Not Eligible');
	};

	const handleImuRank = (e: React.FormEvent) => {
		e.preventDefault();
		const marks = parseFloat(imuMarks);
		if (isNaN(marks) || marks < 0 || marks > 200) {
			setImuRankResult({ general: 'Invalid marks', category: '' });
			return;
		}
		let found = false;
		for (const r of imuRankRanges) {
			if (marks >= r.min && marks <= r.max) {
				const [minRank, maxRank] = r.range;
				const generalRank = Math.floor(Math.random() * (maxRank - minRank + 1)) + minRank;
				let categoryRank = generalRank;
				if (imuCategory === 'OBC' || imuCategory === 'OBC NCL') {
					categoryRank = Math.floor(maxRank * 0.88);
				} else if (imuCategory === 'SC' || imuCategory === 'ST') {
					categoryRank = Math.floor(maxRank * 0.75);
				}
				setImuRankResult({
					general: `🎯 Estimated IMU CET Rank: ${generalRank}`,
					category: `Category Rank: ${categoryRank}`,
				});
				found = true;
				break;
			}
		}
		if (!found) {
			setImuRankResult({
				general: 'Regret',
				category: '',
			});
		}
	};

	const handleCollegePredictor = (e: React.FormEvent) => {
		e.preventDefault();
		const rank = parseInt(predictorRank, 10);
		if (isNaN(rank) || rank <= 0) {
			setPredictorResult(['Invalid rank']);
			return;
		}
		const eligible = collegeDb.filter(
			(col) => col.category === predictorCategory && rank <= col.closing
		);
		if (eligible.length === 0) {
			setPredictorResult(['No colleges found for your rank and category.']);
		} else {
			setPredictorResult(eligible.map((col) => col.name));
		}
	};

	const handleCourseEligibility = (e: React.FormEvent) => {
		e.preventDefault();
		const f = eligibilityForm;
		const tenthOverall = parseFloat(f.tenthOverall);
		const twelfthPCM = parseFloat(f.twelfthPCM);
		const twelfthEnglish = parseFloat(f.twelfthEnglish);
		const tenthEnglish = parseFloat(f.tenthEnglish);
		const age = parseFloat(f.age);
		const grad = f.graduation === 'YES';
		const gradLast = parseFloat(f.graduationLastYear);
		const gradEng = parseFloat(f.graduationEnglish);

		let eligible = true;
		let reasons: string[] = [];

		// B.Tech/BSc Marine Engineering logic
		if (twelfthPCM < 60) { eligible = false; reasons.push('12th PCM < 60%'); }
		if (!(twelfthEnglish >= 50 || tenthEnglish >= 50)) { eligible = false; reasons.push('English < 50% in both 10th and 12th'); }
		if (age > 25) { eligible = false; reasons.push('Age > 25'); }
		if (grad) {
			if (isNaN(gradLast) || gradLast < 50) { eligible = false; reasons.push('Graduation % < 50%'); }
			if (isNaN(gradEng) || gradEng < 50) { eligible = false; reasons.push('Graduation English % < 50%'); }
		}
		setCourseEligibility(
			eligible
				? 'Eligible for B.Tech/BSc Marine Engineering'
				: `Not Eligible: ${reasons.join(', ')}`
		);
	};

	return (
		<div className="min-h-screen bg-black text-white flex flex-col">
			<Helmet>
				<title>Maritime Calculators | IMU CET Rank, College Predictor, Eligibility | Budding Mariners</title>
				<meta name="description" content="Use our free maritime calculators: IMU CET rank estimator, college predictor, and eligibility checker. Plan your Merchant Navy career with Budding Mariners." />
				<meta name="keywords" content="IMU CET Calculator, Maritime Calculators, College Predictor, Eligibility Checker, Merchant Navy Tools, Budding Mariners" />
				<meta property="og:title" content="Maritime Calculators | IMU CET Rank, College Predictor, Eligibility | Budding Mariners" />
				<meta property="og:description" content="Free tools for Merchant Navy aspirants: IMU CET rank calculator, college predictor, and eligibility checker by Budding Mariners." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://buddingmariners.com/calculators" />
				<meta property="og:image" content="/assets/yellow on orange logomark.png" />
			</Helmet>

			{/* User Info Modal */}
			{showUserModal && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
					<form
						onSubmit={handleUserModalSubmit}
						className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xs flex flex-col items-center"
					>
						<h2 className="font-bold text-lg text-black mb-4">Enter Your Details to Continue</h2>
						<div className="mb-3 w-full">
							<label className="block text-gray-700 text-sm mb-1">Name</label>
							<input
								type="text"
								value={userName}
								onChange={e => setUserName(e.target.value)}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black"
								required
							/>
						</div>
						<div className="mb-4 w-full">
							<label className="block text-gray-700 text-sm mb-1">Phone Number</label>
							<input
								type="tel"
								value={userPhone}
								onChange={e => setUserPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black"
								maxLength={10}
								pattern="\d{10}"
								required
							/>
						</div>
						{userError && (
							<div className="mb-3 w-full text-red-600 text-sm text-center">{userError}</div>
						)}
						<button
							type="submit"
							className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 transition"
						>
							Proceed
						</button>
					</form>
				</div>
			)}

			{/* Header */}
			<section className="pt-28 pb-2 text-center">
				<h1 className="text-3xl md:text-4xl font-extrabold mb-1 text-white">
					Maritime Calculators
				</h1>
				<p className="text-white/80 text-sm max-w-2xl mx-auto mb-2">
					Essential tools to help you plan your merchant navy career and education
				</p>
			</section>

			{/* Calculator Cards */}
			<section className="flex flex-wrap justify-center gap-6 mt-10 mb-10 px-2">
				{calculators.map((calc) => (
					<div
						key={calc.id}
						className={`bg-white/5 rounded-xl shadow-lg p-6 w-full max-w-xs min-w-[260px] flex flex-col items-center border border-white/10 transition-all ${
							selected === calc.id ? 'ring-2 ring-yellow-400' : ''
						}`}
						style={{ cursor: 'pointer' }}
						onClick={() => {
							setSelected(calc.id);
							setScrollOnSelect(true);
						}}
					>
						<div className="mb-3">{calc.icon}</div>
						<div className="font-bold text-lg mb-2 text-white">{calc.title}</div>
						<div className="text-white/70 text-sm mb-4 text-center">
							{calc.description}
						</div>
						<button
							className={`px-4 py-2 rounded-full font-semibold text-sm transition ${
								selected === calc.id
									? 'bg-yellow-400 text-black'
									: 'bg-white/10 text-yellow-400 hover:bg-yellow-400 hover:text-black'
							}`}
							onClick={() => setSelected(calc.id)}
							type="button"
						>
							Use Calculator
						</button>
					</div>
				))}
			</section>

			{/* Calculator Forms */}
			<section id="calculator-form-section" className="flex justify-center mb-12 px-2">
				{selected === 'imu-rank' && (
					<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col items-center">
						<div className="flex items-center gap-2 mb-2">
							<Calculator className="w-6 h-6 text-yellow-400" />
							<span className="font-bold text-lg text-black">
								IMU CET Rank Calculator
							</span>
						</div>
						<div className="text-gray-700 text-sm mb-6 text-center">
							Estimate your IMU CET rank based on marks and category
						</div>
						<form className="w-full" onSubmit={requireUserInfo('imu-rank', handleImuRank)}>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm mb-1">
									Total Marks Scored (out of 200)
								</label>
								<input
									type="number"
									min={0}
									max={200}
									value={imuMarks}
									onChange={(e) => setImuMarks(e.target.value)}
									className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black"
									placeholder="Enter marks (0-200)"
									required
								/>
							</div>
							<div className="mb-6">
								<label className="block text-gray-700 text-sm mb-1">
									Category
								</label>
								<select
									value={imuCategory}
									onChange={(e) => setImuCategory(e.target.value)}
									className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black"
									required
								>
									{categoryOptions.map((cat) => (
										<option key={cat.value} value={cat.value}>{cat.label}</option>
									))}
								</select>
							</div>
							<button
								type="submit"
								className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
								disabled={usedCalculators['imu-rank']}
							>
								{usedCalculators['imu-rank'] ? 'Used' : 'Calculate Rank'}
							</button>
						</form>
						{imuRankResult && (
							<div className="mt-6 w-full text-center">
								<div className="font-bold text-lg text-black">{imuRankResult.general}</div>
								{imuRankResult.category && (
									<div className="font-bold text-md text-yellow-600">{imuRankResult.category}</div>
								)}
								<div className="text-xs text-gray-500 mt-2">
									📌 Based on 2024 trends. Final rank may vary depending on cut-off and competition.
								</div>
							</div>
						)}
					</div>
				)}

				{selected === 'college-predictor' && (
					<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col items-center">
						<div className="flex items-center gap-2 mb-2">
							<DollarSign className="w-6 h-6 text-yellow-400" />
							<span className="font-bold text-lg text-black">
								College Predictor
							</span>
						</div>
						<div className="text-gray-700 text-sm mb-6 text-center">
							Predict colleges you may get based on your IMU CET rank and category
						</div>
						<form className="w-full" onSubmit={requireUserInfo('college-predictor', handleCollegePredictor)}>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm mb-1">
									IMU CET Rank
								</label>
								<input
									type="number"
									min={1}
									value={predictorRank}
									onChange={(e) => setPredictorRank(e.target.value)}
									className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black"
									placeholder="Enter your rank"
									required
								/>
							</div>
							<div className="mb-6">
								<label className="block text-gray-700 text-sm mb-1">
									Category
								</label>
								<select
									value={predictorCategory}
									onChange={(e) => setPredictorCategory(e.target.value)}
									className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black"
									required
								>
									{categoryOptions.map((cat) => (
										<option key={cat.value} value={cat.value}>{cat.label}</option>
									))}
								</select>
							</div>
							<button
								type="submit"
								className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
								disabled={usedCalculators['college-predictor']}
							>
								{usedCalculators['college-predictor'] ? 'Used' : 'Predict Colleges'}
							</button>
						</form>
						{predictorResult.length > 0 && (
							<div className="mt-6 w-full text-center">
								<div className="font-bold text-lg text-black mb-2">
									Based on your rank, following colleges you can get:
								</div>
								<ul className="text-black">
									{predictorResult.map((col, idx) => (
										<li key={idx} className="mb-1">{col}</li>
									))}
								</ul>
								<div className="text-xs text-gray-500 mt-2">
									📌 Based on 2024,2025 trends. Final results may vary depending on cut-off and competition.
								</div>
							</div>
						)}
					</div>
				)}

				{selected === 'course-eligibility' && (
					<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col items-center">
						<div className="flex items-center gap-2 mb-2">
							<CreditCard className="w-6 h-6 text-yellow-400" />
							<span className="font-bold text-lg text-black">
								Course Eligibility Checker
							</span>
						</div>
						<div className="text-gray-700 text-sm mb-6 text-center">
							Check your eligibility for B.Tech/BSc Marine Engineering
						</div>
						<form className="w-full" onSubmit={requireUserInfo('course-eligibility', handleCourseEligibility)}>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Full Name</label>
								<input type="text" value={eligibilityForm.fullName} onChange={e => setEligibilityForm(f => ({ ...f, fullName: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">10th Overall %</label>
								<input type="number" value={eligibilityForm.tenthOverall} onChange={e => setEligibilityForm(f => ({ ...f, tenthOverall: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">12th PCM %</label>
								<input type="number" value={eligibilityForm.twelfthPCM} onChange={e => setEligibilityForm(f => ({ ...f, twelfthPCM: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">12th English %</label>
								<input type="number" value={eligibilityForm.twelfthEnglish} onChange={e => setEligibilityForm(f => ({ ...f, twelfthEnglish: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">10th English %</label>
								<input type="number" value={eligibilityForm.tenthEnglish} onChange={e => setEligibilityForm(f => ({ ...f, tenthEnglish: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Age</label>
								<input type="number" value={eligibilityForm.age} onChange={e => setEligibilityForm(f => ({ ...f, age: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Graduation?</label>
								<select value={eligibilityForm.graduation} onChange={e => setEligibilityForm(f => ({ ...f, graduation: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">NO</option>
									<option value="YES">YES</option>
								</select>
							</div>
							{eligibilityForm.graduation === 'YES' && (
								<>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">Graduation Course</label>
										<select value={eligibilityForm.graduationCourse} onChange={e => setEligibilityForm(f => ({ ...f, graduationCourse: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
											<option value="">Select</option>
											<option value="Bsc">Bsc</option>
											<option value="Btech">Btech</option>
										</select>
									</div>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">Graduation last year %</label>
										<input type="number" value={eligibilityForm.graduationLastYear} onChange={e => setEligibilityForm(f => ({ ...f, graduationLastYear: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
									</div>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">Graduation English %</label>
										<input type="number" value={eligibilityForm.graduationEnglish} onChange={e => setEligibilityForm(f => ({ ...f, graduationEnglish: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
									</div>
								</>
							)}
							<button
								type="submit"
								className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition mt-2"
								disabled={usedCalculators['course-eligibility']}
							>
								{usedCalculators['course-eligibility'] ? 'Used' : 'Check Eligibility'}
							</button>
						</form>
						{courseEligibility && (
							<div className="mt-6 w-full text-center">
								<span className={`font-bold text-lg ${courseEligibility.startsWith('Eligible') ? 'text-green-600' : 'text-red-600'}`}>
									{courseEligibility}
								</span>
							</div>
						)}
					</div>
				)}
			</section>

			{/* Help Section */}
			<section className="text-center mt-auto pb-16">
				<h2 className="text-xl md:text-2xl font-bold mb-2 text-yellow-400">
					Need Help with Calculations?
				</h2>
				<p className="text-white/80 mb-4">
					Our expert counselors can help you understand eligibility requirements and
					plan your maritime career path.
				</p>
				<button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition">
					Get Expert Guidance
				</button>
			</section>
		</div>
	);
};

export default Calculators;