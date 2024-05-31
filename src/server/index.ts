import express from 'express'
import { api } from './api';
import swaggerUi from 'swagger-ui-express';
import authRoutes from './auth';
import path from 'path';
import { fileURLToPath } from 'url';
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();
const openApiDocument = api.openApiDoc({ title: "RecoverX" });
app.use(api);
app.use(authRoutes);
app.get("/api/openApi.json", (req, res) => res.json(openApiDocument));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));


app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/*', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../../dist', 'index.html')
    );
});

app.listen(+PORT, HOST, () => console.log('Server started!'));