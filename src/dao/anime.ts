export interface Anime {
  data: Datum[];
  meta: AnimeMeta;
  links: AnimeLinks;
}

export interface Datum {
  id: string;
  type: string;
  links: DatumLinks;
  attributes: Attributes;
  relationships: { [key: string]: Relationship };
}

export interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  synopsis: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: { [key: string]: string };
  description: string;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba: string;
  posterImage: PosterImage;
  coverImage: CoverImage;
  episodeCount: number;
  episodeLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

export interface CoverImage {
  tiny: string;
  small: string;
  large: string;
  original: string;
  meta: CoverImageMeta;
}

export interface CoverImageMeta {
  dimensions: Dimensions;
}

export interface Dimensions {
  tiny: Large;
  small: Large;
  large: Large;
  medium?: Large;
}

export interface Large {
  width: null;
  height: null;
}

export interface PosterImage {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
  meta: CoverImageMeta;
}

export interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

export interface DatumLinks {
  self: string;
}

export interface Relationship {
  links: RelationshipLinks;
}

export interface RelationshipLinks {
  self: string;
  related: string;
}

export interface AnimeLinks {
  first: string;
  prev: string;
  next: string;
  last: string;
}

export interface AnimeMeta {
  count: number;
}
