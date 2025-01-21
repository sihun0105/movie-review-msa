export interface Movie {
  rank: number;
  movieNm: string;
  movieCd: string;
  audiAcc: number;
  rankInten: string;
  rankOldAndNew: string;
  openDt: string;
}

export interface MovieResponse {
  boxOfficeResult: {
    dailyBoxOfficeList: Movie[];
  };
}
