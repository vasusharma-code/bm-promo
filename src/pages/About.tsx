import React from 'react';

const founders = [
	{
		name: 'Ojas Lalla',
		title: 'CEO & Founder',
		image: '/assets/ojas.png',
		bio: `Ojas Lalla is the visionary behind Budding Mariners. With a passion for maritime education and years of experience at sea, he has helped thousands of students achieve their dreams of joining the Merchant Navy. His leadership and dedication have set new standards in the industry.

Ojas believes in hands-on mentorship and has personally guided hundreds of cadets through the selection process. His mission is to make quality maritime training accessible to all aspiring mariners.`,
	},
	{
		name: 'Shahnawaz',
		title: 'COO & Co-Founder',
		image: '/assets/shahnawaz.png',
		bio: `Shahnawaz brings operational excellence to Budding Mariners. With a strong background in marine operations and training, he ensures every student receives the best possible support and guidance.

He is known for his approachable nature and commitment to student success. Shahnawaz oversees the day-to-day functioning of the academy and works closely with faculty and students to maintain high standards.`,
	},
];

const About = () => (
	<div className="min-h-screen bg-black text-white">
		{/* About Us Header */}
		<section className="pt-28 pb-2 text-center">
			<h1 className="text-3xl md:text-4xl font-extrabold mb-1 text-white">
				About Us
			</h1>
			<p className="text-white/80 text-sm max-w-2xl mx-auto mb-2">
				Discover the story behind Budding Mariners and our mission to transform
				maritime education.
			</p>
		</section>

		{/* Our Story */}
		<section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 pb-12 px-4">
			<div className="flex-1">
				<h2 className="text-2xl font-bold mb-4 text-white">Our Story</h2>
				<p className="text-white/80 mb-4">
					In 2019, Ojas and Shahnawaz founded Budding Mariners to help aspiring
					seafarers achieve their dreams. What started as a small initiative has
					now grown into a leading maritime academy, known for its commitment to
					quality training and student success.
				</p>
				<p className="text-white/80">
					Our mission is to bridge the gap between ambition and achievement by
					providing world-class mentorship, practical training, and unwavering
					support to every student.
				</p>
			</div>
			<div className="flex-1 flex justify-center">
				<img
					src="/assets/about-story.jpg"
					alt="Our Story"
					className="rounded-xl w-full max-w-xs object-cover border-4 border-yellow-400"
				/>
			</div>
		</section>

		{/* Mission & Vision */}
		<section className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 pb-16 px-4">
			<div className="flex-1 bg-yellow-400 text-black rounded-xl p-8 shadow-lg">
				<h3 className="text-2xl font-bold mb-2">Mission</h3>
				<p>
					To empower aspiring mariners with the knowledge, skills, and confidence
					to excel in the Merchant Navy. We are dedicated to providing accessible,
					high-quality training and personal mentorship for every student.
				</p>
			</div>
			<div className="flex-1 bg-yellow-400 text-black rounded-xl p-8 shadow-lg">
				<h3 className="text-2xl font-bold mb-2">Vision</h3>
				<p>
					To be India's most trusted maritime academy, recognized for our
					results, integrity, and student-first approach. We envision a future
					where every passionate seafarer has the opportunity to succeed.
				</p>
			</div>
		</section>

		{/* About the Founders */}
		<section className="max-w-5xl mx-auto pb-20 px-4">
			<h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">
				About the Founders
			</h2>
			<div className="flex flex-col gap-16">
				{founders.map((founder, idx) => (
					<div
						key={founder.name}
						className={`flex flex-col md:flex-row items-center gap-10 ${
							idx % 2 === 1 ? 'md:flex-row-reverse' : ''
						}`}
					>
						<div className="flex-1">
							<h3 className="text-2xl font-bold mb-2 text-white">
								{founder.name}
							</h3>
							<div className="mb-4">
								<span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold text-sm">
									{founder.title}
								</span>
							</div>
							<p className="text-white/80 whitespace-pre-line">
								{founder.bio}
							</p>
						</div>
						<div className="flex-1 flex justify-center">
							<img
								src={founder.image}
								alt={founder.name}
								className="rounded-xl w-full max-w-xs object-cover border-4 border-yellow-400"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	</div>
);

export default About;