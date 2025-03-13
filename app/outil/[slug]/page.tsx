"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  StarIcon,
  CheckIcon,
  TagIcon,
  UsersIcon,
  CalendarIcon,
  ShareIcon,
  BookmarkIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import { Logo } from "@/app/components/logo"

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  // Ceci serait normalement récupéré depuis votre base de données
  const toolName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // État pour les avis
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Jean Dupont",
      rating: 5,
      comment: "Un logiciel incroyable qui m'a fait gagner énormément de temps. Je recommande vivement !",
      date: "2025-02-15",
    },
    {
      id: 2,
      name: "Marie Martin",
      rating: 4,
      comment: "Très bon outil, facile à utiliser. Quelques fonctionnalités pourraient être améliorées.",
      date: "2025-02-10",
    },
    {
      id: 3,
      name: "Pierre Durand",
      rating: 5,
      comment: "Exactement ce que je cherchais pour mes projets vidéo. L'IA est vraiment impressionnante.",
      date: "2025-02-05",
    },
  ])

  // État pour le nouvel avis
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  })

  // Données simulées pour l'outil
  const tool = {
    id: 1,
    name: "VideoGenius AI",
    slug: "videogenius-ai",
    description: "Créez des vidéos professionnelles à partir de texte en quelques minutes",
    longDescription: `VideoGenius AI est un outil de création vidéo révolutionnaire alimenté par l'intelligence artificielle. Il permet aux utilisateurs de transformer facilement du texte en vidéos professionnelles de haute qualité en quelques minutes seulement.

Grâce à ses capacités avancées de traitement du langage naturel, VideoGenius AI peut comprendre vos instructions et générer des séquences vidéo pertinentes, des animations et des transitions fluides. Que vous soyez un créateur de contenu, un marketeur ou un entrepreneur, cet outil vous permet de produire rapidement des vidéos engageantes sans compétences techniques particulières.

L'interface intuitive de VideoGenius AI rend la création vidéo accessible à tous, tandis que son moteur d'IA puissant garantit des résultats de qualité professionnelle à chaque fois. Vous pouvez personnaliser le style, le ton et le format de vos vidéos pour répondre à vos besoins spécifiques.`,
    image: "/placeholder.svg?height=400&width=800",
    logo: "/placeholder.svg?height=64&width=64",
    rating: 4.8,
    reviewCount: 124,
    category: {
      id: 1,
      name: "Création de Vidéos",
      slug: "creation-videos",
      parentCategory: {
        id: 1,
        name: "Vidéo",
        slug: "video",
      },
    },
    tags: [
      "IA Générative",
      "Vidéo",
      "Création de Contenu",
      "Montage",
      "Automatisation",
      "Marketing",
      "Gratuit",
      "Premium",
    ],
    pricing: "Freemium",
    priceDetails: "Version gratuite disponible, forfait Pro à partir de 19€/mois",
    website: "https://videogenius-ai.example.com",
    socialMedia: {
      twitter: "https://twitter.com/videogeniusai",
      linkedin: "https://linkedin.com/company/videogenius-ai",
      instagram: "https://instagram.com/videogeniusai",
    },
    lastUpdated: "2025-03-10",
    targetAudience: [
      {
        name: "Créateurs de Contenu",
        description: "Youtubers et influenceurs cherchant à produire du contenu rapidement",
      },
      {
        name: "Marketeurs",
        description: "Professionnels du marketing digital ayant besoin de vidéos promotionnelles",
      },
      {
        name: "Entrepreneurs",
        description: "Startups et petites entreprises avec des ressources limitées",
      },
      {
        name: "Éducateurs",
        description: "Enseignants et formateurs souhaitant créer du contenu pédagogique",
      },
    ],
    features: [
      {
        title: "Génération de Vidéo à partir de Texte",
        description: "Transformez vos scripts et textes en vidéos professionnelles en quelques clics.",
      },
      {
        title: "Bibliothèque de Médias Intégrée",
        description: "Accédez à des millions d'images, vidéos et sons libres de droits pour vos créations.",
      },
      {
        title: "Voix Off IA",
        description: "Générez des narrations naturelles dans plus de 30 langues différentes.",
      },
      {
        title: "Montage Automatique",
        description: "L'IA optimise automatiquement le rythme et les transitions de vos vidéos.",
      },
      {
        title: "Personnalisation Avancée",
        description: "Adaptez le style, les couleurs et l'ambiance selon votre marque et vos préférences.",
      },
      {
        title: "Export Multi-Format",
        description: "Exportez vos vidéos dans différents formats optimisés pour chaque plateforme.",
      },
    ],
    useCases: [
      {
        title: "Marketing Digital",
        description: "Créez rapidement des publicités vidéo et du contenu promotionnel pour vos campagnes marketing.",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Réseaux Sociaux",
        description: "Générez du contenu vidéo engageant et optimisé pour différentes plateformes sociales.",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Formation et Éducation",
        description: "Transformez vos supports pédagogiques en vidéos explicatives claires et attrayantes.",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Présentation de Produits",
        description: "Créez des démonstrations de produits professionnelles pour votre site e-commerce.",
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
    relatedTools: [
      {
        id: 2,
        name: "MontageAI",
        description:
          "Un outil d'édition vidéo intelligent qui automatise le processus de montage avec des transitions fluides.",
        image: "/placeholder.svg?height=200&width=400",
        slug: "montage-ai",
        rating: 4.6,
        category: "Création de Vidéos",
        tags: ["Montage", "IA", "Premium"],
      },
      {
        id: 3,
        name: "ScriptToVideo",
        description: "Transformez vos scripts en vidéos animées professionnelles avec une narration naturelle.",
        image: "/placeholder.svg?height=200&width=400",
        slug: "script-to-video",
        rating: 4.7,
        category: "Création de Vidéos",
        tags: ["Script", "Animation", "Voix Off"],
      },
      {
        id: 4,
        name: "AnimateMe",
        description: "Créez facilement des personnages animés et des avatars pour vos vidéos explicatives.",
        image: "/placeholder.svg?height=200&width=400",
        slug: "animate-me",
        rating: 4.5,
        category: "Création de Vidéos",
        tags: ["Animation", "Personnages", "Avatars"],
      },
    ],
    latestTweet: {
      text: "Découvrez notre nouvelle fonctionnalité de génération de voix off en 30 langues ! Créez des vidéos multilingues en quelques clics. #IA #Video #Innovation",
      date: "2025-03-08",
      url: "https://twitter.com/videogeniusai/status/1234567890",
    },
  }

  // Fonction pour soumettre un avis
  const submitReview = (e) => {
    e.preventDefault()

    // Validation simple
    if (newReview.name.trim() === "" || newReview.rating === 0 || newReview.comment.trim() === "") {
      alert("Veuillez remplir tous les champs")
      return
    }

    // Vérification des caractères spéciaux et liens dans le commentaire
    const regex = /[<>{}[\]\\/^~`|]/g
    const hasSpecialChars = regex.test(newReview.comment)
    const hasLinks = /(http|https|www\.)/i.test(newReview.comment)

    if (hasSpecialChars || hasLinks) {
      alert("Les caractères spéciaux et les liens ne sont pas autorisés dans les commentaires")
      return
    }

    // Ajout du nouvel avis
    const newReviewObject = {
      id: reviews.length + 1,
      ...newReview,
      date: new Date().toISOString().split("T")[0],
    }

    setReviews([newReviewObject, ...reviews])

    // Réinitialisation du formulaire
    setNewReview({
      name: "",
      rating: 0,
      comment: "",
    })
  }

  // Fonction pour afficher les étoiles
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <StarIcon key={i} className={`h-5 w-5 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} />
      ))
  }

  // Fonction pour gérer le clic sur une étoile
  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating })
  }

  // Vérifier si l'outil a des réseaux sociaux
  const hasSocialMedia =
    tool.socialMedia && (tool.socialMedia.twitter || tool.socialMedia.linkedin || tool.socialMedia.instagram)

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

      {/* Fil d'Ariane */}
      <div className="container py-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/categories/${tool.category.parentCategory.slug}`}
            className="hover:text-foreground transition-colors"
          >
            {tool.category.parentCategory.name}
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/categories/${tool.category.slug}`} className="hover:text-foreground transition-colors">
            {tool.category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{tool.name}</span>
        </div>
      </div>

      {/* En-tête de l'Outil */}
      <section className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <div className="flex items-start gap-4">
              <div className="size-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={tool.logo || "/placeholder.svg"}
                  alt={`Logo de ${tool.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl font-bold">{tool.name}</h1>
                  <Badge>{tool.category.name}</Badge>
                  <div className="flex items-center text-amber-500">
                    <StarIcon className="h-5 w-5 fill-current" />
                    <span className="font-medium ml-1">{tool.rating}</span>
                    <span className="text-muted-foreground text-sm ml-1">({tool.reviewCount} avis)</span>
                  </div>
                </div>
                <p className="mt-2 text-lg text-muted-foreground">{tool.description}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            <Button className="w-full gap-2" size="lg">
              <ExternalLinkIcon className="h-4 w-4" />
              Visiter le Site Web
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 gap-1">
                <BookmarkIcon className="h-4 w-4" />
                Sauvegarder
              </Button>
              <Button variant="outline" className="flex-1 gap-1">
                <ShareIcon className="h-4 w-4" />
                Partager
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="container pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Colonne Gauche - Détails de l'Outil */}
          <div className="w-full md:w-2/3 space-y-10">
            {/* Capture d'écran de l'Outil */}
            <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
              <img
                src={tool.image || "/placeholder.svg"}
                alt={`Capture d'écran de ${tool.name}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Section Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Description</h2>
              <div className="prose prose-sm max-w-none">
                {tool.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Section Réseaux Sociaux */}
            {hasSocialMedia && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Suivez {tool.name}</h2>
                <div className="flex gap-4">
                  {tool.socialMedia.linkedin && (
                    <a
                      href={tool.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center size-12 rounded-full bg-[#0077B5] text-white hover:opacity-90 transition-opacity"
                    >
                      <LinkedinIcon className="h-6 w-6" />
                    </a>
                  )}
                  {tool.socialMedia.twitter && (
                    <a
                      href={tool.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center size-12 rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity"
                    >
                      <TwitterIcon className="h-6 w-6" />
                    </a>
                  )}
                  {tool.socialMedia.instagram && (
                    <a
                      href={tool.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center size-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:opacity-90 transition-opacity"
                    >
                      <InstagramIcon className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Section Dernier Tweet */}
            {tool.socialMedia?.twitter && tool.latestTweet && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Dernière actualité</h2>
                <Card className="p-5 border-blue-100">
                  <div className="flex items-start gap-3">
                    <TwitterIcon className="h-5 w-5 text-[#1DA1F2] shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{tool.name}</span>
                        <span className="text-sm text-muted-foreground">@videogeniusai</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(tool.latestTweet.date).toLocaleDateString("fr-FR")}
                        </span>
                      </div>
                      <p className="mt-1">{tool.latestTweet.text}</p>
                      <a
                        href={tool.latestTweet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline mt-2 inline-block"
                      >
                        Voir sur Twitter
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Section Fonctionnalités Clés */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Fonctionnalités Clés</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {tool.features.map((feature, index) => (
                  <Card key={index} className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                        <CheckIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section Cas d'Utilisation */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Cas d'Utilisation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tool.useCases.map((useCase, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video bg-muted">
                      <img
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section Avis */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Avis des utilisateurs</h2>

              {/* Formulaire d'avis */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Donnez votre avis</h3>
                <form onSubmit={submitReview} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Votre nom
                    </label>
                    <Input
                      id="name"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Note</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => handleStarClick(rating)}
                          className="focus:outline-none"
                        >
                          <StarIcon
                            className={`h-6 w-6 ${
                              rating <= newReview.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium mb-1">
                      Commentaire (500 caractères max)
                    </label>
                    <Textarea
                      id="comment"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value.slice(0, 500) })}
                      placeholder="Partagez votre expérience avec ce logiciel..."
                      className="min-h-[100px]"
                      maxLength={500}
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">{newReview.comment.length}/500 caractères</p>
                    <p className="text-xs text-muted-foreground">
                      Note: Les caractères spéciaux et les liens ne sont pas autorisés.
                    </p>
                  </div>

                  <Button type="submit">Soumettre l'avis</Button>
                </form>
              </Card>

              {/* Liste des avis */}
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="p-5">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">{review.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(review.date).toLocaleDateString("fr-FR")}
                          </div>
                        </div>
                      </div>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <p className="mt-3 text-sm">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section Outils Similaires */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Logiciels Similaires</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tool.relatedTools.map((relatedTool) => (
                  <Card
                    key={relatedTool.id}
                    className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video relative bg-muted">
                      <img
                        src={relatedTool.image || "/placeholder.svg"}
                        alt={`Aperçu de ${relatedTool.name}`}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 right-2">{relatedTool.category}</Badge>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold line-clamp-1">{relatedTool.name}</h3>
                        <div className="flex items-center text-amber-500">
                          <StarIcon className="h-4 w-4 fill-current" />
                          <span className="text-xs ml-1">{relatedTool.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{relatedTool.description}</p>
                      <div className="flex flex-wrap gap-1 mt-auto mb-3">
                        {relatedTool.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link href={`/outil/${relatedTool.slug}`}>
                        <Button variant="outline" size="sm" className="w-full gap-1">
                          Voir les Détails
                          <ArrowRightIcon className="h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne Droite - Barre Latérale */}
          <div className="w-full md:w-1/3 space-y-6 md:sticky md:top-20 md:self-start">
            {/* Informations Rapides */}
            <Card className="p-5">
              <h3 className="font-semibold mb-4">Informations Rapides</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <TagIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Tarification</h4>
                    <p className="text-sm text-muted-foreground">{tool.priceDetails}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <UsersIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Cible</h4>
                    <p className="text-sm text-muted-foreground">
                      Créateurs de Contenu, Marketeurs, Entrepreneurs, Éducateurs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CalendarIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Dernière Mise à Jour</h4>
                    <p className="text-sm text-muted-foreground">{tool.lastUpdated}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-5">
              <h3 className="font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-muted">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Pour Qui */}
            <Card className="p-5">
              <h3 className="font-semibold mb-3">Cible</h3>
              <div className="space-y-3">
                {tool.targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <UsersIcon className="h-3 w-3" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{audience.name}</div>
                      <div className="text-xs text-muted-foreground">{audience.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

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

