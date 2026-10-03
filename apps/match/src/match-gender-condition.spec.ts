import {
  isGenderEligible,
  isValidGenderCondition,
  normalizeGenderCondition,
} from './match-gender-condition';

describe('match gender condition', () => {
  it('기존 데이터의 빈 조건은 성별 무관으로 해석한다', () => {
    expect(normalizeGenderCondition('')).toBe('any');
    expect(normalizeGenderCondition(undefined)).toBe('any');
  });

  it('지정된 성별 조건과 신청자 성별을 비교한다', () => {
    expect(isGenderEligible('any', 'female')).toBe(true);
    expect(isGenderEligible('male', 'male')).toBe(true);
    expect(isGenderEligible('male', 'female')).toBe(false);
  });

  it('명시적으로 선택한 조건만 저장 가능한 값으로 인정한다', () => {
    expect(isValidGenderCondition('any')).toBe(true);
    expect(isValidGenderCondition('')).toBe(false);
    expect(isValidGenderCondition(undefined)).toBe(false);
  });
});
