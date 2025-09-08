"use client";

import { useState } from "react";
import { Search, Github, Star, GitFork, Calendar, Code2, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const projects = [
	{
		id: 1,
		title: "E-Commerce Platform",
		description:
			"Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo.",
		technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
		url: "https://demo-ecommerce.vercel.app",
		githubUrl: "https://github.com/werik-nascimento/ecommerce-platform",
		featured: true,
		stars: 24,
		forks: 8,
		language: "TypeScript",
	},
	{
		id: 2,
		title: "Task Management App",
		description:
			"Aplicação de gerenciamento de tarefas com drag-and-drop, colaboração em tempo real e notificações.",
		technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
		url: "https://taskmanager-demo.vercel.app",
		githubUrl: "https://github.com/werik-nascimento/task-manager",
		featured: true,
		stars: 18,
		forks: 5,
		language: "JavaScript",
	},
	{
		id: 3,
		title: "Weather Dashboard",
		description:
			"Dashboard meteorológico com previsões em tempo real, mapas interativos e alertas personalizados.",
		technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
		url: "https://weather-dashboard-demo.vercel.app",
		githubUrl: "https://github.com/werik-nascimento/weather-dashboard",
		featured: false,
		stars: 12,
		forks: 3,
		language: "Vue",
	},
	{
		id: 4,
		title: "Social Media Analytics",
		description:
			"Ferramenta de análise de redes sociais com métricas em tempo real e relatórios personalizados.",
		technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis", "Docker"],
		url: "https://social-analytics-demo.vercel.app",
		githubUrl: "https://github.com/werik-nascimento/social-analytics",
		featured: false,
		stars: 31,
		forks: 12,
		language: "TypeScript",
	},
	{
		id: 5,
		title: "AI Content Generator",
		description:
			"Gerador de conteúdo baseado em IA com templates personalizáveis e integração com APIs de texto.",
		technologies: ["React", "OpenAI API", "Express", "MongoDB", "Tailwind CSS"],
		url: "https://ai-content-demo.vercel.app",
		githubUrl: "https://github.com/werik-nascimento/ai-content-generator",
		featured: false,
		stars: 45,
		forks: 15,
		language: "JavaScript",
	},
	{
		id: 6,
		title: "Crypto Portfolio Tracker",
		description:
			"Aplicação para rastreamento de portfólio de criptomoedas com gráficos em tempo real e alertas de preço.",
		technologies: ["React Native", "Expo", "CoinGecko API", "AsyncStorage", "Reanimated"],
		url: "https://crypto-tracker-demo.vercel.app",
		githubUrl: "https://github.com/werik-nascimento/crypto-tracker",
		featured: false,
		stars: 28,
		forks: 7,
		language: "JavaScript",
	},
];

export function Projects() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState("all");

	// Filtrar projetos
	const filteredProjects = projects.filter((project) => {
		const matchesSearch =
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesLanguage =
			selectedLanguage === "all" || project.language === selectedLanguage;
		return matchesSearch && matchesLanguage;
	});

	const featuredProjects = filteredProjects.filter((project) => project.featured);
	const otherProjects = filteredProjects.filter((project) => !project.featured);

	const languages = [...new Set(projects.map((project) => project.language))];

	return (
		<section
			id="projects"
			className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
		>
			<div className="container max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16 fade-in">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-700 mb-6">
						<Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
						<span className="text-sm font-medium text-blue-700 dark:text-blue-300">
							{projects.length} Projetos Desenvolvidos
						</span>
					</div>

					<h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
						Meus Projetos
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Aqui você encontra uma coleção dos meus projetos mais recentes e impactantes,
						desenvolvidos ao longo da minha trajetória profissional. Cada projeto representa
						minha dedicação em transformar ideias em soluções digitais, aplicando habilidades
						técnicas e criatividade adquiridas na Siriusys e durante minha formação na FATEC.
					</p>
				</div>

				{/* Filtros e Busca */}
				<div
					className="mb-12 slide-in-up"
					style={{ animationDelay: "0.2s" }}
				>
					<div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
						<div className="grid md:grid-cols-2 gap-4">
							{/* Busca */}
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
								<Input
									placeholder="Buscar projetos..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10 rounded-xl border-2 focus:border-blue-500 dark:focus:border-blue-400"
								/>
							</div>

							{/* Filtro por linguagem */}
							<select
								value={selectedLanguage}
								onChange={(e) => setSelectedLanguage(e.target.value)}
								className="px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none"
							>
								<option value="all">Todas as linguagens</option>
								{languages.map((lang) => (
									<option key={lang} value={lang}>
										{lang}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Projetos em Destaque */}
				{featuredProjects.length > 0 && (
					<div className="mb-20">
						<div className="flex items-center gap-3 mb-8 slide-in-up">
							<Sparkles className="w-6 h-6 text-yellow-500" />
							<h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
								Projetos em Destaque
							</h3>
						</div>

						<div className="grid lg:grid-cols-2 gap-8">
							{featuredProjects.map((project, index) => (
								<div
									key={project.id}
									className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-purple-400/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 card-hover"
									style={{ animationDelay: `${index * 0.2}s` }}
								>
									<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

									<div className="relative p-8">
										<div className="flex items-start justify-between mb-6">
											<div className="flex-1">
												<div className="flex items-center gap-3 mb-3">
													<div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
														<Code2 className="w-5 h-5" />
													</div>
													<div>
														<h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
															{project.title}
														</h4>
														<div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
															<div className="flex items-center gap-1">
																<Star className="w-4 h-4" />
																<span>{project.stars}</span>
															</div>
															<div className="flex items-center gap-1">
																<GitFork className="w-4 h-4" />
																<span>{project.forks}</span>
															</div>
															<span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs">
																{project.language}
															</span>
														</div>
													</div>
												</div>

												<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
													{project.description}
												</p>
											</div>
										</div>

										<div className="flex flex-wrap gap-2 mb-6">
											{project.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700"
												>
													{tech}
												</span>
											))}
										</div>

										<div className="flex gap-4">
											<Button
												asChild
												className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl py-3 font-semibold transition-all duration-300 transform hover:scale-105"
											>
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center justify-center gap-2"
												>
													<Github className="w-5 h-5" />
													Ver Código
												</a>
											</Button>

											{project.url && (
												<Button
													asChild
													variant="outline"
													className="px-6 rounded-2xl border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
												>
													<a
														href={project.url}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center justify-center gap-2"
													>
														<ExternalLink className="w-5 h-5" />
														Demo
													</a>
												</Button>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Outros Projetos */}
				{otherProjects.length > 0 && (
					<div>
						<div className="flex items-center gap-3 mb-8 slide-in-up">
							<Code2 className="w-6 h-6 text-blue-500" />
							<h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
								Todos os Projetos
							</h3>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{otherProjects.map((project, index) => (
								<div
									key={project.id}
									className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:-translate-y-2 card-hover"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<div className="relative p-6">
										<div className="flex items-start justify-between mb-4">
											<div className="flex-1">
												<div className="flex items-center gap-2 mb-2">
													<div
														className={`w-3 h-3 rounded-full ${
															project.language === "TypeScript"
																? "bg-blue-500"
																: project.language === "JavaScript"
																? "bg-yellow-500"
																: project.language === "Vue"
																? "bg-green-500"
																: "bg-gray-500"
														}`}
													/>
													<h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
														{project.title}
													</h4>
												</div>
												<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
													{project.description}
												</p>
											</div>
										</div>

										<div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
											<div className="flex items-center gap-1">
												<Star className="w-4 h-4" />
												<span>{project.stars}</span>
											</div>
											<div className="flex items-center gap-1">
												<GitFork className="w-4 h-4" />
												<span>{project.forks}</span>
											</div>
										</div>

										<div className="flex flex-wrap gap-1 mb-4">
											{project.technologies.slice(0, 3).map((tech) => (
												<span
													key={tech}
													className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
												>
													{tech}
												</span>
											))}
											{project.technologies.length > 3 && (
												<span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
													+{project.technologies.length - 3}
												</span>
											)}
										</div>

										<div className="flex gap-2">
											<Button
												asChild
												size="sm"
												variant="outline"
												className="flex-1 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20"
											>
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center justify-center gap-1"
												>
													<Github className="w-4 h-4" />
													Código
												</a>
											</Button>

											{project.url && (
												<Button
													asChild
													size="sm"
													variant="ghost"
													className="px-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20"
												>
													<a
														href={project.url}
														target="_blank"
														rel="noopener noreferrer"
													>
														<ExternalLink className="w-4 h-4" />
													</a>
												</Button>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Stats */}
				<div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white slide-in-up">
					<div className="grid md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-3xl font-bold mb-2">{projects.length}</div>
							<div className="text-blue-100">Projetos</div>
						</div>
						<div>
							<div className="text-3xl font-bold mb-2">
								{projects.reduce((acc, project) => acc + project.stars, 0)}
							</div>
							<div className="text-blue-100">Total de Stars</div>
						</div>
						<div>
							<div className="text-3xl font-bold mb-2">
								{projects.reduce((acc, project) => acc + project.forks, 0)}
							</div>
							<div className="text-blue-100">Total de Forks</div>
						</div>
						<div>
							<div className="text-3xl font-bold mb-2">{languages.length}</div>
							<div className="text-blue-100">Linguagens</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
