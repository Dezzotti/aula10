// Servidor Express - Projeto #20: Coworking & Salas de Reunião
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3020;

app.get('/api/coworking/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 20,
        sistema: "Coworking & Salas de Reunião",
        categoria: "Espaços Corporativos",
        tabela_conectada: process.env.TABELA_ALVO || "estacoes_trabalho",
        parametro_ambiente: process.env.ANDAR_CORPORATIVO || "HUB_INOVACAO_20",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #20] Coworking & Salas de Reunião rodando em http://localhost:${PORT}/api/coworking/status`);
});