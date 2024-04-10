import '../App.css'
import Header from '../components/Header'
import ArrowTop from '../components/ArrowTop'
import { Section, SectionsContainer } from 'react-fullpage'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Home = () => {
	let options = {

		sectionClassName: 'section',
		anchors: [
			'sectionOne',
			'sectionTwo',
			'sectionThree',
			'sectionFour',
			'sectionFive',
		],
		scrollBar: false,
		navigation: true,
		verticalAlign: false,
		arrowNavigation: true,
	}

	return (
		<>
			<Header />
			<div className='hero'>
				<SectionsContainer className='container' {...options}>
					<Section className='slide-flex-one'>
						<motion.div className='slide-img'>
							<motion.img
								initial={{ opacity: 0, x: -700 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5, duration: 1.6 }}
								src='https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-1.jpg'
								alt=''
							/>
						</motion.div>
						<motion.div
							className='slide-first-container'
							initial={{ opacity: 0, scale: 0.9, y: -700 }}
							whileInView={{ opacity: 1, scale: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 1 }}
						>
							<div className='slide-text'>
								<h2>BEYMARAL HONEY</h2>
								<p>
									Introducing our premium white honey, a product of excellence
									crafted in harmony with nature's processes.
								</p>
								<div className='slide-btn'>
									<button>View More</button>
								</div>
							</div>
						</motion.div>
					</Section>
					<Section className='slide-flex-two'>
						<motion.div
							initial={{ opacity: 0, scale: 0.8, x: -500 }}
							whileInView={{ opacity: 1, scale: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 1 }}
							className='slide-first-container-two'
						>
							<div className='slide-text-two'>
								<h5>THE BEST</h5>
								<h2>
									WHITE HONEY, A <br />
									TRUE REFLECTION OF NATURE
								</h2>
								<p>
									Experience the subtle sweetness and unique floral notes of our
									white honey, a true reflection of nature's beauty and bounty.
								</p>
								<div className='slide-btn'>
									<button>View More</button>
								</div>
								<div className='jars'>
									<img
										src='https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-10.jpg'
										alt=''
									/>
								</div>
							</div>
						</motion.div>
						<div className='slide-img-two'>
							<motion.img
								initial={{ opacity: 0, scale: 0.9, y: 700 }}
								whileInView={{ opacity: 1, scale: 1, y: 0 }}
								transition={{ duration: 1 }}
								src='https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-3.jpg'
								alt=''
							/>
						</div>
					</Section>
					<Section className='slide-flex'>
						<motion.div
							initial={{ opacity: 0, scale: 0.9, x: -600 }}
							whileInView={{ opacity: 1, scale: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 1 }}
							className='slide-img-third'
						>
							<img
								src='https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-5.jpg'
								alt=''
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.9, x: 600 }}
							whileInView={{ opacity: 1, scale: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 1 }}
							className='slide-first-container-third'
						>
							<div className='slide-text-third'>
								<h5>WHITE HONEY</h5>
								<h2>NATURAL INGREDIENTS AND FINE TASTY QUALITY</h2>
							</div>
							<div className='slide-box-flex'>
								<div className='slide-box'>
									<div className='slide-box-img'>
										<img
											src='https://beymaral-honey.com/wp-content/uploads/2023/03/Group-144.png'
											alt=''
										/>
									</div>
									<div className='slide-box-text'>
										<h4>Busy Little Bees</h4>
										<p>
											Natural honey collected with love by busy little bees.
										</p>
									</div>
								</div>
								<div className='slide-box'>
									<div className='slide-box-img'>
										<img
											src='https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-7.png'
											alt=''
										/>
									</div>
									<div className='slide-box-text-two'>
										<h4>High Class Food</h4>
										<p>
											Exquisite high-className food for true gourmets and
											connoisseurs.
										</p>
									</div>
								</div>
								<div className='slide-beymaral'>
									<h1 className='beymaral'>BEYMARAL HONEY BEYMARAL HONEY </h1>
								</div>
							</div>
						</motion.div>
					</Section>
					<Section className='slide-flex-three'>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5, duration: 1 }}
							className='slide-first-container-three'
						>
							<div className='slide-text-three'>
								<h5>OUR TEAM</h5>
								<h2>
									CRAFTED WITH CARE BY OUR SKILLED TEAM FOR ULTIMATE
									SATISFACTION.
								</h2>
								<div className='slide-btn'>
									<button>View More</button>
								</div>
							</div>
							<div className='honey-img'>
								<img
									src='https://beymaral-honey.com/wp-content/uploads/2023/03/h9-img-11.jpg'
									alt=''
								/>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 1, duration: 1 }}
							className='slide-img-three'
						></motion.div>
					</Section>
					<Section className='slide-flex'>
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.6, duration: 1 }}
							className='slide-img-honey'
						></motion.div>
						<motion.div
							initial={{ opacity: 0, y: 600 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 1 }}
							className='slide-first-container-third'
						>
							<div className='slide-text-fifth'>
								<h5>FINEST PRODUCE</h5>
								<h2>WITH LONG EXPERIENCE IN FARMING & ORGANIC FOOD</h2>
								<h6>Honey Farm</h6>
								<div className='spans'>
									<span>
										4, Shkolnaya street, Zhyrgalan village, Issyk-Kul region,
										Kyrgyzstan
									</span>
									<span>+996 550 205-988</span>
									<span>info@beymaral-honey.com</span>
								</div>
							</div>
							<div className='slide-beymaral'>
								<h1 className='beymaral'>BEYMARAL HONEY BEYMARAL HONEY </h1>
							</div>
						</motion.div>
						<ArrowTop />
					</Section>
				</SectionsContainer>
			</div>
		</>
	)
}

export default Home
