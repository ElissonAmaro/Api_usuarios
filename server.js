import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
const app = express();

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Criar
app.post("/usuarios", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json({ message: "Usuário criado", user });
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar usuário", detalhes: error });
  }
});

// READ all
app.get("/usuarios", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({ message: "Lista de usuários", users });
});

// Ler po ID
app.get("/usuarios/:id", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json({ message: "Usuário encontrado", user });
  } catch (err) {
    res.status(400).json({ error: "ID inválido" });
  }
});

// Atualizar
app.put("/usuarios/:id", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: { name, email },
    });
    res.json({ message: "Usuário atualizado", user });
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar" });
  }
});

// Deletar
app.delete("/usuarios/:id", async (req, res) => {
  try {
    await prisma.user.delete({ where: { id: req.params.id } });
    res.json({ message: "Usuário deletado" });
  } catch (err) {
    res.status(400).json({ error: "Erro ao deletar" });
  }
});

// PATCH (atualização parcial)
app.patch("/usuarios/:id", async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(email && { email }),
      },
    });
    res.json({ message: "Usuário atualizado parcialmente", user });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao atualizar parcialmente", detalhes: error });
  }
});

app.listen(3000, () => {
  console.log(" Servidor rodando em http://localhost:3000");
});