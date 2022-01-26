import type { NextApiHandler } from 'next'

import users from '../../../data/users'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const userId = req.query.userId as string
    const user = users.find((user) => user.id === parseInt(userId))

    if (!user) {
      return res.status(404).json({ error: 'User not found!' })
    }

    return res.status(200).json(user)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}

export default handler
