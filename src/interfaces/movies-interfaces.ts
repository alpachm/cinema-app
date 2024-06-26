// Generated by https://quicktype.io

export interface INowPlayingMoviesResponse {
  dates: Dates;
  page: number;
  results: NowPlayingMovie[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface NowPlayingMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Generated by https://quicktype.io

export interface IPopularMoviesResponse {
  page: number;
  results: popularMovie[];
  total_pages: number;
  total_results: number;
}

export interface popularMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ITopRatedMoviesResponse {
  page: number;
  results: ITopRatedMovie[];
  total_pages: number;
  total_results: number;
}

export interface ITopRatedMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Generated by https://quicktype.io

export interface IUpcomingMoviesResponse {
  dates: Dates;
  page: number;
  results: IUpcomingMovie[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface IUpcomingMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
