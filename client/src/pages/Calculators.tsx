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
	{
		id: 'imu-rank-bm',
		title: 'IMU CET Rank Calculator: With vs Without BM',
		description: 'Compare your estimated IMU CET rank with self-preparation vs Budding Mariners coaching.',
		icon: <Calculator className="w-6 h-6 text-yellow-400" />,
	},
	{
		id: 'company-eligibility',
		title: 'Company Eligibility Calculator',
		description: 'Find out which shipping companies you are eligible for based on your marks and profile.',
		icon: <BarChart2 className="w-6 h-6 text-yellow-400" />,
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

const highestQualificationOptions = [
	{ value: '10', label: 'Class 10' },
	{ value: '12', label: 'Class 12' },
	{ value: 'diploma', label: 'Diploma' },
	{ value: 'graduation', label: 'Graduation' },
	{ value: 'pg', label: 'Post Graduation' },
];

const twelfthStreamOptions = [
	{ value: 'PCM', label: 'PCM' },
	{ value: 'PCB', label: 'PCB' },
	{ value: 'Commerce', label: 'Commerce' },
	{ value: 'Other', label: 'Other' },
];

const graduationStreamOptions = [
	{ value: 'Nautical Science', label: 'Nautical Science' },
	{ value: 'Engineering', label: 'Engineering' },
	{ value: 'B.Sc', label: 'B.Sc' },
	{ value: 'B.Com', label: 'B.Com' },
	{ value: 'Other', label: 'Other' },
];

const subjectOptions = [
	{ value: 'Physics', label: 'Physics' },
	{ value: 'Chemistry', label: 'Chemistry' },
	{ value: 'Math', label: 'Math' },
	{ value: 'English', label: 'English' },
	{ value: 'Aptitude', label: 'Aptitude' },
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
		age: '',
		highestQualification: '10',
		// Class 12 fields
		twelfthPCM: '',
		twelfthEnglish: '',
		twelfthStream: '',
		// Class 10 fields
		tenthEnglish: '',
		// Diploma fields
		diplomaPCM: '',
		diplomaEnglish: '',
		// Graduation fields
		graduationPCM: '',
		graduationEnglish: '',
		graduationStream: '',
		// PG fields
		pgStream: '',
		// Common
		improvementExam: 'NO',
		niosBoard: 'NO',
		colorBlind: 'NO',
		spectacles: 'NO',
	});
	const [courseEligibility, setCourseEligibility] = useState<string | null>(null);

	// IMU CET Rank Calculator: With vs Without BM
	const [imuBmForm, setImuBmForm] = useState({
		pcm: '',
		english: '',
		hours: '',
		difficult: [] as string[],
		pyq: 'NO',
		coaching: 'NO',
		mock: 'NO',
	});
	const [imuBmResult, setImuBmResult] = useState<{ self: string, bm: string } | null>(null);

	// Company Eligibility Calculator
	const [companyForm, setCompanyForm] = useState({
		name: '',
		pcm: '',
		english: '',
		age: '',
		improvement: 'NO',
		nios: 'NO',
	});
	const [companyResult, setCompanyResult] = useState<string[] | null>(null);

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
		if (calcId === 'company-eligibility') handleCompanyEligibility({ preventDefault: () => {} } as any);
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
		if (marks < 50) {
			setImuRankResult({
				general: 'Regret',
				category: '',
			});
			return;
		}
		let found = false;
		for (const r of imuRankRanges) {
			if (marks >= r.min && marks <= r.max) {
				const [minRank, maxRank] = r.range;
				const generalRank = Math.floor(Math.random() * (maxRank - minRank + 1)) + minRank;
				let categoryRank = generalRank;
				if (imuCategory === 'OBC' || imuCategory === 'EWS') {
					categoryRank = Math.floor(generalRank * 0.88);
				} else if (imuCategory === 'SC' || imuCategory === 'ST') {
					categoryRank = Math.floor(generalRank * 0.75);
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
		const age = parseFloat(f.age);
		const results: string[] = [];
		const notEligible: string[] = [];

		// Helper functions
		const hasMin = (val: string, min: number) => !isNaN(parseFloat(val)) && parseFloat(val) >= min;
		const isRegularBoard = f.niosBoard === 'NO';
		const english10 = parseFloat(f.tenthEnglish);
		const english12 = parseFloat(f.twelfthEnglish);

		// GP Rating
		let gpEligible = false;
		if (f.highestQualification === '10') {
			if (age <= 25 && hasMin(f.tenthEnglish, 40) && hasMin(f.tenthOverall, 40)) {
				gpEligible = true;
				results.push('✅ GP Rating');
			} else {
				notEligible.push('❌ GP Rating (Age > 25 or English/Overall < 40%)');
			}
		}
		if (f.highestQualification === '12') {
			if (age <= 25 && (hasMin(f.twelfthEnglish, 40) || hasMin(f.tenthEnglish, 40))) {
				gpEligible = true;
				results.push('✅ GP Rating');
			} else {
				notEligible.push('❌ GP Rating (Age > 25 or English < 40%)');
			}
		}
		if (f.highestQualification === 'diploma' || f.highestQualification === 'graduation') {
			if (age <= 25 && (hasMin(f.tenthEnglish, 40) || hasMin(f.twelfthEnglish, 40))) {
				gpEligible = true;
				results.push('✅ GP Rating');
			} else {
				notEligible.push('❌ GP Rating (Age > 25 or English < 40%)');
			}
		}

		// DNS
		let dnsEligible = false;
		if (f.highestQualification === '12') {
			if (f.class12Status === 'Appearing') {
				results.push('✅ DNS (Conditionally eligible if PCM ≥ 60% and English ≥ 50% in final results)');
			} else if (f.class12Status === 'Passed') {
				if (
					hasMin(f.twelfthPCM, 60) &&
					(hasMin(f.twelfthEnglish, 50) || hasMin(f.tenthEnglish, 50)) &&
					isRegularBoard &&
					age <= 25
				) {
					dnsEligible = true;
					results.push('✅ DNS');
				} else {
					notEligible.push('❌ DNS (PCM < 60%, English < 50%, NIOS/Open board, or Age > 25)');
				}
			}
		}
		if (f.highestQualification === 'graduation') {
			if (
				hasMin(f.graduationPCM, 60) &&
				(hasMin(f.graduationEnglish, 50) || hasMin(f.tenthEnglish, 50) || hasMin(f.twelfthEnglish, 50)) &&
				age <= 25
			) {
				results.push('✅ DNS (as Graduate)');
			} else {
				notEligible.push('❌ DNS (Graduation PCM/English < 60/50 or Age > 25)');
			}
		}

		// B.Sc Nautical Science
		if (f.highestQualification === '12') {
			if (f.class12Status === 'Appearing') {
				results.push('✅ B.Sc Nautical Science (Conditionally eligible if PCM ≥ 60% and English ≥ 50% in final results)');
			} else if (f.class12Status === 'Passed') {
				if (
					hasMin(f.twelfthPCM, 60) &&
					(hasMin(f.twelfthEnglish, 50) || hasMin(f.tenthEnglish, 50)) &&
					isRegularBoard &&
					age <= 25
				) {
					results.push('✅ B.Sc Nautical Science');
				} else {
					notEligible.push('❌ B.Sc Nautical Science (PCM < 60%, English < 50%, NIOS/Open board, or Age > 25)');
				}
			}
		}

		// B.Tech Marine Engineering
		if (f.highestQualification === '12') {
			if (f.class12Status === 'Appearing') {
				results.push('✅ B.Tech Marine Engg (Conditionally eligible if PCM ≥ 60% and English ≥ 50% in final results)');
			} else if (f.class12Status === 'Passed') {
				if (
					hasMin(f.twelfthPCM, 60) &&
					(hasMin(f.twelfthEnglish, 50) || hasMin(f.tenthEnglish, 50)) &&
					isRegularBoard &&
					age <= 25
				) {
					results.push('✅ B.Tech Marine Engg');
				} else {
					notEligible.push('❌ B.Tech Marine Engg (PCM < 60%, English < 50%, NIOS/Open board, or Age > 25)');
				}
			}
		}

		// Diploma
		if (f.highestQualification === 'diploma') {
			if (age <= 25 && hasMin(f.diplomaPCM, 60) && (hasMin(f.diplomaEnglish, 50) || hasMin(f.tenthEnglish, 50))) {
				results.push('✅ GP Rating');
			} else {
				notEligible.push('❌ GP Rating (Diploma PCM/English < 60/50 or Age > 25)');
			}
			results.push('❌ DNS / B.Sc / B.Tech (Diploma not eligible)');
		}

		// Graduation
		if (f.highestQualification === 'graduation') {
			const gradStream = f.graduationStream;
			if (age <= 25 && (hasMin(f.graduationEnglish, 40) || hasMin(f.tenthEnglish, 40) || hasMin(f.twelfthEnglish, 40))) {
				results.push('✅ GP Rating');
			} else {
				notEligible.push('❌ GP Rating (Graduation English < 40% or Age > 25)');
			}
			if (
				(gradStream === 'Engineering' || gradStream === 'Nautical Science') &&
				hasMin(f.graduationPCM, 50) &&
				age <= 28 &&
				f.colorBlind === 'NO'
			) {
				results.push('✅ GME');
			} else {
				notEligible.push('❌ GME (Stream not Engineering/Nautical Science, PCM < 50%, Age > 28, or Color blind)');
			}
			if (
				(gradStream === 'Engineering') &&
				hasMin(f.graduationPCM, 50) &&
				hasMin(f.graduationEnglish, 50) &&
				age <= 28 &&
				f.colorBlind === 'NO'
			) {
				results.push('✅ ETO');
			} else {
				notEligible.push('❌ ETO (Stream not Engineering, PCM/English < 50%, Age > 28, or Color blind)');
			}
		}

		// Output
		setCourseEligibility(
			`🎯 Based on your details:\n${results.join('\n')}${notEligible.length ? '\n' + notEligible.join('\n') : ''}`
		);
	};

	const handleImuBmChange = (field: string, value: any) => {
		setImuBmForm(f => ({ ...f, [field]: value }));
	};

	const handleImuBmMultiSelect = (value: string) => {
		setImuBmForm(f => ({
			...f,
			difficult: f.difficult.includes(value)
				? f.difficult.filter(v => v !== value)
				: [...f.difficult, value]
		}));
	};

	const handleImuBmSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const pcm = parseFloat(imuBmForm.pcm);
		const english = parseFloat(imuBmForm.english);
		const hours = parseInt(imuBmForm.hours, 10);
		const difficultCount = imuBmForm.difficult.length;

		if (isNaN(pcm) || isNaN(english) || isNaN(hours)) {
			setImuBmResult({ self: 'Invalid input', bm: '' });
			return;
		}
		if (pcm < 60) {
			setImuBmResult({ self: 'Not eligible (PCM < 60%)', bm: '' });
			return;
		}

		// Scoring
		let score = 0;
		// PCM %
		if (pcm >= 90) score += 10;
		else if (pcm >= 80) score += 9;
		else if (pcm >= 70) score += 8;
		else if (pcm >= 60) score += 6;
		// English %
		if (english >= 90) score += 10;
		else if (english >= 80) score += 9;
		else if (english >= 70) score += 8;
		else if (english >= 60) score += 7;
		else if (english >= 50) score += 6;
		// Study hours
		score += Math.min(hours, 10) * 2;
		// Difficult subjects
		score -= difficultCount * 2;
		// PYQs
		score += imuBmForm.pyq === 'YES' ? 5 : -5;
		// Coaching
		score += imuBmForm.coaching === 'YES' ? 5 : 0;
		// Mock test consistency
		score += imuBmForm.mock === 'YES' ? 5 : 0;

		// Clamp score
		score = Math.max(0, Math.min(score, 50));

		// Map to rank ranges
		let selfRange = '';
		let bmRange = '';
		if (score >= 45) {
			selfRange = '1 – 500';
			bmRange = '1 – 250';
		} else if (score >= 40) {
			selfRange = '500 – 1500';
			bmRange = '250 – 750';
		} else if (score >= 35) {
			selfRange = '1500 – 3000';
			bmRange = '750 – 1500';
		} else if (score >= 30) {
			selfRange = '3000 – 6000';
			bmRange = '1500 – 3000';
		} else {
			selfRange = '6000+';
			bmRange = '3000 – 5000';
		}

		setImuBmResult({
			self: `Estimated Rank (Self-preparation): ${selfRange}`,
			bm: `Estimated Rank with Budding Mariners’ Coaching: ${bmRange}`,
		});
	};

	const handleCompanyFormChange = (field: string, value: any) => {
		setCompanyForm(f => ({ ...f, [field]: value }));
	};

	const companyDB = [
		{ name: 'Anglo Eastern', pcm: 70, english: 60, improvement: 'Yes', nios: 'Yes', age: 25 },
		{ name: 'TORM', pcm: 65, english: 60, improvement: 'No', nios: 'No', age: 21 },
		{ name: 'Fleet Management', pcm: 70, english: 70, improvement: 'No', nios: 'No', age: 20 },
		{ name: "D' Amico", pcm: 60, english: 60, improvement: 'Yes', nios: 'No', age: 21 },
		{ name: 'Synergy', pcm: 60, english: 50, improvement: 'Yes', nios: 'Yes', age: 25 },
		{ name: 'WSM', pcm: 60, english: 50, improvement: 'Yes', nios: 'No', age: 25 },
		{ name: 'Scorpio', pcm: 65, english: 65, improvement: 'No', nios: 'No', age: 25 },
		{ name: 'PIL', pcm: 60, english: 50, improvement: 'Yes', nios: 'No', age: 25 },
		{ name: 'Wallem', pcm: 60, english: 60, improvement: 'Yes', nios: 'Yes', age: 25 },
		{ name: 'MMSI', pcm: 70, english: 70, improvement: 'Yes', nios: 'No', age: 21 },
		{ name: 'V Ships', pcm: 70, english: 60, improvement: 'Yes', nios: 'Yes', age: 25 },
		{ name: 'MSC', pcm: 65, english: 60, improvement: 'Yes', nios: 'No', age: 19 },
		{ name: 'Seaspan', pcm: 60, english: 60, improvement: 'Yes', nios: 'No', age: 25 },
		{ name: 'ESM', pcm: 60, english: 50, improvement: 'No', nios: 'No', age: 19 },
		{ name: 'BSM', pcm: 60, english: 50, improvement: 'Yes', nios: 'No', age: 25 },
		{ name: 'SISL', pcm: 70, english: 50, improvement: 'Yes', nios: 'No', age: 20 },
		{ name: 'Great Eastern', pcm: 60, english: 50, improvement: 'Yes', nios: 'No', age: 24 },
		{ name: 'T Erudite', pcm: 60, english: 50, improvement: 'Yes', nios: 'No', age: 21 },
		{ name: 'Goodwood', pcm: 60, english: 60, improvement: 'Yes', nios: 'No', age: 25 },
		{ name: 'SCI', pcm: 60, english: 50, improvement: 'No', nios: 'Yes', age: 25 },
		{ name: 'TMI', pcm: 60, english: 50, improvement: 'Yes', nios: 'Yes', age: 21 },
		{ name: 'IMI', pcm: 60, english: 50, improvement: 'No', nios: 'No', age: 25 },
		{ name: 'GANPAT', pcm: 60, english: 50, improvement: 'Yes', nios: 'Yes', age: 25 },
		{ name: 'TSR', pcm: 60, english: 50, improvement: 'Yes', nios: 'No', age: 25 },
		{ name: 'AMET', pcm: 60, english: 50, improvement: 'Yes', nios: 'No', age: 25 },
		{ name: 'HIMT', pcm: 60, english: 50, improvement: 'Yes', nios: 'Yes', age: 25 },
		{ name: 'MANET', pcm: 60, english: 50, improvement: 'Yes', nios: 'No', age: 25 },
	];

	const handleCompanyEligibility = (e: React.FormEvent) => {
		e.preventDefault();
		const pcm = parseFloat(companyForm.pcm);
		const english = parseFloat(companyForm.english);
		const age = parseFloat(companyForm.age);
		const improvement = companyForm.improvement === 'YES' ? 'Yes' : 'No';
		const nios = companyForm.nios === 'YES' ? 'Yes' : 'No';

		if (
			!companyForm.name.trim() ||
			isNaN(pcm) ||
			isNaN(english) ||
			isNaN(age)
		) {
			setCompanyResult([]);
			return;
		}

		const eligibleCompanies = companyDB.filter(c =>
			pcm >= c.pcm &&
			english >= c.english &&
			(improvement === c.improvement) &&
			(nios === c.nios) &&
			age <= c.age
		).map(c => c.name);

		setCompanyResult(eligibleCompanies);
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
							{usedCalculators['imu-rank'] && (
	<div className="mt-2 text-sm text-red-600 font-semibold">Refresh the page to use calculator again.</div>
)}
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
							{usedCalculators['college-predictor'] && (
	<div className="mt-2 text-sm text-red-600 font-semibold">Refresh the page to use calculator again.</div>
)}
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
							Check your eligibility for B.Tech/BSc Marine Engineering and other maritime courses
						</div>
						<form className="w-full" onSubmit={requireUserInfo('course-eligibility', handleCourseEligibility)}>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Full Name</label>
								<input type="text" value={eligibilityForm.fullName} onChange={e => setEligibilityForm(f => ({ ...f, fullName: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Age</label>
								<input type="number" value={eligibilityForm.age} onChange={e => setEligibilityForm(f => ({ ...f, age: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Highest Qualification</label>
								<select value={eligibilityForm.highestQualification} onChange={e => setEligibilityForm(f => ({ ...f, highestQualification: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									{highestQualificationOptions.map(opt => (
										<option key={opt.value} value={opt.value}>{opt.label}</option>
									))}
								</select>
							</div>
							{/* Class 12 fields */}
							{eligibilityForm.highestQualification === '12' && (
								<>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">Stream in 12th</label>
										<select value={eligibilityForm.twelfthStream} onChange={e => setEligibilityForm(f => ({ ...f, twelfthStream: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
											{twelfthStreamOptions.map(opt => (
												<option key={opt.value} value={opt.value}>{opt.label}</option>
											))}
										</select>
									</div>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">PCM Aggregate %</label>
										<input type="number" value={eligibilityForm.twelfthPCM} onChange={e => setEligibilityForm(f => ({ ...f, twelfthPCM: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
									</div>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">English % (12th)</label>
										<input type="number" value={eligibilityForm.twelfthEnglish} onChange={e => setEligibilityForm(f => ({ ...f, twelfthEnglish: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
									</div>
								</>
							)}
							{/* Class 10 fields */}
							{eligibilityForm.highestQualification === '10' && (
								<div className="mb-2">
									<label className="block text-gray-700 text-sm mb-1">English % (10th)</label>
									<input type="number" value={eligibilityForm.tenthEnglish} onChange={e => setEligibilityForm(f => ({ ...f, tenthEnglish: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
								</div>
							)}
							{/* Diploma fields */}
							{eligibilityForm.highestQualification === 'diploma' && (
								<>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">PCM Aggregate % (Diploma)</label>
										<input type="number" value={eligibilityForm.diplomaPCM} onChange={e => setEligibilityForm(f => ({ ...f, diplomaPCM: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
									</div>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">English % (Diploma)</label>
										<input type="number" value={eligibilityForm.diplomaEnglish} onChange={e => setEligibilityForm(f => ({ ...f, diplomaEnglish: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
									</div>
								</>
							)}
							{/* Graduation fields */}
							{eligibilityForm.highestQualification === 'graduation' && (
								<>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">Graduation Stream</label>
										<select value={eligibilityForm.graduationStream} onChange={e => setEligibilityForm(f => ({ ...f, graduationStream: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
											{graduationStreamOptions.map(opt => (
												<option key={opt.value} value={opt.value}>{opt.label}</option>
											))}
										</select>
									</div>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">PCM Aggregate % (Graduation)</label>
										<input type="number" value={eligibilityForm.graduationPCM} onChange={e => setEligibilityForm(f => ({ ...f, graduationPCM: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
									</div>
									<div className="mb-2">
										<label className="block text-gray-700 text-sm mb-1">English % (Graduation)</label>
										<input type="number" value={eligibilityForm.graduationEnglish} onChange={e => setEligibilityForm(f => ({ ...f, graduationEnglish: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
									</div>
								</>
							)}
							{/* PG fields */}
							{eligibilityForm.highestQualification === 'pg' && (
								<div className="mb-2">
									<label className="block text-gray-700 text-sm mb-1">PG Stream</label>
									<input type="text" value={eligibilityForm.pgStream} onChange={e => setEligibilityForm(f => ({ ...f, pgStream: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" />
								</div>
							)}
							{/* Common fields */}
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Did you appear for Improvement Exams?</label>
								<select value={eligibilityForm.improvementExam} onChange={e => setEligibilityForm(f => ({ ...f, improvementExam: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">NO</option>
									<option value="YES">YES</option>
								</select>
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Are you from the NIOS board?</label>
								<select value={eligibilityForm.niosBoard} onChange={e => setEligibilityForm(f => ({ ...f, niosBoard: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">NO</option>
									<option value="YES">YES</option>
								</select>
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Are you color blind?</label>
								<select value={eligibilityForm.colorBlind} onChange={e => setEligibilityForm(f => ({ ...f, colorBlind: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">NO</option>
									<option value="YES">YES</option>
								</select>
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Do you wear spectacles?</label>
								<select value={eligibilityForm.spectacles} onChange={e => setEligibilityForm(f => ({ ...f, spectacles: e.target.value }))} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">NO</option>
									<option value="YES">YES</option>
								</select>
							</div>
							<button
								type="submit"
								className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition mt-2"
								disabled={usedCalculators['course-eligibility']}
							>
								{usedCalculators['course-eligibility'] ? 'Used' : 'Check Eligibility'}
							</button>
							{usedCalculators['course-eligibility'] && (
	<div className="mt-2 text-sm text-red-600 font-semibold">Refresh the page to use calculator again.</div>
)}
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

				{selected === 'imu-rank-bm' && (
					<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col items-center">
						<div className="flex items-center gap-2 mb-2">
							<Calculator className="w-6 h-6 text-yellow-400" />
							<span className="font-bold text-lg text-black">
								IMU CET Rank Calculator: With vs Without BM
							</span>
						</div>
						<div className="text-gray-700 text-sm mb-6 text-center">
							Compare your estimated IMU CET rank with self-preparation vs Budding Mariners coaching.
						</div>
						<form className="w-full" onSubmit={requireUserInfo('imu-rank-bm', handleImuBmSubmit)}>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">PCM %</label>
								<input type="number" min={0} max={100} value={imuBmForm.pcm} onChange={e => handleImuBmChange('pcm', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">English %</label>
								<input type="number" min={0} max={100} value={imuBmForm.english} onChange={e => handleImuBmChange('english', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Number of hours you can study daily</label>
								<input type="number" min={1} max={10} value={imuBmForm.hours} onChange={e => handleImuBmChange('hours', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Subjects you find difficult</label>
								<div className="flex flex-wrap gap-2">
									{subjectOptions.map(opt => (
										<label key={opt.value} className="flex items-center gap-1">
											<input
												type="checkbox"
												checked={imuBmForm.difficult.includes(opt.value)}
												onChange={() => handleImuBmMultiSelect(opt.value)}
											/>
											<span className="text-black">{opt.label}</span>
										</label>
									))}
								</div>
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Have you solved previous year papers?</label>
								<select value={imuBmForm.pyq} onChange={e => handleImuBmChange('pyq', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">No</option>
									<option value="YES">Yes</option>
								</select>
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Are you attending any coaching currently?</label>
								<select value={imuBmForm.coaching} onChange={e => handleImuBmChange('coaching', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">No</option>
									<option value="YES">Yes</option>
								</select>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm mb-1">Are you consistent with mock tests?</label>
								<select value={imuBmForm.mock} onChange={e => handleImuBmChange('mock', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">No</option>
									<option value="YES">Yes</option>
								</select>
							</div>
							<button
								type="submit"
								className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
								disabled={usedCalculators['imu-rank-bm']}
							>
								{usedCalculators['imu-rank-bm'] ? 'Used' : 'Calculate Rank'}
							</button>
							{usedCalculators['imu-rank-bm'] && (
	<div className="mt-2 text-sm text-red-600 font-semibold">Refresh the page to use calculator again.</div>
)}
						</form>
						{imuBmResult && (
							<div className="mt-6 w-full text-center">
								<div className="font-bold text-lg text-black">{imuBmResult.self}</div>
								<div className="font-bold text-md text-yellow-600">{imuBmResult.bm}</div>
								<div className="text-xs text-red-600 mt-2">
									🔥 Want to improve your chances? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfplFAt9uFYYr9r5LDg4-0sP6IpfgZ0bjjOogXFtpODXRTVQw/viewform" target="_blank" rel="noopener noreferrer" className="underline">Book a free consultation now!</a>
								</div>
							</div>
						)}
					</div>
				)}

				{selected === 'company-eligibility' && (
					<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col items-center">
						<div className="flex items-center gap-2 mb-2">
							<BarChart2 className="w-6 h-6 text-yellow-400" />
							<span className="font-bold text-lg text-black">
								Company Eligibility Calculator
							</span>
						</div>
						<div className="text-gray-700 text-sm mb-6 text-center">
							Find out which shipping companies you are eligible for based on your marks and profile.
						</div>
						<form className="w-full" onSubmit={requireUserInfo('company-eligibility', handleCompanyEligibility)}>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Full Name</label>
								<input type="text" value={companyForm.name} onChange={e => handleCompanyFormChange('name', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">PCM %</label>
								<input type="number" min={0} max={100} value={companyForm.pcm} onChange={e => handleCompanyFormChange('pcm', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">English %</label>
								<input type="number" min={0} max={100} value={companyForm.english} onChange={e => handleCompanyFormChange('english', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Age</label>
								<input type="number" min={0} max={30} value={companyForm.age} onChange={e => handleCompanyFormChange('age', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black" required />
							</div>
							<div className="mb-2">
								<label className="block text-gray-700 text-sm mb-1">Have you given IMPROVEMENT EXAM?</label>
								<select value={companyForm.improvement} onChange={e => handleCompanyFormChange('improvement', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">No</option>
									<option value="YES">Yes</option>
								</select>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700 text-sm mb-1">Are you from NIOS Board?</label>
								<select value={companyForm.nios} onChange={e => handleCompanyFormChange('nios', e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black">
									<option value="NO">No</option>
									<option value="YES">Yes</option>
								</select>
							</div>
							<button
								type="submit"
								className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
								disabled={usedCalculators['company-eligibility']}
							>
								{usedCalculators['company-eligibility'] ? 'Used' : 'Check Eligible Companies'}
							</button>
							{usedCalculators['company-eligibility'] && (
	<div className="mt-2 text-sm text-red-600 font-semibold">Refresh the page to use calculator again.</div>
)}
						</form>
						{companyResult && (
							<div className="mt-6 w-full text-center">
								{companyResult.length > 0 ? (
									<>
										<div className="font-bold text-lg text-black mb-2">Eligible Companies</div>
										<ul className="text-black">
											{companyResult.map((c, idx) => (
												<li key={idx} className="mb-1">{c}</li>
											))}
										</ul>
									</>
								) : (
									<div className="font-bold text-lg text-red-600">No eligible companies found.</div>
								)}
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