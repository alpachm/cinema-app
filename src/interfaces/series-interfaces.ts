export interface IGetOnTheAirSeriesResult {
    page:          number;
    results:       IOnTheAirSerieData[];
    total_pages:   number;
    total_results: number;
}

export interface IOnTheAirSerieData {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    first_air_date:    string;
    name:              string;
    vote_average:      number;
    vote_count:        number;
}

export interface IDetailSerieResponse {
    adult:                boolean;
    backdrop_path:        string;
    created_by:           any[];
    episode_run_time:     number[];
    first_air_date:       Date;
    genres:               Genre[];
    homepage:             string;
    id:                   number;
    in_production:        boolean;
    languages:            string[];
    last_air_date:        Date;
    last_episode_to_air:  LastEpisodeToAir;
    name:                 string;
    next_episode_to_air:  null;
    networks:             Network[];
    number_of_episodes:   number;
    number_of_seasons:    number;
    origin_country:       string[];
    original_language:    string;
    original_name:        string;
    overview:             string;
    popularity:           number;
    poster_path:          string;
    production_companies: Network[];
    production_countries: ProductionCountry[];
    seasons:              Season[];
    spoken_languages:     string[];
    status:               string;
    tagline:              string;
    type:                 string;
    vote_average:         number;
    vote_count:           number;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface LastEpisodeToAir {
    id:              number;
    overview:        string;
    name:            string;
    vote_average:    number;
    vote_count:      number;
    air_date:        Date;
    episode_number:  number;
    episode_type:    string;
    production_code: string;
    runtime:         null;
    season_number:   number;
    show_id:         number;
    still_path:      string;
}

export interface Network {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface Season {
    air_date:      Date;
    episode_count: number;
    id:            number;
    name:          string;
    overview:      string;
    poster_path:   string;
    season_number: number;
    vote_average:  number;
}
