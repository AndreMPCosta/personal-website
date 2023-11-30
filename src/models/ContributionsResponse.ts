export interface ContributionsResponse {
  total: {
    lastYear: number;
  };
  contributions: [
    {
      date: string;
      count: number;
      level: number;
    }
  ];
}
