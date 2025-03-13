import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import { Logo } from "./components/logo"
import { AnimatedSearch } from "./components/animated-search"

export default function HomePage() {
  // Données simulées pour les catégories
  const categories = [
    {
      id: 1,
      name: "Création de Vidéos",
      slug: "creation-videos",
      description:
        "Les logiciels de création de vidéos alimentés par l'IA révolutionnent la façon dont nous produisons du contenu vidéo. Grâce à ces technologies avancées, il est désormais possible de générer des vidéos de haute qualité en quelques clics, sans nécessiter de compétences techniques approfondies. Ces plateformes offrent des fonctionnalités comme la génération automatique de scénarios, l'animation de personnages virtuels, et la création de transitions fluides. Elles permettent également de transformer du texte en vidéos explicatives, d'améliorer la qualité des séquences existantes, et de personnaliser le contenu selon les besoins spécifiques. Pour les créateurs de contenu, les marketeurs et les entreprises, ces logiciels représentent un gain de temps considérable tout en maintenant un niveau de qualité professionnel.",
      tools: [
        {
          id: 1,
          name: "VideoGenius AI",
          description: "Créez des vidéos professionnelles à partir de texte en quelques minutes",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.8,
          category: "Création de Vidéos",
          tags: ["IA Générative", "Montage", "Gratuit"],
        },
        {
          id: 2,
          name: "MontageAI",
          description: "Montage vidéo automatisé avec des transitions intelligentes",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.6,
          category: "Création de Vidéos",
          tags: ["Montage", "Transitions", "Premium"],
        },
        {
          id: 3,
          name: "ScriptToVideo",
          description: "Transformez vos scripts en vidéos animées professionnelles",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.7,
          category: "Création de Vidéos",
          tags: ["Animation", "Voix Off", "Entreprise"],
        },
        {
          id: 4,
          name: "AnimateMe",
          description: "Créez des personnages animés et des avatars pour vos vidéos",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.5,
          category: "Création de Vidéos",
          tags: ["Avatars", "Animation", "Personnages"],
        },
        {
          id: 5,
          name: "VideoEnhancer",
          description: "Améliorez la qualité de vos vidéos avec l'IA",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.9,
          category: "Création de Vidéos",
          tags: ["Amélioration", "Résolution", "Couleur"],
        },
        {
          id: 6,
          name: "StoryboardAI",
          description: "Générez des storyboards professionnels pour vos projets vidéo",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.4,
          category: "Création de Vidéos",
          tags: ["Storyboard", "Planification", "Créatif"],
        },
      ],
    },
    {
      id: 2,
      name: "Édition Vidéo",
      slug: "edition-video",
      description:
        "L'édition vidéo assistée par intelligence artificielle transforme radicalement le processus de post-production. Ces logiciels innovants automatisent les tâches répétitives et chronophages, permettant aux créateurs de se concentrer sur l'aspect créatif de leur travail. Grâce à l'IA, il est possible de détecter automatiquement les meilleurs moments d'une séquence, de synchroniser l'audio avec la vidéo, et même de suggérer des coupes pertinentes. Les technologies de reconnaissance faciale et d'objets facilitent le tracking et les effets spéciaux, tandis que les algorithmes d'amélioration visuelle optimisent la qualité de l'image. Ces solutions s'adressent aussi bien aux débutants qu'aux professionnels, démocratisant l'accès à des techniques d'édition avancées.",
      tools: [
        {
          id: 7,
          name: "EditMaster",
          description: "Éditeur vidéo intelligent avec suggestions de montage",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.7,
          category: "Édition Vidéo",
          tags: ["Montage", "Automatique", "Professionnel"],
        },
        {
          id: 8,
          name: "ColorGrade AI",
          description: "Étalonnage colorimétrique automatique pour vos vidéos",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.8,
          category: "Édition Vidéo",
          tags: ["Couleur", "Étalonnage", "Cinéma"],
        },
        {
          id: 9,
          name: "AudioSync",
          description: "Synchronisation audio-vidéo parfaite grâce à l'IA",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.6,
          category: "Édition Vidéo",
          tags: ["Audio", "Synchronisation", "Musique"],
        },
        {
          id: 10,
          name: "EffectsGenius",
          description: "Ajoutez des effets spéciaux impressionnants en quelques clics",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.5,
          category: "Édition Vidéo",
          tags: ["Effets", "VFX", "Créatif"],
        },
        {
          id: 11,
          name: "TransitionPro",
          description: "Bibliothèque de transitions intelligentes pour vos montages",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.4,
          category: "Édition Vidéo",
          tags: ["Transitions", "Fluide", "Professionnel"],
        },
        {
          id: 12,
          name: "SubtitleAI",
          description: "Génération et synchronisation automatique de sous-titres",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.9,
          category: "Édition Vidéo",
          tags: ["Sous-titres", "Traduction", "Accessibilité"],
        },
      ],
    },
    {
      id: 3,
      name: "Génération de Contenu",
      slug: "generation-contenu",
      description:
        "La génération de contenu vidéo par IA représente une avancée majeure pour les créateurs et les entreprises. Ces technologies permettent de produire rapidement des vidéos originales à partir de simples instructions textuelles ou d'images de référence. Les modèles d'IA peuvent désormais créer des animations, des présentations, et même des séquences réalistes sans nécessiter de tournage. Particulièrement utiles pour le marketing digital, ces logiciels permettent de personnaliser le contenu à grande échelle, adaptant les messages selon les audiences ciblées. Ils excellent également dans la création de tutoriels, d'explications de produits, et de contenus éducatifs. Cette démocratisation de la production vidéo ouvre de nouvelles possibilités créatives tout en réduisant considérablement les coûts et délais de production.",
      tools: [
        {
          id: 13,
          name: "ContentForge",
          description: "Générez du contenu vidéo original basé sur vos idées",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.7,
          category: "Génération de Contenu",
          tags: ["Créatif", "Original", "Marketing"],
        },
        {
          id: 14,
          name: "StoryAI",
          description: "Créez des histoires visuelles captivantes automatiquement",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.6,
          category: "Génération de Contenu",
          tags: ["Narration", "Storytelling", "Engagement"],
        },
        {
          id: 15,
          name: "ProductVideo",
          description: "Générez des vidéos de présentation de produits en quelques minutes",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.8,
          category: "Génération de Contenu",
          tags: ["E-commerce", "Produits", "Marketing"],
        },
        {
          id: 16,
          name: "ExplainerPro",
          description: "Créez des vidéos explicatives claires et engageantes",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.9,
          category: "Génération de Contenu",
          tags: ["Éducation", "Explications", "Tutoriels"],
        },
        {
          id: 17,
          name: "AdCreator",
          description: "Générez des publicités vidéo percutantes pour vos campagnes",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.5,
          category: "Génération de Contenu",
          tags: ["Publicité", "Marketing", "Conversion"],
        },
        {
          id: 18,
          name: "SocialClips",
          description: "Créez du contenu optimisé pour les réseaux sociaux",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.7,
          category: "Génération de Contenu",
          tags: ["Réseaux Sociaux", "Viral", "Engagement"],
        },
      ],
    },
    {
      id: 4,
      name: "Analyse Vidéo",
      slug: "analyse-video",
      description:
        "L'analyse vidéo propulsée par l'intelligence artificielle offre des capacités sans précédent pour extraire des informations précieuses à partir de contenus vidéo. Ces technologies peuvent identifier automatiquement des objets, des personnes, des actions et même des émotions au sein des séquences. Pour les entreprises, ces logiciels permettent d'analyser l'engagement des spectateurs, d'identifier les moments clés qui retiennent l'attention, et d'optimiser le contenu en conséquence. Dans le domaine de la sécurité, ils facilitent la détection d'anomalies et la surveillance intelligente. Les créateurs de contenu bénéficient également de ces analyses pour comprendre ce qui résonne auprès de leur audience et affiner leur stratégie créative. Ces solutions transforment des heures de vidéo en données exploitables et en insights stratégiques.",
      tools: [
        {
          id: 19,
          name: "ViewAnalytics",
          description: "Analysez l'engagement et les performances de vos vidéos",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.8,
          category: "Analyse Vidéo",
          tags: ["Analytics", "Engagement", "Performance"],
        },
        {
          id: 20,
          name: "EmotionDetect",
          description: "Détectez les émotions des spectateurs face à votre contenu",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.6,
          category: "Analyse Vidéo",
          tags: ["Émotions", "Psychologie", "Marketing"],
        },
        {
          id: 21,
          name: "ContentInsight",
          description: "Obtenez des insights détaillés sur l'efficacité de vos vidéos",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.7,
          category: "Analyse Vidéo",
          tags: ["Insights", "Stratégie", "Optimisation"],
        },
        {
          id: 22,
          name: "TrendSpotter",
          description: "Identifiez les tendances vidéo émergentes dans votre secteur",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.5,
          category: "Analyse Vidéo",
          tags: ["Tendances", "Veille", "Stratégie"],
        },
        {
          id: 23,
          name: "AudienceAI",
          description: "Analysez votre audience et personnalisez votre contenu",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.9,
          category: "Analyse Vidéo",
          tags: ["Audience", "Personnalisation", "Ciblage"],
        },
        {
          id: 24,
          name: "CompetitorScan",
          description: "Analysez les vidéos de vos concurrents et identifiez leurs stratégies",
          image: "/placeholder.svg?height=200&width=400",
          rating: 4.7,
          category: "Analyse Vidéo",
          tags: ["Concurrence", "Benchmark", "Stratégie"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                Catégories
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block w-64">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher des logiciels..." className="pl-9 w-full" />
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <SearchIcon className="h-4 w-4" />
            </Button>
            <Link href="/soumettre">
              <Button>Soumettre un Logiciel</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Découvrez le Meilleur <span className="text-purple-600">Logiciel IA</span> pour la Vidéo
          </h1>
          <p className="text-xl text-muted-foreground">
            Explorez notre collection de logiciels d'intelligence artificielle pour créer, éditer et analyser vos
            vidéos.
          </p>
          <div className="relative mt-8">
            <AnimatedSearch />
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="container py-6 border-t border-border/40">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtres Sidebar */}
          <aside className="w-full md:w-64 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filtres</h2>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                Réinitialiser
              </Button>
            </div>

            {/* Filtre Catégories */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Catégories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`category-${category.id}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`category-${category.id}`} className="ml-2 text-sm">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Filtre Tags */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Tags Populaires</h3>
              <div className="flex flex-wrap gap-2">
                {["IA Générative", "Montage", "Gratuit", "Premium", "Animation"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-muted">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                Voir plus de tags
              </Button>
            </div>

            {/* Filtre Prix */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Prix</h3>
              <div className="space-y-2">
                {["Gratuit", "Freemium", "Payant", "Essai Gratuit"].map((pricing) => (
                  <div key={pricing} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`pricing-${pricing}`}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`pricing-${pricing}`} className="ml-2 text-sm">
                      {pricing}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Logiciels Mis en Avant */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Logiciels Populaires</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="hidden md:flex gap-2">
                  <FilterIcon className="h-4 w-4" />
                  Trier par
                </Button>
                <Button variant="outline" size="icon" className="md:hidden">
                  <FilterIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {categories
                .flatMap((category) => category.tools.filter((tool) => tool.rating >= 4.7).slice(0, 2))
                .slice(0, 6)
                .map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category) => (
        <section key={category.id} className="container py-12 border-t border-border/40 first:border-0">
          <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
          <p className="text-muted-foreground mb-8 max-w-4xl">{category.description.substring(0, 150)}...</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {category.tools.slice(0, 6).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link href={`/categories/${category.slug}`}>
              <Button variant="outline" className="gap-2">
                Voir Plus
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Video-IA.net</h3>
              <p className="text-sm text-muted-foreground">
                Votre ressource pour découvrir les meilleurs logiciels d'IA pour la vidéo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                    Catégories
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/soumettre" className="text-muted-foreground hover:text-foreground transition-colors">
                    Soumettre un Logiciel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Catégories Populaires</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/categories/creation-videos"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Création de Vidéos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/edition-video"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Édition Vidéo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/generation-contenu"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Génération de Contenu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories/analyse-video"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Analyse Vidéo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/a-propos" className="text-muted-foreground hover:text-foreground transition-colors">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/soumettre" className="text-muted-foreground hover:text-foreground transition-colors">
                    Soumettre un Logiciel
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Video-IA.net. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/confidentialite"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Politique de Confidentialité
              </Link>
              <Link
                href="/conditions"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ToolCard({ tool }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="aspect-video relative bg-muted">
        <img
          src={tool.image || "/placeholder.svg"}
          alt={`Aperçu de ${tool.name}`}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2">{tool.category}</Badge>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold line-clamp-1">{tool.name}</h3>
          <div className="flex items-center text-amber-500">
            <StarIcon className="h-4 w-4 fill-current" />
            <span className="text-xs ml-1">{tool.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{tool.description}</p>
        <div className="flex flex-wrap gap-1 mt-auto mb-3">
          {tool.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full gap-1">
          Voir les Détails
          <ArrowRightIcon className="h-3 w-3" />
        </Button>
      </div>
    </Card>
  )
}

function SearchIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function Input(props) {
  return (
    <input
      type="text"
      className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${props.className}`}
      {...props}
    />
  )
}

function FilterIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

