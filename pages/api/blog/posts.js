// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method === 'GET') {  
        res.status(200).json([
            { 
                slug: 'article-numero-1', 
                title: 'Article N°1 ' 
            },
            { 
                slug: 'article-numero-2', 
                title: 'Article N°2 ' 
            },
            { 
                slug: 'article-numero-3', 
                title: 'Article N°3 ' 
            },
        ]);
    } else {
      res.status(500).json({ name: "Request Not Allowed !" });
    }
  }
  