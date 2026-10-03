export type MatchGenderCondition = 'any' | 'male' | 'female';

export function normalizeGenderCondition(
  condition?: string,
): MatchGenderCondition {
  return condition === 'male' || condition === 'female' ? condition : 'any';
}

export function isGenderEligible(
  condition: string | undefined,
  applicantGender: string | null | undefined,
) {
  const normalized = normalizeGenderCondition(condition);
  return normalized === 'any' || normalized === applicantGender;
}

export function isValidGenderCondition(condition?: string) {
  return condition === 'any' || condition === 'male' || condition === 'female';
}
