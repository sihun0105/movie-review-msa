export function getCurrentParticipants(acceptedApplicants: number) {
  return acceptedApplicants + 1;
}

export function hasAvailableSeat(
  acceptedApplicants: number,
  maxParticipants: number,
) {
  return getCurrentParticipants(acceptedApplicants) < maxParticipants;
}
