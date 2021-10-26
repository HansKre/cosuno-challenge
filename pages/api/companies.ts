import { Company } from 'types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { companies } from './fixture';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Company[]>
) {
  if (req.method === 'GET') {
    if (companies && companies.length > 0) {
      res.status(200).json(companies);
    } else {
      // Internal Server Error
      res.status(500).end();
    }
  } else {
    // Method Not Allowed
    res.status(405).end();
  }
}
