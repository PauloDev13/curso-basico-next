import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const courses = [
    { id: 1, name: 'NextJs com Typescript' },
    { id: 2, name: 'NextJs' },
    { id: 3, name: 'ReactJs com Typescript' },
    { id: 4, name: 'NestJs com Typescript' },
    { id: 5, name: 'Vue com Typescript' },
  ];
  return res.json(courses);
};
