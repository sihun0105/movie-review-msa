export interface Movie {
  rank: number;
  movieNm: string;
  movieCd: string;
  audiAcc: number;
}

export interface MovieResponse {
  boxOfficeResult: {
    dailyBoxOfficeList: Movie[];
  };
}
