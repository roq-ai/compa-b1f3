const mapping: Record<string, string> = {
  clients: 'client',
  'cost-estimates': 'cost_estimate',
  organizations: 'organization',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
