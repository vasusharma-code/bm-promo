import React, { useState } from 'react';
import { Calculator, DollarSign, CreditCard, BarChart2 } from 'lucide-react';

const calculators = [
	{
		id: 'eligibility',
		title: 'Eligibility Calculator',
		description: 'Check if your percentage meets the company cutoff requirements.',
		icon: <BarChart2 className="w-6 h-6 text-yellow-400" />,
	},
	{
		id: 'salary',
		title: 'Salary Calculator',
		description: 'Estimate your potential merchant navy salary based on rank and experience.',
		icon: <DollarSign className="w-6 h-6 text-yellow-400" />,
	},
	{
		id: 'emi',
		title: 'EMI Calculator',
		description: 'Calculate loan EMIs for maritime education courses.',
		icon: <CreditCard className="w-6 h-6 text-yellow-400" />,
	},
	{
		id: 'cgpa',
		title: 'CGPA Converter',
		description: 'Convert your CGPA into percentage for applications.',
		icon: <Calculator className="w-6 h-6 text-yellow-400" />,
	},
];

const Calculators = () => {
	const [selected, setSelected] = useState('eligibility');
	const [percentage, setPercentage] = useState('');
	const [cutoff, setCutoff] = useState('');
	const [result, setResult] = useState<string | null>(null);

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

	return (
		<div className="min-h-screen bg-black text-white flex flex-col">
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
						onClick={() => setSelected(calc.id)}
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

			{/* Calculator Form */}
			<section className="flex justify-center mb-12 px-2">
				<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col items-center">
					<div className="flex items-center gap-2 mb-2">
						<BarChart2 className="w-6 h-6 text-yellow-400" />
						<span className="font-bold text-lg text-black">
							Eligibility Calculator
						</span>
					</div>
					<div className="text-gray-700 text-sm mb-6 text-center">
						Check if your academic percentage meets company requirements
					</div>
					<form className="w-full" onSubmit={handleEligibility}>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm mb-1">
								Your Percentage
							</label>
							<input
								type="number"
								step="0.01"
								value={percentage}
								onChange={(e) => setPercentage(e.target.value)}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
								placeholder="Enter your percentage (e.g., 74.50)"
								required
							/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-700 text-sm mb-1">
								Company Cutoff
							</label>
							<input
								type="number"
								step="0.01"
								value={cutoff}
								onChange={(e) => setCutoff(e.target.value)}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
								placeholder="Enter company cutoff (e.g., 60)"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
						>
							Calculate Eligibility
						</button>
					</form>
					{result && (
						<div className="mt-6 w-full text-center">
							<span
								className={`font-bold text-lg ${
									result === 'Eligible'
										? 'text-green-600'
										: result === 'Not Eligible'
										? 'text-red-600'
										: 'text-yellow-600'
								}`}
							>
								{result}
							</span>
						</div>
					)}
				</div>
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