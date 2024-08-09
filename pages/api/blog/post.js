// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const { slug } = req.query;

    if (req.method === 'GET') {  
        const data = [
            { 
                slug: 'article-numero-1', 
                title: 'Article N°1 ' ,
                content: "Contenu de l'article 1"
            },
            { 
                slug: 'article-numero-2', 
                title: 'Article N°2 ' ,
                content: "Contenu de l'article 2"
            },
            { 
                slug: 'article-numero-3', 
                title: 'Article N°3 ' ,
                content: "Contenu de l'article 3"
            },
        ]
        res.status(200).json(data.filter((item) => item.slug == slug));
    } else {
      res.status(500).json({ name: "Request Not Allowed !" });
    }
  }
  