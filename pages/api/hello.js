// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id, nom } = req.query;

    res.status(200).json({ id: id, name: "John Doe", anarana: nom });
  } else {
    res.status(500).json({ name: "Request Not Allowed !" });
  }
}
