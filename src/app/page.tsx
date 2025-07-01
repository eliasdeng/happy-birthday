'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Heart, Sparkles, Gift, Camera, ArrowLeft, ArrowRight, X } from 'lucide-react'
import { toast } from 'sonner'

// 照片数据 - 显示实际存在的照片
const photos = [
	{
		id: 1,
		src: '/images/photo1.jpg',
		description: '温馨的家庭合影',
		location: '龙纹装饰背景前'
	},
	{
		id: 2,
		src: '/images/photo3.jpg',
		description: '身着华美汉服',
		location: '古色古香的庭院中'
	},
	{
		id: 3,
		src: '/images/photo4.jpg',
		description: '与维纳斯女神的邂逅',
		location: '卢浮宫雕塑展厅'
	},
	{
		id: 4,
		src: '/images/photo7.jpg',
		description: '欣赏传世名画',
		location: '卢浮宫蒙娜丽莎展厅'
	},
	{
		id: 5,
		src: '/images/photo10.jpg',
		description: '惬意的温泉时光',
		location: '雾气缭绕的温泉池边'
	},
	{
		id: 6,
		src: '/images/photo11.jpg',
		description: '眺望悉尼美景',
		location: '悉尼海港大桥下'
	},
	{
		id: 7,
		src: '/images/photo12.jpg',
		description: '相伴古城漫步',
		location: '斑驳的古城墙前'
	},
	{
		id: 8,
		src: '/images/photo13.jpg',
		description: '浪漫的运河之城',
		location: '阿姆斯特丹街头'
	}
]

// 生日祝福语
const birthdayWishes = [
	"愿你的生日充满无穷的快乐",
	"愿你今天的回忆温馨，愿你明天的梦想甜美",
	"愿你拥有最美好的生日，愿你新的一年比过去更辉煌",
	"生日快乐！愿所有的美好都围绕着你",
	"愿你的生日如诗如画，愿你的生活永远精彩",
]

function PhotoGallery() {
	const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
	const [currentIndex, setCurrentIndex] = useState(0)

	const openPhoto = (index: number) => {
		if (photos[index]) {
			setCurrentIndex(index)
			setSelectedPhoto(photos[index].id)
		}
	}

	const closePhoto = () => {
		setSelectedPhoto(null)
	}

	const nextPhoto = () => {
		const nextIndex = (currentIndex + 1) % photos.length
		if (photos[nextIndex]) {
			setCurrentIndex(nextIndex)
			setSelectedPhoto(photos[nextIndex].id)
		}
	}

	const prevPhoto = () => {
		const prevIndex = (currentIndex - 1 + photos.length) % photos.length
		if (photos[prevIndex]) {
			setCurrentIndex(prevIndex)
			setSelectedPhoto(photos[prevIndex].id)
		}
	}

	const currentPhoto = photos[currentIndex]

	return (
		<div className="w-full max-w-6xl mx-auto px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
				{photos.map((photo, index) => (
					<Card 
						key={photo.id} 
						className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-2 border-pink-200"
						onClick={() => openPhoto(index)}
					>
						<CardContent className="p-0">
							<div className="relative aspect-square overflow-hidden">
								<img
									src={photo.src}
									className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
									onError={(e) => {
										// 如果图片加载失败，显示友好的占位符
										const svgString = `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
											<rect width="400" height="400" fill="#fdf2f8"/>
											<rect x="150" y="150" width="100" height="80" fill="#f9a8d4" rx="12"/>
											<circle cx="200" cy="180" r="20" fill="#ec4899"/>
											<text x="200" y="190" text-anchor="middle" fill="white" font-family="Arial" font-size="20">📷</text>
											<text x="200" y="260" text-anchor="middle" fill="#be185d" font-family="Arial" font-size="10" font-weight="bold">
												Add photo${photo.id}.jpg
											</text>
											<text x="200" y="280" text-anchor="middle" fill="#9d174d" font-family="Arial" font-size="9">
												to public/images/ folder
											</text>
										</svg>`
										e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`
									}}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<Camera className="w-5 h-5 text-white" />
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* 大图预览对话框 */}
			<Dialog open={selectedPhoto !== null} onOpenChange={(open) => !open && closePhoto()}>
				<DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black border-0">
					<div className="relative w-full h-full">
						<button
							onClick={closePhoto}
							className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
						>
							<X className="w-6 h-6" />
						</button>
						
						<button
							onClick={prevPhoto}
							className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
						>
							<ArrowLeft className="w-6 h-6" />
						</button>
						
						<button
							onClick={nextPhoto}
							className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
						>
							<ArrowRight className="w-6 h-6" />
						</button>

						<div className="flex items-center justify-center w-full h-full min-h-[60vh]">
							{currentPhoto && (
								<img
									src={currentPhoto.src}
									className="max-w-full max-h-full object-contain"
																	onError={(e) => {
									const svgString = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
										<rect width="800" height="600" fill="#1f2937"/>
										<rect x="350" y="270" width="100" height="60" fill="#374151" rx="8"/>
										<circle cx="400" cy="300" r="15" fill="#6b7280"/>
										<text x="400" y="350" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="16">
											Loading image...
										</text>
									</svg>`
									e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`
								}}
								/>
							)}
						</div>
						
						{currentPhoto && (
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
								<h3 className="text-white text-lg font-semibold mb-1">{currentPhoto.description}</h3>
								<p className="text-white/80 text-sm">{currentPhoto.location}</p>
								<p className="text-white/60 text-xs mt-2">{currentIndex + 1} / {photos.length}</p>
							</div>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default function BirthdayPage() {
	const [currentWish, setCurrentWish] = useState(0)
	const [showFireworks, setShowFireworks] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		const interval = setInterval(() => {
			setCurrentWish((prev) => (prev + 1) % birthdayWishes.length)
		}, 3000)
		return () => clearInterval(interval)
	}, [])

	const triggerFireworks = () => {
		setShowFireworks(true)
		toast.success('🎉 生日快乐！愿你永远幸福！', {
			duration: 3000,
		})
		setTimeout(() => setShowFireworks(false), 3000)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 relative overflow-hidden">
			{/* 背景文字 */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-10 left-10 text-6xl font-bold text-pink-200/30 rotate-12 select-none">
					Happy
				</div>
				<div className="absolute top-32 right-20 text-5xl font-bold text-purple-200/30 -rotate-12 select-none">
					Birthday
				</div>
				<div className="absolute bottom-32 left-20 text-4xl font-bold text-indigo-200/30 rotate-6 select-none">
					To You
				</div>
				<div className="absolute bottom-10 right-10 text-3xl font-bold text-pink-300/30 -rotate-6 select-none">
					生日快乐
				</div>
				<div className="absolute top-1/2 left-1/4 text-2xl font-bold text-purple-300/20 rotate-45 select-none">
					Happy Birthday
				</div>
				<div className="absolute top-1/3 right-1/3 text-2xl font-bold text-indigo-300/20 -rotate-45 select-none">
					生日快乐
				</div>
			</div>

			{/* 飘落的花瓣动画 */}
			<div className="absolute inset-0 pointer-events-none">
				{mounted && [...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute animate-bounce"
						style={{
							left: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
							animationDuration: `${3 + Math.random() * 2}s`,
						}}
					>
						<Heart className="w-4 h-4 text-pink-300 animate-pulse" />
					</div>
				))}
			</div>

			{/* 主要内容 */}
			<div className="relative z-10 pt-8 pb-16">
				{/* 标题区域 */}
				<div className="text-center mb-12 px-4">
					<div className="inline-flex items-center gap-4 mb-6">
						<Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
						<Gift className="w-10 h-10 text-pink-500 animate-bounce" />
						<Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
					</div>
					
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6 animate-pulse">
						Happy Birthday, 赵玉芝
					</h1>
					
					<div className="max-w-2xl mx-auto">
						<p className="text-lg md:text-xl text-gray-700 mb-4 min-h-[2rem] transition-all duration-500">
							{birthdayWishes[currentWish]}
						</p>
						
						<Button 
							onClick={triggerFireworks}
							className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
						>
							<Gift className="w-5 h-5 mr-2" />
							点击庆祝 🎉
						</Button>
					</div>
				</div>

				{/* 美丽烟花效果 */}
				{showFireworks && mounted && (
					<div className="fixed inset-0 pointer-events-none z-50">
						<style jsx>{`
							@keyframes firework-burst {
								0% {
									transform: scale(0);
									opacity: 1;
								}
								50% {
									transform: scale(1.2);
									opacity: 1;
								}
								100% {
									transform: scale(2);
									opacity: 0;
								}
							}
							
							@keyframes particle-fly {
								0% {
									transform: translate(0, 0) scale(1);
									opacity: 1;
								}
								70% {
									opacity: 0.8;
								}
								100% {
									transform: translate(var(--end-x), var(--end-y)) scale(0.2);
									opacity: 0;
								}
							}
							
							@keyframes sparkle {
								0%, 100% {
									transform: scale(0) rotate(0deg);
									opacity: 0;
								}
								50% {
									transform: scale(1) rotate(180deg);
									opacity: 1;
								}
							}
							
							@keyframes flash {
								0% {
									transform: scale(0);
									opacity: 0;
								}
								20% {
									transform: scale(1);
									opacity: 1;
								}
								100% {
									transform: scale(0);
									opacity: 0;
								}
							}
						`}</style>
						
						{/* 主烟花 */}
						{[...Array(6)].map((_, fireworkIndex) => {
							const centerX = 20 + Math.random() * 60;
							const centerY = 20 + Math.random() * 50;
							const delay = Math.random() * 1.5;
							const colors = [
								'#FF6B9D', '#C44569', '#F8B500', '#FECA57', 
								'#FF9FF3', '#54A0FF', '#5F27CD', '#00D2D3'
							];
							const primaryColor = colors[Math.floor(Math.random() * colors.length)];
							
							return (
								<div key={`firework-${fireworkIndex}`}>
									{/* 中心爆炸闪光 */}
									<div
										className="absolute"
										style={{
											left: `${centerX}%`,
											top: `${centerY}%`,
											animation: `flash 0.6s ease-out ${delay}s`,
										}}
									>
										<div 
											className="w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2"
											style={{ 
												background: `radial-gradient(circle, #ffffff 0%, ${primaryColor} 30%, transparent 70%)`,
												boxShadow: `0 0 40px ${primaryColor}, 0 0 80px ${primaryColor}`
											}}
										/>
									</div>
									
									{/* 主要粒子圈 */}
									{[...Array(32)].map((_, particleIndex) => {
										const angle = (particleIndex / 32) * 2 * Math.PI;
										const distance = 80 + Math.random() * 60;
										const endX = Math.cos(angle) * distance;
										const endY = Math.sin(angle) * distance;
										const particleDelay = delay + 0.1 + (particleIndex * 0.01);
										
										return (
											<div
												key={`particle-${fireworkIndex}-${particleIndex}`}
												className="absolute"
												style={{
													left: `${centerX}%`,
													top: `${centerY}%`,
													'--end-x': `${endX}px`,
													'--end-y': `${endY}px`,
													animation: `particle-fly 2s ease-out ${particleDelay}s`,
												} as React.CSSProperties}
											>
												<div 
													className="w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
													style={{ 
														backgroundColor: primaryColor,
														boxShadow: `0 0 10px ${primaryColor}, 0 0 20px ${primaryColor}`
													}}
												/>
											</div>
										);
									})}
									
									{/* 内圈小粒子 */}
									{[...Array(16)].map((_, smallIndex) => {
										const angle = (smallIndex / 16) * 2 * Math.PI;
										const distance = 40 + Math.random() * 30;
										const endX = Math.cos(angle) * distance;
										const endY = Math.sin(angle) * distance;
										const smallDelay = delay + 0.15 + (smallIndex * 0.02);
										
										return (
											<div
												key={`small-${fireworkIndex}-${smallIndex}`}
												className="absolute"
												style={{
													left: `${centerX}%`,
													top: `${centerY}%`,
													'--end-x': `${endX}px`,
													'--end-y': `${endY}px`,
													animation: `particle-fly 1.5s ease-out ${smallDelay}s`,
												} as React.CSSProperties}
											>
												<div 
													className="w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
													style={{ 
														backgroundColor: '#FFFFFF',
														boxShadow: `0 0 8px ${primaryColor}`
													}}
												/>
											</div>
										);
									})}
								</div>
							);
						})}
						
						{/* 装饰性闪烁星星 */}
						{[...Array(20)].map((_, starIndex) => {
							const x = Math.random() * 100;
							const y = Math.random() * 100;
							const delay = Math.random() * 3;
							const duration = 1 + Math.random() * 2;
							
							return (
								<div
									key={`star-${starIndex}`}
									className="absolute"
									style={{
										left: `${x}%`,
										top: `${y}%`,
										animation: `sparkle ${duration}s ease-in-out ${delay}s infinite`,
									}}
								>
									<div className="w-4 h-4 -translate-x-1/2 -translate-y-1/2">
										<div className="absolute inset-0 bg-yellow-300 rounded-full"></div>
										<div className="absolute inset-0 bg-yellow-300 rounded-full rotate-45 scale-75"></div>
									</div>
								</div>
							);
						})}
						
						{/* 心形特效烟花 */}
						{[...Array(2)].map((_, heartIndex) => {
							const centerX = 30 + heartIndex * 40;
							const centerY = 30 + Math.random() * 20;
							const delay = 1 + heartIndex * 0.8;
							const heartColor = '#FF69B4';
							
							// 心形参数方程粒子
							const heartParticles = [];
							for (let i = 0; i < 24; i++) {
								const t = (i / 24) * 2 * Math.PI;
								const x = 16 * Math.pow(Math.sin(t), 3) * 2;
								const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * 2;
								heartParticles.push({ x, y });
							}
							
							return (
								<div key={`heart-${heartIndex}`}>
									{/* 心形中心 */}
									<div
										className="absolute"
										style={{
											left: `${centerX}%`,
											top: `${centerY}%`,
											animation: `flash 0.8s ease-out ${delay}s`,
										}}
									>
										<div 
											className="w-6 h-6 rounded-full -translate-x-1/2 -translate-y-1/2"
											style={{ 
												backgroundColor: heartColor,
												boxShadow: `0 0 30px ${heartColor}, 0 0 60px ${heartColor}`
											}}
										/>
									</div>
									
									{/* 心形粒子 */}
									{heartParticles.map((point, pointIndex) => (
										<div
											key={`heart-particle-${heartIndex}-${pointIndex}`}
											className="absolute"
											style={{
												left: `${centerX}%`,
												top: `${centerY}%`,
												'--end-x': `${point.x}px`,
												'--end-y': `${point.y}px`,
												animation: `particle-fly 2.5s ease-out ${delay + 0.2 + pointIndex * 0.03}s`,
											} as React.CSSProperties}
										>
											<div 
												className="w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
												style={{ 
													backgroundColor: heartColor,
													boxShadow: `0 0 8px ${heartColor}`
												}}
											/>
										</div>
									))}
								</div>
							);
						})}
						
						{/* 第一版本烟花效果 - 经典装饰 */}
						{/* 金色火花 */}
						{[...Array(25)].map((_, i) => (
							<div
								key={`classic-sparkles-${i}`}
								className="absolute animate-ping"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 2}s`,
									animationDuration: `${1 + Math.random() * 2}s`,
								}}
							>
								<Sparkles className="w-6 h-6 text-yellow-400" />
							</div>
						))}
						
						{/* 彩色爆炸效果 */}
						{[...Array(20)].map((_, i) => (
							<div
								key={`classic-burst-${i}`}
								className="absolute animate-bounce"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 1.5}s`,
									animationDuration: `${0.8 + Math.random() * 1.2}s`,
								}}
							>
								<div className={`w-4 h-4 rounded-full ${
									Math.random() > 0.66 ? 'bg-pink-400' : 
									Math.random() > 0.33 ? 'bg-purple-400' : 
									'bg-blue-400'
								} animate-pulse`} />
							</div>
						))}
						
						{/* 星星效果 */}
						{[...Array(15)].map((_, i) => (
							<div
								key={`classic-stars-${i}`}
								className="absolute animate-spin"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 2.5}s`,
									animationDuration: `${2 + Math.random() * 3}s`,
								}}
							>
								<div className="text-2xl">⭐</div>
							</div>
						))}
						
						{/* 心形效果 */}
						{[...Array(12)].map((_, i) => (
							<div
								key={`classic-hearts-${i}`}
								className="absolute animate-pulse"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
									animationDelay: `${Math.random() * 1.8}s`,
									animationDuration: `${1.5 + Math.random() * 2}s`,
								}}
							>
								<Heart className="w-5 h-5 text-red-400 fill-current" />
							</div>
						))}
						
						{/* 大型烟花爆炸 */}
						{[...Array(8)].map((_, i) => (
							<div
								key={`classic-fireworks-${i}`}
								className="absolute"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 60}%`,
									animationDelay: `${Math.random() * 1}s`,
								}}
							>
								<div className="relative">
									<Sparkles className="w-12 h-12 text-orange-400 animate-ping" />
									<div className="absolute inset-0 animate-spin">
										<Sparkles className="w-8 h-8 text-yellow-300" />
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{/* 回忆画廊标题 */}
				<div className="text-center mb-8 px-4">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
						美好回忆画廊 📸
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						记录下那些珍贵的时光，每一张照片都是一段美好的回忆，见证着你的精彩人生旅程。
					</p>
				</div>

				{/* 照片画廊 */}
				<PhotoGallery />

				{/* 底部祝福 */}
				<div className="text-center mt-16 px-4">
					<div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-200">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							特别的祝福给特别的你 💕
						</h3>
						<p className="text-gray-700 leading-relaxed text-lg">
							愿你的生日充满温馨的祝福，愿你的每一天都像这些美好的回忆一样精彩。
							从家人的陪伴到世界各地的旅行，从传统的汉服到现代的时尚，
							你的生活如此丰富多彩，就像这些珍贵的照片一样，值得永远珍藏。
						</p>
						<p className="text-pink-600 font-semibold text-xl mt-4">
							生日快乐，愿你永远幸福美满！🎂✨
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
