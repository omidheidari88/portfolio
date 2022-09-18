import Image from 'next/image';
import React from 'react';
import MeImg from '../../public/assets/images/omid-heidari.jpeg';
import {motion} from 'framer-motion';
import useStateValue from '../../store/useContext';
const About = () => {
	const [state] = useStateValue();
	const {isDark} = state.theme;

	return (
		<div
			id='about'
			className='snap-start  w-full h-screen mx-auto p-2  md:mb-[400px]  flex items-center justify-center '
		>
			<motion.div className=' max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8   md:h-1/4'>
				<motion.div className='col-span-2 md:h-96 '>
					<motion.h2
						initial={{opacity: 0, x: -400}}
						whileInView={{opacity: 1, x: 0}}
						transition={{
							duration: 1.2,
							ease: 'easeInOut',
						}}
						className={`tracking-widest 	${
							isDark ? 'text-white' : 'text-zinc-700'
						} px-10 md:px-0 md:pb-12 uppercase `}
					>
						About Me
					</motion.h2>
					<p
						className={` ${
							isDark ? 'text-zinc-200' : 'text-zinc-600'
						} md:text-2xl py-4 text-justify  md:leading-loose  px-10 `}
					>
						I am a software engineer with a passion for building web applications. I
						have a background in computer science and have been working in the industry
						for over 5 years. I have experience working with a variety of technologies
						and languages, but I am most passionate about JavaScript and React. I am
						currently working as a software engineer at{' '}
						<a
							className='font-bold underline'
							href='https://www.thescore.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							The Score
						</a>
						.
					</p>
					<p
						className={` ${
							isDark ? 'text-zinc-200' : 'text-zinc-600'
						} md:text-2xl py-4  md:leading-loose px-10`}
					>
						I am a self-taught developer and I am always looking to learn new
						technologies and languages. I am always looking to improve my skills and
						knowledge.
					</p>
				</motion.div>
				<motion.div
					className={`bg-clip-content bg-cover md:p-[15px] m-[45px]  ${
						isDark ? 'border-zinc-700' : 'border-gray-200'
					} md:m-0 md:border-4 ease-in-out duration-1000`}
				>
					<motion.div
						className='relative hidden md:flex md:h-full w-full  h-96 '
						initial={{opacity: 0, scale: 0.6}}
						whileInView={{opacity: 1, scale: 1}}
						transition={{
							duration: 1.2,
							ease: 'easeIn',
						}}
					>
						<Image
							className='absolute '
							src={MeImg}
							alt='Profile'
							layout='fill'
							objectFit='cover'
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;