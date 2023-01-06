const { Configuration, OpenAIApi } = require("openai");
const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const configuration = new Configuration({
    organization: "org-2ChiH8bI34YQBRmxt8l6wKL1",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port=3080;

app.post('/', async(req,res)=>{
    const {menssage } = req.body;  
    console.log(menssage);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${menssage}`,
        max_tokens: 300,
        temperature: 0.5,
      });
      res.json({
        menssage: response.data.choices[0].text
      })
      console.log(response.data.choices)

})

app.listen(port,()=>{
    console.log("porta 3080");
})