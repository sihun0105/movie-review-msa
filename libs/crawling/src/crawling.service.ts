import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

interface CGVTheater {
  name: string;
  region: string;
  address: string;
  phone?: string;
  website?: string;
}

@Injectable()
export class CrawlingService {
  browser: Promise<puppeteer.Browser>;
  constructor() {
    this.browser = puppeteer.launch();
  }

  async getHtml(url: string): Promise<string> {
    const browser = await this.browser;
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    await page.close();
    return html;
  }

  async getCGVTheaters(): Promise<CGVTheater[]> {
    return this.getFallbackTheaters();
    try {
      // CGV 영화관 찾기 페이지에서 데이터 크롤링
      const html = await this.getHtml('http://www.cgv.co.kr/theaters/');
      const $ = cheerio.load(html);
      const theaters: CGVTheater[] = [];

      // CGV 사이트 구조에 맞게 셀렉터 조정 필요
      // 예시 구조 - 실제 사이트 구조에 맞게 수정해야 함
      $('.theater-list .theater-item').each((index, element) => {
        const name = $(element).find('.theater-name').text().trim();
        const region = $(element).find('.theater-region').text().trim();
        const address = $(element).find('.theater-address').text().trim();
        const phone = $(element).find('.theater-phone').text().trim();

        if (name && region) {
          theaters.push({
            name,
            region,
            address,
            phone: phone || undefined,
            website: 'http://www.cgv.co.kr',
          });
        }
      });

      return theaters;
    } catch (error) {
      console.error('CGV 영화관 크롤링 오류:', error);
      return this.getFallbackTheaters(); // 크롤링 실패시 기본 데이터 반환
    }
  }

  async getCGVTheatersByRegion(region: string): Promise<CGVTheater[]> {
    const allTheaters = await this.getCGVTheaters();
    return allTheaters.filter(
      (theater) =>
        theater.region.includes(region) || theater.name.includes(region),
    );
  }

  getFallbackTheaters(): CGVTheater[] {
    // 크롤링 실패시 사용할 기본 CGV 영화관 데이터
    return [
      // 서울
      {
        name: 'CGV 강남',
        region: '서울',
        address: '서울특별시 강남구 강남대로 438',
        phone: '1544-1122',
      },
      {
        name: 'CGV 건대입구',
        region: '서울',
        address: '서울특별시 광진구 아차산로 262',
        phone: '1544-1122',
      },
      {
        name: 'CGV 김포공항',
        region: '서울',
        address: '서울특별시 강서구 하늘길 77',
        phone: '1544-1122',
      },
      {
        name: 'CGV 노원',
        region: '서울',
        address: '서울특별시 노원구 상계로 223',
        phone: '1544-1122',
      },
      {
        name: 'CGV 대학로',
        region: '서울',
        address: '서울특별시 종로구 대명길 26',
        phone: '1544-1122',
      },
      {
        name: 'CGV 동대문',
        region: '서울',
        address: '서울특별시 중구 장충단로 247',
        phone: '1544-1122',
      },
      {
        name: 'CGV 명동',
        region: '서울',
        address: '서울특별시 중구 명동8나길 14',
        phone: '1544-1122',
      },
      {
        name: 'CGV 목동',
        region: '서울',
        address: '서울특별시 양천구 목동동로 293',
        phone: '1544-1122',
      },
      {
        name: 'CGV 상봉',
        region: '서울',
        address: '서울특별시 중랑구 상봉로 131',
        phone: '1544-1122',
      },
      {
        name: 'CGV 성신여대입구',
        region: '서울',
        address: '서울특별시 성북구 동소문로 106',
        phone: '1544-1122',
      },
      {
        name: 'CGV 송파',
        region: '서울',
        address: '서울특별시 송파구 충민로 66',
        phone: '1544-1122',
      },
      {
        name: 'CGV 신촌아트레온',
        region: '서울',
        address: '서울특별시 서대문구 신촌로 129',
        phone: '1544-1122',
      },
      {
        name: 'CGV 압구정',
        region: '서울',
        address: '서울특별시 강남구 압구정로 407',
        phone: '1544-1122',
      },
      {
        name: 'CGV 여의도',
        region: '서울',
        address: '서울특별시 영등포구 국제금융로 10',
        phone: '1544-1122',
      },
      {
        name: 'CGV 영등포',
        region: '서울',
        address: '서울특별시 영등포구 영중로 15',
        phone: '1544-1122',
      },
      {
        name: 'CGV 용산아이파크몰',
        region: '서울',
        address: '서울특별시 용산구 한강대로23길 55',
        phone: '1544-1122',
      },
      {
        name: 'CGV 청담씨네시티',
        region: '서울',
        address: '서울특별시 강남구 도산대로 323',
        phone: '1544-1122',
      },
      {
        name: 'CGV 피카디리1958',
        region: '서울',
        address: '서울특별시 종로구 돈화문로 13',
        phone: '1544-1122',
      },
      {
        name: 'CGV 홍대',
        region: '서울',
        address: '서울특별시 마포구 양화로 153',
        phone: '1544-1122',
      },

      // 경기도
      {
        name: 'CGV 고양스타필드',
        region: '경기도',
        address: '경기도 고양시 덕양구 고양대로 1955',
        phone: '1544-1122',
      },
      {
        name: 'CGV 광교상현',
        region: '경기도',
        address: '경기도 용인시 수지구 광교중앙로 124',
        phone: '1544-1122',
      },
      {
        name: 'CGV 구리',
        region: '경기도',
        address: '경기도 구리시 경춘로 227',
        phone: '1544-1122',
      },
      {
        name: 'CGV 김포',
        region: '경기도',
        address: '경기도 김포시 김포한강2로 129',
        phone: '1544-1122',
      },
      {
        name: 'CGV 동수원',
        region: '경기도',
        address: '경기도 수원시 팔달구 정조로 780',
        phone: '1544-1122',
      },
      {
        name: 'CGV 분당',
        region: '경기도',
        address: '경기도 성남시 분당구 성남대로 692',
        phone: '1544-1122',
      },
      {
        name: 'CGV 부천',
        region: '경기도',
        address: '경기도 부천시 길주로 180',
        phone: '1544-1122',
      },
      {
        name: 'CGV 서현',
        region: '경기도',
        address: '경기도 성남시 분당구 분당로 55',
        phone: '1544-1122',
      },
      {
        name: 'CGV 성남',
        region: '경기도',
        address: '경기도 성남시 중원구 광명로 298',
        phone: '1544-1122',
      },
      {
        name: 'CGV 수원',
        region: '경기도',
        address: '경기도 수원시 영통구 봉영로 1570',
        phone: '1544-1122',
      },
      {
        name: 'CGV 시흥',
        region: '경기도',
        address: '경기도 시흥시 중앙로 275',
        phone: '1544-1122',
      },
      {
        name: 'CGV 안산',
        region: '경기도',
        address: '경기도 안산시 단원구 고잔로 55',
        phone: '1544-1122',
      },
      {
        name: 'CGV 안양',
        region: '경기도',
        address: '경기도 안양시 만안구 안양로 303',
        phone: '1544-1122',
      },
      {
        name: 'CGV 오산',
        region: '경기도',
        address: '경기도 오산시 성호대로 147-39',
        phone: '1544-1122',
      },
      {
        name: 'CGV 의정부',
        region: '경기도',
        address: '경기도 의정부시 평화로 525',
        phone: '1544-1122',
      },
      {
        name: 'CGV 일산',
        region: '경기도',
        address: '경기도 고양시 일산서구 중앙로 1261',
        phone: '1544-1122',
      },
      {
        name: 'CGV 판교',
        region: '경기도',
        address: '경기도 성남시 분당구 판교역로 146',
        phone: '1544-1122',
      },
      {
        name: 'CGV 평택',
        region: '경기도',
        address: '경기도 평택시 중앙로 47',
        phone: '1544-1122',
      },
      {
        name: 'CGV 하남스타필드',
        region: '경기도',
        address: '경기도 하남시 미사대로 750',
        phone: '1544-1122',
      },

      // 강원도
      {
        name: 'CGV 강릉',
        region: '강원도',
        address: '강원도 강릉시 강릉대로 33',
        phone: '1544-1122',
      },
      {
        name: 'CGV 동해',
        region: '강원도',
        address: '강원도 동해시 동해대로 4041',
        phone: '1544-1122',
      },
      {
        name: 'CGV 속초',
        region: '강원도',
        address: '강원도 속초시 중앙로 147',
        phone: '1544-1122',
      },
      {
        name: 'CGV 원주',
        region: '강원도',
        address: '강원도 원주시 서원대로 158',
        phone: '1544-1122',
      },
      {
        name: 'CGV 춘천',
        region: '강원도',
        address: '강원도 춘천시 중앙로 67',
        phone: '1544-1122',
      },
    ];
  }
}
