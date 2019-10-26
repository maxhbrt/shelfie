module.exports={
    getProperties: (req, res)=> {
        const dbInstance = req.app.get("db");
        dbInstance.getProperties().then(response => res.status(200).send(response))
        .catch(error => {
          console.log(error);
          res.status(500).send(error);
        });
    
      }
}