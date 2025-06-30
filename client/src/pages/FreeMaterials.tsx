import React, { useEffect } from 'react';
import { Download, FileText } from 'lucide-react';

const materials = [
	{
		title: 'Organic Important Reactions',
		download: 'https://drive.google.com/file/d/1wyo918TLyBoZ7Fuo8CTW9fpvYh_Rkv1j/view?usp=drive_link',
	},
	{
		title: 'ALL ABOUT B.sc',
		download: 'https://drive.google.com/file/d/1u4HS291Rx__vJpz9WPj11TO_megzR7Vj/view?usp=drive_link',
	},
	{
		title: 'Indian Ports & Their States',
		download: 'https://drive.google.com/file/d/1sp2dtHWrXFyASfHpoH3CMOZPWsGW--0n/view?usp=drive_link',
	},
	{
		title: 'Asia Country And Capital -2',
		download: 'https://drive.google.com/file/d/1fkknzo2k8SjNEL8uhjv5O05huUg6eabK/view?usp=drive_link',
	},
	{
		title: 'ALL ABOUT DNS',
		download: 'https://drive.google.com/file/d/1bH3pASdORQI_gYfwGB3ESJ6OxN4nTb_O/view?usp=drive_link',
	},
	{
		title: 'Asia Country And Capital -1',
		download: 'https://drive.google.com/file/d/1DcOQZat7A2DeyR-3wEQhhsont_5G-N1T/view?usp=drive_link',
	},
	{
		title: 'ALL ABOUT B.tech',
		download: 'https://drive.google.com/file/d/1CgQwxmgy5ikcK3nelUu6ExGYJLowecIi/view?usp=drive_link',
	},
	{
		title: 'RIVERS & ORIGINS',
		download: 'https://drive.google.com/file/d/1BOCOu2YOuq_lIXT-pVyA3OHxFZJL2Li1/view?usp=drive_link',
	},
	{
		title: 'Country And Their Currency',
		download: 'https://drive.google.com/file/d/158lorc_5m8iaRotTbi3MgwYLca7iAf_3/view?usp=drive_link',
	},
];

const FreeMaterials = () => {
	useEffect(() => {
		// Remove horizontal scroll from navbar on this page
		const navMobileBar = document.querySelector(
			'.md\\:hidden.items-center.border-b.border-yellow-400.h-10'
		);
		if (navMobileBar) {
			(navMobileBar as HTMLElement).style.overflowX = 'auto';
			(navMobileBar as HTMLElement).style.maxWidth = '100vw';
		}
		// Remove horizontal scroll from parent if any
		document.body.style.overflowX = 'hidden';
		return () => {
			document.body.style.overflowX = '';
		};
	}, []);

	return (
		<div className="min-h-screen bg-black text-white flex flex-col">
			{/* Header */}
			<section className="pt-28 pb-6 text-center">
				<h1 className="text-3xl md:text-4xl font-extrabold mb-2">
					Free Study Materials
				</h1>
				<p className="text-white/80 text-base max-w-2xl mx-auto">
					Download a curated collection of educational PDFs on various topics.
				</p>
			</section>

			{/* Materials Grid */}
			<section className="max-w-5xl mx-auto w-full py-10 px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{materials.map((mat, idx) => (
					<div
						key={idx}
						className="bg-white rounded-xl shadow p-5 flex flex-col border border-gray-100 relative"
					>
						<div className="flex items-center mb-3">
							<span className="flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
								<FileText className="w-4 h-4 mr-1" />
								PDF
							</span>
						</div>
						<div className="font-bold text-base text-black mb-6">
							{mat.title}
						</div>
						<a
							href={mat.download}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full bg-black text-yellow-400 py-2 rounded font-bold flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black transition"
						>
							<Download className="w-4 h-4" />
							Download Free
						</a>
					</div>
				))}
			</section>
		</div>
	);
};

export default FreeMaterials;
