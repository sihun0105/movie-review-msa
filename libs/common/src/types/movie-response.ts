export interface KmdbMovie {
  DOCID: string;
  movieId: string;
  movieSeq: string;
  title: string;
  titleEng: string;
  titleOrg: string;
  titleEtc: string;
  prodYear: string;
  directors: {
    director: {
      directorNm: string;
      directorEnNm: string;
      directorId: string;
    }[];
  };
  actors: {
    actor: {
      actorNm: string;
      actorEnNm: string;
      actorId: string;
    }[];
  };
  nation: string;
  company: string;
  plots: {
    plot: {
      plotLang: string;
      plotText: string;
    }[];
  };
  runtime: string;
  rating: string;
  genre: string;
  kmdbUrl: string;
  type: string;
  use: string;
  episodes: string;
  ratedYn: string;
  repRatDate: string;
  repRlsDate: string;
  ratings: {
    rating: {
      ratingMain: string;
      ratingDate: string;
      ratingNo: string;
      ratingGrade: string;
      releaseDate: string;
      runtime: string;
    }[];
  };
  keywords: string;
  posters: string;
  stlls: string;
  staffs: {
    staff: {
      staffNm: string;
      staffEnNm: string;
      staffRoleGroup: string;
      staffRole: string;
      staffEtc: string;
      staffId: string;
    }[];
  };
  vods: {
    vod: {
      vodClass: string;
      vodUrl: string;
    }[];
  };
  openThtr: string;
  stat: {
    screenArea: string;
    screenCnt: string;
    salesAcc: string;
    audiAcc: string;
    statSouce: string;
    statDate: string;
  }[];
  screenArea: string;
  screenCnt: string;
  salesAcc: string;
  audiAcc: string;
  statSouce: string;
  statDate: string;
  themeSong: string;
  soundtrack: string;
  fLocation: string;
  Awards1: string;
  Awards2: string;
  regDate: string;
  modDate: string;
  Codes: {
    Code: {
      CodeNm: string;
      CodeNo: string;
    }[];
  };
  CommCodes: {
    CommCode: {
      CodeNm: string;
      CodeNo: string;
    }[];
  };
  ALIAS: string;
}

export interface KmdbResponse {
  Query: string;
  KMAQuery: string;
  TotalCount: number;
  Data: {
    CollName: string;
    TotalCount: number;
    Count: number;
    Result: KmdbMovie[];
  }[];
}

export interface KobisMovie {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
}

export interface KobisResponse {
  boxOfficeResult: {
    boxofficeType: string;
    showRange: string;
    dailyBoxOfficeList: KobisMovie[];
  };
}
